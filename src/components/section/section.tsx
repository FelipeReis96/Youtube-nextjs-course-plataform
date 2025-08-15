'use client';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { UIEvent, useRef, useState } from "react";


import Card from "@/components/card/card";


export interface ICardProps {  
    href: string;
    imageSrc: string;
    title: string;
    description: string;
}

interface ISectionProps {
    title: string;
    variant: 'grid' | 'h-list';
    items : ICardProps[];
}

export default function Section({title, variant='grid', items}: ISectionProps)  {

    const [scrollPosition, setScrollPosition] = useState<'start'| 'middle'| 'end'>('start')
    const refScroll = useRef<HTMLUListElement>(null);

    const handleScroll = (event: UIEvent<HTMLUListElement>) => {
        if (event.currentTarget?.scrollLeft === 0) {
            setScrollPosition('start');
        }
        else if (event.currentTarget?.scrollLeft === (event.currentTarget.scrollWidth - event.currentTarget.clientWidth)) {
            setScrollPosition('end');
        }
        else {
            setScrollPosition('middle');
        }
    };

    const DoScroll = (scroll: number) => {
        const currentScroll = refScroll.current?.scrollLeft || 0; // Get the current scroll position
        refScroll.current?.scrollTo({behavior: 'smooth', left: currentScroll + scroll}); // Scroll to the new position
    }

    

    

    return (
        <div className="flex flex-col bg-[var(--card-color)] rounded-lg p-2 gap-4">
            <ul
            ref={refScroll}
            onScroll={handleScroll}
            data-variant={variant} 
            className="flex flex-col gap-4 p-2 grid grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto">
                {(scrollPosition === 'end' || scrollPosition === 'middle') && (
                    <button onClick={() => {DoScroll(-300)}}
                        className=" flex justify-center items-center h-14 w-14 rounded-full bg-[var(--color-header)] hidden sm:flex sticky  my-auto left-0 -ml-14">
                        <MdKeyboardArrowLeft size={36} className="flex justify-center items-center" />
                    </button>
                )}
                {items.map((item, index) => (
                    <li key={index} data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72">
                        <Card
                            href={item.href}
                            imageSrc={item.imageSrc}
                            title={item.title}
                            description={item.description}
                        />
                    </li>
                ))}
                {(scrollPosition === 'start' || scrollPosition === 'middle') && (
                    <button onClick={() => {DoScroll(300)}}
                        className=" flex justify-center items-center h-14 w-14 rounded-full bg-[var(--color-header)] hidden sm:flex sticky  my-auto right-0 -ml-14">
                        <MdKeyboardArrowRight size={36} className="flex justify-center items-center" />
                    </button>
                )}
            </ul>
        </div>
    )
}