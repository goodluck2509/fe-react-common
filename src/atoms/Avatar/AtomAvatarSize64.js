import withStyles from '@material-ui/core/styles/withStyles';
import AtomAvatar from '.';

/* avatar 64x64px */
const AtomAvatarSize64 = withStyles(
  theme => ({
    root: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      cursor: 'pointer',
    },
  }),
  { name: 'AtomAvatarSize64' },
)(AtomAvatar);
export default AtomAvatarSize64;
