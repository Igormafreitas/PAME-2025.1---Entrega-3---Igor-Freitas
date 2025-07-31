{/*Propiedades do título*/}
interface TituloProps{
    nome: string
}

{/*Componente de título*/}
export default function Titulo({ nome } : TituloProps){
    return(
        <h1 className="text-5xl font-bold">
           {nome} 
        </h1>
    )

}