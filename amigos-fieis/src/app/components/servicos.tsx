/*Propiedades das áreas*/
interface Servicos {
    imagem: string
    alternativo: string
    nome: string
}

interface ServicosProps{
    servicos: Servicos[];
}

/*Componente das áreas do hotel*/
export default function Servicos({ servicos }: ServicosProps){
    
    return(
        <div className="flex items-center justify-between gap-6">
            {servicos.map((servico, index) => (
                /*Cada imagem de uma área do hotel*/
                <div className="flex flex-col text-center">
                    <img src={servico.imagem} alt={servico.alternativo} className="rounded-full shadow-md object-cover w-64 h-64"/>
                    <h1 className="text-2xl font-bold">{servico.nome}</h1>
                </div>
            ))}
        </div>
    )
}