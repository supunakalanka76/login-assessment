import {useState} from 'react';

import {
    Button,
    InputAdornment,
    TextField,
} from '@mui/material';

interface PasswordFieldProps {
    value: string;
    error?: string;
    onChange: (value: string) => void;
    onBlur: () => void;
}

const PasswordField = ({
    value,
    error,
    onChange,
    onBlur,
}: PasswordFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((previous) => !previous);
    };

    return (
        <TextField
            fullWidth
            name="password"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            onBlur={onBlur}
            error={Boolean(error)}
            helperText={error || ' '}
            autoComplete="current-password"
            size="small"
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button
                                type="button"
                                onClick={handleTogglePassword}
                                size="small"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                sx={{
                                    minWidth: 'auto',
                                    p: 0,
                                    color: '#333333',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    textTransform: 'none',

                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },
                                }}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </Button>
                        </InputAdornment>
                    ),
                },
            }}
            sx={{
                '& .MuiOutlinedInput-root': {
                    height: '48',
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
)};

export default PasswordField;