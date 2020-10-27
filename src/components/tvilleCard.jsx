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
      maxWidth: 345
    },
    media: {
      height: 140,
    },
  });

export default function TvilleCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} style={{ margin: '20px', minWidth: '312px', textAlign: 'center' }}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="https://i.imgur.com/muTNHDD.jpg"
            title="Taylorsville High School"
            />
            <CardContent style={{ minHeight: '157px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-75px' }}>
                <Avatar
                src="https://i.imgur.com/BwI0GYg.png"
                style={{
                width: 75,
                height: 75,
                transition: "0.3s",
                border: "3px solid #EEE"
                }}
                />
            </div>
            <Typography component="h2" variant={"h6"} style={{ marginTop: '.35rem' }} noWrap>
                Taylorsville High School
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                Taylorsville, MS. 2012-2016
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                2016 National Merit Finalist
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                2016 THS STAR Student
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                THS Class of 2016 Salutatorian
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions style={{ display: 'flex', justifyContent: 'center'}}>
            <Button id="cardLink" size="small" href="https://sites.google.com/smithcountyschools.net/tac" target="_blank">
            smithcountyschools.net/tac
            </Button>
        </CardActions>
        </Card>
    );
}