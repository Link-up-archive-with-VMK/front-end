import { Stack, Typography } from '@mui/material';

interface TitleContentRowProps {
  title: string;
  content: React.ReactElement;
  alignItems?: 'center' | 'flex-start';
}

/**
 *
 * @returns 제목과 콘텐츠 내용을 반환하는 컴포넌트
 */
const TitleContentRow: React.FC<TitleContentRowProps> = ({
  title,
  content,
  alignItems = 'center',
}) => {
  return (
    <Stack direction="row" alignItems={alignItems} gap="0.5rem">
      <Typography
        component="h3"
        fontSize="1.0625rem"
        fontWeight={700}
        width="4.375rem"
      >
        {title}
      </Typography>
      {content}
    </Stack>
  );
};

export default TitleContentRow;
