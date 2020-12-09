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

export default function SportsCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} style={{ margin: '20px', minWidth: '312px', width: '100%', textAlign: 'center' }}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="https://i.imgur.com/ZBYxCP0.jpg"
            title="Sports!"
            />
            <CardContent style={{ minHeight: '157px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-75px' }}>
                <Avatar
                src="https://i.imgur.com/knbVGjR.png"
                style={{
                width: 75,
                height: 75,
                transition: "0.3s",
                border: "3px solid #EEE"
                }}
                />
            </div>
            <Typography component="h2" variant={"h6"} style={{ marginTop: '.35rem' }} noWrap>
                Sports!
            </Typography>
            <div style={{textAlign: 'left'}}>
                <Typography variant="body2" color="textSecondary" component="p">
                    I've loved sports my entire life; I grew up watching, keeping up with, discussing, and playing them!
                    My dad raised me as a Pittsburgh Steelers and Mississippi State fan, and I uphold those fandoms to this day.
                </Typography>
                <br/>
                <Typography variant="body2" color="textSecondary" component="p">
                    As a student at Mississippi State over the past four years, I've spent a ton of time at Davis Wade Stadium, 
                    Humphrey Colisuem, and Dudy Noble Field, and I've loved every second of it.
                </Typography>
            </div>
            </CardContent>
        </CardActionArea>
        <CardActions style={{ display: 'block' }}>
            <Button id="cardLink" size="small" color="primary" href="https://www.espn.com/college-football/recap?gameId=401237035" target="_blank">
                This was more impressive at the time
            </Button>
            <Button id="cardLink" size="small" color="primary" href="https://youtu.be/H6raROCHPL0?t=4980" target="_blank">
                National TV Screentime
            </Button>
            <Button id="cardLink" size="small" color="primary" href="https://www.youtube.com/watch?v=dUcrAakhOj0" target="_blank">
                I Stood Five Hours For This Moment
            </Button>
            <Button id="cardLink" size="small" color="primary" href="https://www.youtube.com/watch?v=oEoTvQJKhpE" target="_blank">
                Greatest Moment of My Childhood
            </Button>
        </CardActions>
        </Card>
    );
}