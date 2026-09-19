import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Apple,
  Facebook,
  Google,
} from '@mui/icons-material';

import {
  Alert,
  CircularProgress,
  IconButton,
  Stack,
  Tooltip,
} from '@mui/material';

import {
  signInWithPopup
} from 'firebase/auth';

import { toast } from 'react-hot-toast';

import {
  auth,
  googleProvider,
} from '../../config/firebase';

const SocialLogin = () => {
  const navigate = useNavigate();

  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const [authError, setAuthError] = useState('');

  const socialButtonStyles = {
    width: 46,
    height: 46,
    bgcolor: '#000000',
    color: '#FFFFFF',

    '&:hover': {
      bgcolor: '#222222',
    },

    '&.Mui-disabled': {
      bgcolor: '#444444',
      color: '#888888',
    },
  };

  const handleGoogleLogin = async () => {
    try {
      setIsGoogleLoading(true);
      setAuthError('');

      await signInWithPopup(
        auth, 
        googleProvider,
      );

      toast.success('Signed in with Google successfully!');

      navigate('/token', { 
        replace: true 
      });

    } catch (error) {
      console.error('Google sign-in failed.', error);

      setAuthError(
        'Google sign-in failed. Please try again.'
      );

      toast.error(
        'Google sign-in failed. Please try again.'
      );
      
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <Stack spacing={2}>
      {authError && (
        <Alert
          severity="error"
          sx={{ 
            fontSize: '0.8rem',
            borderRadius: '2px',
          }}
        >
          {authError}
        </Alert>
      )}

      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: 'center' }}
      >
        <Tooltip title="Sign in with Google">
          <span>
            <IconButton
              type="button"
              aria-label="Sign in with Google"
              onClick={handleGoogleLogin}
              disabled={isGoogleLoading}
              sx={socialButtonStyles}
            >
              {isGoogleLoading ? (
                <CircularProgress
                  size={20}
                  sx={{
                    color: '#FFFFFF',
                  }}
                />
              ) : (
                <Google fontSize="small" />
              )
            }
            </IconButton>
          </span>
        </Tooltip>

        <Tooltip title="Facebook login is not available at the moment">
          <span>
            <IconButton
              type="button"
              aria-label="Sign in with Facebook"
              disabled
              sx={socialButtonStyles}
            >
              <Facebook fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>

        <Tooltip title="Apple login is not available at the moment">
          <span>
            <IconButton
              type="button"
              aria-label="Sign in with Apple"
              disabled
              sx={socialButtonStyles}
            >
              <Apple fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>
      </Stack>
    </Stack>
  );
  };

export default SocialLogin;