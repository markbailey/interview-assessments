import IAlertProps from './interfaces/IAlertProps';

import { Div } from './alert.styled';

function Alert(props: IAlertProps) {
  return (
    <Div {...props}>
      {props.children}
    </Div>
  );
}

export default Alert;