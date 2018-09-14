import {
    map,
    findIndex,
    propEq,
    drop,
    keys,
    isEmpty,
    length,
    takeLast,
    dropLast,
    contains
} from 'ramda';

import { store } from '../index';
import { changeLocation } from '../actions/terms';

const isDestAvailaible = (termId, dest, state) => {
    const { terms, fileSys } = state;
    const termIndex = findIndex(propEq('id', termId))(terms);
    const term = terms[termIndex];
    const { path } = term;
    let tmp = fileSys;
    
    map(loc => {
        tmp = tmp[loc];
    },drop(1,path));
    if(contains(dest, keys(tmp)))
        return true;
    return false;
};

const goBack = (dest, state, termId) => {
    const { terms } = state;
    const termIndex = findIndex(propEq('id', termId))(terms);
    const term = terms[termIndex];
    const { path } = term;

    if(length(path) <= 1)
        return '~';
    return takeLast(1, dropLast(1, path))[0];
};

const cd = (termId, dest) => {
    const state = store.getState();

    if(dest === '.')
        return;
    else if(dest === '..') {
        dest = goBack(dest, state, termId);
    } else if(dest === '~' || dest === '') {
        store.dispatch(changeLocation('~', termId));
        return;
    } else if(!isDestAvailaible(termId, dest, state)) {
        return [{
            value: "cd: no such file or directory: " + dest,
            color: 'white',
        }];
    }
    store.dispatch(changeLocation(dest, termId))
};

export default cd;