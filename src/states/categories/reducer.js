import { ActionType } from './action';

function CategoriesReducer(categories = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_CATEGORIES:
      return {
        values: action.payload.categories,
        selectedCategory: null,
      };
    case ActionType.SET_CATEGORIES:
      return {
        ...categories,
        selectedCategory: action.payload.selectedCategory,
      };
    case ActionType.CLEAR_CATEGORIES:
      return {
        ...categories,
        selectedCategory: null,
      };
    default:
      return categories;
  }
}

export default CategoriesReducer;
