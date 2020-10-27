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
            image="https://i.imgur.com/Fu1PZo7.jpg"
            title="Hail State Unis Database"
            />
            <CardContent style={{ minHeight: '342px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-75px' }}>
                <Avatar
                src="https://i.imgur.com/zsjT6ar.png"
                style={{
                width: 75,
                height: 75,
                transition: "0.3s",
                border: "3px solid #EEE"
                }}
                />
            </div>
            <Typography component="h2" variant={"h6"} style={{ marginTop: '.35rem' }} noWrap>
                Hail State Unis Database
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Personal Project
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                Summer 2020
            </Typography>
            <br/>
            <hr/>
            <br/>
            <div style={{textAlign: 'left'}}>
                <Typography variant="body2" color="textSecondary" component="p">
                    - Created a website that queries a database to load filterable tables which contain historical game records of four different Mississippi State sports teams.
                </Typography>
                <br/>
                <Typography variant="body2" color="textSecondary" component="p">
                    - Initiated and completed a personal project when other opportunities were canceled.
                </Typography>
                <br/>
                <Typography variant="body2" color="textSecondary" component="p">
                    - Built using PHP, CSS, JavaScript, Bootstrap, and SQL; deployed using AWS Lightsail.
                </Typography>
            </div>
            </CardContent>
        </CardActionArea>
        <CardActions style={{ display: 'block' }}>
            <Button id="cardLink" size="small" color="primary" href="https://www.hailstateunisdatabase.com/" target="_blank">
            hailstateunisdatabase.com
            </Button>
            <Button id="cardLink" size="small" color="primary" href="https://github.com/jps531/hailstateunis" target="_blank">
            Hail State Unis Database on Github
            </Button>
        </CardActions>
        </Card>
    );
}