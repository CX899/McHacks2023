import { Box, Typography } from "@mui/material";


const Header = ({title, subtitle}) => {
  return (
    <Box mb="30px" sx={{mb: "5px"}} fontWeight="bold">
        <Typography fontWeight="600" letterSpacing="1px" color="black" variant="h5">{title}</Typography>
        <Typography variant="h8" color="red">{subtitle}</Typography>
    </Box>
  )
}

export default Header