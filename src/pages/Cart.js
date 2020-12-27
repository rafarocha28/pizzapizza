import React, { useEffect, useState } from "react";
import { Typography, Box, Paper, Button, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import PizzaService from "../services/pizza";
import PizzaActions from "../actions/pizza";

const useStyles = makeStyles(() => ({
  ul: {
    listStyleType: "none",
  },
}));

const Cart = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [pizza, setPizza] = useState({});

  useEffect(() => {
    let p = PizzaActions.getCurrentPizza();
    if (!p.name) {
      p = PizzaService.getPizza(); // pediram a pizza do dia
    }
    setPizza({ ...p });
  }, []);

  const handleConfirm = () => {
    try {
      const msg = PizzaService.fazPedido(pizza);
      alert(msg);
      PizzaActions.clearCurrentPizza();
      return history.push("/welcome");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <h1>Pizzaria PizzaPizza - Carrinho</h1>
      <Paper elevation={3}>
        <Box p={2}>
          <Typography variant="body1" paragraph>
            <ul className={classes.ul}>
              <li>{pizza.name ? pizza.name : pizza.toppings}</li>
              <li>{pizza.crust}</li>
              <li>{pizza.size}</li>
              <li>
                {pizza.price?.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
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
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default Cart;
