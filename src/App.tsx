import './App.css'
import './i18n'
import { Card, CardContent, CardMedia, Grid, Typography, Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import CustomAppBar from './CustomAppBar'
import CustomTimeline from './CustomTimeline'

import { useState } from 'react'

function App() {
  const [selectedHeader, setSelectedHeader] = useState<string | null>(null)
  const { t } = useTranslation()
  const openDescription = ({ item }: { item: string }) => (
    <Card sx={{ p: 5 }} elevation={24}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <Typography gutterBottom variant="h3" component="div">
            {t(`card.${item}.header`)}
          </Typography>
          <CardMedia
            component="img"
            image="images/ProfilePic.png"
            sx={{ width: 150, objectFit: 'cover' }}
          />
        </Box>
        <Typography variant="body1" color="text.secondary" textAlign="justify">
          {t(`card.${item}.description`)}
        </Typography>
      </CardContent>
    </Card>
  )

  return (
    <>
      <CustomAppBar />

      <Grid container spacing={2} sx={{ mt: 10, alignItems: 'flex-start' }}>
        {/* Timeline */}
        <Grid size={{ xs: 12, md: 12, xl: 6 }} offset={{ xs: 0, md: 0, xl: 0 }}>
          <CustomTimeline onCardClick={setSelectedHeader} />
        </Grid>

        {/* Project Details */}
        <Grid size={{ xs: 12, md: 12, xl: 6 }} offset={{ xs: 0, md: 0, xl: 0 }}>
          {selectedHeader && openDescription({ item: selectedHeader })}
        </Grid>
      </Grid>
    </>
  )
}

export default App
