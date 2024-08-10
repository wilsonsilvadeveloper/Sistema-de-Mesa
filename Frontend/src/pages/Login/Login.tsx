import { useState } from "react";
import Form from "../../components/Form/Form";

export default function Login() {
  const [userType, setTypeUser] = useState<string | null>("");
  const [visibleForm, setVisibleForm] = useState<boolean>(true);
  const [credentialsAdm, setCredentialsAdm] = useState<{email: string; senha: string;}>({ email: "", senha: "" });

  const handleShowForm = () => {
    setVisibleForm(!visibleForm);
  };

  const handleBtn = (typeUser: string) => {
    setTypeUser(typeUser);
    handleShowForm();
  };

  const handleSubmitForm = (
    e: React.FormEvent<HTMLFormElement>,
    obj: { email: string; senha: string }
  ) => {
    e.preventDefault();
    console.log(obj);
    fetch("http://localhost:3001/api/validate-credential", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        if (response.ok) {
          alert("Login efetuado com sucesso!");
        } else {
          alert("Erro ao efetuar login");
        }
      })
      .catch(() => {
        alert("Erro ao efetuar login");
      });
  };

  return (
    <div>
      {visibleForm && (
        <Form submitHandler={(e) => e.preventDefault()}>
          <h2 className="font-bold text-2xl mb-2">Você é?</h2>
          <button
            type="button"
            style={{ marginRight: 10 }}
            onClick={() => handleBtn("adm")}
          >
            Adm
          </button>
          <button
            type="button"
            style={{ marginLeft: 10 }}
            onClick={() => handleBtn("garçon")}
          >
            Garçon
          </button>
        </Form>
      )}
      {userType === "adm" && (
        <Form
          method="post"
          submitHandler={(e) => handleSubmitForm(e, credentialsAdm)}
        >
          <h2 className="font-bold text-2xl italic">
            Faça login com suas credenciais de Adm
          </h2>
          <div className="flex flex-col p-5 items-start">
            <label htmlFor="email" className="ml-2">
              Email:
            </label>
            <input
              value={credentialsAdm.email}
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              className="w-full h-10 rounded-lg pl-2"
              onChange={(e) =>
                setCredentialsAdm({ ...credentialsAdm, email: e.target.value })
              }
            />
            <label htmlFor="senha" className="mt-2 ml-2">
              Senha:
            </label>
            <input
              value={credentialsAdm.senha}
              type="password"
              name="senha"
              placeholder="Digite sua senha de adm"
              className="w-full h-10 rounded-lg pl-2"
              onChange={(e) =>
                setCredentialsAdm({ ...credentialsAdm, senha: e.target.value })
              }
            />
            <button type="submit" className="w-[60%] m-auto mt-4">
              Logar
            </button>
          </div>
        </Form>
      )}
    </div>
  );
}
