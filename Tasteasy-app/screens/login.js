import React from 'react';

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
} from './../components/styles';

const Login = () => {
  return (
    <StyledContainer>
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('./../components/images/tasteasy-logo.png')}/>
        <PageTitle>Tasteasy</PageTitle>
      </InnerContainer>
    </StyledContainer>
  );
};
