import { Card, Box, Grid } from '@mui/material'
import CustomCard from './CustomCard'
import { useTranslation } from 'react-i18next'
import { useTheme, useMediaQuery } from '@mui/material'
import './i18n'  // or wherever your i18n.ts file is
import i18next from 'i18next'

const CustomTimeline = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const isXL = useMediaQuery(theme.breakpoints.up('xl'))
  console.log(i18next.getResource('en', 'translation', 'card.DistributedSystems.header'))


  return (
    <Box
      sx={{
        position: 'relative',
        px: { xs: 0, md: 0, xl: 13 },
        width: { xs: 'auto', md: 'auto', xl: '65vh' },
        '&::before': {
          content: '""',
          display: { xs: 'none', md: 'none', xl: 'block' },
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '50%',
          width: '2px',
          bgcolor: 'grey.500',
          transform: 'translateX(-50%)',
        }
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          flexWrap: { xs: 'nowrap', md: 'nowrap', xl: 'wrap' },
          overflowX: { xs: 'auto', md: 'auto', xl: 'visible' },
          scrollbarWidth: 'thin',
          scrollbarColor: 'brown transparent',
          width: { xs: 'auto', md: 'auto', xl: '100%' }
        }}
      >
        <Grid size={{ xs: 'auto', md: 'auto', xl: 12 }}>
          <CustomCard
            src="/images/KunnatApp.png"
            header={t("card.KunnatApp.header")}
            body={t("card.KunnatApp.body")}
          />
        </Grid>

        {isXL && (
          <Grid size={{ xs: 'auto', md: 'auto', xl: 6}}>
          <Card sx={{ width: 300, height: 260, display: 'flex', flexDirection: 'column', visibility: 'hidden', opacity: 0, pointerEvents: 'none' }} >
          </Card>
          </Grid >
        )}

        <Grid size={{ xs: 'auto', md: 'auto', xl: 6}}>
          <CustomCard
            src="/images/DistributedSystems.png"
            header={t("card.DistributedSystems.header")}
            body={t("card.DistributedSystems.body")}
          />
        </Grid >

        
        <Grid size={{ xs: 'auto', md: 'auto', xl: 6}}>
          <CustomCard
            src="/images/SQL.png"
            header={t("card.DatabaseManagement.header")}
            body={t("card.DatabaseManagement.body")}
          />
        </Grid>

        {isXL && (
          <Grid size={{ xs: 'auto', md: 'auto', xl: 6}}>
          <Card sx={{ width: 300, height: 260, display: 'flex', flexDirection: 'column', visibility: 'hidden', opacity: 0, pointerEvents: 'none' }} >
          </Card>
          </Grid >
        )}

        {isXL && (
          <Grid size={{ xs: 'auto', md: 'auto', xl: 6}}>
          <Card sx={{ width: 300, height: 260, display: 'flex', flexDirection: 'column', visibility: 'hidden', opacity: 0, pointerEvents: 'none' }} >
          </Card>
          </Grid >
        )}

        <Grid size={{ xs: 'auto', md: 'auto', xl: 6}}>
          <CustomCard
            src="/images/WeatherApp.png"
            header="This project"
            body="This is the latest large project of mine that aims to showcase and pave my skills in React."
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default CustomTimeline
