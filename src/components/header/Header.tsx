'use client';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';
import { useState, useEffect } from 'react';

import  ToggleTheme  from "@/components/button/toggle-theme-button";
import { usePathname} from 'next/navigation';

export default function Header() {
    const currentPath = usePathname();
    const [title, setTitle] = useState('Clean YT Courses');
    const [drawerOpen, setDrawerOpen] = useState(false);



    useEffect(() => {
        setTitle(document.title);
        setDrawerOpen(false);
    }, [currentPath]);

    return (
        <div className="bg-[var(--color-header)] flex flex-row justify-between max-w-screen h-[8vh] items-center ">
            <button className="sm:hidden flex p-4"
            onClick={() => setDrawerOpen(!drawerOpen)}
            >
                <MdMenu size={24} />
            </button>
            <main className="flex justify-center flex-grow">
                <nav> 
                    <ul className="flex flex-row gap-4 p-2 justify-between "> 
                        <li className="hidden sm:flex">
                            {/*you will have the class data-active=true, which will underline the link, same logic for courses page*/}
                            <Link href='/' data-active={currentPath === '/'} className="data-[active=true]:underline">Home</Link>
                        </li>
                        <li className="hidden sm:flex">
                            <Link href='/courses' data-active={currentPath === '/courses' } className="data-[active=true]:underline">Courses</Link>
                        </li>
                        <li className="hidden sm:flex">
                            <Link href='https://www.skilledseducer.com/threads/going-out-alone.12004/'>My connections</Link>
                        </li>
                        <h1 className="sm:hidden font-bold">
                            {title}
                        </h1>
                    </ul>

                    {drawerOpen  && (
  <div
    className="fixed top-0 left-0 bottom-0 right-0 bg-gradient-to-r from-[var(--background)] sm:hidden"
    onClick={() => setDrawerOpen(false)} //Close the drawer when clicking outside
  >
    <ul
      className="flex flex-col gap-4 p-4 w-60 h-screen bg-[var(--background)]"
      onClick={(e) => e.stopPropagation()} // Prevent clicks inside the drawer from closing it
    >
      <h1 className="sm:hidden">{title}</h1>
      <hr className="border-t border-[var(--foreground)]" />
      <li>
        <Link
          href="/"
          data-active={currentPath === '/'}
          className="data-[active=true]:underline"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/courses"
          data-active={currentPath === '/courses'}
          className="data-[active=true]:underline"
        >
          Courses
        </Link>
      </li>
      <li>
        <Link href="https://www.skilledseducer.com/threads/going-out-alone.12004/">
          My connections
        </Link>
      </li>
    </ul>
  </div>
)}
            </nav>
            </main>
            <ToggleTheme />
        </div>
    );
}

