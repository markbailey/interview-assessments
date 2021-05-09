import IButtonProps from './interfaces/IButtonProps';
import { ButtonRoot } from './button.styled';

function Button(props: IButtonProps) {
  return (
    <ButtonRoot {...props}>
      {props.children}
    </ButtonRoot>
  );
}

export default Button
