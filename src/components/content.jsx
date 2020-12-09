import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {GlobalStyles} from "./globalStyles"
import SideHeader from "./sidebarHeader.js";
import SideContent from "./sidebarContent.js";
import PhotoHeader from './photoHeader'
import Intro from './intro'
import JobExperience from './jobExperience'
import Projects from './projects'
import Education from './education'
import Hobbies from './hobbies'
import Contact from './contact'
import {Toggle} from "./toggler"
import {useDarkMode} from "./useDarkMode"
import {ThemeProvider} from "styled-components"
import {lightTheme, darkTheme} from "./Themes"
import Avatar from "@material-ui/core/Avatar";
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Icon from "@material-ui/core/Icon"
import { GitHub } from '@material-ui/icons'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            backgroundColor: '#424242',
            display: 'none'
      },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));  

function Content(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
};

const drawer = (
    <div>
    <div className={classes.toolbar} style={{ opacity: .1 }}/>
    <GlobalStyles/>
    <SideHeader></SideHeader>
    <SideContent></SideContent>
    </div>
);

const container = window !== undefined ? () => window().document.body : undefined;

const [themeX, themeToggler] = useDarkMode();
let themeMode = themeX === 'light' ? lightTheme : darkTheme;
  
return (
    <ThemeProvider theme={themeMode}>
    <>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ width: '100%'}}>
            <Typography variant="h6" style={{ textAlign: 'center'}} noWrap>
              Jeffrey Paul Sullivan
            </Typography>
            <Typography color={"textSecondary"} class={"secondaryText"} noWrap gutterBottom>
                Software Engineer
            </Typography>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', minWidth: '43px'}}>
            <Avatar src="https://i.imgur.com/96iZRGG.jpg" style={{ width: 40, height: 40 }} />
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="page sections">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <PhotoHeader/>
          <Intro/>
          <JobExperience/>
          <Projects/>
          <Education/>
          <Hobbies/>
          <Contact/>
            <Container maxWidth="sm" class={"introBox"}>
              <Grid container spacing={0} direction="row" alignItems="center" style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                <Grid item lg={6} width="100%" alignItems="center" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button id="cardLink" size="medium" href="https://github.com/jps531/personalwebsite" style={{ width: '100%' }} target="_blank">
                        <Grid item container lg={12} direction="row" alignItems="center" style={{ display: 'flex', justifyContent: 'center' }}>
                            <Grid item>
                            <Icon><GitHub/></Icon>
                            </Grid>
                            <Grid item>
                                <Typography>This Website on Github</Typography>
                            </Grid>
                        </Grid>
                    </Button>
                </Grid>
                <Grid item lg={6} width="100%" alignItems="center" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Container id="cardLink" size="medium" style={{ width: '100%' }}>
                        <Grid item container lg={12} direction="row" alignItems="center" style={{ display: 'flex', justifyContent: 'center' }}>
                            <Grid item>
                            <Toggle theme={themeX} toggleTheme={themeToggler} />
                            </Grid>
                            <Grid item>
                                <Typography>TOGGLE LIGHT/DARK MODE</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
              </Grid>
            </Container>
        <div className={classes.toolbar} />
      </main>
    </div>
    </>
    </ThemeProvider>
  );
}

export default Content;