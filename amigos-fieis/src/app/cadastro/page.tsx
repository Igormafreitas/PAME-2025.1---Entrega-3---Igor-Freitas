import InputForm from "../components/input-form";
import BotaoForm from "../components/botaoform";


const DetalhesdoServico = () => {

  const logins = [
    {nome:"Email", tipo: "text", placeholder: "seu.email@email.com"},
    {nome:"Senha", tipo: "password", placeholder: "senha"},
    {nome:"CPF", tipo: "text", placeholder: "CPF"},
    {nome:"Nome do pet", tipo: "text", placeholder: "nome"},
    {nome:"Raça", tipo: "text", placeholder: "raça"},
    {nome:"Idade do pet", tipo: "text", placeholder: "idade"},
  ];

  return (
    <div className="flex items-center justify-center h-screen " style={{backgroundColor: "#a2c7b0"}}>
        <div className="bg-sky-200 flex flex-row rounded-lg w-[60%]">

        {/* Logo com título*/}
        <div className=" sm: hidden lg:flex flex-col justify-center items-center bg-cover bg-center text-white w-[50%] p-8 rounded-l-lg bg-[url('/images/logo.png')]">
        </div>

        {/*Formulário para Login*/}
        <div className="flex flex-col justify-center lg:w-[50%] w-[100%] p-8">
        <h1 className="hidden lg:flex text-3xl font-bold mb-4 justify-center">Amigos Fieis</h1>
        <h2 className="text-xl font-bold mb-4 text-center">Cadastro</h2>
          <form className="flex flex-col gap-4">
            <InputForm inputs={logins} />
            <BotaoForm tipo='submit' texto='Cadastrar' rota='/login'></BotaoForm>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DetalhesdoServico;