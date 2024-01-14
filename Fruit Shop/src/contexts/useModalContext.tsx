import { ReactNode, createContext, useRef, useState } from "react";

interface ModalContext {
    isOpen: boolean
    content: ReactNode
    ref: React.RefObject<HTMLDivElement> | null
    toggle: () => void
    setContent: (content: ReactNode) => void
}


export const modalContext = createContext<ModalContext>({
    isOpen: false,
    content: null,
    ref: null,
    toggle: () => {},
    setContent: () => {}
});


export default function ModalContextProvider({ children }: {children: ReactNode}) {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<ReactNode>(null);

    const ref = useRef(null);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <modalContext.Provider value={{ref, isOpen, content, toggle, setContent}}>
            { children }
        </modalContext.Provider>
    )
}