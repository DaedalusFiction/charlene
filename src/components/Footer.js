import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "2rem 0",
                }}
            >
                <Typography>Copyright 2022 C.R.M. Insurance LLC</Typography>
                <Typography>
                    Website created by{" "}
                    <a
                        href="https://davidjsorensen.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        David J. Sorensen
                    </a>
                </Typography>
            </Box>
        </Container>
    );
};

export default Footer;
