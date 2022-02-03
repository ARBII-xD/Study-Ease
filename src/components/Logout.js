import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { UserContext } from "../App";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Logout = () => {

    const {state , dispatch} = useContext(UserContext)

    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        
        // dispatch({type:"USER" , payload:false})

        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };


    return (

        signOut(auth)
    )
}

export default Logout
