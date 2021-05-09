import { Suspense, lazy } from 'react';

import IIconButtonProps from './interfaces/IIconButtonProps';
import { IconButtonRoot } from './button.styled';

const FlickrIcon = lazy(() => import('../icons/flickr'));
const TopIcon = lazy(() => import('../icons/top'));
const CloseIcon = lazy(() => import('../icons/close'));

function IconButton({ icon, ...otherProps }: IIconButtonProps) {
  const render = (icon: string) => {
    const props = { size: 32, color: '#f5f5f5' };
    switch (icon) {
      case 'top': return <TopIcon {...props} />;
      case 'close': return <CloseIcon {...props} />;
      default: return <FlickrIcon {...props} />;
    }
  }

  return (
    <IconButtonRoot {...otherProps}>
      <Suspense fallback={null}>
        {render(icon)}
      </Suspense>
    </IconButtonRoot>
  )
}

export default IconButton
