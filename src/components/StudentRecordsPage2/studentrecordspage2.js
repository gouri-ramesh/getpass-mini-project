import {Image,Text,Button,Box,Input,Modal, ModalOverlay, ModalContent,ModalBody, ModalFooter, useDisclosure,} from '@chakra-ui/react'; 
import {ChevronRightIcon,SearchIcon} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';   



const StudentRecordsPage2 = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <div className="StudentRecordsPage2">
        <header className="home-header">
          <Box bg={'blue.50'} maxW="1242px" maxH="68px" m='32px' marginLeft="140px" borderColor={'blue.100'} borderWidth={'thin'} borderRadius="md" color={'blue.800'}>
             <Image src='/assets/Getpass logo.svg' position={'relative'} top='13px' left='30px'/>
             <Button bgColor={'blue.100'} rightIcon={<ChevronRightIcon/>} top="-27px" left="1020px" textColor={'blue.500'} onClick={onOpen}>Logout</Button>
             <Link to={'/studentrecordspage'}>
                <Text position={'relative'} left="940px" top='-59px' fontWeight='semibold' color={'blue.600'}>Back</Text>
             </Link>
             <Text position={'relative'} left="750px" top='-83px' fontWeight='semibold'>Daily Booking Details</Text>
             <div>
                <SearchIcon boxSize={6} position={'relative'} left="250px" top="-115px" />
                <Input value="Gouri" size='md' width="400px" bgColor={'gray.100'} position={'relative'} left="270px" top="-115px"/>
             </div>
            
          </Box>
        </header>

        <Box bg={'blue.50'} maxW="1242px" maxH="80px" m='32px' marginLeft="140px" borderColor={'blue.100'} borderWidth={'thin'} borderRadius="md">
              <Box bg={'blue.200'} height="80px" width="36px" position={'relative'} left="0px" top="0px" style={{ borderRadius: '5px 0 0 5px' }} >
                <Text position={'absolute'} left="0px" top='32px' fontWeight='normal' fontSize='12px' color={'blue.800'} style={{transform:'rotate(-90deg'}}><span>Bus</span>{'\u00A0'}<span>No.</span> </Text>  
              </Box>
              <Box bg={'blue.100'} height="80px" width="109px" position={'relative'} left="35px" top="-80px">
                <Text position={'relative'} left="25px" top='2px' fontWeight='bold' fontSize='48px' color={'blue.500'}>12</Text>
              </Box>
                <Text position={'relative'} left="220px" top='-145px' fontWeight='normal' fontSize='12px' color={'gray.600'}>Bill No.</Text>  
                <Text position={'relative'} left="220px" top='-140px' fontWeight='bold' fontSize='18px' color={'gray.700'}>101</Text>
                <Text position={'relative'} left="370px" top='-190px' fontWeight='normal' fontSize='12px' color={'gray.600'}>From</Text>  
                <Text position={'relative'} left="370px" top='-185px' fontWeight='bold' fontSize='18px' color={'gray.700'}>Fisat College</Text>
                <Text position={'relative'} left="560px" top='-235px' fontWeight='normal' fontSize='12px' color={'gray.600'}>Destination</Text>  
                <Text position={'relative'} left="560px" top='-230px' fontWeight='bold' fontSize='18px' color={'gray.700'}>Chalakkudy</Text>
                <Text position={'relative'} left="790px" top='-280px' fontWeight='normal' fontSize='12px' color={'gray.600'}>Name</Text>  
                <Text position={'relative'} left="790px" top='-275px' fontWeight='bold' fontSize='18px' color={'gray.700'}>Gouri Ramesh</Text>
                <Text position={'relative'} left="1010px" top='-325px' fontWeight='normal' fontSize='12px' color={'gray.600'}>No.of tickets</Text>  
                <Text position={'relative'} left="1010px" top='-320px' fontWeight='bold' fontSize='18px' color={'gray.700'}>2</Text>
      </Box>

          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                         <ModalBody>
                              <Text fontWeight='bold' mb='1rem'>You can scroll the content behind the modal</Text>
                         </ModalBody>
                         <ModalFooter>
                             <Button colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                         </ModalFooter>
                     </ModalContent>
            </Modal>

          </div>
       );
    }
    
export default StudentRecordsPage2;