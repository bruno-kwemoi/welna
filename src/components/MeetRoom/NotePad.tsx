import React from 'react'
import { Stack, styled } from '@mui/material'

const CustomContainer = styled(Stack)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    border: '1px solid #269BB4',
    position: 'relative',
    height: '100%',
    borderRadius: '10px',
    backgroundColor: 'white',
}));

function NotePad() {
    return (
        <CustomContainer>
            Notepad
        </CustomContainer>
    )
}

export default NotePad
