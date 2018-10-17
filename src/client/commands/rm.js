import {
    isNil,
    find,
    propEq,
    isEmpty,
    contains,
    length,
    map
} from 'ramda';

import { store } from '../index';
import { getFiles } from './ls';
import { removeFile, removeFolder } from '../actions/fileSys';

const checkFlags = (flags, supportedFlags) => {
    let isFlagsSupported = true;

    map(flag => {
        if(!contains(flag, supportedFlags))
            isFlagsSupported = false
    },flags);
    console.log('isFlagsSupported: ', isFlagsSupported)
    return isFlagsSupported ? 0 : -1;
}

const rm = (termId, name, flags, supportedFlags) => {
    const state = store.getState();
    const { terms, fileSys } = store.getState();
    const term = find(propEq('id', termId))(terms);
    const { path } = term;
    const files = getFiles(path, fileSys);
    const isFileExisting = !isNil(find(propEq('value', name))(files));
    
    if(checkFlags(flags, supportedFlags) === -1)
        return [{
            value: `rm: unknow flag`,
            color: 'white',
        }];
    if(isNil(name))
        return [{
            value: 'usage: rm [-rf] file ...',
            color: 'white',
        }];
    if(isEmpty(flags)) {
        if(!isFileExisting)
            return [{
                value: `rm: ${name}: File doesn't exists`,
                color: 'white',
            }];
        store.dispatch(removeFile(path, name));
    }
    else if (contains("-rf", flags)) {
        store.dispatch(removeFolder(path, name));
    }
    return;
};

export default rm;