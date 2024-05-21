import React from 'react';
import PropTypes from 'prop-types';

function CategoryItem({
  variant = 'filled',
  children,
  isActive = false,
  ...props
}) {
  const baseStyles = 'py-1 px-2 rounded';
  const activeStyles = isActive ? 'bg-blue-500 text-white' : 'bg-gray-100';
  const variantStyles = {
    filled: activeStyles,
    outline: 'border border-black',
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]}`;

  return (
    <button
      type="button"
      className={buttonStyles}
      {...props}
    >
      {`#${children}`}
    </button>
  );
}

CategoryItem.propTypes = {
  children: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  variant: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  category: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  isActive: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  changeCategory: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  selectedCategory: PropTypes.string,
};

export default CategoryItem;
