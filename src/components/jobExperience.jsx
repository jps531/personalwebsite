import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import AdtranCard from './adtranCard'
import CamgianCard from './camgianCard'
import Grid from '@material-ui/core/Grid';

export default class JobExperience extends Component {
    render() {
        return (
            <Container maxWidth="sm" class={"introBox"} id="work">
                <Typography variant="h6" style={{ textAlign: 'left', paddingTop: '10px', paddingLeft: '20px' }} noWrap>
                Work Experience
                </Typography>
                <hr/>
                <Grid container spacing={0} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item lg={1}>
                    </Grid>
                    <Grid item lg={5} style={{ display: 'flex', justifyContent: 'center' }}>
                        <CamgianCard/>
                    </Grid>
                    <Grid item lg={5} style={{ display: 'flex', justifyContent: 'center' }}>
                        <AdtranCard/>
                    </Grid>
                    <Grid item lg={1}>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}