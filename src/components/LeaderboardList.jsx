import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem, { leaderboardItemShape } from './LeaderboardItem';

function LeaderboardList({ leaderboards }) {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <header className="flex justify-between">
          <h1 className="text-lg">User</h1>
          <p className="text-lg">Score</p>
        </header>
        {
            leaderboards.map((leaderboard) => (
              <LeaderboardItem key={leaderboard.id} {...leaderboard} />
            ))
        }

      </div>
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape)).isRequired,
};

export default LeaderboardList;
