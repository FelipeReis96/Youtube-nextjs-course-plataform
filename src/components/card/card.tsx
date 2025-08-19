import Link from 'next/link';
import Image from 'next/image';


interface ICardProps {   // Define the properties that the Card component will accept (every component that has props should have an interface)
    href: string;
    imageSrc: string;
    title: string;
    description: string;
}

export default function Card({href, imageSrc, title, description}: ICardProps) {
    return (
        <Link href={href}>
            <div className="p-2">
                <div className="hover:bg-[var(--color-header)] p-2 rounded-lg flex flex-col justify-center items-center">  {/* aplica um hover quando passa o mouse no card*/}
                    <Image
                    src={imageSrc}
                    alt={description}
                    width={1000}
                    height={0}
                    draggable={false}
                    className="aspect-video object-cover rounded-lg mb-2"
                    />
                    <div className="bg-[var(--card-color)] rounded-lg p-4"> 
                        <h1 className="font-extrabold text-lg">{title}</h1>
                        <p className="line-clamp-4">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}