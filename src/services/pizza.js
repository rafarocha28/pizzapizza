import { v4 as uuidv4 } from 'uuid';

const getPizza = () => {
  return {
    crust: 'Tradicional',
    id: uuidv4(),
    name: 'Pizza de Calabresa',
    price: 29.9,
    size: 'Grande',
    topping: 'Muçarela e calabresa',
  };
};

const fazPedido = (pizza) => {
  return !!pizza;
};

const getStepsData = (currentStep) => {
  if (currentStep === 'crust') {
    return {
      currentStep,
      nextStep: '/pizza/size',
      previousStep: null,
      options: [
        {
          label: 'Tradicional',
          value: 'Tradicional',
        },
        {
          label: 'Integral',
          value: 'Integral',
        },
      ],
    };
  } else if (currentStep === 'size') {
    return {
      currentStep,
      nextStep: '/pizza/toppings',
      previousStep: '/pizza/crust',
      options: [
        {
          label: 'Média (6 pedaços)',
          value: 'Média',
        },
        {
          label: 'Grande (8 pedaços)',
          value: 'Grande',
        },
        {
          label: 'Gigante (12 pedaços)',
          value: 'Gigante',
        },
      ],
    };
  } else if (currentStep === 'toppings') {
    return {
      currentStep,
      nextStep: '/cart',
      previousStep: '/pizza/size',
      options: [
        {
          label: 'Pizza de Muçarela',
          value: 'muçarela',
        },
        {
          label: 'Pizza de Calabresa',
          value: 'calabresa',
        },
        {
          label: 'Pizza de Frango com catupiry',
          value: 'frango',
        },
      ],
    };
  }
};

export default { fazPedido, getPizza, getStepsData };
