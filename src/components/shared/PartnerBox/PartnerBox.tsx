import styled from '@emotion/styled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Avatar, Stack, Typography } from '@mui/material';

import { DisabilityChip } from '../DisabilityChip';
import GroupChip from '../GroupChip/GroupChip';

import { PartnerDataType } from '@/apis/types/info';

//
//
//

interface PartnerBoxProps {
  partnerData: PartnerDataType;
}

//
//
//

const StyledContainer = styled.div`
  box-sizing: border-box;
  min-width: 7.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.75rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
`;

const StyledCountText = styled.span`
  color: #de1313;
`;

//
//
//

const PartnerBox: React.FC<PartnerBoxProps> = ({
  partnerData: {
    img,
    contestCnt,
    isLiked,
    like,
    name,
    recordDegree,
    trainingCnt,
    type,
  },
}) => {
  return (
    <StyledContainer>
      {img ? (
        <Avatar alt={name} src={img} sx={{ width: 60, height: 60 }} />
      ) : (
        <Avatar
          alt={name}
          sx={{ bgcolor: '#D9D9D9', width: 60, height: 60 }}
        ></Avatar>
      )}
      <Stack
        boxSizing="border-box"
        alignItems="center"
        justifyContent="center"
        padding="0.25rem 0.5rem"
        gap="0.25rem"
      >
        <Stack
          direction="row"
          justifyContent="center"
          gap="0.25rem"
          alignItems="center"
        >
          <DisabilityChip component="avartar" type={type} variant="reserve" />
          <Typography fontWeight={500}>{name}</Typography>
          <GroupChip group={recordDegree} type="text" />
        </Stack>
        <Stack alignItems="center">
          <Typography fontSize="0.75rem">
            훈련 <StyledCountText>{trainingCnt}</StyledCountText>회
          </Typography>
          <Typography fontSize="0.75rem">
            대회 <StyledCountText>{contestCnt}</StyledCountText>회
          </Typography>
        </Stack>
      </Stack>
      <Stack gap="0.0125rem" direction="row" alignItems="center">
        {isLiked ? (
          <FavoriteIcon
            fontSize="small"
            aria-label={`${name}님의 인기도`}
            aria-selected={isLiked}
            sx={{
              color: 'red',
            }}
          />
        ) : (
          <FavoriteBorderIcon
            fontSize="small"
            aria-label={`${name}님의 인기도`}
            aria-selected={isLiked}
            sx={{
              color: '#666',
            }}
          />
        )}

        <Typography fontSize="0.625rem" color="#666">
          {like}
        </Typography>
      </Stack>
    </StyledContainer>
  );
};

export default PartnerBox;