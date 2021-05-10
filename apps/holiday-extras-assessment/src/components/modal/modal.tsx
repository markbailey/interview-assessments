import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { IconButton } from '../button';
import IModalProps from './interfaces/IModalProps';
import { Wrapper, ModalRoot, CloseButton } from './modal.styled';

function Modal({ children, open, color, onHide }: IModalProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let unmounted = false;
    if (open) {
      if (!mounted && !unmounted) setMounted(true);
      else if (!visible) setTimeout(() => !unmounted ? setVisible(true) : false, 300);
    } else {
      if (visible && !unmounted) setVisible(false);
      else if (mounted) setTimeout(() => !unmounted ? setMounted(false) : false, 300);
    }

    return () => {
      unmounted = true;
    };
  }, [open, visible, mounted]);

  return mounted
    ? createPortal(
        <Wrapper show={visible} onClick={onHide}>
          <ModalRoot show={visible} color={color} onClick={(e) => e.stopPropagation()}>
            <CloseButton as={IconButton} icon="close" onClick={onHide} />
            {children}
          </ModalRoot>
        </Wrapper>,
        document.getElementById('portals') as Element
      )
    : null;
}

export default Modal
