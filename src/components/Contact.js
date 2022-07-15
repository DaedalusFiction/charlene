import {
    Box,
    Button,
    Container,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (validateEmail(e.target.value)) {
            setError(false);
        } else {
            setError(true);
        }
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSendEmail = (e) => {
        e.preventDefault();

        var templateParams = {
            email: email,
        };

        emailjs
            .send(
                "service_tfru8q8",
                "template_fku5ces",
                templateParams,
                "t5M8T5zg8VbDQxPRy"
            )
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    setSubmitted(true);
                    setSubmitError(false);
                },
                function (error) {
                    console.log("FAILED...", error);
                    setSubmitError(true);
                }
            );
    };
    return (
        <Box id="contact" sx={{ backgroundColor: "var(--bg-accent)" }}>
            <Container maxWidth="md">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                        padding: "10vw 0 5vw 0",
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            color: "white",
                            textAlign: "center",
                            fontSize: "5rem",
                            fontWeight: "bold",
                        }}
                    >
                        Ready to Get Started?
                    </Typography>
                    <a href="tel:434-825-5038">
                        <Typography
                            sx={{
                                color: "white",
                                textAlign: "center",
                                fontSize: "1.5rem",
                            }}
                        >
                            Call Mon-Fri, 8-5: (804) 240-4959
                        </Typography>
                    </a>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            alignItems: "center",
                        }}
                    >
                        {!submitted && (
                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: "white",
                                        marginBottom: ".5em",
                                        textAlign: "center",
                                    }}
                                >
                                    Share Your Email:
                                </Typography>
                                <Paper sx={{ marginBottom: "1em" }}>
                                    <TextField
                                        color="secondary"
                                        label="Email"
                                        variant="filled"
                                        onChange={handleEmailChange}
                                        error={error}
                                    />
                                </Paper>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    disabled={error}
                                    size="large"
                                    onClick={handleSendEmail}
                                >
                                    Send
                                </Button>
                            </Box>
                        )}
                        <Typography
                            sx={{
                                color: "white",
                                fontSize: "1.5rem",
                            }}
                        >
                            or
                        </Typography>
                        <Box>
                            <iframe
                                title="request-quote"
                                width="500"
                                scrolling="no"
                                height="400"
                                frameborder="0"
                                src="https://www.freemedicarereport.com/comparison_form/charlenemorris.com?bg_color=D739A4&cta_color=2CF6B3&plan=G"
                            ></iframe>
                        </Box>
                        {submitted && (
                            <Typography sx={{ color: "white" }}>
                                Thank you! We will be in touch shortly.
                            </Typography>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;
