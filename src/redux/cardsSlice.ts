import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ICard } from '../components/Card/Card';

export type TAPIData = {
  searchValue: string;
  currentPage?: number;
};

export const fetchData = createAsyncThunk(
  'cards/fetchData',
  async function ({ searchValue, currentPage }: TAPIData, { rejectWithValue }) {
    try {
      const url = `https://rickandmortyapi.com/api/character/?name=${searchValue}&page=${
        currentPage ?? ''
      }`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Sorry, nothing found');
      }
      const data = await response.json();
      return {
        info: data.results,
        totalCards: data.info.count,
        totalPages: data.info.pages,
        searchValue: searchValue,
      };
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
    }
  }
);

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    info: [] as ICard[],
    searchValue: '',
    loading: false,
    error: '',
    modal: false,
    item: {
      id: 0,
      name: '',
      gender: '',
      image: '',
      status: '',
      species: '',
    },
    selectValue: '',
    currentPage: 1,
    cardsPerPage: 20,
    totalCards: 0,
    totalPages: 0,
  },
  reducers: {
    paginate(state, action) {
      state.currentPage = action.payload;
    },
    sortCards(state, action) {
      if (action.payload === 'name') {
        state.info = state.info.sort((a, b) => a.name.localeCompare(b.name));
        state.selectValue = action.payload.sort;
      }
      if (action.payload === 'created') {
        state.info = state.info.sort((a, b) =>
          new Date(b.created).toString().localeCompare(new Date(a.created).toString())
        );
        state.selectValue = action.payload.sort;
      }
      if (action.payload === 'origin') {
        state.info = state.info.sort((a, b) => a.origin.name.localeCompare(b.origin.name));
        state.selectValue = action.payload.sort;
      }
    },
  },
  extraReducers: {
    [fetchData.pending.toString()]: (state) => {
      state.loading = true;
    },
    [fetchData.fulfilled.toString()]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.info = action.payload.info;
      state.totalCards = action.payload.totalCards;
      state.totalPages = action.payload.totalPages;
      state.searchValue = action.payload.searchValue;
    },
    [fetchData.rejected.toString()]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { paginate, sortCards } = cardsSlice.actions;
export default cardsSlice.reducer;
