import { Link } from "react-router-dom"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import Logo from '../../assets/logo.svg'
const Item = ({ title, to, icon,}) => {
  return (
    <MenuItem icon={icon}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Leftbar = () => {
  return (
    <Box sx={{
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px",
      },
      "& .pro-inner-item:hover": {
        color: "#3751FF !important",
      },
      "& .pro-sidebar .pro-sidebar-inner": {
        background: "#363740",
      },
    }}>
      <ProSidebar>
        <Menu iconShape="square">
          <Box mb="25px">
            <Box>
              <img ml="15px"/>
            </Box>
            <Box textAlign="center">
            <Box
             display="flex"
             paddingLeft="25px"
             paddingRight="20px"
             justifyContent="space-between">
              <img src={Logo} alt="logo" width="30px" height="30px" />
               <Typography variant="h5" >ReactDashboards</Typography>
            </Box>
            </Box>
          </Box>
          <Box paddingLeft="10%" paddingBottom="10%">
            <Typography variant="h6" sx={{ m: "20px 0 5px 20px" }}>Team Dashboard</Typography>
            <Item title="Dashboard" to="/"icon={<HomeOutlinedIcon />}/>
            <Typography variant="h6" sx={{ m: "20px 0 5px 20px" }}>Team Environment</Typography>
            <Item title="Project" to="/project"icon={<AccountTreeOutlinedIcon />}/>
            <Item title="Team" to="/team"icon={<GroupsOutlinedIcon />}/>
            <Item title="Tasks" to="/task"icon={<TaskAltOutlinedIcon />}/>
            <Item title="Calendar" to="/calendar"icon={<CalendarMonthOutlinedIcon />}/>
            <Item title="Progress" to="/progress"icon={<TimelineOutlinedIcon />}/>
            <Typography variant="h6" sx={{ m: "22px 0 5px 20px" }}>Team Admin</Typography>
            <Item title="Team management" to="/"icon={<AdminPanelSettingsOutlinedIcon  />}/>
            <Typography variant="h6" sx={{ m: "22px 0 5px 20px" }}>User</Typography>
            <Item title="Logout" to="/login"icon={<LogoutIcon/>}/>
          </Box>
          </Menu>
          </ProSidebar>
    </Box>
  )
}

export default Leftbar

