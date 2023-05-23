import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

//components
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout = () => {
    return (
        <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </Box>
    );
};

export default RootLayout;
