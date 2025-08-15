import Section from "@/components/section/section";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="mt-8 w-full max-w-[880px]">
          <h1 className="font-bold text-xl p-3">Veja mais cursos</h1>
          <Section 
          title="Cursos em destaque" variant="h-list" 
          items={[
            {
              href: "",
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
          ]}
          />
        </div>  
    </div>
  );
}
