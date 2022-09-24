import { useState, useEffect } from "react";

type Repository = {
  html_url: string;
  name: string;
  id: number;
};

type Person = {
  name: string;
  age: number;
  email: string;
  gender: string;
  description?: string;
  repositories?: Repository[];
};

export function Home() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const pessoa: Person = {
    name: "Pessoa1",
    age: 18,
    email: "pessoa@gmail.com",
    gender: "male",
  };

  async function getInfos() {
    const data = await fetch("https://api.github.com/users/Leonardo-kf/repos");
    const response = await data.json();
    setRepos(response);
  }

  function convertRepository(repo: Repository): string {
    return repo.name.toUpperCase();
  }

  const text = convertRepository({
    html_url: "abc",
    id: 154352,
    name: "test",
  });

  console.log(text);

  useEffect(() => {
    getInfos();
  }, []);

  return (
    <div
      className="test"
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        {darkMode ? "light mode" : "dark mode"}
      </button>
      <h2>{pessoa.name.toLocaleUpperCase()}</h2>
      <h2>{pessoa.age}</h2>
      <h2>{pessoa.email}</h2>
      <h2>{pessoa.gender}</h2>
      <h1>Repositories:</h1>
      <div>
        {repos.map((item) => (
          <div key={item.id}>
            <h2>name: {item.name.toUpperCase()}</h2>
            <h2>link: {item.html_url}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
