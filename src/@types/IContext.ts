import {IProduct} from './IProduct';

export interface IContext {
  itemsCheckout: IProduct[];
  addItem: (payload: IProduct) => void;
}
