import React, { useState } from "react";
import { StatusBar } from "react-native";

//formik
import { Formik } from "formik";

//icons
import { Octicons, Iconicons } from "@expo/vector-icons";

//colors
import { Colors } from "../components/styles";

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
} from "./../components/styles";

import { View } from "react-native";

const { secondary, darkColor } = Colors;

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo
          resizeMode="cover"
          source={require("../img/tasteasy-logo.png")}
        />
        <PageTitle>Tasteasy</PageTitle>
        <SubTitle>Account Login</SubTitle>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="your-email@example.com"
                placeholderTextColor="#472836"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                values={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="* * * * * * * * * *"
                placeholderTextColor="#472836"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                values={values.password}
                isPassword={true}
                secureTextEntry={hidePassword}
              />
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({ label, icon, isPassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={secondary} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon>
          <Iconicons size={30} color={darkColor} />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
