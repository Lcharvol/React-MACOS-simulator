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
    if(location === '~')
    {
        folders =  without('files',keys(tree));
        return map(folder => ({ value: folder, color: 'rgb(96,253,255)'}), folders);
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