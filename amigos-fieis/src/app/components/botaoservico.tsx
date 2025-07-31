import Link from "next/link";

export default function BotaoServico(){
    return(
        <Link href="/detalhes-do-servico">
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold text-2xl py-5 px-20 rounded-full">
                Solicitar um serviço
            </button>        
        </Link>
    )
}