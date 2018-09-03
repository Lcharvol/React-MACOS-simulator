import {
    map,
    findIndex,
    propEq,
    drop,
    keys,
    contains
} from 'ramda';

import { store } from '../index';
import { changeLocation } from '../actions/terms';

const isDestAvailaible = (termId, dest, state) => {
    const { terms } = state;
    const termIndex = findIndex(propEq('id', termId))(terms);
    const term = terms[termIndex];
    const { tree, path } = term;
    let tmp = tree;
    map(loc => {
        tmp = tmp[loc];
    },drop(1,path));
    if(contains(dest, keys(tmp)))
        return true;
    return false;
};

const cd = (termId, dest) => {
    const state = store.getState();
    if(dest === '~') {
        store.dispatch(changeLocation(dest, termId));
        return;
    };
    if(!isDestAvailaible(termId, dest, state)) {
        return [{
            value: "cd: no such file or directory: " + dest,
            color: 'white',
        }];
    }
    store.dispatch(changeLocation(dest, termId))
};

export default cd;