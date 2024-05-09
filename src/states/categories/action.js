const ActionType = {
  RECEIVE_CATEGORIES: 'RECEIVE_CATEGORIES',
  SET_CATEGORIES: 'SET_CATEGORIES',
  CLEAR_CATEGORIES: 'CLEAR_CATEGORIES',
};

function receiveCategoriesActionCreator(categories) {
  return {
    type: ActionType.RECEIVE_CATEGORIES,
    payload: {
      categories,
    },
  };
}

function setCategoriesActionCreator(selectedCategory) {
  return {
    type: ActionType.SET_CATEGORIES,
    payload: {
      selectedCategory,
    },
  };
}

function clearCategoriesActionCreator() {
  return {
    type: ActionType.CLEAR_CATEGORIES,
  };
}

export {
  ActionType,
  receiveCategoriesActionCreator,
  setCategoriesActionCreator,
  clearCategoriesActionCreator,
};
