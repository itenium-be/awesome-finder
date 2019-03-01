export interface IAwesomeState {
  lists: any[];
}

export interface IAwesomeList {
  type: 'Awesome' | string;
  content: [];
}

export interface IAwesomeEntry {
  linkHref: string;
  linkText: string;
  desc: string;
  lists: IAwesomeEntry[];
}


export interface IAction {
  type: 'LOAD_AWESOME_AWESOME_LIST';
  payload: any;
}
