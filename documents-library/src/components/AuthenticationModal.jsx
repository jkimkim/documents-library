import Login from "./login";
import SignUp from "./SignUp";
import React, { useState } from "react";

function AuthenticationModal() {
    const [currentModal, setCurrentModal] = useState("login");

    const toggleModal = () => {
        if (currentModal === "login") {
            setCurrentModal("signup");
        } else {
            setCurrentModal("login");
        }
    }
    return (
      <React.Fragment>
            {currentModal === "login" &&
                <Login toggleModal={toggleModal} />
            }
            {currentModal === "signup" &&
                <SignUp toggleModal={toggleModal} />
            }
      </React.Fragment>
    );
}

export default AuthenticationModal;