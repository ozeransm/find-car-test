import { useDispatch, useSelector } from "react-redux"
import { counter, data, isLoading } from "../redux/selectors"
import { ItemCar } from "../components/ItemCar";
import { Box, Center, Flex, Link } from "@chakra-ui/react";
import { fetchDatas } from "../redux/operations";
import { increment, initData, initValue } from "../redux/reducer";
import { useEffect } from "react";
import { nanoid } from "nanoid";

export const Catalog = ({handlerLM, onOpen, onClose, isOpen }) => {
    const itemsCars = useSelector(data);
    const isLoad = useSelector(isLoading);  
    const dispatch = useDispatch();
    const count = useSelector(counter);
    
    useEffect(() => {
        const flag = localStorage.getItem("persist:root");
        if (!flag) dispatch(fetchDatas())
        else if (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).data).data.length===0)dispatch(fetchDatas());
        return () => {
            dispatch(initValue());
            dispatch(initData());
        } 
    }, [dispatch])
    
    function handlerLoadMore() {
    if (count < 3) {
      dispatch(increment());
      dispatch(fetchDatas(count + 1)); 
    }
    
    }
    
    return (
        
        !isLoad && <Box pt='150px' pb='150px'>
            <Flex mb='100px' ml='auto' mr='auto' maxW='1184px' flexWrap='wrap' rowGap='50px' columnGap='29px'>
                {itemsCars.map((el) => (<ItemCar key={nanoid()} item={el} onOpen={onOpen} onClose={onClose} isOpen={isOpen} />))}
            </Flex>
            <Center>
                <Link mt='100px' onClick={handlerLoadMore}>Load more</Link>
                
            </Center> 
            
        </Box>
            
    )
}