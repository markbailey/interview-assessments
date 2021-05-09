import IIconProps from './interfaces/IIconProps';

function Svg(props: IIconProps) {
  const {
    children,
    size,
    color,
    enableBackground,
    ...otherProps
  } = props;
  
  const width = size ? `${size}px` : '';
  const height = size ? `${size}px` : '';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"

      enableBackground={enableBackground ? 'new 0 0 24 24' : ''}
      viewBox="0 0 24 24"

      {...otherProps}

      width={width}
      height={height}
      fill={color}
    >
      {children}
    </svg>
  );
}

export default Svg;
