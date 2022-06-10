import { Box, Button, Container, Typography } from "@mui/material";
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
                        C.R.M. Insurance LLC
                    </Typography>
                    <a href="tel:434-825-5038">
                        <Typography sx={{ color: "white", fontSize: "1.2rem" }}>
                            (804) 240-4959
                        </Typography>
                    </a>
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
                        Let us help you find the coverage that is right for you,
                        at <strong>absolutely no cost to you</strong>
                    </Typography>
                    <Button href="#contact" variant="contained" size="large">
                        Get Started
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
