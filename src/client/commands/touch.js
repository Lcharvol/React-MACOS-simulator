import {
    isNil,
    find,
    propEq
} from 'ramda';

import { store } from '../index';
import { getFiles } from './ls';
import { addFile } from '../actions/terms';

const touch = (termId, name) => {
    const state = store.getState();
    const { terms } = store.getState();
    const term = find(propEq('id', termId))(terms);
    const { path, tree } = term;
    const files = getFiles(path, tree);
    console.log('files: ', files);
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
    store.dispatch(addFile(termId, name));
    return;
};

export default touch;