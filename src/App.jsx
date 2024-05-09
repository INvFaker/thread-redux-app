import React, { useEffect } from 'react';
import {
  Routes, Route,
  useNavigate,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import InputPage from './pages/InputPage';
import DetailThreadPage from './pages/DetailThreadPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { asyncPreloadProcess } from './states/isPreload/action.js';
import { asyncUnsetAuthUser } from './states/authUser/action.js';
import Loading from './components/Loading.jsx';

function App() {
  // const authUser = useSelector((states) => states.authUser);
  // const isPreload = useSelector((states) => states.isPreload);
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
    navigate('/');
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>

    );
  }

  return (
    <>
      <Loading />
      <div className="lg:max-w-[1480px] mx-auto flex justify-center relative overflow-y-auto">
        <aside className="w-[448px] h-screen p-16 border-x border-white flex flex-col gap-6 sticky top-0">
          <Logo className="w-full" />
          <Navbar authUser={authUser} logout={onLogout} />
        </aside>
        <main className="flex-1 px-16 border-r border-white">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leaderboards" element={<LeaderboardPage />} />
            <Route path="/input" element={<InputPage />} />
            <Route path="/threads/:id" element={<DetailThreadPage />} />
          </Routes>
        </main>
      </div>
    </>

  );
}

export default App;
