import React, { useEffect, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Input, Stack, Button, Heading, Box, Text, StackDivider } from '@chakra-ui/react'
import st from './px.module.css';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from '@chakra-ui/react'
import medicine from '../db.json';
import { Textarea } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';

import MedCard from './MedCard';

import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';

const Px = () => {

  // Checkbox 
  const [checkedItems, setCheckedItems] = React.useState([false, false, false])
  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  const { pid } = useParams();
  const [med, setMed] = useState([]);

  // Medicine Form 
  const [medname, setMednaam] = useState();
  const [dur, setDuration] = useState();
  const [qnt, setQnt] = useState();
  const [mor, setM] = useState(false);
  const [aft, setA] = useState(true);
  const [nght, setNght] = useState(true);


  // useEffect(() => {
  //   const fetchmed = async () => {
  //     const q = query(collection(db, "medicines"));
  //     const querySnapshot = await getDocs(q);
  //     // console.log(querySnapshot);
  //     const meddata = [];
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       // console.log(" => ", doc.data());
  //       meddata.push(doc.data());
  //     });
  //     setMed(meddata);
  //   }

  //   fetchmed().catch(console.error);
  // }, [med])


  // Prescription box
  let [value, setValue] = React.useState('')

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  const { isOpen, onOpen, onClose } = useDisclosure()

  const submitHandler = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/apnmt/post-medicine",
        { pid, medname, dur, qnt, mor, aft, nght },
        config
      );
      console.log(data);
      setMed(prevMed => [...prevMed, { "medname": medname, "dur": dur, "qnt": qnt, "mor": mor, "aft": aft, "nght": nght }]);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={st.parentpx}>
      <Tabs isFitted >
        <TabList className={st.tablist} bg="#31619E" color={"#ffffff"} borderTopLeftRadius="2rem" borderBottomLeftRadius="2rem" borderTopRightRadius="2rem" borderBottomRightRadius="2rem" >
          <Tab _selected={{ bg: "#DBEBFF", color: "#31619E", borderTopLeftRadius: "2rem", borderBottomLeftRadius: "2rem", transform: "scaleY(1.2)" }}>MEDICINES</Tab>
          <Tab _selected={{ bg: "#DBEBFF", color: "#31619E", borderTopRightRadius: "2rem", borderBottomRightRadius: "2rem", transform: "scaleY(1.2)" }}>PRESCRIPTION</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>

            <hr id={st["hr"]}></hr>
            <div className={st.medicinescard}>
              {med && med.map(({ medname,dur,qnt,mor,aft,nght },index) => {
                return (
                  <>
                    <MedCard key={index} name={medname} duration={dur} mor={mor} aft={aft} nght={nght} quantity={qnt}></MedCard>
                  </>
                )
              })}
            </div>
            <Button bgColor={'#DDF4FF'} borderRadius={"0.3rem"} ml={"20%"} mt={"4%"} onClick={onOpen}>+ Add More</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add Medicine</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl>
                    <FormLabel>Enter Medicine Name</FormLabel>
                    <Input type='text' onChange={(e) => setMednaam(e.target.value)} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Enter Quantity</FormLabel>
                    <Input type='text' onChange={(e) => setQnt(e.target.value)} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Enter Duration</FormLabel>
                    <Input type='text' onChange={(e) => setDuration(e.target.value)} />
                  </FormControl>
                  <FormControl>
                    <Checkbox
                      isChecked={allChecked}
                      isIndeterminate={isIndeterminate}
                      onChange={(e) => setCheckedItems([e.target.checked, e.target.checked, e.target.checked])}
                    >
                      Timings
                    </Checkbox>

                  </FormControl>
                  <Stack pl={6} mt={1} spacing={1}>
                    <Checkbox
                      isChecked={checkedItems[0]}
                      onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1], checkedItems[2]])}
                    >
                      Morning
                    </Checkbox>
                    <Checkbox
                      onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked, checkedItems[2]])}
                    >
                      Afternoon
                    </Checkbox>
                    <Checkbox
                      onChange={(e) => setCheckedItems([checkedItems[0], checkedItems[1], e.target.checked])}
                    >
                      Night
                    </Checkbox>
                  </Stack>
                  
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='gray' mr={3} onClick={submitHandler} >
                    + Add
                  </Button>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </TabPanel>
          <TabPanel>
            <Card>
              <hr id={st["hr"]}></hr>
              <CardBody>
                <Stack divider={<StackDivider />} spacing='2'>
                  <Box>
                    <Heading size='xs' textTransform='uppercase' >
                      <b>Name - </b> Rajeev Gupta
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      Refered by Dr Sourav Gupta
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Prescription
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      <Textarea
                        value={value}
                        onChange={handleInputChange}
                        rows={14}
                        placeholder='Please write your prescription here '
                        size='sm'
                      />
                    </Text>
                  </Box>
                </Stack>
                <Button padding={'4%'} m={'3%'} w={'90%'}>Submit </Button>
              </CardBody>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default Px
