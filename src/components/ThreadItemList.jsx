import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadPropTypes } from './ThreadItem';

function ThreadItemList({
  threads, like, dislike, neutral,
}) {
  return (
    <div className="flex flex-col gap-4 mt-2">
      {
        threads.map((thread) => (
          <ThreadItem key={thread.id} {...thread} like={like} dislike={dislike} neutral={neutral} />
        ))
      }
    </div>
  );
}

ThreadItemList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadPropTypes)).isRequired,
  like: PropTypes.func.isRequired,
  dislike: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
};

export default ThreadItemList;
