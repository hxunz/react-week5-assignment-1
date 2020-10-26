import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function selectedRegion(region) {
  return {
    type: 'selectedRegion',
    payload: {
      region,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}

export function selectedCategory(category) {
  return {
    type: 'selectedCategory',
    payload: {
      category,
    },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { selectedRegionName, selectedCategoryId } = getState();

    if (selectedRegionName.length === 0 || selectedCategoryId.length === 0) {
      return;
    }

    const restaurants = await fetchRestaurants({ selectedRegionName, selectedCategoryId });

    dispatch(setRestaurants(restaurants));
  };
}
