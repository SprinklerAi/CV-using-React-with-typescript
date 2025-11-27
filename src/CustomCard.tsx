import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material'

export type CustomCardProps = {
  src: string
  header: string
  body: string
}

const CustomCard = ({ src, header, body }: CustomCardProps) => {
  return (
    <Card sx={{ width: 300, height: 260, display: 'flex', flexDirection: 'column', bgcolor: 'secondary.main' }} elevation={24}>
      <CardActionArea sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <CardMedia
          component="img"
          image={src}
          sx={{ flexGrow: 1, width: '100%', height: '60%', objectFit: 'cover' , overflow: 'hidden' }}
        />
        <CardContent sx={{ maxHeight: 200, overflow: 'hidden' }}>
          <Typography gutterBottom variant="h5" component="div">
            {header}
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
