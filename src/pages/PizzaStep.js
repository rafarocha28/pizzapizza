import React, { useEffect, useState } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormHelperText,
  FormLabel,
  Button,
  Paper,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useHistory } from 'react-router-dom';

import PizzaService from '../services/pizza';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

const PizzaStep = ({ step = 'crust' }) => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [stepData, setStepData] = useState({
    options: [],
    currentStep: step,
    nextStep: '',
    previousStep: '',
  });
  const [helperText, setHelperText] = useState(
    'Selecione pelo menos uma opção'
  );

  useEffect(() => {
    setStepData(PizzaService.getStepsData(step));
  }, [step]);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleConfirm = (event) => {
    debugger;
    event.preventDefault();

    if (!value) {
      setHelperText('Por favor, selecione uma opção.');
      setError(true);
    }
  };

  return (
    <>
      <h1>Pizzaria PizzaPizza</h1>
      <Paper elevation={3}>
        <Box p={2}>
          <FormControl
            component="fieldset"
            error={error}
            className={classes.formControl}
          >
            <FormLabel component="legend">Escolha:</FormLabel>
            <RadioGroup
              aria-label="op"
              name="op"
              value={value}
              onChange={handleRadioChange}
            >
              {stepData.options.map((item) => (
                <FormControlLabel
                  value={item.value}
                  control={<Radio />}
                  label={item.label}
                />
              ))}
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            <Button
              onClick={handleConfirm}
              variant="contained"
              color="secondary"
              size="large"
            >
              Confirmar
            </Button>
          </FormControl>
        </Box>
      </Paper>
    </>
  );
};

export default PizzaStep;
