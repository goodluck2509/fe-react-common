import withStyles from '@material-ui/core/styles/withStyles';
import AtomTextField from '.';

/* textfield có chữ in hoa */
const AtomTextFieldUppercase = withStyles(
  () => ({
    root: {
      '& input': {
        textTransform: 'uppercase',
      },
    },
  }),
  {
    name: 'AtomTextFieldUppercase',
  },
)(AtomTextField);
export default AtomTextFieldUppercase;
