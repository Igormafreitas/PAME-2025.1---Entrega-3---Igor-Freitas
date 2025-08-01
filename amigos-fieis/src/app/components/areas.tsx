/*Propiedades das áreas*/
interface Areas {
    imagem: string
    alternativo: string
    nome: string
}

interface AreasProps{
    areas: Areas[];
}

/*Componente das áreas do hotel*/
export default function Areas({ areas }: AreasProps){
    
    return(
        <div className="grid grid-cols-3 gap-6">
            {areas.map((area, index) => (
                /*Cada imagem de uma área do hotel*/
                <div className="flex flex-col text-center">
                    <img src={area.imagem} alt={area.alternativo} className="rounded-lg shadow-md object-cover w-64 h-64"/>
                    <h1 className="text-2xl font-bold">{area.nome}</h1>
                </div>
            ))}
        </div>
    );
}