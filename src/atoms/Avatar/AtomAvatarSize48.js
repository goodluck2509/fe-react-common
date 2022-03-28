import withStyles from '@material-ui/core/styles/withStyles';
import AtomAvatar from '.';

/* avatar 48x48px */
const AtomAvatarSize48 = withStyles(
  theme => ({
    root: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      cursor: 'pointer',
    },
  }),
  { name: 'AtomAvatarSize48' },
)(AtomAvatar);
export default AtomAvatarSize48;
