import { RegisterSection } from "./styles";

export function Register() {
  return (
    <RegisterSection>
      <form>
        <label htmlFor="userName"></label>
        <input type="text" name="userName"></input>
        <label htmlFor="email"></label>
        <input type="text" name="email"></input>
        <label htmlFor="password"></label>
        <input type="text" name="password"></input>
        <label htmlFor="confirmPassword"></label>
        <input type="text" name="confirmPassword"></input>
        <label htmlFor="bithdate"></label>
        <input type="date" name="birthdate"></input>
        <label htmlFor="image"></label>
        <input type="text" name="image"></input>
      </form>
    </RegisterSection>
  );
}
