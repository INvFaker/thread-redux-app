import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeaderboardList from '../components/LeaderboardList';
import { asyncreceiveLeaderboards } from '../states/leaderboards/action';

function LeaderboardPage() {
  const leaderboards = useSelector((state) => state.leaderboards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncreceiveLeaderboards());
  }, [dispatch]);

  const leaderboardsList = leaderboards.map((leaderboard) => ({
    ...leaderboard.user,
    score: leaderboard.score,
  }));

  return (
    <section className="w-full h-screen flex flex-col text-white pt-16">
      <h1 className="text-2xl font-bold mb-4">Active User Rankings</h1>
      <LeaderboardList leaderboards={leaderboardsList} />
    </section>
  );
}

export default LeaderboardPage;
