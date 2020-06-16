import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 22px;
`;

const Step = styled.div`
  border: 1px solid #dedede;
  padding: 10px;
  margin-bottom: 20px;
`;

const StepTitle = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Fabric = styled.div`
  border-radius: 2px;
  display: inline-block;
  border: 1px solid #333333;
  width: 200px;
  margin-right: 10px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    border-color: red;
  }
  &.active {
    border-color: red;
    color: red;
  }
`;

const Example = styled.div`
  height: 100px;
  margin-bottom: 10px;
  background: #dedede;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 4px;
`;

const TextField = styled.input`
  border: 2px solid #333333;
  padding: 5px;
  border-radius: 2px;
  text-shadow: none;
  box-shadow: none;
`;

const Price = styled.span`
  color: #25289a;
`;

const Rome = () => {
  const [values, setValues] = useState({
    base: null,
    width: null,
    height: null,
    cornice: false,
  });

  const setBase = price => {
    setValues({ ...values, base: price })
  }

  const setWidth = width => {
    setValues({ ...values, width })
  }

  const setHeight = height => {
    setValues({ ...values, height })
  }

  const setCornice = event => {
    setValues({ ...values, cornice: +event.target.checked })
  }




  const { base, width, height, cornice } = values;
  const sewingPrice = +(base * width * height).toFixed(2);
  const tapePrice = +(width * (values.height / 0.3) * 150).toFixed(2);
  const cornicePrice = cornice ? +(width * 2200).toFixed(2) : 0;

  const totalPrice = +(sewingPrice + tapePrice + cornicePrice).toFixed(2);


  return (
    <div>
      <Title>Расчёт стоимости римской шторы</Title>

      <Step>
        <StepTitle>1. Выберите материал</StepTitle>
        <Fabric onClick={() => setBase(1300)} className={values.base === 1300 ? 'active' : ''}>
          <Example />
          <div>Тюль</div>
          <small>стоимость 1300 р/м.кв</small>
        </Fabric>
        <Fabric onClick={() => setBase(1900)} className={values.base === 1900 ? 'active' : ''}>
          <Example />
          <div>Блэкаут</div>
          <small>стоимость 1900 р/м.кв</small>
        </Fabric>
        <Fabric onClick={() => setBase(1700)} className={values.base === 1700 ? 'active' : ''}>
          <Example />
          <div>Ткань</div>
          <small>стоимость 1700 р/м.кв</small>
        </Fabric>
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
            <small>Итоговая стоимость складывается из следующих составляющих</small>
            <div>
              Цена пошива: <Price>{base} x {width} x {height} = {sewingPrice} рублей</Price>
            </div>
            <div>
              Цена шторной ленты: <Price>{width} x ({height}/0.3) x 150 = {tapePrice} рублей</Price>
            </div>
            {cornice ? (<div>Цена карниза: <Price>{width} x 2200 = {cornicePrice} рублей</Price></div>) : null}
          </Step>
        ) : null}
    </div>
  )
}

export default Rome;