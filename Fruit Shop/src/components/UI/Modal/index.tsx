import React, { useContext, useRef } from 'react';
import styles from './styles.module.css';

interface ModalProps {
    isOpen: boolean
    close: () => void
    children: React.ReactNode
}

import { CSSTransition } from 'react-transition-group';
import { modalContext } from '@/contexts/useModalContext';

function Modal({ isOpen, close, children }: ModalProps) {
    const { ref } = useContext(modalContext)
    const modal = useRef(null);

    return (
        <CSSTransition
                nodeRef={ref}
                timeout={300}
                in={ isOpen }
                classNames={{
                    enter: styles.enter,
                    enterActive: styles['enter-active'],
                    exit: styles.exit,
                    exitActive: styles['exit-active']
                }}
                unmountOnExit
            >
            <div ref={modal} className={styles.Modal}>
                <div onClick={close} className={ styles.overlay }>
                    <div onClick={(e) => e.stopPropagation()} className={ styles['modal-ctn'] }>
                        { children }
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
}


export default Modal;