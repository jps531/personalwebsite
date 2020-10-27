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
            image="https://i.imgur.com/LOILwmJ.jpg"
            title="Cosmic Commerce"
            />
            <CardContent style={{ minHeight: '342px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-75px' }}>
                <Avatar
                src="https://i.imgur.com/bbwJ9WT.png"
                style={{
                width: 75,
                height: 75,
                transition: "0.3s",
                border: "3px solid #EEE"
                }}
                />
            </div>
            <Typography component="h2" variant={"h6"} style={{ marginTop: '.35rem' }} noWrap>
                Cosmic Commerce
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Distributed Client/Server Programming
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                Group Project, Fall 2018
            </Typography>
            <br/>
            <hr/>
            <br/>
            <div style={{textAlign: 'left'}}>
                <Typography variant="body2" color="textSecondary" component="p">
                    - Created an e-commerce-style website that implemented databases, log-in features, and had a fully functioning and cohesive user interface.
                </Typography>
                <br/>
                <Typography variant="body2" color="textSecondary" component="p">
                    - Worked through the entire software development process.
                </Typography>
                <br/>
                <Typography variant="body2" color="textSecondary" component="p">
                    - Designed mockups and implemented both front-end and back-end features.
                </Typography>
            </div>
            </CardContent>
        </CardActionArea>
        <CardActions style={{ display: 'flex', justifyContent: 'center'}}>
            <Button id="cardLink" size="small" color="primary" href="https://github.com/Dilloncarley/cosmiccommerce" target="_blank">
            Cosmic Commerce on Github
            </Button>
        </CardActions>
        </Card>
    );
}