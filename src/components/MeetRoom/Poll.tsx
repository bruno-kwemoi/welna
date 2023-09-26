import Add from '@mui/icons-material/Add';
import { Dialog, IconButton, Stack, TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles'
import { useState } from 'react';

const CustomStack = styled(Stack)(() => ({
    display: 'flex',
    padding: '24px',
    alignItems: 'flex-start',
    gap: '16px',
    alignSelf: 'stretch',
}))

const CustomButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(3),
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1.25),
    letterSpacing: 0.1
}))

function Poll({ open, onClose }) {
    const title = 'Create New Poll';
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['Option 1', 'Option 2']);

    const addOption = () => {
        setOptions([...options, '']);
    };

    const deleteOption = (indexToDelete) => {
        if (indexToDelete === 0) {
            return;
        }
        const newOptions = options.filter((_, index) => index !== indexToDelete);
        setOptions(newOptions);
    };

    const handleOptionChange = (index, value) => {
        const updatedOptions = [...options];
        updatedOptions[index] = value;
        setOptions(updatedOptions);
    };

    return (
        <Dialog open={open}>
            <CustomStack>
                <Typography variant='h3'>
                    {title}
                </Typography>
            </CustomStack>
            <Stack sx={{
                display: 'flex',
                padding: '10px 16px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '24px',
            }}>
                <TextField fullWidth
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}
                    label='Question'
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)} />
            </Stack>
            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 24px 0px 24px',
                gap: '10px',
            }}>
                <Typography>Options</Typography>
                <Button variant='text' startIcon={<Add />} onClick={addOption}>Add New Option</Button>
            </Stack>
            <Stack sx={{
                display: 'flex',
                padding: '16px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '16px',
                alignSelf: 'stretch'
            }}>
                {options.map((option, index) => (
                    <Stack key={index} sx={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
                        <TextField
                            fullWidth
                            label={`Option ${index + 1}`}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                            value={option}
                        />
                        {index !== 0 && (
                            <IconButton onClick={() => deleteOption(index)}>
                                <img src='./assets/Icon.svg' />
                            </IconButton>
                        )}
                    </Stack>
                ))}
            </Stack>
            <CustomStack sx={{
                flexDirection: 'row',
                padding: '24px 24px 24px 16px',
                justifyContent: 'flex-end',
                gap: '8px',
            }}>
                <CustomButton
                    onClick={() => onClose()}
                >Cancel</CustomButton>
                <CustomButton variant='contained'
                >
                    Next
                </CustomButton>
            </CustomStack>
        </Dialog>
    )
}

export default Poll