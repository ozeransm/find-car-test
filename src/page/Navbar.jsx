import { Outlet, useNavigate } from "react-router-dom"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Box,
  Stack,
  Input,
  Flex,
  Text  
} from '@chakra-ui/react'
import { ChevronUpIcon } from "@chakra-ui/icons"
import { useDispatch, useSelector } from "react-redux"
import { delFilterMenu, delFilterPrice, initData, initFilter, initValue, setFilterMenu, setFilterPrice } from "../redux/reducer"
import { useEffect } from "react"
import { filteres } from "../redux/selectors"
import { fetchDatas } from "../redux/operations"
 
    
export const Navbar = () => {
    const dispatch = useDispatch();
    const filtere = useSelector(filteres);
    const navigate = useNavigate();
    
    useEffect(() => {
    
    return () => {
        dispatch(initFilter());
    }
    }, [])
    
    const handlerBtn = () => {
        dispatch(initData());
        dispatch(initValue());
        dispatch(fetchDatas({ make: filtere.length !== 0 ? filtere.filter((el) => el.make)[0].make : '' }))
        navigate('/catalog');
    }
    const handlerMenuPrice = (el) => {
        dispatch(delFilterPrice());
        dispatch(setFilterPrice({ rentalPrice: el }))
    }
    const handlerMenuMarka = (el) => {
        dispatch(delFilterMenu());
        dispatch(setFilterMenu({ make: el }));
   
    }
    function handlerResFilter() {
        dispatch(initFilter());
        dispatch(initData());
        dispatch(fetchDatas());
        dispatch(initValue());
    }
    function handlerFavorite() {
        navigate('/favorites');
        dispatch(initValue()); 
    }
    return (
        <>
        <Box ml='30px' mr='30px' mt='176px' mb='50px' maxW='100%' display='flex' justifyContent='center'>
            <Flex gap='8px' alignItems='flex-end' flexWrap='wrap'>
            <Box>
            <Text color='#8A8A89' fontSize='14px' fontWeight='500'>Car brand</Text>      
            <Menu >
                <MenuButton as={Button} backgroundColor="#F7F7FB" >
                {!filtere.length ? 'Enter the text' : filtere[0].make}
                <ChevronUpIcon ml='51px'/>
            </MenuButton>
                <MenuList maxWidth='224px' maxHeight="272px"
                        overflowY="auto"
                        css={{
                        '&::-webkit-scrollbar': {
                            width: '8px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#12141710',
                            borderRadius: '8px',
                        },
                        }}
                >
                <MenuItem onClick={()=>handlerMenuMarka('Buick')}>Buick</MenuItem>
                <MenuItem onClick={()=>handlerMenuMarka('HUMMER')}>HUMMER</MenuItem>
                <MenuItem onClick={()=>handlerMenuMarka('Volvo')}>Volvo</MenuItem>
                <MenuItem onClick={()=>handlerMenuMarka('Subaru')}>Subaru</MenuItem>
                <MenuItem onClick={()=>handlerMenuMarka('Mitsubishi')}>Mitsubishi</MenuItem>
                <MenuItem onClick={()=>handlerMenuMarka('Nissan')}>Nissan</MenuItem>
                <MenuItem onClick={()=>handlerMenuMarka('Lincoln')}>Lincoln</MenuItem>
                <MenuItem onClick={()=>handlerMenuMarka('GMC')}>GMC</MenuItem>
                <MenuItem onClick={()=>handlerMenuMarka('Hyundai')}>Hyundai</MenuItem>
                <MenuItem onClick={()=>handlerMenuMarka('MINI')}>MINI</MenuItem>
                <MenuItem onClick={()=>handlerMenuMarka('Bentley')}>Bentley</MenuItem>
                <MenuItem onClick={()=>handlerMenuMarka('Mercedes-Benz')}>Mercedes-Benz</MenuItem>
                <MenuItem onClick={()=>handlerMenuMarka('Pontiac')}>Pontiac</MenuItem>
                <MenuItem onClick={()=>handlerMenuMarka('Aston Martin')}>Aston Martin</MenuItem>
                <MenuItem onClick={()=>handlerMenuMarka('Lamborghini')}>Lamborghini</MenuItem>
                <MenuItem onClick={()=>handlerMenuMarka('Audi')}>Audi</MenuItem>
                <MenuItem onClick={()=>handlerMenuMarka('BMW')}>BMW</MenuItem>
                <MenuItem onClick={()=>handlerMenuMarka('Chevrolet')}>Chevrolet</MenuItem>
                <MenuItem onClick={()=>handlerMenuMarka('Chrysler')}>Chrysler</MenuItem>
                <MenuItem onClick={()=>handlerMenuMarka('Kia')}>Kia</MenuItem> 
                <MenuItem onClick={()=>handlerMenuMarka('BuLandick')}>Land</MenuItem>
            </MenuList>
            </Menu>
            </Box> 
            <Box>
            <Text color='#8A8A89' fontSize='14px' fontWeight='500'>Price/ 1 hour</Text>        
            <Menu>
            <MenuButton as={Button} backgroundColor="#F7F7FB" >
                To $
                <ChevronUpIcon ml='51px'/>
            </MenuButton>
                <MenuList maxW='100px' maxHeight="188px"
                        overflowY="auto"
                        css={{
                        '&::-webkit-scrollbar': {
                            width: '8px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#12141710',
                            borderRadius: '8px',
                        },
                        }}
                >
                <MenuItem onClick={()=>handlerMenuPrice('20')}>20</MenuItem>
                <MenuItem onClick={()=>handlerMenuPrice('30')}>30</MenuItem>
                <MenuItem onClick={()=>handlerMenuPrice('40')}>40</MenuItem>
                <MenuItem onClick={()=>handlerMenuPrice('50')}>50</MenuItem>
                <MenuItem onClick={()=>handlerMenuPrice('60')}>60</MenuItem>
                <MenuItem onClick={()=>handlerMenuPrice('70')}>70</MenuItem>
                <MenuItem onClick={()=>handlerMenuPrice('80')}>80</MenuItem>
                <MenuItem onClick={()=>handlerMenuPrice('90')}>90</MenuItem>
                <MenuItem onClick={()=>handlerMenuPrice('100')}>100</MenuItem>
                <MenuItem onClick={()=>handlerMenuPrice('110')}>110</MenuItem>
                <MenuItem onClick={()=>handlerMenuPrice('120')}>120</MenuItem>
                <MenuItem onClick={()=>handlerMenuPrice('130')}>130</MenuItem>
                <MenuItem onClick={()=>handlerMenuPrice('140')}>140</MenuItem>
                <MenuItem onClick={()=>handlerMenuPrice('150')}>150</MenuItem>
                <MenuItem onClick={()=>handlerMenuPrice('160')}>160</MenuItem>
                <MenuItem onClick={()=>handlerMenuPrice('170')}>170</MenuItem>
                <MenuItem onClick={()=>handlerMenuPrice('180')}>180</MenuItem>
                <MenuItem onClick={()=>handlerMenuPrice('190')}>190</MenuItem>
                <MenuItem onClick={()=>handlerMenuPrice('200')}>200</MenuItem>
                <MenuItem onClick={()=>handlerMenuPrice('210')}>210</MenuItem> 
                <MenuItem onClick={()=>handlerMenuPrice('220')}>220</MenuItem>
            </MenuList>
            </Menu>
            </Box>
                    
            <Box>
            <Text color='#8A8A89' fontSize='14px' fontWeight='500'>Сar mileage / km</Text>        
            <Stack spacing={2}>
                <Flex maxW='320px'>
                    <Input variant='filled' w='160px' placeholder='From' borderRightRadius='0' backgroundColor='#F7F7FB' />
                    <Input variant='filled' w='160px' placeholder='To' borderLeftRadius='0' backgroundColor='#F7F7FB' borderLeftColor='#8A8A8920'/>
                </Flex>
            </Stack>
            </Box>
                <Button colorScheme='blue' onClick={handlerBtn}>Search</Button>
                <Button colorScheme='gray' onClick={handlerResFilter}>Reset filter</Button> 
                <Button colorScheme='pink' onClick={handlerFavorite}>Favorite</Button>    
            </Flex>
              
        </Box>        
        <Outlet/>
        </>
    )
}