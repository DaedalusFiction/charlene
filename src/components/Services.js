import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Services = () => {
    const serviceBoxes = [
        { title: "title-one", icon: "iconOne" },
        { title: "title-two", icon: "iconTwo" },
        { title: "title-three", icon: "iconThree" },
    ];
    return (
        <Box sx={{ backgroundColor: "var(--bg-accent)" }}>
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        padding: "5vw 0",
                    }}
                >
                    {serviceBoxes.map((item) => {
                        return (
                            <Box>
                                <Box
                                    sx={{
                                        borderRadius: "100%",
                                        backgroundColor: "white",
                                        padding: "6rem",
                                    }}
                                >
                                    Icon
                                </Box>
                                <Typography
                                    sx={{
                                        color: "white",
                                        textAlign: "center",
                                        fontSize: "2rem",
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
