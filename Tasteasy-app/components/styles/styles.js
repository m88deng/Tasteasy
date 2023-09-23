import styled from 'styled-components';
import {View} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

//color
export const Colors = {
  primary: '#F1F2EB',
  secondary: '#90BB27',
  tertiary: '#D98324',
  darkColor: '#472836',
  grey: '#92828D',
};

const {primary, secondary, tertiary, darkColor, grey} = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${statusBarHeight + 10}px;
  background-color: ${primary};
`;
export const InnerContainer = styled.View`
  flex:1;
  width:100%:
  align-items: center;
`;

export const PageLogo = styled.Image`

`