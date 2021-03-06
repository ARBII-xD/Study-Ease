import React from 'react'
import { Container, Button } from 'react-bootstrap'
import '../App.css'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <section  className='homeSections' style={{padding:"3em"}}>
                <div >
                    <h1 style={{fontFamily:'sans-serif', fontWeight:'bold'}}>Why StudyEase?</h1>
                    <p>Students need tools and information to help them make informed choices about life after high school. The path to discovery should begin as early as middle school so students can learn about all the educational and career possibilities ahead of them. W believe that career exploration at an early age can help students develop a clear plan for their future that lessens the financial burden of post-secondary education, and increases their chance of success in their careers.<span id="dots">...</span></p>

                    <div>
                    <Button href='/home'>Get Started</Button>
                    </div>

                </div>


            </section>
            {/* <br/> */}
            {/* <hr/> */}

            <section className='homeSections' style={{padding:"3em"}} >
                <div >
                    <h1 style={{fontFamily:'sans-serif', fontWeight:'bold'}}>About Us</h1>
                    <p>Students need tools and information to help them make informed choices about life after high school. The path to discovery should begin as early as middle school so students can learn about all the educational and career possibilities ahead of them. W believe that career exploration at an early age can help students develop a clear plan for their future that lessens the financial burden of post-secondary education, and increases their chance of success in their careers.<span id="dots">...</span></p>

                    <div>
                    <Button href='/about'>Read more...</Button>
                    </div>

                </div>


            </section>
            {/* <br/> */}
            {/* <hr/> */}

            <section className='homeSections' style={{padding:"3em"}} >
                <div >
                    <h1 style={{fontFamily:'sans-serif', fontWeight:'bold'}}>My Progress</h1>
                    <p>Students need tools and information to help them make informed choices about life after high school. The path to discovery should begin as early as middle school so students can learn about all the educational and career possibilities ahead of them. W believe that career exploration at an early age can help students develop a clear plan for their future that lessens the financial burden of post-secondary education, and increases their chance of success in their careers.<span id="dots">...</span></p>

                    <div>
                    <Button href='/progress'>Explore more...</Button>
                    </div>

                </div>


            </section>
            <section className='homeSections' style={{padding:"3em"}} >
                <div >
                    <h1 style={{fontFamily:'sans-serif', fontWeight:'bold'}}>Take Quiz</h1>
                    <p>Students need tools and information to help them make informed choices about life after high school. The path to discovery should begin as early as middle school so students can learn about all the educational and career possibilities ahead of them. W believe that career exploration at an early age can help students develop a clear plan for their future that lessens the financial burden of post-secondary education, and increases their chance of success in their careers.<span id="dots">...</span></p>

                    <div>
                    <Button href='/quizmain'>Explore more...</Button>
                    </div>

                </div>


            </section>
            <section className='homeSections' style={{padding:"3em"}} >
                <div >
                    <h1 style={{fontFamily:'sans-serif', fontWeight:'bold'}}>Notes</h1>
                    <p>Students need tools and information to help them make informed choices about life after high school. The path to discovery should begin as early as middle school so students can learn about all the educational and career possibilities ahead of them. W believe that career exploration at an early age can help students develop a clear plan for their future that lessens the financial burden of post-secondary education, and increases their chance of success in their careers.<span id="dots">...</span></p>

                    <div>
                    <Button href='/notes'>Explore more...</Button>
                    </div>

                </div>


            </section>

        </>
    )
}

export default Home
