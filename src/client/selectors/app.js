import {
    find,
    propEq
} from 'ramda';

export const getTopTermPosition = state => state.app.topTermPosition;

export const getShortcuts = state => state.app.menu.shortcuts;

export const getDesktops = state => state.app.desktops;

export const getActiveDesktop = state => {
    const desktops = getDesktops(state);

    return find(propEq('active', true))(desktop);
}