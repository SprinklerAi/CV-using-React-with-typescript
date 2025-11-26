import './App.css'
import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import CustomAppBar from './CustomAppBar'
import CustomTimeline from './CustomTimeline'

function App() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
          setError(null)
        },
        () => setError('Geolocation service failed.')
      )
    } else {
      setError("Your browser doesn't support geolocation.")
    }
  }

  return (
    <>
      <CustomAppBar />

      <Grid container spacing={2} sx={{ mt: 10, alignItems: 'flex-start' }}>
        {/* Timeline */}
        <Grid size={{ xs: 12, md: 12, xl: 6 }} offset={{ xs: 0, md: 0, xl: 0 }}>
          <CustomTimeline />
        </Grid>

        {/* Project Details */}
        <Grid size={{ xs: 12, md: 12, xl: 6 }} offset={{ xs: 0, md: 0, xl: 0 }}>
          <Card sx={{ p: 5 }}>
            <CardContent>
              <Typography variant="h3" gutterBottom textAlign="left">
                Project Title
              </Typography>
              <Typography variant="body1" color="text.secondary" textAlign="justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </>
  )
}

export default App
