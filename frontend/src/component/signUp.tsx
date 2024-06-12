import { FC, useState } from "react";

const SignUp: FC = () => {
  const [email, setEmail] = useState<string>('');

  const onSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
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