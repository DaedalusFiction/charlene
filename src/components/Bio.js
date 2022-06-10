import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import headshot from "../images/Charlenephoto.JPG";

const Bio = () => {
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: { xs: "2rem", md: "5rem" },
                    alignItems: "center",
                    padding: { xs: "4rem 0", md: "7vw 0" },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <img
                            src={headshot}
                            alt="Charlene Morris"
                            style={{
                                maxWidth: "20rem",
                                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                            }}
                        />
                    </Box>
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "var(--fc-gray-600)",
                        }}
                    >
                        Charlene Morris
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            fontSize: "2rem",
                            fontWeight: "bold",
                            marginBottom: ".5em",
                            color: "var(--fc-gray-800)",
                        }}
                    >
                        Let's Work on this Together
                    </Typography>
                    <Typography
                        sx={{ maxWidth: "45ch", color: "var(--fc-gray-600)" }}
                    >
                        My name is Charlene Morris and I am a Licensed Insurance
                        Broker. I have been visiting homes and helping people
                        navigate the field of Medicare and Medicaid options
                        since 2006. I always explain details thoroughly and I
                        work hard to effectively and professionally address
                        consumers' concerns. I am proud of my exceptional
                        interpersonal skills and my ability to quickly handle
                        challenges.
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Bio;
