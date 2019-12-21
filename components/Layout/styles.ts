import { makeStyles, Theme, createStyles } from '@material-ui/core'
import theme from '../theme'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    backToTopButton: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    }
  })
)

export default useStyles
