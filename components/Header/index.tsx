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
  return (
    <ElevationScroll {...props}>
      <AppBar 
      className={styles.appBar}
      >
        <Toolbar>
          <Container maxWidth="lg" 
          className={styles.toolbarContainer}
          >
            <Typography variant="h6" color="primary" 
            className={styles.title}
            >
              Little pieces of time
            </Typography>
            <Button
              color="primary"
              variant="outlined"
              href="https://github.com/gariasf"
              target="_blank"
              className={styles.toolbarButton}
            >
              OSS
            </Button>
            <Button
              color="primary"
              variant="outlined"
              disabled
              className={styles.toolbarButton}
            >
              About
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
  )
}
