import React from 'react';
import PropTypes from 'prop-types';

import Content from '../Content';
import Grid from '../Grid';
import { Wrapper, TextWrapper, Type, Title, SubHeading } from './Bottom.styled';

const propTypes = {
  meta: PropTypes.object,
  open: PropTypes.bool,
  maxItems: PropTypes.number
};

const defaultProps = {
  meta: {},
  open: false,
  maxItems: 0,
};

function Bottom({ open, meta, maxItems, ...otherProps }) {
  const dateOptions = { 
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };

  const items = meta 
    ? meta.kids || []
    : [];

  return (
    <Wrapper {...otherProps} open={open}>
      <Content show={open}>
        <TextWrapper>
          <Type>{meta.type}</Type><br />
          {meta.title ? (<Title>{meta.title}</Title>) : null}
          <small>By {meta.by} &nbsp;|&nbsp; {new Date(meta.time * 1000).toLocaleString('en-GB', dateOptions)}</small>
          {meta.score ? (<><br /><Type>Score: {meta.score}</Type></>) : null}
          {meta.url ? (<><br /><br /><span>URL: <a href={meta.url} rel="noreferrer" target="_blank">{meta.url}</a></span></>) : null}
          <br /><br />

          {meta.text ? (<div dangerouslySetInnerHTML={{ __html: meta.text }} />) : null}
        </TextWrapper>
          
        {(items.length > 0) ? (
          <div>
            <SubHeading>
              {`Top ${(maxItems > items.length) ? items.length : maxItems}/${items.length} Comments`}
            </SubHeading>
            <Grid items={items.slice(0, maxItems)} invert />
          </div>
        ): null}
      </Content>
    </Wrapper>
  )
}

Bottom.propTypes = propTypes;
Bottom.defaultProps = defaultProps;
export default Bottom;
