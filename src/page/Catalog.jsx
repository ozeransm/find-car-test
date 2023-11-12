import { useDispatch, useSelector } from "react-redux"
import { counter, data, filteres, isLoading } from "../redux/selectors"
import { ItemCar } from "../components/ItemCar";
import { Box, Center, Flex, Link } from "@chakra-ui/react";
import { fetchDatas } from "../redux/operations";
import { increment } from "../redux/reducer";
import { nanoid } from "nanoid";

export const Catalog = ({ onOpen, onClose, isOpen }) => {
    const itemsCars = useSelector(data);
    const isLoad = useSelector(isLoading);  
    const dispatch = useDispatch();
    const count = useSelector(counter);
    const filtere = useSelector(filteres);
    
    
    function handlerLoadMore() {
        if (count < 3) {
            dispatch(increment());
            dispatch(fetchDatas({ page: count + 1, limit: 12, make: filtere.length !== 0 ? filtere.filter((el) => el.make)[0].make : '' })); 
    }
    
    }
    
    return (
        <>
        <Box ml='30px' mr='30px' maxW='100vw'  display='flex' justifyContent='center'>
            
            <Flex mb='100px' justifyContent='center' maxW='1184px' flexWrap='wrap' rowGap='50px' columnGap='29px'>
                {itemsCars.map((el) => (<ItemCar key={nanoid()} item={el} onOpen={onOpen} onClose={onClose} isOpen={isOpen} />))}
            </Flex>
            
            
        </Box>
        <Center>
                {filtere.length === 0 && <Link mb='100px' onClick={handlerLoadMore}>Load more</Link>}
                
        </Center> 
        </>    
    )
}