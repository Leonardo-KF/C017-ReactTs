import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { api } from "../../utils/api/api";

import { RegisterSection, PasswordDiv, ButtonSection } from "./styles";

type viewPasswords = {
  password: boolean;
  confirmPassword: boolean;
};

export function Register() {
  const [viewPassword, setViewPassword] = useState<viewPasswords>({
    password: false,
    confirmPassword: false,
  });

  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newUser = {
      name: event.currentTarget.userName.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
      passwordConfirmation: event.currentTarget.confirmPassword.value,
      birthdate: event.currentTarget.birthdate.value,
      imageURL: event.currentTarget.image.value,
    };

    console.log(newUser);

    const user = await api.resgisterUser(newUser);
    console.log(user);
    if (user) {
      navigate("/login");
    }
  }

  return (
    <RegisterSection>
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Nome de usuário:</label>
        <input type="text" name="userName"></input>
        <label htmlFor="email">Email: </label>
        <input type="text" name="email"></input>
        <label htmlFor="password">Senha:</label>
        <PasswordDiv>
          <input
            type={viewPassword.password ? "text" : "password"}
            name="password"
          ></input>
          <button
            type="button"
            onClick={() => {
              setViewPassword({
                ...viewPassword,
                password: !viewPassword.password,
              });
            }}
          >
            {viewPassword.password ? (
              <AiFillEyeInvisible size={20} />
            ) : (
              <AiFillEye size={20} />
            )}
          </button>
        </PasswordDiv>

        <label htmlFor="confirmPassword">Confirmação de senha</label>
        <PasswordDiv>
          <input
            type={viewPassword.confirmPassword ? "text" : "password"}
            name="confirmPassword"
          ></input>
          <button
            type="button"
            onClick={() => {
              setViewPassword({
                ...viewPassword,
                confirmPassword: !viewPassword.confirmPassword,
              });
            }}
          >
            {viewPassword.confirmPassword ? (
              <AiFillEyeInvisible size={20} />
            ) : (
              <AiFillEye size={20} />
            )}
          </button>
        </PasswordDiv>
        <label htmlFor="bithdate">Data de nascimento:</label>
        <input type="date" name="birthdate"></input>
        <label htmlFor="image">Imagem: </label>
        <input type="text" name="image"></input>
        <ButtonSection>
          <button type="submit">Cadastrar</button>
        </ButtonSection>
      </form>
    </RegisterSection>
  );
}
