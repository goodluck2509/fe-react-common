import withStyles from '@material-ui/core/styles/withStyles';
import AtomAvatar from '.';

/* avatar 80x80px */
const AtomAvatarSize80 = withStyles(
  theme => ({
    root: {
      width: theme.spacing(10),
      height: theme.spacing(10),
      cursor: 'pointer',
    },
  }),
  { name: 'AtomAvatarSize80' },
)(AtomAvatar);
export default AtomAvatarSize80;
