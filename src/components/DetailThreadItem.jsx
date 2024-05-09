import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import {
  AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike,
} from 'react-icons/ai';
import postedAt from '../utils';

function DetailThreadItem({
  owner, id, category, title, body, upVotesBy, downVotesBy,
  createdAt, like, dislike, neutral, authUser,

}) {
  const isThreadUpVote = upVotesBy.includes(authUser.id);
  const isThreadDownVote = downVotesBy.includes(authUser.id);
  return (
    <div className="flex flex-col gap-3 rounded-lg">
      <header>
        <span className="px-1 p-0.5 border border-black rounded">
          {`#${category}`}
        </span>
        <h4 className="block font-bold text-md text-blue-600 mt-3">{title}</h4>
      </header>
      <div>{parse(body)}</div>
      <footer className="flex justify-between">
        <div className="flex gap-3">
          {like && (
          // eslint-disable-next-line no-unused-expressions
          <button type="button" onClick={(e) => { e.stopPropagation(); isThreadUpVote ? neutral(id) : like(id); }} className="flex items-center">
            {isThreadUpVote ? (<AiFillLike className="text-lg" />) : (<AiOutlineLike className="text-lg" />)}
            {upVotesBy.length}
          </button>
          )}
          {dislike && (
          // eslint-disable-next-line no-unused-expressions
          <button type="button" onClick={(e) => { e.stopPropagation(); isThreadDownVote ? neutral(id) : dislike(id); }} className="flex items-center">
            {isThreadDownVote ? (<AiFillDislike className="text-lg" />) : (<AiOutlineDislike className="text-lg" />)}
            {downVotesBy.length}
          </button>
          )}
          <div className="flex gap-2">
            <p>Dibuat oleh</p>
            <img src={owner.avatar} alt={owner.name} className="w-6 h-6 rounded-full" />
            <strong>{` ${owner.name}`}</strong>
          </div>
        </div>
        <p>{postedAt(createdAt)}</p>
      </footer>
    </div>
  );
}

const detaiThreadShape = {
  owner: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
};

DetailThreadItem.propTypes = {
  ...detaiThreadShape,
  // eslint-disable-next-line react/require-default-props
  like: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  dislike: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  neutral: PropTypes.func,
};

export default DetailThreadItem;
