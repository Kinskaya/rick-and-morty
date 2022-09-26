import { IAction, IState } from './components/App/App';
import { ICard } from './components/Card/Card';
import { TOrderForm } from './pages/OrderForm/OrderForm';

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        loading: true,
      };
    case 'loaded':
      return {
        ...state,
        loading: false,
        error: '',
        info: action.payload as ICard[],
      };
    case 'getError':
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      };
    case 'selectBy':
      return {
        ...state,
        info: action.payload as ICard[],
      };
    case 'submitOrder':
      return {
        ...state,
        order: action.payload as TOrderForm,
      };
    case 'getTotalCards':
      return {
        ...state,
        totalCards: action.payload as number,
      };
    case 'getTotalPages':
      return {
        ...state,
        totalPages: action.payload as number,
      };
    case 'getPageNumber':
      return {
        ...state,
        currentPage: action.payload as number,
      };
    case 'getSearchValue':
      return {
        ...state,
        searchValue: action.payload as string,
      };
    default:
      return state;
  }
};
