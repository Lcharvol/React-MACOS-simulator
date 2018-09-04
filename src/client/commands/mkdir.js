import {
    isNil,
    find,
    propEq
} from 'ramda';

import { store } from '../index';
import { getFolders } from './ls';
import { addRepository } from '../actions/terms';

const mkdir = (termId, name) => {
    const state = store.getState();
    const { terms } = store.getState();
    const term = find(propEq('id', termId))(terms);
    const { path, tree } = term;
    const folders = getFolders(path, tree);
    const isFolderExisting = !isNil(find(propEq('value', name))(folders));
    if(isNil(name))
        return [{
            value: 'usage: mkdir directory ...',
            color: 'white',
        }];
    if(isFolderExisting)
        return [{
            value: `mkdir: ${name}: File exists`,
            color: 'white',
        }];
    store.dispatch(addRepository(termId, name));
    return;
};

export default mkdir;