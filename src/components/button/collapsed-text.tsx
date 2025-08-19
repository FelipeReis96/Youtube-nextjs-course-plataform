'use client';
import { useState, useRef, useEffect } from "react";

interface ICollapsedTextProps {
    children?: React.ReactNode;
}

export default function CollapsedText({children}: ICollapsedTextProps) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [showButton, setShowButton] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const checkOverflow = () => {
            const element = textRef.current;
            if (element) {
                // Cria um elemento temporário para medir sem line-clamp
                const measureElement = document.createElement('div');
                measureElement.innerHTML = element.innerHTML;
                
                document.body.appendChild(measureElement);
                const fullHeight = measureElement.offsetHeight; //o tamanho total é calculado ao ser colocado no DOM
                document.body.removeChild(measureElement);
                
                // Mede a altura com line-clamp aplicado
                const clampedHeight = element.offsetHeight;
                
                setShowButton(fullHeight > clampedHeight);
            }
        };

        // Aguarda um frame para garantir que o elemento foi renderizado
        requestAnimationFrame(checkOverflow);
    }, [children]);

    return (
        <div className="flex items-center justify-center flex-col">
            <p 
                ref={textRef}
                className={isCollapsed ? 'line-clamp-7' : ''}
            >
                {children}
            </p>
            
            {showButton && (
                <button 
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="bg-[var(--card-color)] border rounded-lg px-2 ml-2 hover:bg-[var(--color-header)] transition-colors duration-300 mt-2"
                >
                    {isCollapsed ? "See more" : "See less"}
                </button>
            )}
        </div>
    );
}