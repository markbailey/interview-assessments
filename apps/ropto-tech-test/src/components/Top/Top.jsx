import React from 'react';
import PropTypes from 'prop-types';

import Content from '../Content';
import Grid from '../Grid';
import { Wrapper, Heading, Blurb, SubHeading, GridWrapper } from './Top.styled';

const propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.object)
  ]),
  open: PropTypes.bool,
};

const defaultProps = {
  items: [],
  open: false,
};

function Top({ open, items, ...otherProps }) {
  return (
    <Wrapper {...otherProps} open={open}>
      <Content show={open} top>
        <Heading>Hacker News</Heading>
        <Blurb>Hacker News is a social news website focusing on computer science and entrepreneurship. 
      It is run by Paul Graham's investment fund and startup incubator, Y Combinator.</Blurb>

        <SubHeading>{`Top ${items.length} Stories`}</SubHeading>
        <GridWrapper>
          <Grid items={items} />
        </GridWrapper>
      </Content>
    </Wrapper>
  )
}

Top.propTypes = propTypes;
Top.defaultProps = defaultProps;
export default Top;
