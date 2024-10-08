import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { FormattedMessage } from 'react-intl';

import infoApi from '@/apis/requests/info';
import { StyledTermsBox } from '@/pages/Info/components/TermsDetail';
import { UserType } from '@/types/user';

interface UserTermsCardProps {
  userId: UserType['userId'];
}

const UserTermsCard: React.FC<UserTermsCardProps> = ({ userId }) => {
  const { data: termsData, isLoading } = useQuery({
    queryKey: ['permissionGet', userId],
    queryFn: () => infoApi.permissionGet({ userId }),
    enabled: userId !== '',
  });
  return (
    <Card>
      <CardHeader
        title="약관동의"
        titleTypographyProps={{
          fontWeight: 700,
        }}
      />
      <CardContent
        sx={{
          '.MuiPaper-root': {
            padding: '0.5rem',
            boxShadow: 'none',
          },
        }}
      >
        {isLoading ? (
          <Stack alignItems="center" justifyContent="center">
            <CircularProgress size="2rem" />
          </Stack>
        ) : (
          <Stack gap="2rem">
            <Stack gap="0.5rem">
              <StyledTermsBox>
                <Typography component="h3" fontWeight={700}>
                  개인정보 제공 및 활용 동의
                </Typography>
                <Typography color="#333" fontWeight={500}>
                  {termsData?.privacy ? '동의' : '비동의'}
                </Typography>
              </StyledTermsBox>
              <Accordion
                elevation={0}
                sx={{
                  border: 'none',
                  '&:before': {
                    display: 'none',
                  },
                }}
              >
                <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                  <Typography>동의내용 자세히 보기</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {Array(4)
                    .fill(0)
                    .map((_, idx) => (
                      <Typography
                        key={`signup.terms.privacy.${idx + 1}`}
                        whiteSpace="break-spaces"
                      >
                        <FormattedMessage
                          id={`signup.terms.privacy.${idx + 1}`}
                        />
                      </Typography>
                    ))}
                </AccordionDetails>
              </Accordion>
            </Stack>
            <Stack gap="0.5rem">
              <StyledTermsBox>
                <Typography component="h3" fontWeight={700}>
                  초상권 활용 동의
                </Typography>
                <Typography color="#333" fontWeight={500}>
                  {termsData?.portraitRights ? '동의' : '비동의'}
                </Typography>
              </StyledTermsBox>
              <Accordion
                elevation={0}
                sx={{
                  border: 'none',
                  '&:before': {
                    display: 'none',
                  },
                }}
              >
                <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                  <Typography>동의내용 자세히 보기</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <Typography
                        key={`signup.terms.likeness.${idx + 1}`}
                        whiteSpace="break-spaces"
                      >
                        <FormattedMessage
                          id={`signup.terms.likeness.${idx + 1}`}
                        />
                      </Typography>
                    ))}
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default UserTermsCard;
