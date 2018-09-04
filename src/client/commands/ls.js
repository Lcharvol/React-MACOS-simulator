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

export const getFolders = (path, tree) => {
    let folders = [];
    let ret = [];
    let tmp = tree;

    map(loc => {
        tmp = tmp[loc];
    },drop(1, path));
    folders =  without('files',keys(tmp));
    ret = map(folder => ({
        value: folder,
        color: 'rgb(96,253,255)'
    }), folders);
    return ret;
};

export const getFiles = (path, tree) => {
    let files = [];
    let ret = [];
    let tmp = tree;

    map(loc => {
        tmp = tmp[loc];
    },drop(1, path));
    files = tmp.files;
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
    const files = getFiles(path, tree);
    return [...folders, ...files];
};

export default ls;