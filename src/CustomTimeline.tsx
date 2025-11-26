import { useRef, useState, useEffect } from 'react'
import { Box, Grid, IconButton } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import CustomCard from './CustomCard'

const CustomTimeline = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        flexWrap: { xs: 'nowrap', md: 'nowrap', xl: 'wrap' },
        overflowX: { xs: 'auto', md: 'auto', xl: 'visible' },
        scrollbarWidth: 'thin'
      }}
    >
      <Grid size={{ xs: 'auto', md: 'auto', xl: 12 }}>
        <CustomCard />
      </Grid>

      <Grid size={{ xs: 'auto', md: 'auto', xl: 12 }}>
        <CustomCard />
      </Grid>

      <Grid size={{ xs: 'auto', md: 'auto', xl: 12 }}>
        <CustomCard />
      </Grid>

      <Grid size={{ xs: 'auto', md: 'auto', xl: 12 }}>
        <CustomCard />
      </Grid>
    </Grid>
  )
}

export default CustomTimeline
