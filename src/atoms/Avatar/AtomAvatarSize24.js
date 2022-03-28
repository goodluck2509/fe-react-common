import withStyles from '@material-ui/core/styles/withStyles';
import AtomAvatar from '.';

/* avatar 24x24px */
const AtomAvatarSize24 = withStyles(
  theme => ({
    root: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      cursor: 'pointer',
    },
  }),
  { name: 'AtomAvatarSize24' },
)(AtomAvatar);
export default AtomAvatarSize24;
