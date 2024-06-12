import { FC, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const onSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, 'useruseruser');
      })
      .catch((error) => {
        console.log(error);
      });
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
        Sign In
      </button>
    </form>
  )
}


export default Login;