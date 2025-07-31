import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Titulo from "./components/titulo";
import Areas from "./components/areas";
import Servicos from "./components/servicos";
import BotaoServico from "./components/botaoservico";

const AmigosFieis = () => {

  const areas = [
    {imagem: "/images/area1.png",alternativo: "Área Administrativa", nome:"Área Administrativa"},
    {imagem: "/images/area2.png",alternativo: "Recepção", nome:"Recepção"},
    {imagem: "/images/area3.png",alternativo: "Day Care", nome:"Day Care"},
    {imagem: "/images/area4.png",alternativo: "Hospedagem", nome:"Hospedagem"},
    {imagem: "/images/area5.png",alternativo: "Consultório Veterinário", nome:"Consultório Veterinário"},
    {imagem: "/images/area6.png",alternativo: "Banho e Tosa", nome:"Banho e Tosa"},
        ];
  
  const servicos = [
    {imagem: "/images/servico1.png",alternativo: "Day Care", nome:"Day Care"},
    {imagem: "/images/servico2.png",alternativo: "Hospedagem", nome:"Hospedagem"},
    {imagem: "/images/servico3.png",alternativo: "Consultório Veterinário", nome:"Consultório Veterinário"},
    {imagem: "/images/servico4.png",alternativo: "Banho e Tosa", nome:"Banho e Tosa"}   
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
          <Titulo nome="Seu pet em boas patas!"/>
          <h3 className="text-xl text-center mx-80">Oferecemos um ambiente seguro, acolhedor e cheio de carinho para cães e gatos, com acomodações confortáveis, monitoramento e muito amor — como se estivessem em casa.</h3>
          <div className="flex items-center gap-2">
            <span className="text-5xl">📌</span>          
            <Titulo nome="Estamos aqui!"/>          
          </div>
          <h3 className="text-xl text-center mx-80">Vila Pompeia, São Paulo - SP, Brasil</h3>
          <Titulo nome="O Hotel e suas Áreas"/>
          <Areas areas={areas}/>
          <Titulo nome="Nossos Serviços"/>
          <Servicos servicos={servicos}/>
          <BotaoServico />

        </div>        
      </div>
    </div>
  );
}

export default AmigosFieis;