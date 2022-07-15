import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import drugs from "../images/drugs.png";
import healthcare from "../images/healthcare.png";
import caduceus from "../images/caduceus.png";
import vision from "../images/vision.png";

const Services = () => {
    const serviceBoxes = [
        { title: "Medicare Advantage", icon: caduceus },
        { title: "Perscription Drug", icon: drugs },
        { title: "Supplemental", icon: healthcare },
        { title: "Dental and Vision", icon: vision },
    ];
    return (
        <Box sx={{ backgroundColor: "var(--bg-accent)" }}>
            <Container>
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: "center",
                        paddingTop: "1em",
                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    Insurance Plans
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        padding: "5vw 0 10vw 0",
                    }}
                >
                    {serviceBoxes.map((item, index) => {
                        return (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    margin: "0 .5rem",
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
