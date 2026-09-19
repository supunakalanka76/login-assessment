import {
  Apple,
  Facebook,
  Google,
} from '@mui/icons-material';

import {
  IconButton,
  Stack,
  Tooltip,
} from '@mui/material';

const SocialLogin = () => {
  const socialButtonStyles = {
    width: 46,
    height: 46,
    bgcolor: '#000000',
    color: '#ffffff',

    '&:hover': {
      bgcolor: '#222222',
    },
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ justifyContent: 'center' }}
    >
      <Tooltip title="Continue with Google">
        <IconButton
          aria-label="Continue with Google"
          sx={socialButtonStyles}
        >
          <Google fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Apple login is not available">
        <span>
          <IconButton
            aria-label="Continue with Apple"
            sx={socialButtonStyles}
          >
            <Apple fontSize="small" />
          </IconButton>
        </span>
      </Tooltip>

      <Tooltip title="Facebook login is not available">
        <span>
          <IconButton
            aria-label="Continue with Facebook"
            sx={socialButtonStyles}
          >
            <Facebook fontSize="small" />
          </IconButton>
        </span>
      </Tooltip>
    </Stack>
  );
};

export default SocialLogin;