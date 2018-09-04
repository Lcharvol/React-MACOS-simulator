import {
    isNil,
    find,
    propEq
} from 'ramda';

import { store } from '../index';
import { getFiles } from './ls';
import { removeFile } from '../actions/terms';

const rm = (termId, name) => {
    const state = store.getState();
    const { terms } = store.getState();
    const term = find(propEq('id', termId))(terms);
    const { path, tree } = term;
    const files = getFiles(path, tree);
    const isFileExisting = !isNil(find(propEq('value', name))(files));
    
    if(isNil(name))
        return [{
            value: 'usage: rm [-f] [-R] file ...',
            color: 'white',
        }];
    if(!isFileExisting)
        return [{
            value: `rm: ${name}: File doesn't exists`,
            color: 'white',
        }];
    store.dispatch(removeFile(termId, name));
    return;
};

export default rm;