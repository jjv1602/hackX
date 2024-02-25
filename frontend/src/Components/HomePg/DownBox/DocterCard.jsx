import React from 'react'
import { Card } from 'primereact/card';
import { FaUserDoctor } from "react-icons/fa6";
import st from './Docter.module.css';
function DocterCard() {
  return (
    <div className={st.card}>
    <Card className="md:w-25rem">
    <div className={st.cardNew}>
    <div class={st.circularlandscape}> <img src="https://max-website20-images.s3.ap-south-1.amazonaws.com/thumbnail_Dr_Pankaj_Kumar_baef3b0cfa.jpg" /> </div>
    <h2>
    Amit Kumar
    </h2>
    </div>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </p>
    </Card>
    </div>
  )
}

export default DocterCard
