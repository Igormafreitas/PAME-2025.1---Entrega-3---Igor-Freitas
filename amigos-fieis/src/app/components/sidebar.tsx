import BotaoSidebar from "./botaosidebar";
import BotaoPerfil from "./botaoperfil";

export default function Sidebar(){

    const botoes = [
        {rota: "/", emoji: "🏠", titulo: "Página Inicial"},
        {rota: "/detalhes-do-servico", emoji: "📋", titulo: "Detalhes do Serviço"}
    ];

    return (
        <aside className="w-65 h-screen bg-sky-200 p-4">
            <nav className="flex flex-col text-lg font-medium">
                <BotaoSidebar botoes={botoes}/>
                <BotaoPerfil />
            </nav>
        </aside>
    )

}