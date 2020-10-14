import { v4 as uuidv4 } from 'uuid';

const getPizza = () => {
  return {
    crust: 'Tradicional',
    id: uuidv4(),
    name: 'Pizza de Calabresa',
    price: 29.9,
    size: 'Grande',
    toppings: 'Muçarela e calabresa',
    doDia: true,
  };
};

const fazPedido = (pizza) => {
  if (!pizza) {
    throw new Error('Erro ao processar pedido.');
  }

  return `Pedido realizado!${
    pizza.doDia ? 'Você recebeu pontos de benefício!' : ''
  }`;
};

const getStepsData = (currentStep) => {
  if (currentStep === 'crust') {
    return {
      caption: 'Escolha a massa',
      currentStep,
      nextStep: 'size',
      nextStepPath: '/pizza/size',
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
      caption: 'Escolha o tamanho',
      currentStep,
      nextStep: 'toppings',
      nextStepPath: '/pizza/toppings',
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
      caption: 'Escolha o sabor',
      currentStep,
      nextStep: 'cart',
      nextStepPath: '/cart',
      previousStep: '/pizza/size',
      options: [
        {
          label: 'Pizza de Muçarela',
          value: 'Pizza de Muçarela',
        },
        {
          label: 'Pizza de Calabresa',
          value: 'Pizza de Calabresa',
        },
        {
          label: 'Pizza de Frango com catupiry',
          value: 'Pizza de Frango com catupiry',
        },
      ],
    };
  }
};

export default { fazPedido, getPizza, getStepsData };
