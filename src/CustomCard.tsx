import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import './i18n'

export type CustomCardProps = {
  src: string
  Header: string
  body: string
  onClick?: () => void
}

const CustomCard = ({ src, Header, body, onClick }: CustomCardProps) => {
  return (
    <Card sx={{ width: 300, height: 200, display: 'flex', flexDirection: 'column', bgcolor: 'secondary.main' }} elevation={24}>
      <CardActionArea
        sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        onClick={onClick}
      >
        <CardMedia
          component="img"
          image={src}
          sx={{ flexGrow: 1, width: '100%', height: '40%', objectFit: 'cover', overflow: 'hidden' }}
        />
        <CardContent sx={{ maxHeight: '100%', overflow: 'hidden' }}>
          <Typography gutterBottom variant="h5" component="div">
            {Header}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CustomCard
