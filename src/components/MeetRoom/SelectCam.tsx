import { useState } from 'react'
import CustomModal from '../customModal'
import { Autocomplete, InputAdornment, Stack, TextField } from '@mui/material';
import VideocamOutlined from '@mui/icons-material/VideocamOutlined';

function SelectCam({ open, onClose }) {
  const title = 'Select Video Camera';
  const subtitle = 'Please choose which camera would you like to use';
  const options = ['Built-in Cam (Macbook Pro)'];

  return (
    <CustomModal
      open={open}
      title={title}
      subtitle={subtitle}
      onClickCancel={() => onClose()}
      onClickNext={() => { console.log("Clicked next") }} >
      <Autocomplete
        sx={{
          padding: '0px 24px 10px 24px',
          gap: '10px'
        }}
        disableClearable
        options={options}
        aria-required
        renderInput={(params) => <TextField {...params}
          sx={{
            borderRadius: '4px 4px 0px 0px'
          }}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <VideocamOutlined />
              </InputAdornment>
            )
          }} />} />
      <Stack sx={{
        display: 'flex',
        padding: '16px 24px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '10px',
        alignSelf: 'stretch',
        height: '572px'
      }}>
        No Video
      </Stack>
    </CustomModal>
  )
}

export default SelectCam
