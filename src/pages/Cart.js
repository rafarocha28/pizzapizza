import React, { useEffect, useState } from 'react';
import { Typography, Box, Paper, Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import PizzaService from '../services/pizza';

const useStyles = makeStyles(() => ({
  ul: {
    listStyleType: 'none',
  },
}));

const Cart = ({ pizza }) => {
  const classes = useStyles();
  const history = useHistory();
  const [selectedPizza, setSelectedPizza] = useState({});

  useEffect(() => {
    if (!pizza) {
      history.push('/welcome');
    }
    setSelectedPizza({ ...pizza });
  }, [pizza, history]);

  const handleConfirm = () => {
    if (PizzaService.fazPedido()) {
      alert('Pedido confirmado');
      history.push('/welcome');
    }
  };

  return (
    <>
      <h1>Pizzaria PizzaPizza - Carrinho</h1>
      <Paper elevation={3}>
        <Box p={2}>
          <Typography variant="body1" paragraph>
            <ul className={classes.ul}>
              <li>{selectedPizza.name}</li>
              <li>{selectedPizza.crust}</li>
              <li>{selectedPizza.size}</li>
              <li>
                {selectedPizza.price?.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </li>
            </ul>
          </Typography>
          <Button
            onClick={handleConfirm}
            variant="contained"
            color="secondary"
            size="large"
          >
            Confirmar
          </Button>{' '}
        </Box>
      </Paper>
    </>
  );
};

export default Cart;
