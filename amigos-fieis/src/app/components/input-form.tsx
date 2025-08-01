/*Propiedades do input de login e cadastro*/
interface InputForm {
    nome: string
    tipo: string
    placeholder: string
}

interface InputFormProps{
    inputs: InputForm[];
}

/*Componente input de login e cadastro*/
export default function InputForm({ inputs }: InputFormProps){
    return (
        <div>
            {inputs.map((input, index) => (
                /*Input para preencher para login/cadastro*/
                <div>
                    <label className="block mb-2">{input.nome}</label>
                    <input type={input.tipo} className="bg-white w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow" placeholder={input.placeholder}/>
                </div>
            ))}
        </div>
    );
}