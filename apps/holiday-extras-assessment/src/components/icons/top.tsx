import IIconProps from './interfaces/IIconProps';
import Svg from './Svg';

function TopIcon(props: IIconProps) {
  return (
    <Svg {...props}>
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"/>
    </Svg>
  );
}

export default TopIcon;
