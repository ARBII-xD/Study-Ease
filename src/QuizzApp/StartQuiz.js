import React from 'react';
import Store from '../store';
import { Provider } from 'react-redux';
import Quiz from '../QuizzApp/Quiz';


const StartQuiz = () => {
    return (
        <>
            <Provider store={Store}>
                <Quiz />
            </Provider>
        </>
    )
}

export default StartQuiz
