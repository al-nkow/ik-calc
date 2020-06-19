import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = styled.div`
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

const Fabric = ({ onClick, title, subtitle, active }) => {
  return (
    <Wrap onClick={onClick} className={active ? 'active' : ''}>
      <Example />
      <div>{title}</div>
      <small>{subtitle}</small>
    </Wrap>
  );
};

Fabric.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Fabric;
