import React from 'react'
import {Row, Col, Button, Menu} from 'antd'
const Home = () => {
    const items = [
        {
            label:"Home",
            key:'mail'
        },
        {
            label:"Contact us",
            key:'contact'
        },
        {
            label:"About",
            key:'about5'
        },
        {
            label:"Abou",
            key:'about1'
        },
        {
            label:"Ab",
            key:'about2'
        },
        {
            label:"A",
            key:'about3'
        },
        {
            label:"A",
            key:'about8'
        },
        {
            label:"A",
            key:'about9'
        },
    ]
    return (
    
    <div>
        
        <div className="parent" style={{display:"flex",justifyContent:"space-between"}}>
           
            <Menu mode='horizontal' items={items} />
        </div>
        
        
        <Button type= 'primary' style={{background: "black", color:"white"}} >Hello</Button> 
        <Row gutter={16}>
       
            <Col span={8}>
                
                <h1>hello</h1>
                
            </Col>
            <Col span={8}>
                <h1>hello</h1>
            </Col>
            <Col span={8}>
                <h1>hello</h1>
            </Col>
        </Row>
    </div>
  )
}

export default Home
