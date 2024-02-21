import React from 'react';

import styled from '@emotion/styled';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {
  Box,
  Collapse,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { DisabilityChip, GenderChip, GroupChip } from '@/components/shared';
import {
  DisabilityEnum,
  GenderEnum,
  RoleEnum,
  RunningGroup,
} from '@/types/group';

//
//
//

export type UserDataType = {
  userId: string;
  role: RoleEnum; //권한
  type: DisabilityEnum; //vi인지 guide인지
  name: string;
  pace: RunningGroup; //러닝 등급
  gender: GenderEnum; //성별
  age: number; //나이
  snsId: string; //sns 계정
  phoneNumber: string; //전화번호
  trainingCnt: number; //참여한 훈련 수
  contestCnt: number; //참여한 대회 수
  update_date: string;
  update_time: string;
};

//
//
//

const USER_DATA: UserDataType[] = [
  {
    userId: '1',
    role: RoleEnum.Wait,
    type: DisabilityEnum.GUIDE,
    name: '홍길동',
    pace: RunningGroup.A,
    gender: GenderEnum.M,
    age: 40,
    snsId: 'pride_sd',
    phoneNumber: '01012345678',
    trainingCnt: 2,
    contestCnt: 4,
    update_date: '2000-00-00',
    update_time: '00:00:00',
  },
  {
    userId: '2',
    role: RoleEnum.Wait,
    type: DisabilityEnum.VI,
    name: '홍길동',
    pace: RunningGroup.B,
    gender: GenderEnum.M,
    age: 40,
    snsId: 'pride_sd',
    phoneNumber: '01012345678',
    trainingCnt: 2,
    contestCnt: 4,
    update_date: '2000-00-00',
    update_time: '00:00:00',
  },
  {
    userId: '3',
    role: RoleEnum.Wait,
    type: DisabilityEnum.GUIDE,
    name: '홍길동',
    pace: RunningGroup.D,
    gender: GenderEnum.W,
    age: 40,
    snsId: 'pride_sd',
    phoneNumber: '01012345678',
    trainingCnt: 2,
    contestCnt: 4,
    update_date: '2000-00-00',
    update_time: '00:00:00',
  },
  {
    userId: '4',
    role: RoleEnum.User,
    type: DisabilityEnum.GUIDE,
    name: '홍길동',
    pace: RunningGroup.D,
    gender: GenderEnum.W,
    age: 40,
    snsId: 'pride_sd',
    phoneNumber: '01012345678',
    trainingCnt: 2,
    contestCnt: 4,
    update_date: '2000-00-00',
    update_time: '00:00:00',
  },
  {
    userId: '5',
    role: RoleEnum.Wait,
    type: DisabilityEnum.GUIDE,
    name: '홍길동',
    pace: RunningGroup.A,
    gender: GenderEnum.M,
    age: 40,
    snsId: 'pride_sd',
    phoneNumber: '01012345678',
    trainingCnt: 2,
    contestCnt: 4,
    update_date: '2000-00-00',
    update_time: '00:00:00',
  },
  {
    userId: '6',
    role: RoleEnum.User,
    type: DisabilityEnum.GUIDE,
    name: '홍길동',
    pace: RunningGroup.A,
    gender: GenderEnum.M,
    age: 40,
    snsId: 'pride_sd',
    phoneNumber: '01012345678',
    trainingCnt: 2,
    contestCnt: 4,
    update_date: '2000-00-00',
    update_time: '00:00:00',
  },
  {
    userId: '7',
    role: RoleEnum.Wait,
    type: DisabilityEnum.GUIDE,
    name: '홍길동',
    pace: RunningGroup.A,
    gender: GenderEnum.M,
    age: 40,
    snsId: 'pride_sd',
    phoneNumber: '01012345678',
    trainingCnt: 2,
    contestCnt: 4,
    update_date: '2000-00-00',
    update_time: '00:00:00',
  },
  {
    userId: '8',
    role: RoleEnum.Wait,
    type: DisabilityEnum.GUIDE,
    name: '홍길동',
    pace: RunningGroup.A,
    gender: GenderEnum.M,
    age: 40,
    snsId: 'pride_sd',
    phoneNumber: '01012345678',
    trainingCnt: 2,
    contestCnt: 4,
    update_date: '2000-00-00',
    update_time: '00:00:00',
  },
  {
    userId: '9',
    role: RoleEnum.Reject,
    type: DisabilityEnum.GUIDE,
    name: '홍길동',
    pace: RunningGroup.A,
    gender: GenderEnum.M,
    age: 40,
    snsId: 'pride_sd',
    phoneNumber: '01012345678',
    trainingCnt: 2,
    contestCnt: 4,
    update_date: '2000-00-00',
    update_time: '00:00:00',
  },
  {
    userId: '10',
    role: RoleEnum.Wait,
    type: DisabilityEnum.GUIDE,
    name: '홍길동',
    pace: RunningGroup.A,
    gender: GenderEnum.M,
    age: 40,
    snsId: 'pride_sd',
    phoneNumber: '01012345678',
    trainingCnt: 2,
    contestCnt: 4,
    update_date: '2000-00-00',
    update_time: '00:00:00',
  },
];

//
//
//

const StyledCollapsBox = styled.div`
  background-color: #e5e5e5;
  padding: 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const StyledProfileImg = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 5rem;
  background-color: #fff;
`;

const StyledUserDetailButton = styled.button`
  outline: none;
  color: #000;
  background-color: #fff;
  width: 100%;
  max-width: 20.25rem;
  padding: 0.75rem;
  border-radius: 100000px;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  border: none;
  cursor: pointer;
`;

//
//
//

const Row: React.FC<{ userData: UserDataType }> = ({ userData }) => {
  const [open, setOpen] = React.useState(false);

  /**
   *
   */
  const renderApproveStatus = (status: RoleEnum) => {
    switch (status) {
      case RoleEnum.Reject:
        return (
          <Typography
            component="span"
            fontSize="0.75rem"
            fontWeight={700}
            color="#DE1313"
          >
            거절
          </Typography>
        );
      case RoleEnum.Wait:
        return (
          <Typography
            component="span"
            fontSize="0.75rem"
            fontWeight={700}
            color="#4BABB8"
          >
            대기중
          </Typography>
        );
      default:
        return (
          <Typography
            component="span"
            fontSize="0.75rem"
            fontWeight={700}
            color="#0156D6"
          >
            승인
          </Typography>
        );
    }
  };

  //
  //
  //

  return (
    <>
      <TableRow
        onClick={() => setOpen((prev) => !prev)}
        sx={{
          '.MuiTableCell-root': {
            padding: '0.75rem',
          },
          cursor: 'pointer',
        }}
      >
        <TableCell
          align="center"
          sx={{
            fontSize: '0.625rem',
          }}
        >
          {`${userData.update_date}\n${userData.update_time}`}
        </TableCell>
        <TableCell align="center">
          <DisabilityChip component="chip" type={userData.type} />
        </TableCell>
        <TableCell align="center">
          <GenderChip type={userData.gender} />
        </TableCell>
        <TableCell align="center">
          {userData.name} <GroupChip type="text" group={userData.pace} />
        </TableCell>
        <TableCell component="th" align="center">
          {renderApproveStatus(userData.role)}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <StyledCollapsBox>
              <Stack
                direction="row"
                gap="1.5rem"
                sx={{
                  '.title': {
                    fontWeight: 700,
                    fontSize: '0.6825rem',
                  },
                  '.content': {
                    fontSize: '0.625rem',
                  },
                  '.normal': {
                    fontSize: '0.6825rem',
                  },
                }}
              >
                <StyledProfileImg aria-hidden></StyledProfileImg>
                <Stack gap="0.5rem">
                  <Box
                    component="div"
                    display="flex"
                    alignItems="center"
                    gap="0.25rem"
                  >
                    <Typography component="h3" className="title">
                      마지막 업데이트
                    </Typography>
                    <Typography className="normal">
                      {`${userData.update_date} ${userData.update_time}`}
                    </Typography>
                  </Box>
                  <Stack direction="row" gap="0.75rem" alignItems="center">
                    <Box
                      component="div"
                      display="flex"
                      alignItems="center"
                      gap="0.25rem"
                    >
                      <Typography component="h3" className="title">
                        SNS
                      </Typography>
                      <Typography className="normal">
                        {`@${userData.snsId}`}
                      </Typography>
                    </Box>
                    <Box
                      component="div"
                      display="flex"
                      alignItems="center"
                      gap="0.25rem"
                    >
                      <Typography component="h3" className="title">
                        연령대
                      </Typography>
                      <Typography className="content">
                        {`${userData.age}대`}
                      </Typography>
                    </Box>
                    <Box
                      component="div"
                      display="flex"
                      alignItems="center"
                      gap="0.25rem"
                    >
                      <Typography component="h3" className="title">
                        전화번호
                      </Typography>
                      <Typography className="normal">
                        {`${userData.phoneNumber}`}
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="flex-end">
                <StyledUserDetailButton
                  title="참여 이벤트 자세히 보기"
                  onClick={() => console.log('click')}
                >
                  <Typography fontSize="0.6875rem" fontWeight={700}>
                    참여 이벤트
                  </Typography>
                  <Stack
                    direction="row"
                    gap="0.75rem"
                    alignItems="center"
                    sx={{
                      '.MuiTypography-root': {
                        fontSize: '0.6875rem',
                      },
                      '.total': {
                        color: '#DE1313',
                        fontWeight: 700,
                      },
                      '.event': {},
                    }}
                  >
                    <Typography>
                      {`총 `}
                      <span className="total">
                        {userData.contestCnt + userData.trainingCnt}
                      </span>
                      {`회`}
                    </Typography>
                    <Typography>
                      {`대회 `}
                      <span className="event">{userData.contestCnt}</span>
                      {`회`}
                    </Typography>
                    <Typography>{`훈련 ${userData.trainingCnt}회`}</Typography>
                    <KeyboardArrowRightIcon aria-hidden fontSize="small" />
                  </Stack>
                </StyledUserDetailButton>
              </Stack>
            </StyledCollapsBox>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

//
//
//

const AdminUser: React.FC = () => {
  return (
    <Stack
      boxSizing="border-box"
      padding="2.5rem"
      paddingTop="4.5rem"
      gap="1.5rem"
      width="100%"
      maxWidth="31.875rem"
    >
      <Box>
        <Typography component="h1" fontSize="1.5rem" fontWeight={700}>
          회원 관리
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="회원 정보 테이블" sx={{ width: '100%' }}>
          <caption style={{ display: 'none' }}>
            회원 정보 테이블. 회원 정보 조회 및 승인 가능
          </caption>
          <TableHead>
            <TableRow
              sx={{
                '.MuiTableCell-root': {
                  padding: '0.75rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                },
              }}
            >
              <TableCell align="center">Time stamp</TableCell>
              <TableCell align="center">장애여부</TableCell>
              <TableCell align="center">성별</TableCell>
              <TableCell align="center">이름/팀</TableCell>
              <TableCell align="center">승인여부</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {USER_DATA.map((user) => (
              <Row userData={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack direction="row" justifyContent="center">
        <Pagination size="small" count={10} />
      </Stack>
    </Stack>
  );
};

export default AdminUser;
