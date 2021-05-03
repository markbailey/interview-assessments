import React, { Suspense, lazy }  from 'react'
import ProptTypes from 'prop-types';

const propTypes = {
  name: ProptTypes.string,
  color: ProptTypes.string,
  size: ProptTypes.number
};

const defaultProps = {
  name: 'feed',
  color: '#000000',
  size: 24
};

const FeedIcon = lazy(() => import('./FeedIcon'));
const StoryIcon = lazy(() => import('./StoryIcon'));
const JobIcon = lazy(() => import('./JobIcon'));
const PollIcon = lazy(() => import('./PollIcon'));
const PollOptIcon = lazy(() => import('./PollOptIcon'));
const CommentIcon = lazy(() => import('./CommentIcon'));

function Icon({ name, size, color }) {
  const render = (itemType) => {
    const props = { size, color };
    switch (itemType) {
      case 'story': return <StoryIcon {...props} />;
      case 'job': return <JobIcon {...props} />;
      case 'poll': return <PollIcon {...props} />;
      case 'pollop': return <PollOptIcon {...props}/>;
      case 'comment': return <CommentIcon {...props} />;
      default: return <FeedIcon {...props} />;
    }
  }

  return (
    <Suspense fallback={null}>
      {render(name)}
    </Suspense>
  )
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
export default Icon
