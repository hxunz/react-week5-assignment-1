import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Buttons from '../presentational-component/Buttons';

import {
  selectOption,
} from '../actions';

export default function CategoryContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategoryId } = useSelector((state) => ({
    selectedCategoryId: state.selectedOption.category,
    categories: state.option.categories,
  }));

  function handleClickCategory(id) {
    dispatch(selectOption('category', id));
  }

  return (
    <Buttons
      labels={categories}
      onClick={handleClickCategory}
      selectedId={selectedCategoryId}
    />
  );
}