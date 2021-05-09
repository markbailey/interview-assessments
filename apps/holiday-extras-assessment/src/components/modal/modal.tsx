import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { IconButton } from '../button';
import IModalProps from './interfaces/IModalProps';
import { Wrapper, ModalRoot, CloseButton } from './modal.styled';

function Modal({ children, open, color, onHide }: IModalProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      if (!mounted) setMounted(true);
      else if (!visible) setTimeout(() => setVisible(true), 300);
    } else {
      if (visible) setVisible(false);
      else if (mounted) setTimeout(() => setMounted(false), 300);
    }
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
