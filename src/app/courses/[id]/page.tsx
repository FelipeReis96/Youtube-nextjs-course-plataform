import { Metadata } from "next";

import CollapsedText from "@/components/button/collapsed-text";
import ShareButton from "@/components/button/share-button";
import StartCoursePage from "@/components/start-course-page";
import Class from "@/components/course-content/class";
import ClassGroup from "@/components/course-content/class-group";
import CourseContent from "@/components/course-content/courseContent";

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
        <main className="flex flex-col items-center justify-center pt-10 p-3">
            <div className="max-w-[880px] mt-8">
                <StartCoursePage imageSrc={""} idClass={""} idCourse={params.id} />
                <h1 className="font-bold text-xl p-3">Detalhes do Curso de {params.id}</h1>
                <CollapsedText>Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the industry standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the industry
                 standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the industry standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the industry standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the industry standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum
                </CollapsedText>
                <div className="mt-2">
                    <ShareButton
                     link={`https://www.example.com/courses/${params.id}`} />
                </div>

            <CourseContent 
                itemsCourse={[
                    {
                        groupTitle: "Introduction",
                        groupItems: [
                            {title: "What is Next.js?", url: "/courses/1/class-1"},
                            {title: "Getting Started", url: "/courses/1/class-2"},
                        ]
                    },
                    {
                        groupTitle: "Advanced Topics",
                        groupItems: [
                            {title: "API Routes", url: "/courses/1/class-3"},
                            {title: "Middleware", url: "/courses/1/class-4"},
                        ]
                    }
                ]}
            />
            </div>
        </main>
    );
}