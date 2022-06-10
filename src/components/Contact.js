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
                "service_tmo76bn",
                "template_ggro2co",
                templateParams,
                "aMDOy4kUud9rd0Yg9"
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
                        padding: "15vw 0",
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            color: "white",
                            textAlign: "center",
                            fontSize: "5rem",
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
                            Call Anytime, Day or Night: (804) 240-4959
                        </Typography>
                    </a>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center",
                        }}
                    >
                        {!submitted && (
                            <>
                                <Paper>
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
                                    disabled={error}
                                    size="large"
                                    onClick={handleSendEmail}
                                >
                                    Send
                                </Button>
                            </>
                        )}
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
