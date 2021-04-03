import {createHashHistory} from 'history';

const HISTORY = createHashHistory();

export const navigate = url => {
    HISTORY.push(url);
};

export const navigateReplace = url => {
    HISTORY.replace(url);
};

export default HISTORY;