import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Courses",
}

export default function CoursesPage() {
    return (
        <main>
            <h1 className="font-bold text-xl p-3">Todos os cursos</h1>
        </main>
    )
}