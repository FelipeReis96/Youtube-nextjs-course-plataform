'use client';
import {MdKeyboardArrowRight, MdKeyboardArrowDown} from "react-icons/md";
import { useState } from "react";

import Class from "./class";

interface IClassProps {
    title: string;
    url: string;
}

interface IClassGroupProps {
    groupTitle: string;
    items: IClassProps[];
}

export default function ClassGroup({groupTitle, items}: IClassGroupProps) {
    const [arrowRight, setArrowRight] = useState(true);
    
    return (
        <div className="flex flex-col p-2 bg-[var(--card-color)] rounded-lg mt-4">
            <div className="flex flex-row">
                <button onClick={() => setArrowRight(!arrowRight)}
                className="">
                    {arrowRight ? (
                        <MdKeyboardArrowRight size={36} className="flex justify-center items-center" />
                    ) : (
                        <MdKeyboardArrowDown size={36} className="flex justify-center items-center" />
                    )}
                </button>
                <h3 className="font-bold p-2">{groupTitle}</h3>
            </div>
            {arrowRight ? null : (
                <ul className="pt-3">
                    {items.map((item,index)=>(
                        <li key={index}>
                            <Class title={item.title} url={item.url} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
 
}