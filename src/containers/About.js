import React from 'react'
import { Link } from 'react-router-dom'
import{Button} from 'react-bootstrap'
import '../App.css'

const About = () => {
    return (
        <>
            <section  className='aboutSections' style={{padding:"3em"}}>
                <div >
                    <h1 style={{fontFamily:'sans-serif',  fontWeight:'bold'}}>About Us</h1>
                    <p>Students need tools and information to help them make informed choices about life after high school. The path to discovery should begin as early as middle school so students can learn about all the educational and career possibilities ahead of them. W believe that career exploration at an early age can help students develop a clear plan for their future that lessens the financial burden of post-secondary education, and increases their chance of success in their careers.<span id="dots">...</span></p>

                </div>
            </section>
            <Button href='/home' className='btnH' style={{margin:'1em'}}>Back to Homepage</Button>
            {/* <br/> */}
            {/* <hr/> */}

            {/* <section className='aboutSections' style={{padding:"3em"}} >
                <div >
                    <h1 style={{fontFamily:'sans-serif', fontWeight:'bold'}}>The Problem We Are Addressing</h1>
                    <p>Students need tools and information to help them make informed choices about life after high school. The path to discovery should begin as early as middle school so students can learn about all the educational and career possibilities ahead of them. W believe that career exploration at an early age can help students develop a clear plan for their future that lessens the financial burden of post-secondary education, and increases their chance of success in their careers.<span id="dots">...</span></p>

                </div>


            </section>

            <section className='aboutSections' style={{padding:"3em"}} >
                <div >
                    <h1 style={{fontFamily:'sans-serif', fontWeight:'bold'}}>Empowering Students</h1>
                    <p>Students need tools anda information to help them make informed choices about life after high school. The path to discovery should begin as early as middle school so students can learn about all the educational and career possibilities ahead of them. W believe that career exploration at an early age can help students develop a clear plan for their future that lessens the financial burden of post-secondary education, and increases their chance of success in their careers.<span id="dots">...</span></p>

                </div>


            </section>
             <br/> 
             <hr/> 

           <section className='aboutSections' style={{padding:"3em"}} >
                <div >
                    <h1 style={{fontFamily:'sans-serif', fontWeight:'bold'}}>Our Approach</h1>
                    <p>Students need tools and information to help them make informed choices about life after high school. The path to discovery should begin as early as middle school so students can learn about all the educational and career possibilities ahead of them. W believe that career exploration at an early age can help students develop a clear plan for their future that lessens the financial burden of post-secondary education, and increases their chance of success in their careers.<span id="dots">...</span></p>
                </div>


            </section>*/
            }
        </>
    )
}

export default About
