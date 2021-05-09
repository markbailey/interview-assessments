import IIconProps from './interfaces/IIconProps';
import Svg from './Svg';

function FlickrIcon(props: IIconProps) {
  return (
    <Svg {...props} viewBox="0 0 40 40">
      <g id="Flickr">
        <ellipse cx="26" cy="20" fill="#3498D8" rx="5" ry="5"/>
        <ellipse cx="14" cy="20" fill="#E651A8" rx="5" ry="5"/>
      </g>
    </Svg>
  );
}

export default FlickrIcon;
