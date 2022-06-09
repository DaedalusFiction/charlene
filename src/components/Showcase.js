import { Paper, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import React from "react";
import showcaseImage from "../images/showcaseImage.jpg";
const Showcase = () => {
    const showcaseItems = [
        {
            icon: "icon",
            body: "This is the body of the item. I'm just writing things now so that it fills up the space. ",
        },
        {
            icon: "icon",
            body: "This is the body of the item. I'm just writing things now so that it fills up the space. ",
        },
        {
            icon: "icon",
            body: "This is the body of the item. I'm just writing things now so that it fills up the space. ",
        },
    ];
    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
  url(${showcaseImage})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 65%",
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        padding: "5vw",
                    }}
                >
                    {showcaseItems.map((item) => {
                        return (
                            <Paper
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    margin: "1rem 0",
                                }}
                            >
                                <Box sx={{ padding: "2rem" }}>{item.icon}</Box>
                                <Typography
                                    sx={{ padding: "1em", maxWidth: "45ch" }}
                                >
                                    {item.body}
                                </Typography>
                            </Paper>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default Showcase;
