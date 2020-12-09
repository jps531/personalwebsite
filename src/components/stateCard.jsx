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
        <Card className={classes.root} style={{ margin: '20px', minWidth: '312px', width: '100%', textAlign: 'center' }}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="https://i.imgur.com/D5CzRbY.jpg"
            title="Mississippi State University"
            />
            <CardContent style={{ minHeight: '157px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-75px' }}>
                <Avatar
                src="https://i.imgur.com/i68kYYh.png"
                style={{
                width: 75,
                height: 75,
                transition: "0.3s",
                border: "3px solid #EEE"
                }}
                />
            </div>
            <Typography component="h2" variant={"h6"} style={{ marginTop: '.35rem' }} noWrap>
                Mississippi State University
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                Starkville, MS. 2016-2020
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                <b>B.S. in Software Engineering</b>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Minor in Philosophy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                GPA 3.90/4.00
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions style={{ display: 'flex', justifyContent: 'center'}}>
            <Button id="cardLink" size="small" color="primary" href="https://www.cse.msstate.edu/" target="_blank">
            cse.msstate.edu
            </Button>
        </CardActions>
        </Card>
    );
}