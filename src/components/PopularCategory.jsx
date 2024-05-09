// import React from 'react';
// import PropTypes from 'prop-types';
// import CategoryItem from './CategoryItem';

// function PopularCategory({ categories, changeCategory }) {
//   return (
//     <header className="pb-4">
//       <p className="text-white text-xl font-bold">Kategori popular</p>
//       <div className="flex gap-3 mt-4">
//         {/* {
//           categories.values.map((category) => (
//             <CategoryItem key={category} changeCategory={changeCategory} category={category} />))
//         } */}
//         {console.log(categories)}
//       </div>
//     </header>
//   );
// }

// PopularCategory.propTypes = {
//   categories: PropTypes.array.isRequired,
//   changeCategory: PropTypes.func.isRequired,
// };

// export default PopularCategory;

import React from 'react';
import PropTypes, { string } from 'prop-types';
import CategoryItem from './CategoryItem';

function PopularCategory({ categories, changeCategory }) {
  return (
    <header className="pb-4">
      <p className="text-white text-xl font-bold">Popular categories</p>
      <div className="flex gap-3 mt-4">
        {
          categories?.values?.map((category) => (
            <CategoryItem
              key={category}
              changeCategory={changeCategory}
              category={category}
              selectedCategory={categories.selectedCategory}
            />
          ))
        }
      </div>
    </header>
  );
}

PopularCategory.propTypes = {
  categories: PropTypes.shape({
    values: PropTypes.arrayOf(string),
    selectedCategory: PropTypes.string,
  }).isRequired,
  changeCategory: PropTypes.func.isRequired,
};

export default PopularCategory;
