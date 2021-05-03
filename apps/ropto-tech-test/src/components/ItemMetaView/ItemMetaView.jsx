import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import { HackerNewsContext } from '../../context/HackerNews';
import CloseIcon from '../Icons/CloseIcon';
import BackIcon from '../Icons/BackIcon';
import Grid from '../Grid';
import Container from '../Container';
import Icon from '../Icons/Icon';

import {
  Wrapper,
  ActionButton,
  ActionsBar,
  IconWrapper,
  TextWrapper,
  CommentsWrapper,
} from './ItemMetaView.styled';

const propTypes = {
  id: PropTypes.number,
  parent: PropTypes.number,
  type: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  score: PropTypes.number,
  by: PropTypes.string,
  time: PropTypes.number,
  url: PropTypes.string,
  kids: PropTypes.arrayOf(PropTypes.number),
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

const defaultProps = {
  id: undefined,
  parent: undefined,
  type: undefined,
  title: undefined,
  score: undefined,
  text: undefined,
  by: undefined,
  time: undefined,
  url: undefined,
  kids: [],
  show: false,
  onClose: undefined,
};

function ItemMetaView({
  id,
  parent,
  type,
  title,
  text,
  score,
  by,
  time,
  url,
  kids,
  show,
  onClose,
  ...otherProps
}) {
  const { setSelectedItemId, kidCount } = useContext(HackerNewsContext);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const filteredKids = kids ? kids.filter((_, i) => i < kidCount) : [];
  const maxColumns = filteredKids.length > kidCount
    ? kidCount
    : filteredKids.length;

  const dateOptions = { 
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };

  useEffect(() => {
    if (show) {
      if (!mounted) setTimeout(() => setMounted(true), 150);
      else if (!visible) setTimeout(() => setVisible(true), 150);
    } else {
      if (visible) setTimeout(() => setVisible(false), 150);
      else if (mounted) setTimeout(() => setMounted(false), 150);
    }
  }, [show, mounted, visible])

  return mounted 
    ? (
        <Wrapper {...otherProps} visible={visible}>
          {id ? (
            <>
              <ActionsBar split={Boolean(parent)}>
                {parent ? (
                  <ActionButton left onClick={() => setSelectedItemId(parent)}>
                    <BackIcon size={32} color="#ffffff"/>
                  </ActionButton>
                ) : null}

                <ActionButton onClick={onClose}>
                  <CloseIcon size={32} color="#ffffff"/>
                </ActionButton>
              </ActionsBar>
              
              <Container>
                <IconWrapper>
                  <Icon name={type} size={80} color="#ffffff"/>
                </IconWrapper>

                <TextWrapper>
                  <span>{new Date(time * 1000).toLocaleString('en-GB', dateOptions)}</span><br />
                  {title ? <h2>{title}</h2> : null}
                  <span>Author: {by}</span>

                  {url ? (
                    <>
                      <br /><br />
                      <span>URL: &nbsp;</span>
                      <a href={url} rel="noreferrer" target="_blank" style={{ color: '#ffffff' }}>{url}</a>
                    </>
                  ) : null}
                  
                  {text ? (
                    <>
                      <h3>Text</h3>
                      <div dangerouslySetInnerHTML={{ __html: text }}></div>
                    </>
                  ) : null}
                </TextWrapper>

                {filteredKids.length > 0 ? (
                  <CommentsWrapper>
                    <h3 style={{ marginTop: 0 }}>Top 3 Comments</h3>
                    <Grid
                      items={filteredKids}
                      maxColumns={maxColumns}
                      iconSize={32}
                    />
                  </CommentsWrapper>
                ) : null}
              </Container>
            </>
          ) : null}
        </Wrapper>
      ) 
    : null;
}

ItemMetaView.propTypes = propTypes;
ItemMetaView.defaultProps = defaultProps;
export default ItemMetaView;