import { drop } from 'ramda';

import { store } from '../index';
import {
    find,
    propEq,
    length,
    keys,
    map,
    without
} from 'ramda';

const getFolders = (path, tree) => {
    let folders = [];
    let files = [];
    let ret = [];
    let tmp = tree;

    map(loc => {
        tmp = tmp[loc];
    },drop(1, path));
    folders =  without('files',keys(tmp));
    files = tmp.files
    ret = map(folder => ({
        value: folder,
        color: 'rgb(96,253,255)'
    }), folders);
    ret = [...ret, ...map(file => ({
        value: file,
        color: 'white'
    }),files)];
    return ret;
};

const ls = termId => {
    const { terms } = store.getState();
    const term = find(propEq('id', termId))(terms);
    const { path, tree } = term;
    const folders = getFolders(path, tree);
    return folders;
};

export default ls;