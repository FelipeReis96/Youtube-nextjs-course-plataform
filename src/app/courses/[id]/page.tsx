import { Metadata } from "next";

interface Props {
    params: { id : string}; // params é um objeto que contém os parâmetros da rota, no href: "/courses/ligma", "ligma" é o parâmetro id
}

export async function generateMetadata({params} : Props): Promise<Metadata> {
    // Forma dinâmica de pegar as informações da página. Futuramente, os dados como título e descrição podem ser obtidos de uma API ou banco de dados.
    return {
        title: params.id,
    }
}

export default function CourseDetailPage({params} : Props) {
    return (
        <main className="flex flex-col items-center justify-center pt-10">
            <div className="max-w-[880px] mt-8">
                <h1 className="font-bold text-xl p-3">Detalhes do Curso de {params.id}</h1>
                {/* Aqui você pode adicionar mais detalhes sobre o curso selecionado */}
            </div>
        </main>
    );
}