import { FC, useState } from "react";
import Login from "./login";
import SignUp from "./signUp";

const AuthPage: FC = () => {
  const [showSignUpPage, setShowSignUpPage] = useState<boolean>(false);
  return (
    <div className="flex flex-col align-center items-center">
      <div>Sign in</div>
      {showSignUpPage ? <SignUp /> : <Login /> }
      <div className="m-2">
        <span>{showSignUpPage ? `Already a user: ` : `First Time User: `}</span>
        <button
          className="bg-blue-400 py-2 px-4 rounded"
          onClick={(e) => {
            e.stopPropagation();
            setShowSignUpPage(prevState => !prevState);
          }}
        >
          {showSignUpPage ? `Login`: `Sign Up`}
        </button>
      </div>
    </div>
  );
  
}

export default AuthPage;