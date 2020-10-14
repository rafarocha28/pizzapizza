import { v4 as uuidv4 } from 'uuid';

const key = '@pizzapizza/pizza';

const getCurrentPizza = () => {
  const pizza = JSON.parse(localStorage.getItem(key));
  return pizza ? pizza : { id: uuidv4(), price: 29.9, doDia: false };
};

const setCurrentPizza = (pizza) => {
  localStorage.setItem(key, JSON.stringify(pizza));
};

const clearCurrentPizza = () => {
  localStorage.removeItem(key);
};

export default { getCurrentPizza, setCurrentPizza, clearCurrentPizza };
