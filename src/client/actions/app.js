

export const CHANGE_TOP_TERM = "app:positon:change";

export const DESKTOP_GO_RIGHT = 'app:desktops:goright';

export const DESKTOP_GO_LEFT = 'app:desltops:goleft';

export const changeTopTermPosition = position => ({ type: CHANGE_TOP_TERM, position });

export const desktopGoRight = () => ({ type: DESKTOP_GO_RIGHT });

export const desktopGoLeft = () => ({ type: DESKTOP_GO_LEFT });