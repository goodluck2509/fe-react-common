import withStyles from '@material-ui/core/styles/withStyles';
import AtomAvatar from '.';

/* avatar 160x160px */
const AtomAvatarSize160 = withStyles(
  theme => ({
    root: {
      width: theme.spacing(20),
      height: theme.spacing(20),
      border: `3px solid ${theme.palette.common.white}`,
      cursor: 'pointer',
    },
  }),
  { name: 'AtomAvatarSize160' },
)(AtomAvatar);
export default AtomAvatarSize160;
