import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import {
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { auth } from '../config/firebase';

const TokenPage = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {
        if (!user) {
          setIsLoading(false);
          navigate('/', { replace: true });
          return;
        }

        try {
          setEmail(user.email ?? '');

          const idToken = await user.getIdToken();

          setToken(idToken);
        } catch (error) {
          console.error('Failed to retrieve token:', error);

          setError(
            'Unable to retrieve your authentication token.',
          );
        } finally {
          setIsLoading(false);
        }
      },
    );

    return unsubscribe;
  }, [navigate]);

  const handleCopyToken = async () => {
    if (!token) {
      return;
    }

    try {
      await navigator.clipboard.writeText(token);

      setIsCopied(true);

      window.setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy token:', error);

      setError('Unable to copy the token.');
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);

      navigate('/', { replace: true });
    } catch (error) {
      console.error('Sign out failed:', error);

      setError('Unable to sign out. Please try again.');
    }
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        bgcolor: '#f7f7f7',
        display: 'flex',
        alignItems: 'center',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            border: '1px solid #e5e5e5',
            borderRadius: 4,
            p: {
              xs: 3,
              sm: 5,
            },
          }}
        >
          <Stack spacing={3}>
            <Box>
              <Typography
                component="h1"
                sx={{
                  fontSize: {
                    xs: '1.75rem',
                    sm: '2rem',
                  },
                  fontWeight: 700,
                  color: '#111111',
                }}
              >
                Authentication successful
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: '#777777',
                }}
              >
                Signed in as {email}
              </Typography>
            </Box>

            {error && (
              <Alert severity="error">
                {error}
              </Alert>
            )}

            <Box>
              <Typography
                sx={{
                  mb: 1,
                  fontWeight: 600,
                }}
              >
                Access Token
              </Typography>

              <Box
                sx={{
                  bgcolor: '#f5f5f5',
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  p: 2,
                  maxHeight: 260,
                  overflow: 'auto',
                }}
              >
                <Typography
                  component="pre"
                  sx={{
                    m: 0,
                    fontFamily: 'monospace',
                    fontSize: '0.8rem',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-wrap',
                    overflowWrap: 'anywhere',
                  }}
                >
                  {token}
                </Typography>
              </Box>
            </Box>

            <Stack
              direction={{
                xs: 'column',
                sm: 'row',
              }}
              spacing={2}
            >
              <Button
                variant="contained"
                onClick={handleCopyToken}
                disabled={!token}
                disableElevation
                sx={{
                  bgcolor: '#000000',
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 3,

                  '&:hover': {
                    bgcolor: '#222222',
                  },
                }}
              >
                {isCopied ? 'Copied!' : 'Copy Token'}
              </Button>

              <Button
                variant="outlined"
                onClick={handleSignOut}
                sx={{
                  color: '#111111',
                  borderColor: '#cccccc',
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 3,

                  '&:hover': {
                    borderColor: '#111111',
                    bgcolor: 'transparent',
                  },
                }}
              >
                Sign Out
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default TokenPage;