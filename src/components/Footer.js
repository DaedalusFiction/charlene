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
                <Box>
                    <Typography sx={{ marginBottom: ".5em" }}>
                        Copyright 2022 C.R.M. Insurance LLC
                    </Typography>
                    <Typography sx={{ color: "var(--fc-gray-600)" }}>
                        P.O. Box 303
                    </Typography>
                    <Typography sx={{ color: "var(--fc-gray-600)" }}>
                        Montpelier, Va 23192
                    </Typography>
                    <a href="tel:434-825-5038">
                        <Typography
                            sx={{
                                color: "var(--fc-gray-600)",
                                marginBottom: "2em",
                            }}
                        >
                            (804) 240-4959
                        </Typography>
                    </a>
                    <Typography>
                        Website created by{" "}
                        <a
                            href="https://davidjsorensen.com"
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: "underline" }}
                        >
                            David J. Sorensen
                        </a>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Footer;
