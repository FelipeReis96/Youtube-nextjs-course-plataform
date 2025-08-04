'use client';
import Link from 'next/link';



import  ToggleTheme  from "@/components/toggle-theme-button";
import { usePathname} from 'next/navigation';

export default function Header() {
    const currentPath = usePathname();
    return (
        <div className="bg-[var(--color-header)] flex flex-row justify-between max-w-screen ">
            <main className="flex justify-center flex-grow">
                <nav> 
                    <ul className="flex flex-row gap-4 p-2"> 
                        <li>
                            {/* if the current path is &apos;/&apos; you will have the class data-active=true, which will underline the link, same logic for courses page*/}
                            <Link href='/' data-active={currentPath === '/'} className="data-[active=true]:underline">Home</Link>
                        </li>
                        <li>
                            <Link href='/courses' data-active={currentPath === '/courses' } className="data-[active=true]:underline">Courses</Link>
                        </li>
                        <li>
                            <Link href='/'>Minhas Redes</Link>
                        </li>
                    </ul>
            </nav>
            </main>
            <ToggleTheme />
        </div>
    );
}

