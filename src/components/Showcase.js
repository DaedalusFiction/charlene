import { Card, CardContent, Divider, Paper, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import React from "react";
import showcaseImage from "../images/showcaseImage.jpg";
const Showcase = () => {
    const showcaseItems = [
        {
            icon: "Our Promise",
            body: "Don't stress over finding affordable health insurance while on Medicare. Leave the heavy lifting up to us.",
        },
        {
            icon: "Our Mission",
            body: "We'll work with you to find the insurance plan that fits your needs, and we'll do it at no cost to you.",
        },
        {
            icon: "Your Journey",
            body: "We're here to help you with any questions or concerns you may have about your health insurance coverage.",
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
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "7vw 0",
                    }}
                >
                    {showcaseItems.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                square={true}
                                sx={{
                                    minWidth: 275,
                                    maxWidth: "12rem",
                                    margin: "1rem",
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        component="div"
                                        sx={{ margin: "1em 0" }}
                                    >
                                        {item.icon}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{ lineHeight: "1.8em" }}
                                    >
                                        {item.body}
                                    </Typography>
                                </CardContent>
                            </Card>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default Showcase;
