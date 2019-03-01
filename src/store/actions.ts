import awesomeParser from 'awesome-parser';

const sindresorhusAwesomeRaw = 'https://raw.githubusercontent.com/sindresorhus/awesome/master/readme.md';

export const loadAwesomeList = () => (dispatch: Function) => {
  return fetch(sindresorhusAwesomeRaw)
    .then(awesome => awesome.text())
    .then(awesome => awesomeParser(awesome))
    .then(awesome => {
      console.log('LOAD_AWESOME_AWESOME_LIST', awesome);
      dispatch({type: 'LOAD_AWESOME_AWESOME_LIST', payload: awesome});
    });
}
