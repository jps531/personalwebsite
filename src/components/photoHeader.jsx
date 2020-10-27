import React, { Component } from 'react'
import Container from '@material-ui/core/Container'

export default class PhotoHeader extends Component {
    render() {
        return (
            <div id="headerPicDiv">
                <img src="https://i.imgur.com/XEqltEp.jpg" id="headerPic"></img>
            </div>
        )
    }
}