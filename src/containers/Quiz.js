import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { UserContext } from "../App";





const Quiz = () => {
  const {state , dispatch} = useContext(UserContext)

    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        
        dispatch({type:"USER" , payload:false})

        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };
    return (
      <>
        <div className="p-4 box mt-3 text-center">
          Hello Welcome <br />
          {user && user.email}
        </div>
        <div className="d-grid gap-2">
          <Button variant="primary" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </>
    );
  };
  
  export default Quiz;
