import React,{useEffect, useRef } from 'react'
import st from "./vp.module.css"
 const VideoPlayer = ({uid,user}) => {
    const ref = useRef();

    useEffect(() => {
      user.videoTrack.play(ref.current);
    }, []);
  
    return (
      <div>
        <div
          ref={ref}
          className={st.video_box}
        ></div>
      </div>
    )
}

export default VideoPlayer;
// import React,{useEffect, useRef } from 'react'

//  const VideoPlayer = ({user}) => {
//     const ref = useRef();

//     useEffect(() => {
//       user.videoTrack.play(ref.current);
//     }, []);
  
//     return (
//       <div>
//         Uid: {user.uid}
//         <div
//           ref={ref}
//           style={{ width: '200px', height: '200px' ,margin:"10%"}}
//         ></div>
//       </div>
//     )
// }

// export default VideoPlayer;