"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BotaoPerfil() {
    const router = useRouter();
    const [logado, setLogado] = useState<boolean | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setLogado(!!token);
    }, []);

    const handleClick = () => {
        if (logado) {
            router.push("/perfil");
        } else {
            router.push("/login");
        }
    };

    return (
        <div
            onClick={handleClick}
            className="flex items-center space-x-2 text-lg hover:bg-sky-300 p-4 rounded cursor-pointer transition"
        >
            <span className="text-xl">👤</span>
            <span>Perfil</span>
        </div>
    );
}