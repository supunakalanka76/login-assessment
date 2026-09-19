import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  CircularProgress,
  Container,
} from '@mui/material';

import { onAuthStateChanged } from 'firebase/auth';

import LoginForm from '../components/auth/LoginForm';
import IllustrationPanel from '../components/layout/IllustrationPanel';
import { auth } from '../config/firebase';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          navigate('/token', {
            replace: true,
          });

          return;
        }

        setIsCheckingAuth(false);
      },
    );

    return unsubscribe;
  }, [navigate]);

  if (isCheckingAuth) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress
          size={32}
          sx={{
            color: '#111111',
          }}
        />
      </Box>
    );
  }

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        bgcolor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        py: {
          xs: 4,
          md: 5,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'grid',

          gridTemplateColumns: {
            xs: '1fr',
            md: '0.9fr 1.1fr',
          },

          alignItems: 'stretch',

          gap: {
            xs: 0,
            md: 6,
            lg: 8,
          },
        }}
      >
        <Box
          sx={{
            minHeight: {
              xs: 'calc(100vh - 64px)',
              md: 580,
            },

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            px: {
              xs: 1,
              sm: 4,
              md: 2,
            },
          }}
        >
          <LoginForm />
        </Box>

        <IllustrationPanel />
      </Container>
    </Box>
  );
};

export default LoginPage;