import { Button, Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';

import Header from './components/Header';

const SignupComplete: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>회원가입 완료 - Guide run Project</title>
      </Helmet>
      <Stack
        minHeight="100vh"
        justifyContent="space-around"
        alignItems="center"
        gap="2.5rem"
      >
        <Header>
          <FormattedMessage id="signup.complete.title" />
        </Header>
        <Typography
          fontSize="2.5rem"
          fontWeight={400}
          textAlign="center"
          whiteSpace="break-spaces"
        >
          <FormattedMessage id="signup.complete.matching" />
        </Typography>
        <Stack gap="1rem" width="100%" justifyContent="center">
          <Button variant="contained" size="large" fullWidth>
            <FormattedMessage id="signup.complete.checkInfo" />
          </Button>
          <Button variant="outlined" size="large" fullWidth>
            <FormattedMessage id="common.mypage" />
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default SignupComplete;
