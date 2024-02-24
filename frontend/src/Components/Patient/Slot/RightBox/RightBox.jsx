// import st from "./RightBox.module.css";
// import * as React from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import { Heading } from "@chakra-ui/react";
// import Button from '@mui/material/Button'; 
// import { GiSiren } from "react-icons/gi"; 
// // Date 
// import Divider from '@mui/material/Divider';
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';

// import Typography from '@mui/material/Typography';  
// import { useNavigate } from "react-router-dom";
// const RightBox = () => {
//   const navigate = useNavigate();
//   // For Date
//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
  
//   const submitHandler=()=>{
//     navigate("/payment");
//   }
//   return (
//     <>
//       <div className={st.par}> 
//         <div className={st.cal}>
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
            
//               <StaticDatePicker orientation="landscape" defaultValue={dayjs('2023-05-12')} />
            
//           </LocalizationProvider>
//         </div>
//         <div className={st.date}>
//         <Typography variant="subtitle1" color="#043c74" gutterBottom>
//        Select Time Slot 
//       </Typography>
//       <br></br>
//           <Stack
//             direction="row"
//             justifyContent="center"
//             divider={<Divider orientation="vertical" flexItem />}
//             spacing={1}
//             fontWeight="bolder"
//           >
//             <Button size="small" variant="outlined" className={st.itemtime}>8:00 AM</Button>
//             <Button size="small" variant="outlined" className={st.itemtime}>10:00 AM</Button>
//             <Button size="small" variant="outlined" className={st.itemtime}>1:30 PM</Button>
//             <Button size="small" variant="outlined" className={st.itemtime}>2:30 PM</Button>
//             <Button size="small" variant="outlined" className={st.itemtime}>3:30 PM</Button>
//           </Stack>
//         </div>
//         <br></br>
//         <br></br>
//         <div className={st.submit}>
//         <Button  backgroundColor="#f71212" id={st["sos_btn"]}  onClick={submitHandler}>SOS Emergency Booking &nbsp; <GiSiren size="5vh"></GiSiren></Button>
//         <Button variant="contained" onClick={submitHandler}>Confirm Booking </Button>
//         </div>
//       </div>
//     </> 
//   )
// }

// export default RightBox
