import { useState } from 'react';
import type { FormEvent } from 'react';

import {
  Box,
  Button,
  Divider,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import PasswordField from './PasswordField';
import SocialLogin from './SocialLogin';

import {
  validateEmail,
  validateLoginForm,
  validatePassword,
} from '../../utils/validation';
import type { LoginFormErrors } from '../../utils/validation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState<LoginFormErrors>({});

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const handleEmailChange = (value: string) => {
    setEmail(value);

    if (emailTouched) {
      const emailError = validateEmail(value);

      setErrors((previous) => ({
        ...previous,
        email: emailError || undefined,
      }));
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);

    const emailError = validateEmail(email);

    setErrors((previous) => ({
      ...previous,
      email: emailError || undefined,
    }));
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);

    if (passwordTouched) {
      const passwordError = validatePassword(value);

      setErrors((previous) => ({
        ...previous,
        password: passwordError || undefined,
      }));
    }
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);

    const passwordError = validatePassword(password);

    setErrors((previous) => ({
      ...previous,
      password: passwordError || undefined,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setEmailTouched(true);
    setPasswordTouched(true);

    const validationErrors = validateLoginForm({
      email,
      password,
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // The assessment does not require backend email/password login.
    // Firebase Google authentication will be implemented separately.
    console.log('Login form validation successful.');
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{
        width: '100%',
        maxWidth: 400,
      }}
    >
      <Typography
        component="h1"
        sx={{
          fontSize: {
            xs: '2rem',
            md: '2.5rem',
          },
          fontWeight: 700,
          lineHeight: 1.15,
          color: '#111111',
          mb: 1,
        }}
      >
        Welcome back!
      </Typography>

      <Typography
        sx={{
          color: '#777777',
          fontSize: '0.875rem',
          lineHeight: 1.6,
          mb: 4,
        }}
      >
        Manage your work. Stay productive. Get more done.
      </Typography>

      <Stack spacing={0.5}>
        <TextField
          fullWidth
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) =>
            handleEmailChange(event.target.value)
          }
          onBlur={handleEmailBlur}
          error={Boolean(errors.email)}
          helperText={errors.email || ' '}
          autoComplete="email"
          size="small"
          sx={{
            '& .MuiOutlinedInput-root': {
              height: 48,
              borderRadius: '24px',
              px: 1,

              '& fieldset': {
                borderColor: '#d0d0d0',
              },

              '&:hover fieldset': {
                borderColor: '#999999',
              },

              '&.Mui-focused fieldset': {
                borderColor: '#111111',
                borderWidth: '1.5px',
              },

              '&.Mui-error fieldset': {
                borderColor: '#d32f2f',
              },
            },

            '& .MuiFormHelperText-root': {
              ml: 2,
              mt: 0.5,
            },
          }}
        />

        <PasswordField
          value={password}
          error={errors.password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
        />
      </Stack>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mt: 0,
          mb: 2.5,
        }}
      >
        <Link
          component="button"
          type="button"
          underline="hover"
          sx={{
            color: '#333333',
            fontSize: '0.75rem',
          }}
        >
          Forgot Password?
        </Link>
      </Box>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        disableElevation
        sx={{
          height: 48,
          borderRadius: '24px',
          bgcolor: '#000000',
          color: '#ffffff',
          fontWeight: 600,
          textTransform: 'none',

          '&:hover': {
            bgcolor: '#1c1c1c',
          },
        }}
      >
        Login
      </Button>

      <Divider
        sx={{
          my: 3,
          color: '#777777',
          fontSize: '0.75rem',
        }}
      >
        or continue with
      </Divider>

      <SocialLogin />

      <Typography
        sx={{
          mt: {
            xs: 4,
            md: 7,
          },
          textAlign: 'center',
          color: '#777777',
          fontSize: '0.78rem',
        }}
      >
        Not a member?{' '}
        <Link
          component="button"
          type="button"
          underline="hover"
          sx={{
            color: '#222222',
            fontSize: 'inherit',
            fontWeight: 600,
          }}
        >
          Register now
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;