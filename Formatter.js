import React from 'react';
import NumberFormat from 'react-number-format';
import { Text } from 'react-native';

const Formatter = ({ value }) => {
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      fixedDecimalScale={true}
      decimalScale={2}
      prefix={'€'}
      renderText={(formattedValue) => <Text>{formattedValue}</Text>}
    />
  );
};

export default Formatter;
