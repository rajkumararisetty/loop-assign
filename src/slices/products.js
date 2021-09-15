import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  data: [],
  filters: {
    gender: null,
    categories: [],
    brand: [],
    searchText: '',
  }
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: state => {
      state.loading = true;
    },
    getProductsSuccess: (state, { payload }) => {
      state.data = payload.products;
      state.loading = false;
      state.hasErrors = false;
    },
    getProductsFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    },
    updateFilters: (state, { payload }) => {
      state.filters = { ...state.filters, [payload.type]: payload.filters };
    }
  },
});

export const { getProducts, getProductsSuccess, getProductsFailure, updateFilters } = productsSlice.actions;

export const productsSelector = state => {
  const filters = state.products.filters;
  const genderFilteredData = state.products.data.filter((product) => {
    if (filters.gender) {
      return filters.gender === product.gender;
    }
    return true;
  });

  const categoriesFilteredData = genderFilteredData.filter((product) => {
    if (filters.categories.length) {
      return filters.categories.includes(product.category);
    }
    return true;
  });

  const brandFilteredData = categoriesFilteredData.filter((product) => {
    if (filters.brand.length) {
      return filters.brand.includes(product.brand);
    }
    return true;
  });

  return brandFilteredData.filter((product) => {
    if (filters.searchText.length) {
      return product.productName.toLocaleLowerCase().includes(filters.searchText.toLocaleLowerCase());
    }
    return true;
  });
};

export const genderSelector = state => {
  const gender = []
  state.products.data.forEach((product) => {
    if (!gender.includes(product.gender)) {
      gender.push(product.gender);
    }
  });
  return gender;
}

export const categoriesSelector = state => {
  const categories = []
  state.products.data.forEach((product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });
  return categories;
}

export const brandSelector = state => {
  const brands = []
  state.products.data.forEach((product) => {
    if (!brands.includes(product.brand)) {
      brands.push(product.brand);
    }
  });
  return brands;
}

export default productsSlice.reducer;

export function fetchProducts() {
  return async dispatch => {
    dispatch(getProducts());

    try {
      const response = await fetch('https://demo7242716.mockable.io/products');
      const data = await response.json();

      dispatch(getProductsSuccess(data));
    } catch (error) {
      dispatch(getProductsFailure());
    }
  }
}
