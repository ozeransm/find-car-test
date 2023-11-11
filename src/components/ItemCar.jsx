import {
    Card,
    CardBody,
    Text,
    Image,
    Button,
    Flex,
    Spacer,
    Box,
    Icon
} from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { delFavorite, setDataModal, setFavorite } from "../redux/reducer";
import { ReactSVG } from 'react-svg'
import like from "../../img/like.svg"
import { dataModal, favorite } from "../redux/selectors";

export const ItemCar = ({ item, onOpen, onClose, isOpen }) => {
    const dispath = useDispatch();
    const fav = useSelector(favorite);
    const handlerBtn = (el) => {
        dispath(setDataModal(el))
        onOpen(); 
    }
    const handlerSvg = (id) => {
        if (fav.includes(id)) { dispath(delFavorite(id)) }
        else dispath(setFavorite(id))
    }
    return (
        <Card maxW='274px' height='426px'>
            <CardBody p='0'>
                <Box position='absolute' top='16px' right='16px' >
                    <ReactSVG src={like} onClick={()=>handlerSvg(item.id)}
                            beforeInjection={(svg) => {
                            svg.setAttribute('style', `fill: ${fav.includes(item.id) ? 'red' : 'none'}`)
                        }}
                    />   

                </Box>
                <Box>
                <Image
                    src={`${item.img}`}
                    boxSize='274px'
                    height='268px'
                    objectFit='cover'
                    alt='car`s foto'
                    borderRadius='lg'
                   
                />
                  
                <Flex mb='8px' alignItems='center'>
                    <Text fontSize='16px' fontWeight='500'>{item.make}, </Text>
                    <Text fontSize='16px' fontWeight='500'>{item.year}</Text>
                    <Spacer/>
                    <Text fontSize='24px'>{item.rentalPrice}</Text>
                </Flex>
                <Flex mb='4px'>
                    <Text pl='6px' pr='6px' fontSize='12px' color='#12141780' fontWeight='400' borderRight='1px' borderColor='#12141780'>{item.address.split(',')[1]}</Text>
                    <Text pl='6px' pr='6px' fontSize='12px' color='#12141780' fontWeight='400' borderRight='1px' borderColor='#12141780'>{item.address.split(',')[2]}</Text>
                    <Text pl='6px' pr='6px' fontSize='12px' color='#12141780' fontWeight='400'>{item.rentalCompany}</Text>
                </Flex>
                <Flex>
                    <Text pl='6px' pr='6px' fontSize='12px' color='#12141780' fontWeight='400' borderRight='1px' borderColor='#12141780'>{item.type}</Text>
                    <Text pl='6px' pr='6px' fontSize='12px' color='#12141780' fontWeight='400' borderRight='1px' borderColor='#12141780'>{item.model}</Text>
                    <Text pl='6px' pr='6px' fontSize='12px' color='#12141780' fontWeight='400' borderRight='1px' borderColor='#12141780'>{item.id}</Text>
                    <Text pl='6px' pr='6px' fontSize='12px' color='#12141780' fontWeight='400' >{item.functionalities[0]}</Text>
                </Flex>
                </Box>
                    
                <Box position='absolute' bottom='0' left='0' width='100%'>
                <Button
                    width='100%'
                    variant='solid'
                    colorScheme='blue'
                        onClick={() => handlerBtn(item)}
                    >
                    Learn more
                </Button>
                </Box>
                
            </CardBody>
        </Card>
    
    )
}