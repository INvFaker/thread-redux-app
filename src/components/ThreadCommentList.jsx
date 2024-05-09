import React from 'react';
import PropTypes from 'prop-types';
import ThreadCommentItem, { threadCommentShape } from './ThreadCommentItem';

function ThreadCommentList({
  comments, authUser, like, dislike, neutral,
}) {
  return (
    <div className="mt-4">
      <h3 className="font-bold text-base">{`Komentar (${comments.length})`}</h3>
      <div className="flex flex-col gap-2">
        {
          comments?.map((comment) => (
            <ThreadCommentItem
              key={comment.id}
              {...comment}
              authUser={authUser}
              like={like}
              dislike={dislike}
              neutral={neutral}
            />
          ))
        }
      </div>
    </div>

  );
}

ThreadCommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(threadCommentShape)).isRequired,
  like: PropTypes.func.isRequired,
  dislike: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  authUser: PropTypes.object.isRequired,
};

export default ThreadCommentList;
