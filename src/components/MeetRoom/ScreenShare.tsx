import { useState } from "react";

import { Button, ButtonGroup, Stack } from "@mui/material"
import CustomModal from "../customModal"
import CheckIcon from '@mui/icons-material/Check';

function ScreenShare({ screenShare, stopShare }) {
    const [isSelected, setSelected] = useState('selected');

    const handleSelected = () => setSelected('selected');
    const handleWindow = () => setSelected('window');
    const handleEntireScreen = () => setSelected('EntireScreen');

    return (
        <CustomModal
            open={screenShare}
            title="Choose Screen to share"
            subtitle="Please choose which screen would you like to share"
            onClickCancel={() => stopShare()}
            onClickNext={() => { console.log("Clicked next") }}>
            <Stack sx={{ padding: '16px' }}>
                <ButtonGroup sx={{ borderRadius: '100', '& > *': { width: '100%' } }}>
                    <Button sx={{ borderRadius: '100px' }}
                        onClick={handleSelected}
                        variant={isSelected === 'selected' ? 'contained' : 'outlined'}
                        startIcon={isSelected === 'selected' ? <CheckIcon /> : null}>
                        Chrome Tab
                    </Button>
                    <Button sx={{ borderRadius: '100px' }}
                        onClick={handleWindow}
                        variant={isSelected === 'window' ? 'contained' : 'outlined'}
                        startIcon={isSelected === 'window' ? <CheckIcon /> : null}>
                        Window
                    </Button>
                    <Button sx={{ borderRadius: '100px' }}
                        onClick={handleEntireScreen}
                        variant={isSelected === 'EntireScreen' ? 'contained' : 'outlined'}
                        startIcon={isSelected === 'EntireScreen' ? <CheckIcon /> : null}>
                        Entire Screen
                    </Button>
                </ButtonGroup>
            </Stack>
        </CustomModal>
    )
}

export default ScreenShare
