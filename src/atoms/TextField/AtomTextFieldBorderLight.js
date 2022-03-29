import withStyles from '@material-ui/core/styles/withStyles';
import AtomTextField from '.';

/* xem : https://material-ui.com/components/text-fields/#customized-inputs */
const AtomTextFieldBorderLight = withStyles(
  theme => ({
    root: {
      '& [class*="MuiInput-underline"]:before': {
        borderBottomColor: theme.palette.grey[300],
      },
      '& [class*="MuiOutlinedInput-root"]': {
        '& fieldset': {
          borderColor: theme.palette.grey[300],
        },
      },
    },
  }),
  {
    name: 'AtomTextFieldBorderLight',
  },
)(AtomTextField);
export default AtomTextFieldBorderLight;
