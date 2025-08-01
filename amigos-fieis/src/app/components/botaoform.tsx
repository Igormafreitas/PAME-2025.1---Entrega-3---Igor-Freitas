import Link from "next/link";

/*Propiedades dos botões do login/cadastro*/
interface BotaoFormProps {
    tipo: "submit" | "reset" | "button" | undefined;
    texto: string
    rota: string;
}

/*Componente dos botões do login/cadastro*/
export default function Botao({tipo, texto, rota}: BotaoFormProps){
    return (
        <Link href={rota} className="flex">
            <button type={tipo} className="bg-yellow-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded flex w-[100%] justify-center">
                {texto}
            </button>
        </Link>
);
}