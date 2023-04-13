import React from "react";
import { Typography, Icon } from 'antd';
import Chatbot from './Chatbot/Chatbot';
const { Title } = Typography;

function App() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Title level={2} >Chat with me!&nbsp;<img src={'good.png'} alt="My Image" style={{width:'64px',height: '64px'}}/></Title>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
       
        <Chatbot />


      </div>
    </div>
  )
}

export default App
