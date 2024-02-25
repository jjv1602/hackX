import React from 'react'
import st from './Medicines.module.css';
import Navbar from '../Navbar';
import UpperBox from '../UpperBox/UpperBox';
import AppointCard from './AppointCard';
import MedicneCard from './MedicneCard';

export default function Medicines() {
  return (
    <div className={st.body}>
      <Navbar></Navbar>
      <div className={st.right}>
        <div className={st.upperbx}>
          <UpperBox ></UpperBox>
        </div>
        <div className={st.downbx}>
            <MedicneCard></MedicneCard>
        </div>
      </div>
    </div>
  )
}
