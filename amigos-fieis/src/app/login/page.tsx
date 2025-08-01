import InputForm from "../components/input-form";
import EsqueciSenha from "../components/esqueci-senha";
import BotaoForm from "../components/botaoform";


const DetalhesdoServico = () => {

  const logins = [
    {nome:"Usuário", tipo: "text", placeholder: "seu.email@email.com"},
    {nome:"Senha", tipo: "password", placeholder: "senha"}
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
        <h2 className="hidden lg:flex text-2xl font-bold mb-8 justify-center">Seu pet em boas patas!</h2>
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
          <form className="flex flex-col gap-4">
            <InputForm inputs={logins} />
            <EsqueciSenha />
            <BotaoForm tipo='submit' texto='Login' rota='/'></BotaoForm>
          </form>

        {/*Botão para se cadastrar*/}
          <div className="pt-6">
                <h1 className="hidden lg:flex text-lg font-bold mb-4">Ainda não tem cadastro?</h1>
                <BotaoForm tipo='button' texto='Cadastrar' rota='/cadastro'></BotaoForm>   
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalhesdoServico;