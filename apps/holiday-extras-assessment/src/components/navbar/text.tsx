import ITextProps from './interfaces/ITextProps';
import { Span } from './navbar.styled';

function Text(props: ITextProps) {
  return (
    <Span>
      {props.children}
    </Span>
  );
}

export default Text;
