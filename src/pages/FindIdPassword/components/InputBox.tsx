import { Chip } from '@mui/material';
import { Stack, TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface InputBoxProps {
  id: string;
  label: string;
  placeholder: string;
  submitButtonLabel?: string;
  singleline?: boolean;
  isHidenSubmitButton?: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({
  id,
  label,
  placeholder,
  submitButtonLabel = '제출',
  singleline = false,
  isHidenSubmitButton = false,
}) => {
  //   const { control } = useFormContext();

  //
  //
  //

  return (
    <Stack
      direction={singleline ? 'row' : 'column'}
      gap={singleline ? '0.5rem' : '0.25rem'}
    >
      <Typography fontWeight={700} component="label" htmlFor={id}>
        {label}
      </Typography>
      <Stack direction="row" gap="0.25rem" alignItems="center">
        <TextField
          fullWidth
          variant="standard"
          id={id}
          placeholder={placeholder}
        />
        {!isHidenSubmitButton && (
          <Chip
            clickable
            component="button"
            type="submit"
            variant="outlined"
            size="medium"
            label={submitButtonLabel}
            sx={{
              minWidth: '5.625rem',
              borderColor: '#666',
              color: '#666',
              fontSize: '0.75rem',
              fontWeight: 600,
            }}
          />
        )}
      </Stack>
    </Stack>
  );
};

export default InputBox;
