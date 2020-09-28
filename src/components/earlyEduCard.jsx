import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function StateCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} style={{ margin: '20px', minWidth: '312px', textAlign: 'center' }}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="https://i.imgur.com/MsT1VYQ.jpg"
            title="Early Education"
            />
            <CardContent style={{ minHeight: '342px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-75px' }}>
                <Avatar
                src="https://i.imgur.com/2D8EThL.png"
                style={{
                width: 75,
                height: 75,
                transition: "0.3s",
                border: "3px solid #EEE"
                }}
                />
            </div>
            <Typography component="h2" variant={"h6"} style={{ marginTop: '.35rem' }} noWrap>
                Early Childhood Education
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Software Engineering Senior Project
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                Group Project, Spring 2020
            </Typography>
            <br/>
            <hr/>
            <br/>
            <div style={{textAlign: 'left'}}>
                <Typography variant="body2" color="textSecondary" component="p">
                    - Created a website that digitized paper forms for a local preschool.
                </Typography>
                <br/>
                <Typography variant="body2" color="textSecondary" component="p">
                    - Gained experience completing a team project remotely during the COVID-19 pandemic.
                </Typography>
                <br/>
                <Typography variant="body2" color="textSecondary" component="p">
                    - Designed and implemented the entire front-end of the website using Bootstrap.
                </Typography>
            </div>
            </CardContent>
        </CardActionArea>
        <CardActions style={{ display: 'flex', justifyContent: 'center'}}>
            <Button id="cardLink" size="small" color="primary" href="https://drive.google.com/file/d/1S4gX3bqYnuu2w9YbKUCBc2nn88GsK4m2/view?usp=sharing" target="_blank">
            Early Education Walkthrough
            </Button>
        </CardActions>
        </Card>
    );
}