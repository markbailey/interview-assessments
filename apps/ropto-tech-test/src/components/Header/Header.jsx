import React from 'react';
import PropTypes from 'prop-types';

import { HeaderRoot, Heading, SubHeading, Blurb } from './Header.styled';

const propTypes = { storiesCount: PropTypes.number };
const defaultProps = { storiesCount: 0 };

function Header({ storiesCount }) {
  return (
    <HeaderRoot>
      <Heading>Hacker News</Heading>
      <Blurb>Hacker News is a social news website focusing on computer science and entrepreneurship. 
        It is run by Paul Graham's investment fund and startup incubator, Y Combinator.</Blurb>

      <SubHeading>Top {storiesCount} Stories</SubHeading>
    </HeaderRoot>
  )
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
