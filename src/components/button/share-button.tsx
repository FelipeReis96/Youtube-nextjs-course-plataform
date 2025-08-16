'use client';
import { useState, useRef, useEffect } from "react";
import { MdShare, MdContentCopy, MdCheck } from "react-icons/md";

interface IShareButtonProps {
    link: string;
}

export default function ShareButton({ link }: IShareButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event: MouseEvent) {
                if (ref.current && !(ref.current as HTMLElement).contains(event.target as Node)) {
                    setIsOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(link);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Falha ao copiar o link: ', err);
            
        }
    };

    // Fallback para navegadores que não suportam navigator.clipboard
    const fallbackCopyTextToClipboard = (text: string) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
        } catch (err) {
            console.error('Fallback: Falha ao copiar', err);
        }
        document.body.removeChild(textArea);
    };

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div className="relative">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center p-2 border rounded hover:bg-[var(--color-header)] bg-[var(--card-color)]"
            >
                <MdShare className="mr-2" />
                Share
            </button>
            {isOpen && (
                <div
                    ref={wrapperRef}
                    className="absolute  mt-2  border rounded shadow-lg flex items-center flex-col p-1 bg-[var(--card-color)] z-10"
                >
                    <p className="mb-2 text-sm">Copy the link below:</p>
                    <div className="flex w-full gap-2 text-sm">
                        <input
                            type="text"
                            value={link}
                            readOnly
                            className="flex-1 p-2 border rounded focus:outline-none text-black bg-white"
                        />
                        <button
                            onClick={handleCopyLink}
                            className={`p-2 rounded transition-colors duration-100 ${
                                copied 
                                    ? 'bg-green-500 text-white border-green-500' 
                                    : 'bg-[var(--card-color)] hover:bg-[var(--color-header)]'
                            }`}
                            title={copied ? "Link copiado!" : "Copiar link"}
                        >
                            {copied ? <MdCheck size={20} /> : <MdContentCopy size={20} />}
                        </button>
                    </div>
                    {copied && (
                        <p className="mt-2 text-sm text-green-600">Link copiado com sucesso!</p>
                    )}
                </div>
            )}
        </div>
    );
}