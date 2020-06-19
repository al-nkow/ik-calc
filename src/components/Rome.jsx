import React, { useState } from 'react';
import Input from './Input';
import Fabric from './Fabric';
import {
  Title,
  Step,
  StepTitle,
  FormGroup,
  Label,
  Price,
  PriceLabel,
} from './Shared';

const Rome = () => {
  const [values, setValues] = useState({
    base: null,
    width: null,
    height: null,
    cornice: false,
  });

  const setBase = (price) => {
    setValues({ ...values, base: price });
  };

  const setWidth = (width) => {
    setValues({ ...values, width });
  };

  const setHeight = (height) => {
    setValues({ ...values, height });
  };

  const setCornice = (event) => {
    setValues({ ...values, cornice: +event.target.checked });
  };

  const { base, width, height, cornice } = values;
  const materialPrice = +(base * width).toFixed(2);
  const sewingPrice = +(base * width * height).toFixed(2);
  const tapePrice = +(width * (height / 0.3) * 150).toFixed(2);
  const cornicePrice = cornice ? +(width * 2200).toFixed(2) : 0;

  const totalPrice = +(
    materialPrice +
    sewingPrice +
    tapePrice +
    cornicePrice
  ).toFixed(2);

  return (
    <div>
      <Title>Расчёт стоимости римской шторы</Title>

      <Step>
        <StepTitle>1. Выберите материал</StepTitle>
        <Fabric
          onClick={() => setBase(1300)}
          active={values.base === 1300}
          title="Тюль"
          subtitle="стоимость 1300 р/погонный метр"
        />
        <Fabric
          onClick={() => setBase(1900)}
          active={values.base === 1900}
          title="Блэкаут"
          subtitle="стоимость 1900 р/погонный метр"
        />
        <Fabric
          onClick={() => setBase(1700)}
          active={values.base === 1700}
          title="Ткань"
          subtitle="стоимость 1700 р/погонный метр"
        />
      </Step>

      <Step>
        <StepTitle>2. Укажите размеры</StepTitle>
        <FormGroup>
          <Label>Длина карниза (ширина шторы)</Label>
          <Input changed={setWidth} />
        </FormGroup>
        <FormGroup>
          <Label>Высота шторы</Label>
          <Input changed={setHeight} />
        </FormGroup>
      </Step>

      <Step>
        <StepTitle>3. Дополнительные услуги</StepTitle>
        <Label>
          <input type="checkbox" onChange={setCornice} />
          Добавить карниз
        </Label>
      </Step>

      {base && width && height ? (
        <Step>
          <StepTitle>Итоговая стоимость: {totalPrice} руб.</StepTitle>
          <small>
            Итоговая стоимость складывается из следующих составляющих
          </small>
          <div>
            <PriceLabel>Стоимость ткани:</PriceLabel>
            <Price>
              {base} x {width} = {materialPrice} рублей
            </Price>
          </div>
          <div>
            <PriceLabel>Цена пошива:</PriceLabel>
            <Price>
              {base} x {width} x {height} = {sewingPrice} рублей
            </Price>
          </div>
          <div>
            <PriceLabel>Цена шторной ленты:</PriceLabel>
            <Price>
              {width} x ({height}/0.3) x 150 = {tapePrice} рублей
            </Price>
          </div>
          {cornice ? (
            <div>
              <PriceLabel>Цена карниза:</PriceLabel>
              <Price>
                {width} x 2200 = {cornicePrice} рублей
              </Price>
            </div>
          ) : null}
        </Step>
      ) : null}
    </div>
  );
};

export default Rome;
