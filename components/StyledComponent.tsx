import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
//1 ставим yarn add styled-components и таипсыyarn add @types/styled-components-react-native -D
// прописываем в tsconfig.json
// compilerOptions": {
//     // ...
//     "types": [
//       "@types/styled-components-react-native"
//     ]
//   },

export const StyledComponent = () => {
  const H1 = styled.Text`
    font-size: 22px;
    font-weight: bold;
    margin: 0 0 30px 0;
  `;
  const H2 = styled.Text`
    font-size: 18px;
  `;

  return (
    <View>
      <H1>123</H1>
      <H2>321</H2>
    </View>
  );
};
