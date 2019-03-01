import { IAwesomeState, IAction } from '../typings';

export default (state: IAwesomeState = {lists: []}, action: IAction) => {
  switch (action.type) {
  case 'LOAD_AWESOME_AWESOME_LIST':
    return {
      lists: [{type: 'Awesome', content: action.payload}]
    };

  default:
    return state;
  }
}
