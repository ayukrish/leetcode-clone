import { FC, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../util/firebase';

const SignUp: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential, 'sign up');
      // const user = userCredential.user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  }
  return (
    <form
      className="flex-col flex"
      onSubmit={onSubmit}
    >
      <input
        type="email"
        className="border-2 border-white rounded p-2 my-2"
        placeholder="Email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="password"
        className="border-2 border-white rounded p-2 my-2"
        placeholder="Password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button
        type="submit"
        className="bg-blue-400 py-2 px-4 rounded"
      >
        Sign Up
      </button>
    </form>
  )
}

export default SignUp;