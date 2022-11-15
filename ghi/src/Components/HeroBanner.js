import React from 'react';
import background from "../Images/calm2.jpg";
import MotivationalQuote from '../Pages/MotivationalQuote';
import Button from "react-bootstrap/Button";

function HeroBanner() {
    return (
        <article 
            style={{
                height:'100%',
                overflow:'hidden'
            }}>
            <img
                src={background}
                style=
                {{
                    objectFit:'cover', 
                    width:'100%', 
                    height:'100%',
                }}
                alt=""
            >
            </img>
            <Button >
                
            </Button>
            <h1
                className='font-link2' 
                style={{
                    fontSize:'30px',
                    color:'white',
                    textAlign:'center',
                    position:'absolute',
                    top:0,
                    bottom:0,
                    left:0,
                    right:0,
                    height:'fit-content',
                    marginTop: 800,
                    fontWeight:'bolder',
                }}>
                <MotivationalQuote />
            </h1>
          </article>
    )
}

export default HeroBanner