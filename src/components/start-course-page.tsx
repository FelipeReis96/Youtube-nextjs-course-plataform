
import Link from 'next/link';
import { MdPlayCircleOutline } from 'react-icons/md';

interface IStartCoursePageProps {
    imageSrc: string;
    idClass: string;
    idCourse: string;
}

export default function StartCoursePage({ imageSrc, idClass, idCourse }: IStartCoursePageProps) {
    return (
        <main className="flex flex-col items-center justify-center bg-[var(--card-color)] rounded-lg mt-8 w-full p-3 ">
            <div className="w-full">
                <Link href="/"
                style={{backgroundImage: `url(${imageSrc})`}}
                className="w-full max-h-[400px] flex items-center justify-center aspect-video rounded">
                    <div className="relative inset-0 flex items-center justify-center rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <MdPlayCircleOutline size={58} className="text-white drop-shadow-2xl" />
                    </div>
                </Link>
            </div>
            <Link 
                href="/"
                className="p-2 rounded text-center bg-[var(--color-header)] w-full m-4"
            >
                Start course
            </Link>
        </main>
    );
}