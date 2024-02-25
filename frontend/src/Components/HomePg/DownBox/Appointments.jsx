import React from 'react'
import st from "./Appointment.module.css";
import Navbar from '../Navbar';
import UpperBox from '../UpperBox/UpperBox';
import DownBox from './DownBox';
import AppointCard from './AppointCard';
export default function Appointments() {
  return (
    <div className={st.body}>
      <Navbar ></Navbar>
      <div className={st.right}>
        <div className={st.upperbx}>
          <UpperBox ></UpperBox>
        </div>
        <div className={st.downbx}>
          <AppointCard></AppointCard>
        </div>
      </div>
    </div>
  )
}
