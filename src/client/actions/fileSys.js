export const ADD_REPOSITORY = "file_sys:mkdir";

export const ADD_FILE = "file_sys:touch";

export const REMOVE_FILE = "file_sys:rm";

export const addRepository = (path, name) => ({ type: ADD_REPOSITORY, path, name });

export const addFile = (path, name) => ({ type: ADD_FILE, path, name });

export const removeFile = (path, name) => ({ type: REMOVE_FILE, path, name });