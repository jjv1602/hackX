import React from 'react'
import DocterCard from './DocterCard'
import st from './Docter.module.css';
export default function Docters() {
  return (
    <div className={st.mainCards}>
      <DocterCard/>
      <DocterCard/>
      <DocterCard/>
      <DocterCard/>
    </div>
  )
}
