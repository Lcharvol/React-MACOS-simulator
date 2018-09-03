import { store } from '../index';
import {
    find,
    propEq,
    length,
    keys,
    without
} from 'ramda';

const getFolders = (location, tree) => {
    const folders = [];
    if(location === '~')
    {
        return without('files',keys(tree));
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