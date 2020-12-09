import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Icon from "@material-ui/core/Icon"
import Grid from '@material-ui/core/Grid'
import { Instagram, LinkedIn, GitHub, Phone, Email, ListAlt } from '@material-ui/icons'

const contactInfo = [
    {
      primaryText: "Instagram",
      link: "https://www.instagram.com/paul.sullivan.12/",
      icon: <Instagram/>
    },
    {
      primaryText: "LinkedIn",
      link: "https://www.linkedin.com/in/paul-sullivan-872832161/",
      icon: <LinkedIn/>
    },
    {
      primaryText: "Github",
      link: "https://github.com/jps531",
      icon: <GitHub/>
    },
    {
      primaryText: "Email",
      link: "mailto:jefferypaulsullivan@gmail.com",
      icon: <Email/>
    },
    {
      primaryText: "601-283-5693",
      link: "tel:601-283-5693",
      icon: <Phone/>
    },
    {
      primaryText: "View Resume",
      link: "https://www.dropbox.com/s/tzcfh4jwh78jf93/JeffreyPaulSullivan_Resume_Dec20.pdf?dl=0",
      icon: <ListAlt/>
    }
  ];

export default class Contact extends Component {
    render() {
        return (
            <Container maxWidth="sm" class={"introBox"} id="contact">
                <Typography variant="h6" style={{ textAlign: 'left', paddingTop: '10px', paddingLeft: '20px' }} noWrap>
                Contact
                </Typography>
                <hr/>
                <Grid container spacing={0} direction="row" alignItems="center" style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
                    {contactInfo.map(({ primaryText, link, icon }, i) => (
                        <Grid item lg={2} width="100%" alignItems="center" style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button id="cardLink" size="medium" href={link} style={{ width: '100%' }} target="_blank">
                                <Grid item container lg={12} direction="row" alignItems="center" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Grid item>
                                        <Icon>{icon}</Icon>
                                    </Grid>
                                    <Grid item>
                                        <Typography>{primaryText}</Typography>
                                    </Grid>
                                </Grid>
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        )
    }
}