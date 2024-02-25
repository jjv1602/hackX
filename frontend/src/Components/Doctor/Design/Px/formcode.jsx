{/* <FormControl>
<FormLabel color="#34b4b4" fontWeight={"bolder"}>Enter Medicine Name </FormLabel>
<Input type='email' />
</FormControl>
<br></br>
<FormControl>
<FormLabel color="#34b4b4" fontWeight={"bolder"}>Enter Quantity </FormLabel>
<Input type='text' />
</FormControl>
<br></br>
<FormControl>
<FormLabel color="#34b4b4" fontWeight={"bolder"}>Select Time  </FormLabel>
<Checkbox
  isChecked={allChecked}
  isIndeterminate={isIndeterminate}
  onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
>
  Select All
</Checkbox>
<Stack pl={6} mt={1} spacing={1}>
  <Checkbox
    isChecked={checkedItems[0]}
    onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
  >
    Morning
  </Checkbox>
  <Checkbox
    isChecked={checkedItems[1]}
    onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
  >
    Afternoon
  </Checkbox>
  <Checkbox
    isChecked={checkedItems[2]}
    onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
  >
    Evening
  </Checkbox>
  <Checkbox
    isChecked={checkedItems[3]}
    onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
  >
    Night
  </Checkbox>
</Stack>
</FormControl>
<br></br>
<Button colorScheme='teal' size='sm' w="90%">
Add Medicine
</Button> */}