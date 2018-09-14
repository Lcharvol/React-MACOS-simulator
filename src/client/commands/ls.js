import { drop } from 'ramda';

import { store } from '../index';
import {
    find,
    propEq,
    length,
    keys,
    map,
    path as ramdaPath,
    without,
    omit
} from 'ramda';

export const getFolders = (path, tree) => map(key => ({
        value: key,
        color: 'rgb(96,253,255)'
    }),without('files', keys(ramdaPath(drop(1, path), tree)))
);

export const getFiles = (path, tree) => map(file => ({
        value: file,
        color: 'white'
    }),ramdaPath([...drop(1, path), 'files'], tree));

const ls = termId => {
    const { terms, fileSys } = store.getState();
    const term = find(propEq('id', termId))(terms);
    const { path } = term;
    const folders = getFolders(path, fileSys);
    const files = getFiles(path, fileSys);
    
    return [...folders, ...files];
};

export default ls;