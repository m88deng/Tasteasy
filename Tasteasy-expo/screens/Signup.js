import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

//formik
import { Formik } from "formik";

//icons
import { Fontisto, Ionicons } from "@expo/vector-icons";

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledButton,
  StyledInputLabel,
  StyledTextInput,
  ButtonText,
  Colors,
  MessageBox,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
} from "../components/styles";

import { View } from "react-native";

const { secondary, darkColor, primary } = Colors;

const Signup = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const MyTextInput = ({
    label,
    isPassword,
    hidePassword,
    setHidePassword,
    ...props
  }) => {
    return (
      <View>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props} />
        {isPassword && (
          <RightIcon onPress={() => setHidePassword(!hidePassword)}>
            <Ionicons
              name={hidePassword ? "md-eye-off" : "md-eye"}
              size={30}
              color={darkColor}
            />
          </RightIcon>
        )}
      </View>
    );
  };

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>Tasteasy</PageTitle>
        <SubTitle>Account Signup</SubTitle>

        <Formik
          initialValues={{ email: "", username: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Email Address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                label="Username"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.email}
              />
              <MyTextInput
                label="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MessageBox>...</MessageBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Login</ButtonText>
              </StyledButton>
              <Line />
              <ExtraView>
                <ExtraText>Have an account? </ExtraText>
                <TextLink>
                  <TextLinkContent>Login</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Signup;
