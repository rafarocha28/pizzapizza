import React, { useEffect, useState } from 'react';
import { Typography, Box, Paper, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import PizzaService from '../services/pizza';

const Welcome = () => {
  const history = useHistory();
  const [pizza, setPizza] = useState({});
  useEffect(() => {
    setPizza(PizzaService.getPizza());
  }, [pizza]);

  return (
    <>
      <h1>Pizzaria PizzaPizza</h1>
      <Paper elevation={3}>
        <Box p={2}>
          <Typography variant="body1" paragraph>
            Em nossa deliciosa pizzaria você poderá montar a sua própria pizza
            ou escolher pela recomendação do dia! Você receberá pontos de
            benefícios caso opte pela recomendação.
          </Typography>
          <Typography variant="body1" mt={2} paragraph>
            A recomendação de hoje é a <b>{pizza.name}</b>.
          </Typography>
          <Button
            onClick={() => history.push('/pizza/crust')}
            variant="contained"
            color="secondary"
            size="large"
          >
            Montar
          </Button>{' '}
          <Button
            onClick={() => history.push('/cart')}
            variant="contained"
            color="primary"
            size="large"
          >
            Do dia
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default Welcome;
