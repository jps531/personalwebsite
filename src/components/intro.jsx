import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';

export default class Intro extends Component {
    render() {
        return (
            <Container maxWidth="sm" class={"introBox"} id="introduction">
            <Typography variant="h6" style={{ textAlign: 'left', paddingTop: '10px', paddingLeft: '20px' }} noWrap>
              Introduction
            </Typography>
            <hr/>
            <Typography color={"textSecondary"} class={"secondaryTextBody"} paragraph noWrap gutterBottom>
                Hi! My name is Paul, and I'm a soon-to-be Software Engineering graduate from Mississippi State University!
            </Typography>
            <Typography color={"textSecondary"} class={"secondaryTextBody"} paragraph noWrap gutterBottom>
                I grew up in Taylorsville, Mississippi, a small town (~1400 population) in south Mississippi. I was raised a Mississippi State fan by my father
                (MSU Electrical Engineering C/O 1993) and developed an interest in technology throughout my youth. I've owned a variety of Apple products throughout
                my life, and I've always enjoyed watching the software on my devices evolve over time as the user needs and devices themselves have changed. As a result,
                I became interested in pursuing a career in which I could work on creating and adapting software, improving user experiences and making people's lives better.
            </Typography>
            <Typography color={"textSecondary"} class={"secondaryTextBody"} paragraph noWrap gutterBottom>
                It worked out perfectly that the university which I had grown up visiting multiple times a year for football and baseball games offered a curriculum in
                Software Engineering. After graduating High School in 2016, I moved to Starkville and began pursuing a degree. Now, four years later, I'm set to graduate this
                November with a Bachelor of Science in Software Engineering. I've learned a lot and gained a great deal of experience in my time at Mississippi State, and I'm
                looking forward to translating what I've learned into a career.
            </Typography>
            <Typography color={"textSecondary"} class={"secondaryTextBody"} paragraph noWrap gutterBottom>
                I have significant coding experience in C++ and Python, web development experience with HTML, CSS, PHP, JavaScript, and Typescript, including experience with
                front-end frameworks Angular, Bootstrap, and ReactJS (which is how this website was developed). I'm familiar with common data structures, algorithms,
                relational SQL databaes, and I'm proficient in Adobe Photoshop and Adobe XD.
            </Typography>
            </Container>
        )
    }
}