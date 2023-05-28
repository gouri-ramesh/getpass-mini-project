import {Image,Text,Button,Box,Input,Modal, ModalOverlay, ModalContent,ModalBody, ModalFooter, useDisclosure} from '@chakra-ui/react'; 
import {ChevronRightIcon,SearchIcon} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';   



const StudentRecordsPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <div className="StudentRecordsPage">
        <header className="home-header">
          <Box bg={'blue.50'} maxW="1242px" maxH="68px" m='32px' marginLeft="140px" borderColor={'blue.100'} borderWidth={'thin'} borderRadius="md" color={'blue.800'}>
             <Image src='/assets/Getpass logo.svg' position={'relative'} top='13px' left='30px'/>
             <Button bgColor={'blue.100'} rightIcon={<ChevronRightIcon/>} top="-27px" left="1020px" textColor={'blue.500'} onClick={onOpen}>Logout</Button>
             <Link to="/adminhomepage">
                <Text position={'relative'} left="940px" top='-59px' fontWeight='semibold' color={'blue.600'}>Back</Text>
             </Link>
             <Text position={'relative'} left="780px" top='-83px' fontWeight='semibold'>Student Records</Text>
             <div>
              <Link to={'/studentrecordspage2'}>
                <SearchIcon boxSize={6} position={'relative'} left="250px" top="-115px" />
              </Link>
                <Input placeholder='Enter name of student' size='md' width="400px" bgColor={'gray.100'} position={'relative'} left="270px" top="-115px"/>
             </div>
            
          </Box>
        </header>

        <Image src='/assets/studentrecord.svg' position={'relative'} left="400px" top="-10px"/>

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
    
export default StudentRecordsPage;