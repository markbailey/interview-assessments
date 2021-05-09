import { forwardRef } from 'react';

import loadingImage from '../../assets/image-loading.gif';

import { Image } from './photo.styled';
import IPhotoProps from './interfaces/IPhotoProps';


function Photo(props: IPhotoProps, ref: any) {
  return (
    <Image
      ref={ref}
      src={loadingImage}
      {...props}
      className="lazy"
    />
  );
}

export default forwardRef(Photo);
