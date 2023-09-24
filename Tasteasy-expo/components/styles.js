import styled from "styled-components";
import {
  StatusBar,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

const statusBarHeight = StatusBar.currentHeight;

//color
export const Colors = {
  primary: "#F1F2EB",
  secondary: "#90BB27",
  tertiary: "#D98324",
  darkColor: "#472836",
  grey: "#92828D",
  black: "#1C1C1C",
  platinum: "#E1DFDB",
};

const { primary, secondary, tertiary, darkColor, grey, black, platinum } =
  Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${statusBarHeight + 10}px;
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled.Image`
  width: 120px;
  height: 120px;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${tertiary};
  padding: 10px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${darkColor};
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${platinum};
  padding: 12px;
  padding-left: 48px;
  padding-right: 45px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${black};
`;

export const StyledInputLabel = styled.Text`
  color: ${black};
  font-size: 13px;
  text-align: left;
  left: 5px;
`;

export const LeftIcon = styled.View`
  left: 9px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${secondary};
  justify-content: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
`;
