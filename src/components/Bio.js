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
                    gap: "3rem",
                    alignItems: "center",
                    padding: "7vw 0",
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
                            style={{ maxWidth: "20rem" }}
                        />
                    </Box>
                    <Typography sx={{ textAlign: "center" }}>
                        Charlene Morris
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            fontSize: "2rem",
                            fontWeight: "bold",
                            marginBottom: ".5em",
                        }}
                    >
                        Let's Work on this Together
                    </Typography>
                    <Typography sx={{ maxWidth: "45ch" }}>
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
