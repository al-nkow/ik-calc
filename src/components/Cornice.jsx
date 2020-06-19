import React, { useState } from 'react';
import Input from './Input';
import Fabric from './Fabric';
import {
  Title,
  Step,
  StepTitle,
  FormGroup,
  Label,
  RadioLabel,
  Price,
  PriceLabel,
} from './Shared';

const Cornice = () => {
  const [values, setValues] = useState({
    base: null,
    width: null,
    height: null,
    cornice: false,
    corniceBase: 700,
  });

  const setWidth = (width) => {
    setValues({ ...values, width });
  };

  const setCorniceBase = (corniceBase) => {
    setValues({ ...values, corniceBase });
  };

  const { width, corniceBase } = values;
  const cornicePrice = +(width * corniceBase).toFixed(2)

  return (
    <div>
      <Title>Расчёт стоимости Корниза</Title>

      <Step>
        <StepTitle>1. Укажите размеры</StepTitle>
        <FormGroup>
          <Label>Длина карниза (ширина шторы)</Label>
          <Input changed={setWidth} />
        </FormGroup>
      </Step>

      <Step>
        <StepTitle>3. Выберите тип карниза</StepTitle>
        <Label>
          <input
            type="radio"
            value="option1"
            checked={corniceBase === 700}
            onChange={() => setCorniceBase(700)}
          />
          Профильный (700 руб/м)
        </Label>
        <Label>
          <input
            type="radio"
            value="option2"
            checked={corniceBase === 2000}
            onChange={() => setCorniceBase(2000)}
          />
          Декоративный (2000 руб/м)
        </Label>
      </Step>

      {width ? (
        <Step>
          <StepTitle>
            Итоговая стоимость: {width} x {corniceBase} =
            <b style={{ paddingLeft: '5px' }}>{cornicePrice}</b> руб.
          </StepTitle>
        </Step>
      ) : null}
    </div>
  );
};

export default Cornice;
