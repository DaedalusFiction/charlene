import { Box, Button, Container, Typography } from "@mui/material";
import { DOM_KEY_LOCATION } from "@testing-library/user-event/dist/keyboard/types";
import React from "react";
import heroImage from "../images/heroImage.jpg";

const Hero = () => {
    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
  url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 65%",
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: "1em",
                    }}
                >
                    <Typography
                        sx={{ color: "var(--fc-gray-200)", fontSize: "1.2rem" }}
                    >
                        C.R.M Insurance LLC
                    </Typography>
                    <Typography sx={{ color: "white", fontSize: "1.2rem" }}>
                        (555) 555-5555
                    </Typography>
                </Box>
                <Box sx={{ padding: "12vw 0" }}>
                    <Typography
                        variant="h1"
                        sx={{
                            color: "white",
                            fontSize: "4rem",
                        }}
                    >
                        Health Insurance, Simplified
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            color: "var(--fc-gray-400)",
                            fontSize: "1.2rem",
                            marginBottom: "2em",
                        }}
                    >
                        Let us help you find the coverage that is right for you
                    </Typography>
                    <Button variant="contained" size="large">
                        Get Started
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
