import Section from "@/components/section/section";

export default function Home() {
  return (
    <div >
      <h1 className="font-bold text-xl p-3">Veja mais cursos</h1>
      <div>
        <Section title="Cursos em destaque" variant="h-list" />
      </div>
    </div>
  );
}
