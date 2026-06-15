export interface LoginValues {
    username: string;
    password: string;
}
export interface ForgotValues {
    email: string;
}
export interface ResetPasswordValues {
    oldPassword?: string;
    newPassword: string;
    confirmPassword: string;
}
export interface RegisterValues {
    name: string;
    lastName: string;
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
}
export interface BaseButtonProps {
    label?: string;
    disabled?: boolean;
    raised?: boolean;
    rounded?: boolean;
    variant?: 'text' | 'outlined' | 'link';
    badge?: string;
    icon?: string;
    size?: 'small' | 'large';
    loading?: boolean;
    ariaLabel?: string;
    type?: 'button' | 'submit' | 'reset';
}
export interface BaseInputProps {
    modelValue?: string | number | boolean | Date;
    field?: string;
    label?: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'boolean' | 'select' | 'time' | 'date';
    placeholder?: string;
    error?: string;
    icon?: string;
    size?: 'small' | 'medium' | 'large';
    primary?: boolean;
    disabled?: boolean;
    options?: any[];
    optionLabel?: string;
    optionValue?: string;
    stepMinute?: number;
}
export interface BasePasswordProps {
    modelValue?: string;
    label?: string;
    error?: string;
    feedback?: boolean;
    toggleMask?: boolean;
    showClear?: boolean;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    name?: string;
}
