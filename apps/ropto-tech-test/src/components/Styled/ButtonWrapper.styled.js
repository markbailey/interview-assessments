import styled from 'styled-components';

const ButtonWrapper = styled.div`
  position: relative;
  flex: 0;

  ::before, ::after {
    z-index: 90;
    content: "";
    position: absolute;
    width: 58px;
    height: 58px;
    border-radius: 50%;
  }

  ::before {
    top: -29px;
    right: 58px;
    background-color: #ffffff;
  }

  ::after {
    bottom: -29px;
    right: 0;
    background-color: #212121;
  }
`;

export default ButtonWrapper;