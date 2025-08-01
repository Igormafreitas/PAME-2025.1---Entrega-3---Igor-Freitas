{/*Componente do cabeçalho*/}
export default function Header(){
    return (
        <header className="flex items-center justify-between w-full px-20 py-4" style={{backgroundColor: "#a2c7b0" }}>
            {/*Logo e nome do hotel*/}
            <img src="/images/logo.png" alt="Logo" className="w-40 h-40"/>
            <h1 className="font-black text-7xl" style={{ fontFamily: 'Quicksand' }}>Amigos Fiéis</h1>
            {/*barra de pesquisa*/}
            <div>
                <span className="text-2xl">🔎</span>
                <input type="text" placeholder="buscar" className="bg-white w-80 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"/>
            </div>
        </header>
    );
}