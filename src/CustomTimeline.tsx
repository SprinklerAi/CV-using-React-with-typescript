import { Card, Box, Grid } from '@mui/material'
import CustomCard from './CustomCard'
import { useTranslation } from 'react-i18next'
import { useTheme, useMediaQuery } from '@mui/material'
import './i18n'

type CustomTimelineProps = {
  onCardClick: (header: string) => void
}

const CustomTimeline = ({ onCardClick }: CustomTimelineProps) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const isXL = useMediaQuery(theme.breakpoints.up('xl'))

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
          width: { xs: 'auto', md: 'auto', xl: '100%' },
          mb: 2,
        }}
      >
        <Grid size={{ xs: 'auto', md: 'auto', xl: 12 }}>
          <CustomCard
            src="images/KunnatApp.png"
            Header={t("card.KunnatApp.header")}
            body={t("card.KunnatApp.body")}
            onClick={() => onCardClick("KunnatApp")}
          />
        </Grid>

        {isXL && (
          <Grid size={{ xs: 'auto', md: 'auto', xl: 6 }}>
            <Card sx={{ width: 300, height: 200, display: 'flex', flexDirection: 'column', visibility: 'hidden', opacity: 0, pointerEvents: 'none' }} />
          </Grid>
        )}

        <Grid size={{ xs: 'auto', md: 'auto', xl: 6 }}>
          <CustomCard
            src="images/DistributedSystems.png"
            Header={t("card.DistributedSystems.header")}
            body={t("card.DistributedSystems.body")}
            onClick={() => onCardClick("DistributedSystems")}
          />
        </Grid>

        <Grid size={{ xs: 'auto', md: 'auto', xl: 6 }}>
          <CustomCard
            src="images/SQL.png"
            Header={t("card.DatabaseManagement.header")}
            body={t("card.DatabaseManagement.body")}
            onClick={() => onCardClick("DatabaseManagement")}
          />
        </Grid>

        {isXL && (
          <Grid size={{ xs: 'auto', md: 'auto', xl: 6 }}>
            <Card sx={{ width: 300, height: 200, display: 'flex', flexDirection: 'column', visibility: 'hidden', opacity: 0, pointerEvents: 'none' }} />
          </Grid>
        )}

        {isXL && (
          <Grid size={{ xs: 'auto', md: 'auto', xl: 6 }}>
            <Card sx={{ width: 300, height: 200, display: 'flex', flexDirection: 'column', visibility: 'hidden', opacity: 0, pointerEvents: 'none' }} />
          </Grid>
        )}

        <Grid size={{ xs: 'auto', md: 'auto', xl: 6 }}>
          <CustomCard
            src="images/WeatherApp.png"
            Header={t("card.WeatherApp.header")}
            body={t("card.WeatherApp.body")}
            onClick={() => onCardClick("WeatherApp")}
          />
        </Grid>

        <Grid size={{ xs: 'auto', md: 'auto', xl: 6 }}>
          <CustomCard
            src="images/Current.png"
            Header={t("card.CurrentProject.header")}
            body={t("card.CurrentProject.body")}
            onClick={() => onCardClick("CurrentProject")}
          />
        </Grid>

      </Grid>
    </Box>
  )
}

export default CustomTimeline
