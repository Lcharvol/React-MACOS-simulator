import { store } from '../index';

import { deleteTerm } from '../actions/terms';

const exit = termId => store.dispatch(deleteTerm(termId));

export default exit;