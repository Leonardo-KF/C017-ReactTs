import { FormEvent, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ButtonSection, PasswordDiv } from "../register/styles";
import { LoginSection } from "./styles";

export function Login() {
  const [viewPassword, setViewPassword] = useState<boolean>(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const login = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    console.log(login);
  }

  return (
    <LoginSection>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
        <label htmlFor="password">Senha:</label>
        <PasswordDiv>
          <input
            type={viewPassword ? "text" : "password"}
            name="password"
          ></input>
          <button
            type="button"
            onClick={() => {
              setViewPassword(!viewPassword);
            }}
          >
            {viewPassword ? (
              <AiFillEyeInvisible size={20} />
            ) : (
              <AiFillEye size={20} />
            )}
          </button>
        </PasswordDiv>
        <ButtonSection>
          <button type="submit">Login</button>
        </ButtonSection>
      </form>
    </LoginSection>
  );
}
