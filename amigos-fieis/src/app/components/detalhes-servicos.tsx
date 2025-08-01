/*Propiedades dos detalhes dos serviços*/
interface DetalhesServicos {
    subtitulo: string
    imagem: string
    alternativo: string
    descricao: string
    preco: string
}

interface DetalhesServicosProps{
    detalhesservicos: DetalhesServicos[];
}

/*Componente dos detalhes dos serviços do hotel*/
export default function DetalhesServicos({ detalhesservicos }: DetalhesServicosProps){
    
    return(
        <div className="grid grid-cols-3 gap-6">
            {detalhesservicos.map((detalhe, index) => (
                <div key={index} className="flex flex-col items-center w-64 p-4 border rounded-lg shadow-md bg-white">
                    <h1 className="text-2xl font-bold mb-2 text-center">{detalhe.subtitulo}</h1>
                    <img src={detalhe.imagem} alt={detalhe.alternativo} className="rounded-lg shadow-md object-cover w-64 h-64 mb-2"/>
                    <h3 className="text-lg text-center mb-1">{detalhe.descricao}</h3>
                    <h3 className="text-orange-500 font-semibold">Preço: {detalhe.preco}</h3>
                </div>
            ))}
        </div>
    );
}