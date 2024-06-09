import { ClearOutlined } from '@mui/icons-material';
import {
  Box,
  Dialog,
  Typography,
  IconButton,
  DialogContent,
  DialogTitle,
  Divider,
  CircularProgress,
  Stack,
  Button,
  DialogActions,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import { DisabilityChip } from '../DisabilityChip';
import { EventChip } from '../EventChip';
import { EventStatus } from '../EventStatus';
import { GroupChip } from '../GroupChip';
import { TextLink } from '../TextLink';
import { TitleContentRow } from '../TitleContentRow';

import eventApi from '@/apis/requests/event';
import { BROWSER_PATH } from '@/constants/path';
import { RecruitStatus } from '@/types/group';

interface EventModalProps {
  eventId: number;
  isOpen: boolean;
  onModalClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({
  eventId,
  isOpen,
  onModalClose,
}) => {
  const { data: eventData, isSuccess } = useQuery({
    queryKey: ['eventPopupGet', eventId],
    queryFn: () => eventApi.eventPopupGet({ eventId }),
    enabled: isOpen,
  });

  /**
   *
   */
  const renderTitle = () => {
    if (eventData) {
      return (
        <DialogTitle
          component="h1"
          display="flex"
          gap="0.5rem"
          alignItems="center"
        >
          <EventChip variant="full" type={eventData.type} />
          <Typography
            component="span"
            id="modal-title"
            fontSize="1.25rem"
            fontWeight={700}
          >
            {eventData.name}
            <Stack direction="row" gap="0.5rem" alignItems="center">
              <EventStatus status={eventData.recruitStatus} />
              {eventData.updatedAt ? (
                <Typography component="span" fontSize="0.625rem">
                  {eventData.updatedAt} 수정
                </Typography>
              ) : null}
            </Stack>
          </Typography>
        </DialogTitle>
      );
    }
  };

  /**
   *
   */
  const renderContent = () => {
    if (eventData) {
      return (
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <TitleContentRow
            title="주최자"
            content={
              <Stack direction="row" alignItems="center" gap="0.25rem">
                <DisabilityChip
                  component="chip"
                  type={eventData.organizerType}
                />
                <Typography fontWeight={600}>{eventData.organizer}</Typography>
                <GroupChip type="text" group={eventData.organizerRecord} />
              </Stack>
            }
          />
          <TitleContentRow
            title="일시"
            content={
              <Typography component="span" display="flex" gap="0.5rem">
                {eventData.date.replace(/-/g, '.')}
                <Divider orientation="vertical" variant="middle" flexItem />
                {eventData.startTime}~{eventData.endTime}
              </Typography>
            }
          />
          <TitleContentRow
            title="장소"
            content={<Typography>{eventData.place}</Typography>}
          />
          <TitleContentRow
            title="모집인원"
            alignItems="flex-start"
            content={
              <Typography display="flex" flexDirection="column" gap="0.5rem">
                <span>
                  시각장애러너
                  <span
                    style={{
                      color: '#DE1313',
                    }}
                  >
                    {` ${eventData.recruitVi}`}
                  </span>
                  명
                </span>
                <span>
                  가이드러너
                  <span
                    style={{
                      color: '#DE1313',
                    }}
                  >
                    {` ${eventData.recruitGuide}`}
                  </span>
                  명
                </span>
              </Typography>
            }
          />
          {eventData.isApply ? (
            <TitleContentRow
              title="내 파트너"
              alignItems={eventData.hasPartner ? 'flex-start' : 'center'}
              content={
                eventData.hasPartner ? (
                  <Stack paddingLeft="0.5rem" gap="0.5rem">
                    <Stack direction="row" gap="0.5rem" alignItems="center">
                      <DisabilityChip
                        component="chip"
                        type={eventData.partnerType}
                      />
                      <Typography>{eventData.partnerName}</Typography>
                      <GroupChip type="text" group={eventData.partnerRecord} />
                    </Stack>
                    <TextLink
                      label="참가자 현황"
                      to={`BROWSER_PATH.EVENT/${eventId}`}
                    />
                  </Stack>
                ) : (
                  <Typography
                    fontSize="0.75rem"
                    fontWeight={700}
                    color="#4BABB8"
                  >
                    대기중
                  </Typography>
                )
              }
            />
          ) : null}
          <Box
            paddingTop="0.625rem"
            display="flex"
            flexDirection="column"
            gap="0.5rem"
          >
            <Typography component="h3" fontWeight={700}>
              훈련 상세
            </Typography>
            <Box
              padding="1rem"
              border="1px solid #D9D9D9"
              borderRadius="0.5rem"
            >
              <Typography fontSize="0.8125rem" lineHeight="1.25rem">
                {eventData.content}
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      );
    }
  };

  /**
   *
   */
  const renderButton = () => {
    if (eventData) {
      switch (eventData.recruitStatus) {
        case RecruitStatus.Open:
        case RecruitStatus.Upcoming:
          return (
            <Button
              fullWidth
              component={Link}
              to={`${BROWSER_PATH.EVENT}/${eventId}`}
              variant="chip"
              size="large"
            >
              이벤트 신청하러 가기
            </Button>
          );
        default:
          return (
            <Button
              fullWidth
              component={Link}
              to={`${BROWSER_PATH.EVENT.ALL}?type=close`}
              variant="chip"
              size="large"
            >
              지난 이벤트 둘러보기
            </Button>
          );
      }
    }
  };

  //
  //
  //

  return (
    <Dialog
      open={isOpen}
      fullWidth
      keepMounted={false}
      maxWidth="xs"
      onClose={onModalClose}
      sx={{
        '.MuiPaper-root': {
          maxHeight: '70vh',
          padding: '5rem 1.25rem',
          gap: '2.5rem',
        },
      }}
    >
      <IconButton
        onClick={onModalClose}
        size="large"
        aria-label="닫기"
        sx={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
        }}
      >
        <ClearOutlined fontSize="large" />
      </IconButton>
      {eventData && isSuccess ? (
        <>
          {renderTitle()}
          {renderContent()}
        </>
      ) : (
        <Stack alignItems="center" justifyContent="center">
          <CircularProgress />
        </Stack>
      )}
      <DialogActions
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {renderButton()}
      </DialogActions>
    </Dialog>
  );
};

export default EventModal;