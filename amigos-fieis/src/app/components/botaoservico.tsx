import Link from "next/link";

/*Propiedades do botâo de serviços*/
interface BotaoServicoProps{
    nome: string
}

/*Componente do botão de serviços*/
export default function BotaoServico({ nome }: BotaoServicoProps){
    return(
        <Link href="/detalhes-do-servico">
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold text-2xl py-5 px-20 rounded-full">
                {nome}
            </button>        
        </Link>
    );
}