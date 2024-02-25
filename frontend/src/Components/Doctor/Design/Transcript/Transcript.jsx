import React, { useEffect, useState } from 'react'
import st from './Transcript.module.css';
import { Container, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
const Transcript = () => {
  const [transcript, setTranscript] = useState("");
  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
    const language = "en-US"; // Change this to your desired language
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.start();
    recognition.onresult = (event) => {
      console.log("asdasdaafas");
      console.log(event.results[event.results.length - 1][0].transcript);
      setTranscript(transcript + event.results[event.results.length - 1][0].transcript);
    }
  })
  return (
    <div className={st.parent}>

      <div className={st.header}>
        <heading className={st.heading}>
          Your Transcript
        </heading>
      </div>
      
      <Card className={st.container}>
        <CardBody>
          <Text fontSize='lg'>{transcript}</Text>
        </CardBody>
      </Card>


    </div>
  )
}

export default Transcript
