import React from 'react'
import st from './MedCard.module.css';
const MedCard = ({  name, duration, mor, aft, nght, quantity }) => {
  return (
    <div className={st.par}>
      <div className={st.header}>
        <div className={st.medname}>{name}</div>
        <span class={st.dot}></span>
      </div>

      <hr id={st["hrbtm"]}></hr>
      <div className={st.timingbox}>
        <heading id={st["tm_head"]}>Timings : {duration} </heading>
        <div className={st.title}>
          {mor &&
            <>
              Morning
            </>
          }

          {aft && <>
            <div className={st.dotflex}>
              <span class={st.dotf}></span>
              <span class={st.dotf}></span>
              <span class={st.dotf}></span>
            </div>
            Afternoon
          </>}
          {nght && <>
            <div className={st.dotflex}>
              <span class={st.dotf}></span>
              <span class={st.dotf}></span>
              <span class={st.dotf}></span>
            </div>
            Night
          </>}

        </div>
      </div>
      <div className={st.timingbox}>
        <heading id={st["tm_head"]}>Servings </heading>
        <div className={st.title}>
          {quantity}
        </div>
      </div>
    </div >
  )
}

export default MedCard
