import withStyles from '@material-ui/core/styles/withStyles';
import AtomAvatar from '.';

/* avatar 56x56px */
const AtomAvatarSize56 = withStyles(
  theme => ({
    root: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      cursor: 'pointer',
    },
  }),
  { name: 'AtomAvatarSize56' },
)(AtomAvatar);
export default AtomAvatarSize56;
