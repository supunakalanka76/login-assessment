import { Box, Container } from '@mui/material';

import LoginForm from '../components/auth/LoginForm';
import IllustrationPanel from '../components/layout/IllustrationPanel';

const LoginPage = () => {
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