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
            image="https://i.imgur.com/Hi6uDQI.png?1"
            title="Graphics!"
            />
            <CardContent style={{ minHeight: '157px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-75px' }}>
                <Avatar
                src="https://i.imgur.com/PFf88J1.png"
                style={{
                width: 75,
                height: 75,
                transition: "0.3s",
                border: "3px solid #EEE"
                }}
                />
            </div>
            <Typography component="h2" variant={"h6"} style={{ marginTop: '.35rem' }} noWrap>
                Graphics!
            </Typography>
            <div style={{textAlign: 'left'}}>
                <Typography variant="body2" color="textSecondary" component="p">
                    Over the last 10 years, I've enjoyed learning and using Adobe Photoshop to make various types of graphics!
                    What started out as a fun personal hobby has turned into something I've been able use in school and work projects.
                </Typography>
                <br/>
                <Typography variant="body2" color="textSecondary" component="p">
                    Primarily, I enjoy making sports graphics, often graphics related to Mississippi State sports, but my photoshop abilites
                    have come in handy for both scholastic and professional purposes. Learning how to utilize Adobe XD alongside Photoshop has
                    allowed me to made high-fidelity UI mockups, ensuring that projects I am working on have a well designed and thought out user experience!
                </Typography>
            </div>
            </CardContent>
        </CardActionArea>
        <CardActions style={{ display: 'flex', justifyContent: 'center'}}>
            <Button id="cardLink" size="small" color="primary" href="https://www.behance.net/hailstateunis" target="_blank">
            Behance Profile
            </Button>
        </CardActions>
        </Card>
    );
}