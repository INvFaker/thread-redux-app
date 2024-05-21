import React from 'react';
import PropTypes from 'prop-types';
import {
  AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike,
} from 'react-icons/ai';
import { BsReply } from 'react-icons/bs';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import postedAt from '../utils';
import CategoryItem from './CategoryItem';

function ThreadItem({
  id, user, category, title, body, upVotesBy, downVotesBy,
  totalComments, createdAt, like, dislike, neutral, authUser,
}) {
  const isThreadUpVote = upVotesBy.includes(authUser.id);
  const isThreadDownVote = downVotesBy.includes(authUser.id);

  return (
    <div className="flex flex-col gap-3 p-2 border border-gray-300 bg-gray-100 rounded-lg">
      <header>
        <CategoryItem variant="outline">{category}</CategoryItem>
        <Link to={`threads/${id}`} className="block font-bold text-md  mt-3">{title}</Link>
      </header>
      <div className="line-clamp-6">{parse(body)}</div>
      <footer className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          {like && (
          // eslint-disable-next-line no-unused-expressions
          <button type="button" onClick={(e) => { e.stopPropagation(); isThreadUpVote ? neutral(id) : like(id); }} className="flex items-center">
            {isThreadUpVote ? (<AiFillLike className="text-lg" />) : (<AiOutlineLike className="text-lg" />)}
            {upVotesBy.length}
          </button>
          )}
          {dislike && (// eslint-disable-next-line no-unused-expressions
          <button type="button" onClick={(e) => { e.stopPropagation(); isThreadDownVote ? neutral(id) : dislike(id); }} className="flex items-center">
            {isThreadDownVote ? (<AiFillDislike className="text-lg" />) : (<AiOutlineDislike className="text-lg" />)}
            {downVotesBy.length}
          </button>
          )}
          <p className="flex items-center">
            <BsReply className="text-lg" />
            {totalComments}
          </p>
          <p className="text-sm">
            Dibuat oleh
            <strong className="text-blue-600">{` ${user.name}`}</strong>
          </p>
        </div>
        <p className="text-sm">{postedAt(createdAt)}</p>
      </footer>
    </div>
  );
}

const userPropTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadPropTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape(userPropTypes).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  totalComments: PropTypes.number.isRequired,
};

ThreadItem.propTypes = {
  ...threadPropTypes,
  // eslint-disable-next-line react/require-default-props
  like: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  dislike: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  neutral: PropTypes.func,
};

export { threadPropTypes };
export default ThreadItem;
