import { store } from '../index';
import {
    find,
    propEq,
    length,
    keys,
    map,
    without
} from 'ramda';

const getFolders = (location, tree) => {
    let folders = [];
    let files = [];
    let ret = [];
    if(location === '~')
    {
        folders =  without('files',keys(tree));
        files = tree.files
        ret = map(folder => ({
            value: folder,
            color: 'rgb(96,253,255)'
        }), folders);
        ret = [...ret, ...map(file => ({
            value: file,
            color: 'white'
        }),files)];
        return ret;
    } else {
    };
    return folders;
};

const ls = termId => {
    const { terms } = store.getState();
    const term = find(propEq('id', termId))(terms);
    const location = term.path[length(term.path) - 1];
    const folders = getFolders(location, term.tree);
    return folders;
};

export default ls;