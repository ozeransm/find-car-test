import { useDispatch, useSelector } from "react-redux";
import { data, favorite } from "../redux/selectors";
import { ItemCar } from "../components/ItemCar";
import { useEffect, useRef } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { fetchDatas } from "../redux/operations";
import { nanoid } from "nanoid";
import { initData, initFavorite, initValue } from "../redux/reducer";

export const Favorites = ({ onOpen, onClose, isOpen }) => {
    const dispatch = useDispatch();
    const fav = useSelector(favorite);
    const itemsCars = useSelector(data);
    const flag = useRef(false);
    useEffect(() => {
        dispatch(fetchDatas({ limit: 30 }));
        
        flag.current = true;
        return () => {
            dispatch(initValue());
            dispatch(initData());
            
        }
    }, [])

       
    return (
        <Box ml='30px' mr='30px' maxW='100vw' pb='150px' display='flex' justifyContent='center'>
            
            <Flex mb='100px' maxW='1184px' justifyContent='center' flexWrap='wrap' rowGap='50px' columnGap='29px'>
                {itemsCars.map((el) => {
                    if(fav.includes(el.id))
                    return (<ItemCar
                        key={nanoid()} item={el} onOpen={onOpen} onClose={onClose} isOpen={isOpen} />)
                })}
            </Flex>
                  
        </Box>
    )
}