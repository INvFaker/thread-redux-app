import React, { useEffect } from 'react';
import { MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PopularCategory from '../components/PopularCategory';
import ThreadItemList from '../components/ThreadItemList';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import { asyncToggleDownVoteThread, asyncToggleNeutralizeVoteThread, asyncToggleUpVoteThread } from '../states/threads/action';
import { clearCategoriesActionCreator, setCategoriesActionCreator } from '../states/categories/action';

function HomePage() {
  const {
    threads = [], users = [], authUser, categories = {},
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser,
  }));

  const filteredThreadList = categories.selectedCategory
    ? threadList.filter((thread) => thread.category === categories.selectedCategory)
    : threadList;

  const onUpVote = (threadId) => {
    dispatch(asyncToggleUpVoteThread(threadId));
  };

  const onDownVote = (threadId) => {
    dispatch(asyncToggleDownVoteThread(threadId));
  };

  const onNeutral = (threadId) => {
    dispatch(asyncToggleNeutralizeVoteThread(threadId));
  };

  const onChangeCategory = (category) => {
    if (categories.selectedCategory === category) {
      dispatch(clearCategoriesActionCreator());
    } else {
      dispatch(setCategoriesActionCreator(category));
    }
  };

  return (
    <section className="w-full h-screen flex flex-col py-16 relative">
      <PopularCategory categories={categories} changeCategory={onChangeCategory} />
      <div className="flex-1">
        <h1 className="text-2xl font-semibold text-white">Discussion available</h1>
        <ThreadItemList
          threads={filteredThreadList}
          like={onUpVote}
          dislike={onDownVote}
          neutral={onNeutral}
        />
      </div>
      <Link to="/input" className="absolute top-5 right-0 text-white"><MdAddCircle className="w-10 h-10" /></Link>
    </section>
  );
}

export default HomePage;
