import {
  Box,
  Stack,
} from '@mui/material';

import heroImage from '../../assets/hero.svg';

const IllustrationPanel = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        minHeight: 580,
        bgcolor: '#f4f8f1',
        borderRadius: '24px',
        px: 5,
        py: 5,
        display: {
          xs: 'none',
          md: 'flex',
        },
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src={heroImage}
        alt="Productivity illustration"
        sx={{
          width: '100%',
          maxWidth: 430,
          height: 'auto',
          objectFit: 'contain',
        }}
      />

      <Stack
        direction="row"
        spacing={0.75}
        sx={{ mt: 2, justifyContent: 'center' }}
      >
        <Box
          sx={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            bgcolor: '#c9c9c9',
          }}
        />

        <Box
          sx={{
            width: 18,
            height: 6,
            borderRadius: 999,
            bgcolor: '#111111',
          }}
        />
      </Stack>
    </Box>
  );
};

export default IllustrationPanel;