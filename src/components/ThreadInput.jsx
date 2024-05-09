import React from 'react';
import PropTypes from 'prop-types';
import UserInput from '../hooks/UserInput';

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = UserInput('');
  const [category, onCategoryChange] = UserInput('');
  const [body, onBodyChange] = UserInput('');

  return (
    <form
      className="flex flex-col gap-1"
    >
      <input
        className="p-1 border border-black rounded"
        type="text"
        placeholder="Judul"
        value={title}
        onChange={onTitleChange}
      />
      <input
        className="p-1 border border-black rounded"
        type="text"
        placeholder="Kategori"
        value={category}
        onChange={onCategoryChange}
      />
      <textarea
        className="min-h-[100px] p-1 border border-black rounded"
        placeholder="Deskripsi catatan"
        value={body}
        onChange={onBodyChange}
      />
      <button type="button" onClick={() => addThread({ title, category, body })} className="p-2 bg-blue-500 rounded text-white font-medium">Buat</button>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
