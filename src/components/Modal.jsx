import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Image,
    Flex,
    
} from "@chakra-ui/react"
import { nanoid } from "nanoid"

export const ModalWin = ({ isOpen, onClose, onOpen, elem }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
            <ModalBody>
                    <Image
                        src={`${elem.img}`}
                        boxSize='469px'
                        height='314px'
                        alt='car`s foto'
                        objectFit='cover'
                        borderRadius='lg'
                   
                    />
                    <Flex mb='8px' alignItems='center'>
                        <Text fontSize='24px' fontWeight='500'>{elem.make}&nbsp;</Text>
                        <Text fontSize='24px' fontWeight='500' color='#3470FF'>{elem.model},&nbsp;</Text>
                        <Text fontSize='24px' fontWeight='500'>{elem.year}</Text>
                    </Flex>
                    <Flex mb='4px'>
                        <Text pl='6px' pr='6px' fontSize='12px' color='#12141780' fontWeight='400' borderRight='1px' borderColor='#12141780'>{elem.address.split(',')[1]}</Text>
                        <Text pl='6px' pr='6px' fontSize='12px' color='#12141780' fontWeight='400' borderRight='1px' borderColor='#12141780'>{elem.address.split(',')[2]}</Text>
                        <Text pl='6px' pr='6px' fontSize='12px' color='#12141780' fontWeight='400' borderRight='1px'>id:&nbsp;{elem.id}</Text>
                        <Text pl='6px' pr='6px' fontSize='12px' color='#12141780' fontWeight='400' borderRight='1px'>Year:&nbsp;{elem.year}</Text>
                        <Text pl='6px' pr='6px' fontSize='12px' color='#12141780' fontWeight='400'>Type:&nbsp;{elem.type}</Text>
                    </Flex>
                    <Flex mb='14px'>
                        <Text pl='6px' pr='6px' fontSize='12px' color='#12141780' fontWeight='400' borderRight='1px' borderColor='#12141780'>Fuel Consumption:&nbsp;{elem.fuelConsumption}</Text>
                        <Text pl='6px' pr='6px' fontSize='12px' color='#12141780' fontWeight='400'>Engine Size:&nbsp;{elem.engineSize}</Text>
                    </Flex>
                    <Flex mb='24px'>
                        <Text pl='6px' pr='6px' fontSize='14px' color='#121417' fontWeight='400'>{elem.description}</Text>
                    </Flex>
                    <Text mb='8px' pl='6px' pr='6px' fontSize='14px' color='#121417' fontWeight='500'>Accessories and functionalities:</Text>
                    
                    <Flex>
                    {elem.accessories.map((el, i) =>
                        (<Text key={nanoid()} pl='6px' pr='6px' fontSize='12px' color='#12141780' fontWeight='400'>{el}</Text>))}
                    </Flex>
                    <Flex mb='24px'>
                        {elem.functionalities.map((el, i) => (<Text key={nanoid()} pl='6px' pr='6px' fontSize='12px' color='#12141780' fontWeight='400' >{el}</Text> ))}
                    </Flex>
                    <Text mb='8px' pl='6px' pr='6px' fontSize='14px' color='#121417' fontWeight='500'>Rental Conditions:</Text>
                    
                    <Flex mb='8px' flexWrap='wrap' alignItems='center' gap='8px'>
                        {elem.rentalConditions
                            .split(/\r\n|\r|\n/g)
                            .map((el, i)=>
                            (<Text key={nanoid()} mr='8px' p='6px'  h='32px' display='flex' justifyContent='center'
                                alignItems='center' fontSize='12px' fontWeight='600'
                                backgroundColor='#F9F9F9' borderRadius='40px'>{el}
                            </Text>))}
                        
                        <Text mr='8px' p='6px' h='32px' fontSize='12px' fontWeight='400' display='flex'
                            backgroundColor='#F9F9F9' borderRadius='40px'> 
                            Mileage:&nbsp;{elem.mileage}
                        </Text>
                        <Text mr='8px' p='6px' h='32px' fontSize='12px' fontWeight='400' display='flex'
                            backgroundColor='#F9F9F9' borderRadius='40px'>
                            Price:&nbsp;{elem.rentalPrice}
                        </Text>
                        
                    </Flex>
                    
            </ModalBody>

          <ModalFooter display='flex' justifyContent='flex-start'>
            <Button colorScheme='blue'>Rental car</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}