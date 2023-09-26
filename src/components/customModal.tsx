import { Dialog, Stack, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles'

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

export const CustomModal: React.FC<{
    open: boolean;
    title: string;
    subtitle: string;
    children: React.ReactNode;
    onClickCancel: () => void;
    onClickNext: () => void;
}> = ({ open = true, title, subtitle, onClickCancel, onClickNext, children }) => {

    return (
        <Dialog open={open}>
            <CustomStack>
                <Typography variant='h3'>
                    {title}
                </Typography>
                <Typography variant='subtitle2'>
                    {subtitle}
                </Typography>
            </CustomStack>
            {children}
            <CustomStack sx={{
                flexDirection: 'row',
                padding: '24px 24px 24px 16px',
                justifyContent: 'flex-end',
                gap: '8px',
            }}>
                <CustomButton
                    onClick={onClickCancel}
                >Cancel</CustomButton>
                <CustomButton variant='contained'
                    onClick={onClickNext}
                >
                    Next
                </CustomButton>
            </CustomStack>
        </Dialog>
    );
};

export default CustomModal