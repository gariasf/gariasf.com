/**
 * This file is a mess, my excuse is: This is a PoC
 */

import React from 'react'

// @ts-ignore
import styles from './styles.scss'

import {
  Button,
  AppBar,
  Toolbar,
  Container,
  Typography,
  useScrollTrigger,
  PaperProps,
  Paper,
  Dialog,
  DialogContent,
  DialogContentText,
  Link,
  withStyles,
  WithStyles,
  IconButton,
  Theme,
  createStyles,
} from '@material-ui/core'
import Draggable from 'react-draggable'
import CameraTwoToneIcon from '@material-ui/icons/CameraTwoTone'
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone'
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import CloseIcon from '@material-ui/icons/Close'
import MuiDialogTitle from '@material-ui/core/DialogTitle'

const stylesz = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      cursor: 'move',
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
      '&:hover': {
        backgroundColor: 'rgba(255,255,255,.1)',
      },
    },
  })

function ElevationScroll(props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(props.children, {
    elevation: trigger ? 4 : 0,
  })
}

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string
  children: React.ReactNode
  onClose: () => void
}

function PaperComponent(props: PaperProps) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  )
}

const DialogTitle = withStyles(stylesz)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

export const Header: React.FunctionComponent = props => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <ElevationScroll {...props}>
      <AppBar className={styles.appBar}>
        <Toolbar>
          <Container maxWidth="lg" className={styles.toolbarContainer}>
            <Typography variant="h6" color="primary" className={styles.title}>
              <CameraTwoToneIcon />
              &nbsp; Little pieces of time
            </Typography>
            <Button
              color="primary"
              variant="outlined"
              href="https://github.com/gariasf"
              target="_blank"
              className={styles.toolbarButton}
            >
              <CodeOutlinedIcon fontSize="small" />
              &nbsp;OSS
            </Button>
            <Button
              color="primary"
              variant="outlined"
              className={styles.toolbarButton}
              onClick={handleClickOpen}
            >
              <InfoTwoToneIcon fontSize="small" />
              &nbsp;About
            </Button>
            <Dialog
              open={open}
              className={styles.dialogPaper}
              onClose={handleClose}
              PaperComponent={PaperComponent}
              aria-labelledby="draggable-dialog-title"
            >
              <DialogTitle onClose={handleClose} id="draggable-dialog-title">
                <Typography
                  color="primary"
                  variant="h5"
                  className={styles.dialogTitle}
                >
                  <InfoTwoToneIcon />
                  &nbsp;About this site
                </Typography>
              </DialogTitle>
              <DialogContent>
                <DialogContentText className={styles.dialogContent}>
                  <Typography color="primary" variant="body1">
                    "To quote out of context is the essence of the photographers
                    craft."
                  </Typography>
                  <br />
                  <Typography color="primary" variant="body2">
                    We take pieces of reality with the intent of capturing a
                    particularity about it.
                    <br />
                    Particular moments captured in a frame. <br />
                    Little pieces of time.
                  </Typography>
                  <br />
                  <Typography
                    className={styles.contactLink}
                    color="primary"
                    align="right"
                    variant="body2"
                  >
                    <EmailOutlinedIcon fontSize="small" />
                    &nbsp;Want to talk?&nbsp;
                    <Link href="mailto:hello@gariasf.com" color="secondary">
                      Get in touch
                    </Link>
                    .
                  </Typography>
                </DialogContentText>
              </DialogContent>
            </Dialog>
            <style jsx global>{`
              .MuiPaper-root {
                background-color: rgba(14, 14, 22, 0.9);
              }
            `}</style>
          </Container>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}
