import React from 'react'
import '../App.css'

const Notes = () => {
    return (
        <>
            <section className='notesContainer' style={{ padding: "3em" }}>
                <div >
                    <h1 style={{ fontFamily: 'sans-serif' }}>Biology</h1>

                </div>
                <div>
                    <div>

                    <a href='https://www.w3schools.com'>
                        1.1 The_Cell.pdf
                    </a>
                    </div>
                    <div>

                    <a href='https://www.w3schools.com'>
                        1.2 Transport In Human.pdf
                    </a>
                    </div>
                    <div>

                    <a href='https://www.w3schools.com'>
                        1.3 Respiractory System In Human.pdf
                    </a>
                    </div>
                    <div>

                    <a href='https://www.w3schools.com'>
                        1.4 Circulatory System In Human.pdf
                    </a>
                    </div>

                </div>


            </section>
            <section className='notesContainer' style={{ padding: "3em" }}>
                <div >
                    <h1 style={{ fontFamily: 'sans-serif' }}>Mathematics</h1>

                </div>
                <div>
                    <div>

                    <a href='https://www.w3schools.com'>
                        1.1 Real Numbers.pdf
                    </a>
                    </div>
                    <div>

                    <a href='https://www.w3schools.com'>
                        1.2 Geometry.pdf
                    </a>
                    </div>
                    <div>

                    <a href='https://www.w3schools.com'>
                        1.3 Mathematical Induction.pdf
                    </a>
                    </div>
                    <div>

                    <a href='https://www.w3schools.com'>
                        1.4 Probability and Statistics.pdf
                    </a>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Notes
