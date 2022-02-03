import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './quiz_app.css';
// import {db} from '../firebase'
// import { collection, getDocs } from 'firebase/firestore'

const Quiz_App = () => {

    // const quizCollctRef = collection(db, "quizzes")
    // useEffect(() => {
    //     const getQuiz = async () => {
    //         const data = await getDocs(quizCollctRef)
    //         console.log(data)
    //     }
    //     getQuiz()
    // }, [])

    const state = useSelector(state => state)
    const [question, setQuestion] = useState(state)
    const quesLength = question.length * 2
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)
    const [count, setCount] = useState(0)
    const nextQues = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 2)
        }
        if (count < question.length - 1) {
            setCount(count + 1)
        } else {
            setShowScore(true)
        }
    }

    return (
        <div className='container'>

                {showScore ? (
                    <div className='showScore'>Thank you <br /> You scored {score}/{quesLength} <br /> Persentage: {score / quesLength * 100}% </div>
                ) :
                    (<>
                            <div>
                                <div className="intro">
                                    <h2>Math Quiz</h2>
                                    <h5>(All questions required)</h5>
                                </div >
                                <div className="quesDiv">
                                    <h4 className="ques">{question[count].ques}</h4>
                                    <p>(Choose correct answer of the Question)</p>
                                    <br />
                                    {question[count].opt.map((opt) => <button onClick={() => nextQues(opt.isCorrect)} className='btn'> {opt.AnsText} </button>)}
                                    <br />
                                    <br />
                                </div>
                            </div>
                    </>
                    )}
        </div >
    );
};

export default Quiz_App;