import Link from "next/link";

import { MdPlayCircleOutline } from 'react-icons/md';

export interface IClassProps {
    title: string;
    url: string;
}

export default function Class({ title, url }: IClassProps) {
    
    return (
        <div>
            <Link href={url}
            className="flex flex-row p-2 w-full text-center bg-black hover:bg-[var(--color-header-hover)] transition-colors gap-5">
                <MdPlayCircleOutline size={30} />
                <div className="pt-1">{title}</div>
            </Link>
        </div>
    )
}