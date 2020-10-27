import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import SportsCard from './sportsCard'
import GraphicsCard from './graphicsCard'
import Grid from '@material-ui/core/Grid'

export default class Education extends Component {
    render() {
        return (
            <Container maxWidth="sm" class={"introBox"} id="hobbies">
                <Typography variant="h6" style={{ textAlign: 'left', paddingTop: '10px', paddingLeft: '20px' }} noWrap>
                Hobbies
                </Typography>
                <hr/>
                <Grid container spacing={0} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item lg={1}>
                    </Grid>
                    <Grid item lg={5} style={{ display: 'flex', justifyContent: 'center' }}>
                        <SportsCard/>
                    </Grid>
                    <Grid item lg={5} style={{ display: 'flex', justifyContent: 'center' }}>
                        <GraphicsCard/>
                    </Grid>
                    <Grid item lg={1}>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}