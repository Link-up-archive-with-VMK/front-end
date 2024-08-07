import { Avatar, Typography } from '@mui/material';

import { TEAM_COLOR } from '@/constants/color';
import { RunningGroup } from '@/types/group';

//
//
//

interface GroupChipProps {
  group: RunningGroup;
  type?: 'avatar' | 'text';
}

//
//
//

const GroupChip: React.FC<GroupChipProps> = ({ type = 'avatar', group }) => {
  if (type === 'text') {
    return (
      <Typography
        role="text"
        component="span"
        fontSize="1.125rem"
        fontWeight={700}
        color={TEAM_COLOR?.[group]}
        aria-label={`Group ${group}`}
      >
        {group}
      </Typography>
    );
  }
  return (
    <Avatar
      component="span"
      role="text"
      aria-label={`Group ${group}`}
      sx={{
        width: '1.875rem',
        height: '1.875rem',
        fontSize: '1rem',
        fontWeight: 500,
        bgcolor: TEAM_COLOR?.[group] ?? TEAM_COLOR.P,
      }}
    >
      {group}
    </Avatar>
  );
};

export default GroupChip;
