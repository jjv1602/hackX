import React from 'react'
import Navbar from './Navbar'
import UpperBox from './UpperBox/UpperBox';
import DownBox from './DownBox/DownBox';
import st from './Homepg.module.css'
const Homepg = () => {
  return (
    <div className={st.body}>
      <Navbar ></Navbar>
      <div className={st.right}>
        <div className={st.upperbx}>
          <UpperBox ></UpperBox>
        </div>
        <div className={st.downbx}>
          <DownBox></DownBox>
        </div>
      </div>
    </div>
  )
}

export default Homepg
