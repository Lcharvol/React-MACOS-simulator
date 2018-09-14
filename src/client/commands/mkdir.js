import {
    isNil,
    find,
    propEq
} from 'ramda';

import { store } from '../index';
import { getFolders } from './ls';
import { addRepository } from '../actions/fileSys';

const mkdir = (termId, name) => {
    const { terms, fileSys } = store.getState();
    const term = find(propEq('id', termId))(terms);
    const { path } = term;
    const folders = getFolders(path, fileSys);
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
    store.dispatch(addRepository(path, name));
    return;
};

export default mkdir;