import { store } from '../index';
import { changeLocation } from '../actions/terms';

const cd = (termId, dest) => store.dispatch(changeLocation(dest, termId))

export default cd;