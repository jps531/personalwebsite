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
            image="https://i.imgur.com/OO1hDlU.jpg"
            title="ADTRAN"
            />
            <CardContent style={{ minHeight: '157px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-75px' }}>
                <Avatar
                src="https://i.imgur.com/Kf6nL7d.png"
                style={{
                width: 75,
                height: 75,
                transition: "0.3s",
                border: "3px solid #EEE"
                }}
                />
            </div>
            <Typography component="h2" variant={"h6"} style={{ marginTop: '.35rem' }} noWrap>
                ADTRAN, Inc.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Software Engineering Co-Op
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Huntsville, AL
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                August 2019 - December 2019
            </Typography>
            <br/>
            <hr/>
            <br/>
            <div style={{textAlign: 'left'}}>
                <Typography variant="body2" color="textSecondary" component="p">
                    - Worked on an agile software development team to develop and refine front-end software built with Angular.
                </Typography>
                <br/>
                <Typography variant="body2" color="textSecondary" component="p">
                    - Obtained a new perspective and interest in UX issues through various bug fixes and feature implementations.
                </Typography>
                <br/>
                <Typography variant="body2" color="textSecondary" component="p">
                    - Gained invaluable experience working with a team within a professional environment.
                </Typography>
                <br/>
                <Typography variant="body2" color="textSecondary" component="p">
                    - Competed in company-wide hackathon, working on a team that won <i>Best Co-Op Project.</i>
                </Typography>
            </div>
            </CardContent>
        </CardActionArea>
        <CardActions style={{ display: 'flex', justifyContent: 'center'}}>
            <Button id="cardLink" size="small" color="primary" href="https://www.adtran.com/" target="_blank">
            adtran.com
            </Button>
        </CardActions>
        </Card>
    );
}