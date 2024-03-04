import './style.scss'
import React from 'react'
import { Container, Typography } from '@mui/material'

function PageHeader({ text }) {
    return (
        <Container className='page-title'>
            <Typography variant='h2'>{text.heading}</Typography>
            <Typography>{text.subText}</Typography>
        </Container>
    )
}

export default PageHeader;