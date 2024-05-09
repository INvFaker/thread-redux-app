import React from 'react';
import PropTypes from 'prop-types';
import UserInput from '../hooks/UserInput';

function ThreadCommentInput({ AddComment }) {
  const [content, onContentChange] = UserInput('');
  return (
    <div>
      <h1 className="font-bold font-base mt-3">Beri Komentar</h1>
      <form
        className="flex flex-col gap-1"
      >
        <textarea
          className="min-h-[100px] p-1 border border-black rounded"
          placeholder="Deskripsi catatan"
          value={content}
          onChange={onContentChange}
        />
        <button type="button" onClick={() => { AddComment(content); }} className="p-2 bg-blue-500 rounded text-white font-medium">Kirim</button>
      </form>
    </div>
  );
}

ThreadCommentInput.propTypes = {
  AddComment: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
