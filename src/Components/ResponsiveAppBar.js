import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import emailjs from '@emailjs/browser'

const pages = ['Home', 'Experience & Certifications', 'Resume', 'Documents'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [openMailDialog, setOpenMailDialog] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenMailDialog = () => {
    setOpenMailDialog(true);
  };

  const handleCloseMailDialog = () => {
    setOpenMailDialog(false);
  };

   function sendMailToMe(mail1,message1) {

    const mail = document.getElementById('filled-hidden-label-normal');
    const message = document.getElementById('fullWidth');

        const serviceId="service_gdzmz1e";
        const tenplateId="template_ltqud2b";
        const publickey="JP2WQUe1UyGoshaYV";

        const templateParams={
          sender_email:mail1,
          receiver_email:"sr1226035@gmail.com",
          body:message1
      }
 
    
    emailjs.send(serviceId,tenplateId,templateParams,publickey)
    .then((response)=>{
        window.alert("Mail Send Successfully")
    })
    .catch((error)=>{
      window.alert('Error sending email:',error);
    })
  };


  const pageNavigate = (page) => {
    console.log(page);
    if (page === 'Home') {
      navigate('/');
    } else if (page === 'Experience & Certifications') {
      navigate('experience');
    } else if (page === 'Resume') {
      navigate('resume');
    } else if (page === 'Documents') {
      navigate('documents');
    } else {
      navigate('/');
    }
    handleCloseNavMenu();
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{backgroundColor:'chocolate',borderRadius:'2px'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            onClick={() => pageNavigate('Home')}
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            My Portfolio
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => pageNavigate(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => pageNavigate(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button
                onClick={handleOpenMailDialog}
                sx={{ my: 2, color: 'white', display: 'block', backgroundColor: 'Brown' }}
              >
                Mail Me
              </Button>
              <Dialog open={openMailDialog} onClose={handleCloseMailDialog}>
                <DialogTitle>Message to Shubham Raj ( sr1226035@gmail.com )</DialogTitle>
                <DialogContent>
                  <TextField
                    sx={{ marginBottom: '20px' }}
                    fullWidth
                    id="emails"
                    placeholder="Enter your/sender email."
                    variant="filled"
                  />
                  <TextField fullWidth label="Type your message" id="message" />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseMailDialog}>Cancel</Button>
                  <Button onClick={()=>sendMailToMe(document.getElementById('emails').value,document.getElementById('message').value)}>Send Mail</Button>
                </DialogActions>
              </Dialog>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
