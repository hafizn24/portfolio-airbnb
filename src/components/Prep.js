import {Box, Typography } from '@mui/material'

import pdf from './pdf/Airbnb Preprocessing.pdf'

function Prep() {
  return (
    <>
        <Box sx={{mt:8, mb:6}}>
            <Typography variant='h5' align="center" color="primary.dark"><b>Data Preparation</b></Typography>
        </Box>
        <Box
          align="center"
            sx={{
                width: '100%',
                height: '1000',
                backgroundColor: 'secondary.main',
            }}
        >
          <iframe src={pdf} frameborder="0" width="50%" height="550"></iframe>
        </Box>
    </>
  )
}

export default Prep