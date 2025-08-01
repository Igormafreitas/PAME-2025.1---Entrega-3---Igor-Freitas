import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Titulo from "./components/titulo";
import Areas from "./components/areas";
import Servicos from "./components/servicos";
import BotaoServico from "./components/botaoservico";

const AmigosFieis = () => {
  {/*Fotos das áreas do hotel*/}
  const areas = [
    {imagem: "/images/administrativa.png",alternativo: "Área Administrativa", nome:"Área Administrativa"},
    {imagem: "/images/recepcao.png",alternativo: "Recepção", nome:"Recepção"},
    {imagem: "/images/daycare.png",alternativo: "Day Care", nome:"Day Care"},
    {imagem: "/images/hospedagem.png",alternativo: "Hospedagem", nome:"Hospedagem"},
    {imagem: "/images/veterinario-area.png",alternativo: "Consultório Veterinário", nome:"Consultório Veterinário"},
    {imagem: "/images/banho-tosa-area.png",alternativo: "Banho e Tosa", nome:"Banho e Tosa"},
        ];
  
  {/*Fotos dos serviços prestados pelo hotel*/}
  const servicos = [
    {imagem: "/images/daycare-cao.png",alternativo: "Day Care", nome:"Day Care"},
    {imagem: "/images/hospedagem-gato.png",alternativo: "Hospedagem", nome:"Hospedagem"},
    {imagem: "/images/veterinario-servico.png",alternativo: "Consultório Veterinário", nome:"Consultório Veterinário"},
    {imagem: "/images/banho-tosa-servico.png",alternativo: "Banho e Tosa", nome:"Banho e Tosa"}   
  ];

  return (
    <div>
      {/*O cabeçalho da página*/}
      <Header />
      <div className="flex min-h-screen">
        {/*A sidebar da página*/}
        <Sidebar />
        {/* Conteúdo da página */}
        <div className="flex flex-1 items-center flex-col justify-start p-10 gap-10">
          {/* Descrição do hotel */}
          <Titulo nome="Seu pet em boas patas!"/>
          <h3 className="text-xl text-center mx-80">Oferecemos um ambiente seguro, acolhedor e cheio de carinho para cães e gatos, com acomodações confortáveis, monitoramento e muito amor — como se estivessem em casa.</h3>
          {/* Endereço do hotel */}
          <div className="flex items-center gap-2">
            <span className="text-5xl">📌</span>          
            <Titulo nome="Estamos aqui!"/>          
          </div>
          <h3 className="text-xl text-center mx-80">Vila Pompeia, São Paulo - SP, Brasil</h3>
          {/* Áreas disponíveis */}
          <Titulo nome="O Hotel e suas Áreas"/>
          <Areas areas={areas}/>
          {/* Serviços disponíveis */}
          <Titulo nome="Nossos Serviços"/>
          <Servicos servicos={servicos}/>
          {/* Botão para solicitar um serviço */}
          <BotaoServico nome="Solicitar um serviço"/>
        </div>        
      </div>
    </div>
  );
}

export default AmigosFieis;