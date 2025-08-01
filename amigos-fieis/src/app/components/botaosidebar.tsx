import Link from "next/link";

/*Propiedades do botâo na sidebar*/
interface BotaoSidebar {
    rota: string
    emoji: string
    titulo: string
}

interface BotaoSidebarProps{
    botoes: BotaoSidebar[];
}

/*Componente botão na sidebar*/
export default function BotaoSidebar({ botoes }: BotaoSidebarProps){
    return (
        <div>
            {botoes.map((botao, index) => (
                /*Cada botão leva para uma rota*/
                <Link href={botao.rota} key={index}>
                    <div className="flex items-center space-x-2 text-lg hover:bg-sky-300 p-4 rounded cursor-pointer transition">
                        <span className="text-xl">{botao.emoji}</span>
                        <span>{botao.titulo}</span>
                    </div>
                </Link>
            ))}
        </div>


    );

}