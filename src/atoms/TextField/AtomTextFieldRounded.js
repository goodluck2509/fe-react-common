import withStyles from '@material-ui/core/styles/withStyles';
import AtomTextField from '.';

/* xem : https://material-ui.com/components/text-fields/#customized-inputs */
const AtomTextFieldRounded = withStyles(
  () => ({
    root: {
      '& [class*="MuiOutlinedInput-root"]': {
        '& fieldset': {
          borderRadius: 99,
        },
      },
    },
  }),
  {
    name: 'AtomTextFieldRounded',
  },
)(AtomTextField);
export default AtomTextFieldRounded;
