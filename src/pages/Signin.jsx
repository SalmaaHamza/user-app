import React, { Component,useState } from 'react';
import { GlobalStyles } from '../styles/global-styles';
import { FooterContainer } from '../components/Welcome/Container/Footer';
import HeaderContainer from '../components/Welcome/Container/Header';
import Form from '../components/Welcome/Form';


export default function SignIn() {
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
    return (
        <React.Fragment>
            <GlobalStyles/>
            <HeaderContainer>
            <Form>
          <Form.Title>Sign In</Form.Title>
         {/*  <Form.Error ></Form.Error>
 */}
          <Form.Base >
            <Form.Input
              placeholder="Email address"
            />
            <Form.Input
              type="password"
             
              autoComplete="off"
              placeholder="Password"
              
            />
            <Form.Submit  type="submit" data-testid="sign-in">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
            </HeaderContainer>
            <FooterContainer />
        </React.Fragment>

    );
};