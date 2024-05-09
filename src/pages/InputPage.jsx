import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadInput from '../components/ThreadInput';
import { asyncAddThread } from '../states/threads/action';

function InputPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, category, body }) => {
    dispatch(asyncAddThread({ title, category, body }));
    navigate('/');
  };

  return (
    <section className="w-full h-screen flex flex-col py-16">
      <h1 className="text-2xl font-bold mb-4 text-white">
        Make New Thread
      </h1>
      <ThreadInput addThread={onAddThread} />
    </section>
  );
}

export default InputPage;
