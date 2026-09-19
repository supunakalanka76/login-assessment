 export interface LoginFormValues {
    email: string;
    password: string;
 }

 export interface LoginFormErrors {
    email?: string;
    password?: string;
 }

 const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 export const validateEmail = (email: string): string => {
    const value = email.trim();

    if (!value) {
        return 'Email is required';
    }

    if (!EMAIL_PATTERN.test(value)) {
        return 'Please enter a valid email address';
    }


    return '';
 }

 export const validatePassword = (password: string): string => {
    const value = password.trim();

    if (!value) {
        return 'Password is required';
    }

    if (value.length < 6) {
        return 'Password must be at least 6 characters long';
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
        return 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    return '';
 }

 export const validateLoginForm = (
    values: LoginFormValues,
 ): LoginFormErrors => {
    const errors: LoginFormErrors = {};

    const emailError = validateEmail(values.email);
    const passwordError = validatePassword(values.password);

    if (emailError) {
        errors.email = emailError;
    }

    if (passwordError) {
        errors.password = passwordError;
    }

    return errors;
 };