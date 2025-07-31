import BotaoSidebar from "./botaosidebar";
import BotaoPerfil from "./botaoperfil";

{/*Componente da sidebar*/}
export default function Sidebar(){

    {/*Os dados de cada botão da sidebar*/}
    const botoes = [
        {rota: "/", emoji: "🏠", titulo: "Página Inicial"},
        {rota: "/detalhes-do-servico", emoji: "📋", titulo: "Detalhes do Serviço"}
    ];

    return (
        <aside className="w-65 h-auto bg-sky-200 p-4">
            {/*Os botões na sidebar*/}
            <nav className="flex flex-col text-lg font-medium">
                <BotaoSidebar botoes={botoes}/>
                <BotaoPerfil />
            </nav>
        </aside>
    )

}