export interface LoginValues {
    username: string,
    password: string,
}

export interface RegisterValues {
    dni: string;
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
  modelValue?: string | number;
  field?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  icon?: string;
  size?: 'small' | 'medium' | 'large';
  primary?: boolean;
  disabled?: boolean;
}