import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import StateCard from './stateCard'
import TvilleCard from './tvilleCard'
import Grid from '@material-ui/core/Grid'

export default class Education extends Component {
    render() {
        return (
            <Container maxWidth="sm" class={"introBox"} id="education">
                <Typography variant="h6" style={{ textAlign: 'left', paddingTop: '10px', paddingLeft: '20px' }} noWrap>
                Education
                </Typography>
                <hr/>
                <Grid container spacing={0} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item lg={1}>
                    </Grid>
                    <Grid item lg={5} style={{ display: 'flex', justifyContent: 'center' }}>
                        <StateCard/>
                    </Grid>
                    <Grid item lg={5} style={{ display: 'flex', justifyContent: 'center' }}>
                        <TvilleCard/>
                    </Grid>
                    <Grid item lg={1}>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}