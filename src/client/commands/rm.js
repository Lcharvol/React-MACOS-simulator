import {
    isNil,
    find,
    propEq
} from 'ramda';

import { store } from '../index';
import { getFiles } from './ls';
import { removeFile } from '../actions/fileSys';

const rm = (termId, name) => {
    const state = store.getState();
    const { terms, fileSys } = store.getState();
    const term = find(propEq('id', termId))(terms);
    const { path } = term;
    const files = getFiles(path, fileSys);
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
    store.dispatch(removeFile(path, name));
    return;
};

export default rm;