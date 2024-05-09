import React from 'react';
import {
  AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike,
} from 'react-icons/ai';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import postedAt from '../utils';

function ThreadCommentItem({
  owner, createdAt, content, upVotesBy, downVotesBy,
  id, authUser, like, dislike, neutral,
}) {
  const isCommentUpVote = upVotesBy.includes(authUser.id);
  const isCommentDownVote = downVotesBy.includes(authUser.id);
  return (
    <div className="flex flex-col gap-3 p-2 border border-gray-300 bg-gray-100 rounded-lg">
      <header className="flex justify-between">
        <div className="flex gap-2">
          <img src={owner.avatar} alt={owner.name} className="w-6 h-6 rounded-full" />
          <p>{owner.name}</p>
        </div>
        <p>{postedAt(createdAt)}</p>
      </header>
      <div>{parse(content)}</div>
      <footer className="flex gap-2">
        {like && (
        // eslint-disable-next-line no-unused-expressions
        <button type="button" onClick={(e) => { e.stopPropagation(); isCommentUpVote ? neutral(id) : like(id); }} className="flex items-center">
          {isCommentUpVote ? (<AiFillLike className="text-lg" />) : (<AiOutlineLike className="text-lg" />)}
          {upVotesBy.length}
        </button>
        )}
        {dislike && (
          // eslint-disable-next-line no-unused-expressions
          <button type="button" onClick={(e) => { e.stopPropagation(); isCommentDownVote ? neutral(id) : dislike(id); }} className="flex items-center">
            {isCommentDownVote ? (<AiFillDislike className="text-lg" />) : (<AiOutlineDislike className="text-lg" />)}
            {downVotesBy.length}
          </button>
        )}
      </footer>
    </div>
  );
}

const threadCommentShape = {
  owner: PropTypes.object.isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
};

ThreadCommentItem.propTypes = {
  ...threadCommentShape,
  // eslint-disable-next-line react/require-default-props
  like: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  dislike: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  neutral: PropTypes.func,
};

export { threadCommentShape };
export default ThreadCommentItem;
