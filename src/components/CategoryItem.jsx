import React from 'react';
import PropTypes from 'prop-types';

function CategoryItem({ category, changeCategory, selectedCategory }) {
  return (
    <button
      type="button"
      onClick={() => { changeCategory(category); }}
      className={`py-1 px-2 rounded ${selectedCategory === category ? 'bg-gray-500' : 'bg-gray-100'}`}
    >
      {`#${category}`}
    </button>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  selectedCategory: PropTypes.string,
};

export default CategoryItem;
