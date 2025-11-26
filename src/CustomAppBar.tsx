import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const CustomAppBar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">My App</Typography>
        
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;