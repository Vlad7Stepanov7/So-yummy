import React, { useEffect } from 'react';
import { AuthForm } from 'components/AuthForm/AuthForm';
import {
  AuthMain,
  AuthImage,
  AuthBackground,
} from 'pages/RegisterPage/RegisterPage.styled';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const SigninPage = () => {
  const params = useParams();

  useEffect(() => {
    const url =
      'https://team-project-so-yummy-backend.onrender.com/api/auth/verify/';

    if (params.verificationToken) {
      axios.get(url.concat(params.verificationToken));
    }
  }, [params]);

  return (
    <AuthMain>
      <AuthImage></AuthImage>
      <AuthForm login />
      <AuthBackground></AuthBackground>
    </AuthMain>
  );
};
