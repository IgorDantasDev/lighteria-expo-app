import React, {useState, createContext} from 'react';
import {IContext} from '~/@types/IContext';

export const DataContext = createContext<IContext>({} as IContext);

export const Provider = ({children}) => {
  const [itemsCheckout, setItemsCheckout] = useState([]);

  const addItem = newItem => {
    let oldItems = [...itemsCheckout];
    let FilteredItem = oldItems.find(
      itemsCheckout => itemsCheckout.id === newItem.id,
    );
    if (FilteredItem) {
      FilteredItem.quantity = FilteredItem.quantity + 1;
    } else {
      newItem.quantity = 1;
      oldItems = [...oldItems, newItem];
    }
    setItemsCheckout(oldItems);
  };

  return (
    <DataContext.Provider
      value={{
        itemsCheckout,
        addItem,
      }}>
      {children}
    </DataContext.Provider>
  );
};
