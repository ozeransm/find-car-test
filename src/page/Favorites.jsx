import { useDispatch, useSelector } from "react-redux";
import { counter, data, favorite, isLoading } from "../redux/selectors";
import { ItemCar } from "../components/ItemCar";
import { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { fetchDatas } from "../redux/operations";
import { nanoid } from "nanoid";
import { initData, initFavorite, initValue } from "../redux/reducer";

export const Favorites = ({ onOpen, onClose, isOpen }) => {
    const dispatch = useDispatch();
    const fav = useSelector(favorite);
    const count = useSelector(counter);
    const itemsCars = useSelector(data);
    const isLoad = useSelector(isLoading);  

    useEffect(() => {
        const flag = localStorage.getItem("persist:root");
        if (!flag) dispatch(fetchDatas())
        else if (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).data).data.length===0)dispatch(fetchDatas()); 
        return () => {
            dispatch(initValue());
            dispatch(initData());
            dispatch(initFavorite());
        }
    }, [dispatch])

       
    return (
        !isLoad && <Box pb='150px'>
            <Flex mb='100px' ml='auto' mr='auto' maxW='1184px' flexWrap='wrap' rowGap='50px' columnGap='29px'>
                {itemsCars.map((el) => {
                    if(fav.includes(el.id))
                    return (<ItemCar
                        key={nanoid()} item={el} onOpen={onOpen} onClose={onClose} isOpen={isOpen} />)
                })}
            </Flex>
                        
        </Box>
    )
}