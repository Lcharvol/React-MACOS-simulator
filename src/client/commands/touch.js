import {
    isNil,
    find,
    propEq
} from 'ramda';

import { store } from '../index';
import { getFiles } from './ls';
import { addFile } from '../actions/fileSys';

const touch = (termId, name) => {
    const state = store.getState();
    const { terms, fileSys } = store.getState();
    const term = find(propEq('id', termId))(terms);
    const { path } = term;
    const files = getFiles(path, fileSys);
    const isFileExisting = !isNil(find(propEq('value', name))(files));
    
    if(isNil(name))
        return [{
            value: 'usage: touch file ...',
            color: 'white',
        }];
    if(isFileExisting)
        return [{
            value: `touch: ${name}: File exists`,
            color: 'white',
        }];
    store.dispatch(addFile(path, name));
    return;
};

export default touch;