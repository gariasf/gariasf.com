import { makeStyles, Theme, createStyles } from '@material-ui/core'
import theme from '../theme'

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      backgroundColor: 'rgba(31, 34, 43, 0.86)',
      zIndex: 'initial'
    },
    toolbarButton: {
      '& span': {
        textTransform: 'capitalize',
      },
      '&:not(:last-child)': {
        marginRight: theme.spacing(2),
      },
      '&[disabled]': {
        color: '#d0d0d0',
      },
      borderColor: 'transparent',
      borderRadius: '50px',
      opacity: 0.9,
    },
    title: {
      flexGrow: 1,
      lineHeight: 'initial',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      '@media (max-width: 500px)': {
        fontSize: '1rem',
      },
      '@media (max-width: 450px)': {
        fontSize: '.7rem',
      },
    },
    toolbarContainer: {
      display: 'flex',
      padding: 0,
    },
   
  })
)

export default useStyles
