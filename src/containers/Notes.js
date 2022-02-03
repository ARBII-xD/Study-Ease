import React from 'react'
import '../App.css'

import BioCh2Short from '../Notes/BioCh2Short.pdf'
import BioCh3Short from '../Notes/BioCh3Short.pdf'
import BioCh5Short from '../Notes/BioCh5Short.pdf'
import BioCh6Short from '../Notes/BioCh6Short.pdf'
import BasicMathAndAlgebra from '../Notes/BasicMathAndAlgebra.pdf'
import BasicMatheBook from '../Notes/BasicMatheBook.pdf'
import BasicMathReviewCard from '../Notes/BasicMathReviewCard.pdf'
import BasicMathematics_SergeLang from '../Notes/BasicMathematics_SergeLang.pdf'


const Notes = () => {
    return (
        <>
            <section className='notesContainer' style={{ padding: "3em" }}>
                <div >
                    <h1 style={{ fontFamily: 'sans-serif' }}>Biology</h1>

                </div>

                <div>
                    <div>

                        <a href={BioCh2Short} download="DSALEC1.pdf">
                            1.1 Metabolism in Human Body
                        </a>
                    </div>
                    <div>

                        <a href={BioCh3Short} download="BioCh3Short.pdf">
                            1.2 Transport In Human.pdf
                        </a>
                    </div>
                    <div>

                        <a href={BioCh5Short} download="BioCh5Short.pdf">
                            1.3 Respiractory System In Human.pdf
                        </a>
                    </div>
                    <div>

                        <a href={BioCh6Short} download="BioCh6Short.pdf">
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

                        <a href={BasicMathAndAlgebra} download="BasicMathAndAlgebra.pdf">
                            1.3 Basic_Math_And_Algebra.pdf
                        </a>
                    </div>
                    <div>

                        <a href={BasicMatheBook} download="BasicMatheBook.pdf">
                            1.3 Basic_Math_eBook.pdf
                        </a>
                    </div>
                    <div>

                        <a href={BasicMathReviewCard} download="BasicMathReviewCard.pdf">
                            1.3 Basic_Math_ReviewCard.pdf
                        </a>
                    </div>
                    <div>

                        <a href={BasicMathematics_SergeLang} download="BasicMathematics_SergeLang.pdf">
                            1.3 Basic_Mathematics_SergeLang.pdf
                        </a>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Notes
