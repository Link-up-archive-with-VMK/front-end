import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link, useNavigate } from 'react-router-dom';

import kakaoImg from '@/assets/kakao_login.png';
import { BROWSER_PATH, KAKAO_REDIRECT_URL } from '@/constants/path';
import { getKakaoOauthUrl } from '@/utils/login';

const Intro: React.FC = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  //
  //
  //

  return (
    <>
      <Helmet>
        <title>시작하기 - Guide run Project</title>
      </Helmet>
      <Stack
        boxSizing="border-box"
        minHeight="100vh"
        height="100%"
        justifyContent="space-between"
        alignItems="center"
        paddingTop="13.875rem"
        paddingBottom="5.125rem"
      >
        <Stack gap="2.5rem" alignItems="center">
          <Typography
            component="h1"
            variant="h1"
            fontSize="2.5rem"
            fontWeight="500"
          >
            <FormattedMessage id="intro.greeting" />
          </Typography>
          <Stack
            aria-label={intl.formatMessage({
              id: 'intro.signup.label',
            })}
            gap="1.5rem"
            alignItems="center"
          >
            <Typography variant="subtitle1" fontWeight="700">
              <FormattedMessage id="intro.signup" />
            </Typography>
            <Link
              aria-label={intl.formatMessage({
                id: 'intro.signup.kakao',
              })}
              to={getKakaoOauthUrl(KAKAO_REDIRECT_URL)}
            >
              <Box
                component="img"
                maxWidth="18.4375rem"
                src={kakaoImg}
                alt={intl.formatMessage({
                  id: 'intro.signup.kakao.alt',
                })}
              />
            </Link>
          </Stack>
          <Typography
            role="link"
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontSize="0.875rem"
            fontWeight={500}
            onClick={() => navigate(BROWSER_PATH.LOGIN)}
            sx={{
              textDecoration: 'underline',
              textUnderlinePosition: 'under',
              cursor: 'pointer',
            }}
          >
            ID/PW로 로그인 <ChevronRightIcon aria-hidden fontSize="small" />
          </Typography>
        </Stack>
        <Button
          component="a"
          target="_blank"
          href="https://wadiz.onelink.me/gmeA/zf07d2mf"
          variant="contained"
          size="large"
          fullWidth
        >
          {`가이드런프로젝트에 대해서  >`}
        </Button>
      </Stack>
    </>
  );
};

export default Intro;
