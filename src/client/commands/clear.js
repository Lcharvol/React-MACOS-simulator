import { store } from '../index';
import { clearTerm } from '../actions/terms';

const clear = termId => {store.dispatch(clearTerm(termId))};

export default clear;