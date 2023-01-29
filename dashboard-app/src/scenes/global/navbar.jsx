import { Box, IconButton, Typography } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";



const Navbar = () => { 
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <Box backgroundColor="white" display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        borderRadius="3px"
      >
      <Box backgroundColor="white" alignContent="center" alignItems="center" borderRadius="15px" m="10px" p="20px" boxShadow={3}>{user ? <Typography variant="h8" fontFamily="roboto" fontWeight="bold" color="grey"> Hello, <span className="background__span">{user.email}</span>, Welcome Back!</Typography> : <Typography>Please sign in</Typography>}
      </Box>
      </Box>

      <Box display="flex">
        <IconButton>
          <NotificationsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;