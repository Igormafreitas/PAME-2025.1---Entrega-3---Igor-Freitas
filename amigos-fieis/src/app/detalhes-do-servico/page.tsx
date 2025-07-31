import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Titulo from "../components/titulo";

const DetalhesServicos = () => {

  return (
    <div>
      {/*O cabeçalho da página*/}
      <Header />
      <div className="flex min-h-screen">
        {/*A sidebar da página*/}
        <Sidebar />
        {/* Conteúdo da página */}
        <div className="flex flex-1 flex-col justify-start p-10 gap-10">
          <Titulo nome="Seu pet em boas patas!"/>
          <h3 className="text-xl">Oferecemos um ambiente seguro, acolhedor e cheio de carinho para cães e gatos, com acomodações confortáveis, monitoramento e muito amor — como se estivessem em casa.</h3>
          <div className="flex items-center gap-2">
            <span className="text-5xl">📌</span>          
            <Titulo nome="Estamos aqui!"/>          
          </div>
          <h3 className="text-xl">Vila Pompeia, São Paulo - SP, Brasil</h3>
          <Titulo nome="O Hotel e suas Áreas"/>
        </div>        
      </div>
    </div>
  );
}

export default DetalhesServicos;