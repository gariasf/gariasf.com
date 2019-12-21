import React, { Children, Props } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import useStyles from './styles'
import { Header } from '../Header'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Toolbar, useScrollTrigger, Zoom, Fab } from '@material-ui/core'

function ScrollTop(props) {
  const classes = useStyles({});
 
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    console.log(anchor)

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.backToTopButton}>
        {props.children}
      </div>
    </Zoom>
  );
}

export const Layout: React.FunctionComponent = (props) => {
  return (
      <Scrollbars autoHeight
      autoHeightMin="100vh"
      universal
      autoHide
      renderThumbVertical={({ style, ...props }) =>
            <div {...props} style={{ ...style, backgroundColor: 'rgba(255,255,255,.4)', borderRadius: '4px', }}/>
        }
    >
     <Header />
     <Toolbar id="back-to-top-anchor" />
     <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      {props.children}
      </Scrollbars>
  )
}
