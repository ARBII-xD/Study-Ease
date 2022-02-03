import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Home from "./containers/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import React, { createContext, useReducer } from "react";
// import Signup from './containers/Signup'
import Quiz from "./containers/Quiz"
import About from './containers/About'
import Notes from './containers/Notes'
import Progress from "./containers/Progress";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { useUserAuth } from './context/UserAuthContext'
import { initialState, reducer } from "./Reducer/UseReducer";
import Insertion from "./config/Insertion";
import QuizMain from './QuizzApp/QuizMain'
import QuizParticular from './QuizzApp/QuizParticular'
import StartQuiz from './QuizzApp/StartQuiz'



export const UserContext = createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  // const { user } = useUserAuth()
  // if (!user) {
  //   alert("You have to Sign-In to access this route, redirecting to Sign-In page")}

  return (
    <>
      <Header />
      <Container>

        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>

                {/* <Route path="/quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>}/> */}
                <Route path='/quizmain' element={<ProtectedRoute><QuizMain /></ProtectedRoute>} />
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/progress" element={<Progress />} />
                <Route path='/InsertUser' element={<Insertion />} />
                {/* <Route path='/quizmain' element={<QuizMain />} /> */}
                <Route path="/quizparticular" element={<QuizParticular />} />
                <Route path="/startquiz" element={<StartQuiz />} />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>

      <Footer />

    </>

  );
}

export default App;
