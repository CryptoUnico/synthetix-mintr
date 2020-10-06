import keyBy from 'lodash/keyBy';

const PAGES = ['LANDING', 'WALLET_SELECTION', 'MAIN'];
export const PAGES_BY_KEY = keyBy(PAGES);

export const INTERVAL_TIMER = 5 * 60 * 1000;
