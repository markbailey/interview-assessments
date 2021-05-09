
import { FlickrIcon } from '../icons';
import INavbarProps from './interfaces/INavbarProps';
import { NavbarRoot } from './navbar.styled';

function Navbar(props: INavbarProps) {
  return (
    <NavbarRoot>
      <FlickrIcon size={48} />
      {props.children}
    </NavbarRoot>
  )
}

export default Navbar;
