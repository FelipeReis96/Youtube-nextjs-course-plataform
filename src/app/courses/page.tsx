import type { Metadata } from "next";

import Section from "@/components/section/section";




export const metadata: Metadata = {
  title: "Courses",
}

export default function CoursesPage() {
    return (
        <main className="flex flex-col items-center justify-center pt-10">
            <div className="max-w-[880px] mt-8">
            <h1 className="font-bold text-xl p-3">Todos os cursos</h1>
            <Section
             title="Cursos em destaque" variant="grid"
                items={[
                    {
                        href: "/courses/ligma",
                        imageSrc: "https://i.ytimg.com/vi/WizgXUu8ZyI/hqdefault.jpg",
                        title: "Curso 1",
                        description: "Descrição do curso 1"
                    },
                    {
                        href: "",
                        imageSrc: "https://i.ytimg.com/vi/WizgXUu8ZyI/hqdefault.jpg",
                        title: "Curso 2",
                        description: "Descrição do curso 2"
                    },
                    {
                        href: "",
                        imageSrc: "https://i.ytimg.com/vi/WizgXUu8ZyI/hqdefault.jpg",
                        title: "Curso 2",
                        description: "Descrição do curso 2"
                    },
                    {
                        href: "",
                        imageSrc: "https://i.ytimg.com/vi/WizgXUu8ZyI/hqdefault.jpg",
                        title: "Curso 2",
                        description: "Descrição do curso 2"
                    },
                    {
                        href: "",
                        imageSrc: "https://i.ytimg.com/vi/WizgXUu8ZyI/hqdefault.jpg",
                        title: "Curso 2",
                        description: "Descrição do curso 2"
                    },
                    {
                        href: "",
                        imageSrc: "https://i.ytimg.com/vi/WizgXUu8ZyI/hqdefault.jpg",
                        title: "Curso 2",
                        description: "Descrição do curso 2"
                    },
                    


                ]}
                
            />
        </div>
        </main>
    )
}