import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({
  name, avatar, score,
}) {
  return (
    <div className="flex justify-between text-lg">
      <div className="flex gap-2 items-center">
        <img src={avatar} alt={name} className="w-11 h-11 rounded-full inline-block" />
        {` ${name}`}
      </div>
      <p className="text-xl">{score}</p>
    </div>
  );
}

const leaderboardItemShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardItem.propTypes = {
  ...leaderboardItemShape,
};

export { leaderboardItemShape };
export default LeaderboardItem;
