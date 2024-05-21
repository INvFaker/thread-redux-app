import React from 'react';
import PropTypes, { string } from 'prop-types';
// import CategoryItem from './CategoryItem';
import CategoryItem from './CategoryItem';

function PopularCategory({ categories, changeCategory }) {
  return (
    <header className="pb-4">
      <p className="text-white text-xl font-bold">Popular categories</p>
      <div className="flex gap-3 mt-4">
        {categories?.values?.map((category) => (
          <CategoryItem
            key={category}
            onClick={() => { changeCategory(category); }}
            isActive={categories.selectedCategory === category}
          >
            {category}
          </CategoryItem>
        ))}
      </div>
    </header>
  );
}

PopularCategory.propTypes = {
  // eslint-disable-next-line react/require-default-props
  changeCategory: PropTypes.func,
  categories: PropTypes.shape({
    values: PropTypes.arrayOf(string),
    selectedCategory: PropTypes.string,
  }).isRequired,
};

export default PopularCategory;
