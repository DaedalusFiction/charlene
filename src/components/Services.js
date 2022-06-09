import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import drugs from "../images/drugs.png";
import healthcare from "../images/healthcare.png";
import caduceus from "../images/caduceus.png";
import vision from "../images/vision.png";

const Services = () => {
    const serviceBoxes = [
        { title: "Advantage Health Plans", icon: caduceus },
        { title: "Perscription Drug Plans", icon: drugs },
        { title: "Supplement Plans", icon: healthcare },
        { title: "Dental and Vision", icon: vision },
    ];
    return (
        <Box sx={{ backgroundColor: "var(--bg-accent)" }}>
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        padding: "10vw 0",
                    }}
                >
                    {serviceBoxes.map((item) => {
                        return (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "1rem",
                                }}
                            >
                                <img
                                    src={item.icon}
                                    alt=""
                                    style={{
                                        maxWidth: "10rem",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "white",
                                        textAlign: "center",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default Services;
