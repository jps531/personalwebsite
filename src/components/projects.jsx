import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import CosmicCard from './cosmicCard'
import EarlyEduCard from './earlyEduCard'
import HsuCard from './hsuCard'
import Grid from '@material-ui/core/Grid'

export default class JobExperience extends Component {
    render() {
        return (
            <Container maxWidth="sm" class={"introBox"} id="projects">
                <Typography variant="h6" style={{ textAlign: 'left', paddingTop: '10px', paddingLeft: '20px' }} noWrap>
                Projects
                </Typography>
                <hr/>
                <Grid container spacing={0} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item lg={4} style={{ display: 'flex', justifyContent: 'center' }}>
                        <CosmicCard/>
                    </Grid>
                    <Grid item lg={4} style={{ display: 'flex', justifyContent: 'center' }}>
                        <EarlyEduCard/>
                    </Grid>
                    <Grid item lg={4} style={{ display: 'flex', justifyContent: 'center' }}>
                        <HsuCard/>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}