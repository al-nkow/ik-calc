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

const Tulle = () => {
  const [values, setValues] = useState({
    base: null,
    width: null,
    height: null,
    cornice: false,
    corniceBase: 700,
  });

  const setBase = (price) => {
    setValues({ ...values, base: price });
  };

  const setWidth = (width) => {
    setValues({ ...values, width });
  };

  const setWaves = (waves) => {
    setValues({ ...values, waves });
  };

  const setCornice = (event) => {
    setValues({ ...values, cornice: +event.target.checked });
  };

  const setCorniceBase = (corniceBase) => {
    setValues({ ...values, corniceBase });
  };

  const { base, width, waves, cornice, corniceBase } = values;
  const materialPrice = +(base * width * waves).toFixed(2);
  const sewingPrice = +(720 * width * waves).toFixed(2);
  const tapePrice = +(width * (waves / 0.3) * 100).toFixed(2);
  const cornicePrice = cornice
    ? +(width * corniceBase).toFixed(2)
    : 0;

  const totalPrice = +(
    materialPrice +
    sewingPrice +
    tapePrice +
    cornicePrice
  ).toFixed(2);

  return (
    <div>
      <Title>Расчёт стоимости Тюли</Title>

      <Step>
        <StepTitle>1. Выберите материал</StepTitle>
        <Fabric
          onClick={() => setBase(600)}
          active={values.base === 600}
          title="Вуаль"
          subtitle="стоимость 600 руб/погонный метр"
        />
        <Fabric
          onClick={() => setBase(1900)}
          active={values.base === 1900}
          title="Креп"
          subtitle="стоимость 1900 руб/погонный метр"
        />
        <Fabric
          onClick={() => setBase(1300)}
          active={values.base === 1300}
          title="Лён"
          subtitle="стоимость 1300 руб/погонный метр"
        />
      </Step>

      <Step>
        <StepTitle>2. Укажите размеры</StepTitle>
        <FormGroup>
          <Label>Длина карниза (ширина шторы)</Label>
          <Input changed={setWidth} />
        </FormGroup>
        <FormGroup>
          <Label>Желаемая складка (коэффициент сборки)</Label>
          <Input changed={setWaves} />
        </FormGroup>
      </Step>

      <Step>
        <StepTitle>3. Дополнительные услуги</StepTitle>
        <Label>
          <input type="checkbox" onChange={setCornice} />
          Добавить карниз
        </Label>
        {cornice ? (
          <>
            <div>
              <small>Выберите тип карниза</small>
            </div>
            <RadioLabel>
              <input
                type="radio"
                value="option1"
                checked={corniceBase === 700}
                onChange={() => setCorniceBase(700)}
              />
              Профильный (700 руб/м)
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                value="option2"
                checked={corniceBase === 2000}
                onChange={() => setCorniceBase(2000)}
              />
              Декоративный (2000 руб/м)
            </RadioLabel>
          </>
        ) : null}
      </Step>

      {base && width && waves ? (
        <Step>
          <StepTitle>Итоговая стоимость: {totalPrice} руб.</StepTitle>
          <small>
            Итоговая стоимость складывается из следующих составляющих
          </small>
          <div>
            <PriceLabel>Стоимость ткани:</PriceLabel>
            <Price>
              {base} x {width} x {waves} = {materialPrice} рублей
            </Price>
          </div>
          <div>
            <PriceLabel>Цена пошива:</PriceLabel>
            <Price>
              720 x {width} x {waves} = {sewingPrice} рублей
            </Price>
          </div>
          <div>
            <PriceLabel>Цена шторной ленты:</PriceLabel>
            <Price>
              {width} x ({waves}/0.3) x 100 = {tapePrice} рублей
            </Price>
          </div>
          {cornice ? (
            <div>
              <PriceLabel>Цена карниза:</PriceLabel>
              <Price>
                {width} x {corniceBase} = {cornicePrice} рублей
              </Price>
            </div>
          ) : null}
        </Step>
      ) : null}
    </div>
  );
};

export default Tulle;
