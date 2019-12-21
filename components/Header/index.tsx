import React from 'react'

import useStyles from './styles'
import {
  Button,
  AppBar,
  Toolbar,
  Container,
  Typography,
  useScrollTrigger,
  Zoom,
} from '@material-ui/core'

function ElevationScroll(props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(props.children, {
    elevation: trigger ? 4 : 0,
  });
}





export const Header: React.FunctionComponent = (props) => {
  const classes = useStyles({})
  return (
    <ElevationScroll {...props}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Container maxWidth="lg" className={classes.toolbarContainer}>
            <Typography variant="h6" color="primary" className={classes.title}>
              Little pieces of time
            </Typography>
            <Button
              color="primary"
              variant="outlined"
              href="https://github.com/gariasf"
              target="_blank"
              className={classes.toolbarButton}
            >
              OSS
            </Button>
            <Button
              color="primary"
              variant="outlined"
              disabled
              className={classes.toolbarButton}
            >
              About
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
  )
}
