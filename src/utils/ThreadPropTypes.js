import PropTypes from 'prop-types';

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

export {
  userPropTypes,
  threadPropTypes,
};
