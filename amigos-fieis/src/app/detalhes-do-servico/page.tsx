import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Titulo from "../components/titulo";
import DetalhesServicos from "../components/detalhes-servicos";
import BotaoServico from "../components/botaoservico";

const DetalhesdoServico = () => {

  const detalhesservicos = [
    {subtitulo:"Day Care para Cães", imagem: "/images/daycare-cao.png",alternativo: "Day Care para Cães", descricao:"Serviço de day care para cães com acompanhamento profissional, diversão, socialização e atividades durante todo o dia no conforto e segurança do nosso hotel pet.", preco:"R$ 109,18"},
    {subtitulo:"Hospedagem Diária de Cães", imagem: "/images/hospedagem-cao.png",alternativo: "Hospedagem Diária de Cães", descricao:"Hospedagem segura e confortável para cães, com cuidados dedicados e muito carinho durante todo o dia e noite.", preco:"R$ 127,03"},
    {subtitulo:"Hospedagem Diária de Gatos", imagem: "/images/hospedagem-gato.png",alternativo: "Hospedagem Diária de Gatos", descricao:"Hospedagem diária para gatos com ambiente tranquilo, aconchegante e cuidados especiais.", preco:"R$ 86,10"},
    {subtitulo:"Consultório Veterinário", imagem: "/images/veterinario-servico.png",alternativo: "Consultório Veterinário", descricao:"Atendimento veterinário no hotel com cuidado, segurança e profissionais qualificados.", preco:" à definir dependendo dos casos"},
    {subtitulo:"Banho e Tosa", imagem: "/images/banho-tosa-servico.png",alternativo: "Banho e Tosa", descricao:"Cuidados completos de higiene e beleza para seu pet, com todo o conforto do nosso hotel.", preco:"inclusos no day care e ao fim da hospedagem"},
    {subtitulo:"Pacote Fiel Companheiro", imagem: "images/fiel-companheiro.png",alternativo: "Pacote Fiel Companheiro", descricao:"Pacote mensal de day care com 5 dias por semana de diversão, cuidado e atenção para o seu cão.", preco:"R$ 2061,23"}
  ];

  return (
    <div>
      {/*O cabeçalho da página*/}
      <Header />
      <div className="flex min-h-screen">
        {/*A sidebar da página*/}
        <Sidebar />
        {/* Conteúdo da página */}
        <div className="flex flex-1 flex-col items-center justify-start p-10 gap-10">
          <Titulo nome="📋Detalhes dos Serviços"/>
          {/* Todos os serviços detalhados */}
          <DetalhesServicos detalhesservicos={detalhesservicos} />
          {/* Botão para solicitar um serviço */}
          <BotaoServico nome="Solicitar serviço"/>          
        </div>
      </div>
    </div>
  );
}

export default DetalhesdoServico;