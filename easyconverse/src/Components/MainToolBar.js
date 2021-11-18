import React from "react";
import Logo from "../QuikMessagewobg.png";
import { Toolbar , Box, Typography, Button, AppBar} from "@mui/material";
export default function MainToolBar(){
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <img 
                    src={Logo} 
                    style={{ width: 50, height: 50 , margin: 2}}
                    alt="QuikMessage"
                    loading="lazy"
                    />
                    <Typography variant="h5" component="div" sx = {{flexGrow: 1}}>
                        QuikMessage 
                    </Typography>
                    {/* <Button variant="Text" color="inherit">About Us</Button> */}
                    {/* <Button variant="Text" color="inherit">Pricing</Button> */}
                    {/* <Button variant="Text" color="inherit">Contact</Button> */}
                    <Button variant="outlined" color="inherit" disableElevation>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
