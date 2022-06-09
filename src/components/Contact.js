import {
    Box,
    Button,
    Container,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";

const Contact = () => {
    const [email, setEmail] = useState("");
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleSendEmail = () => {
        console.log(email);
    };
    return (
        <Box sx={{ backgroundColor: "var(--bg-accent)" }}>
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
                    <Typography variant="h2" sx={{ color: "white" }}>
                        Ready to Get Started?
                    </Typography>
                    <Typography sx={{ color: "var(--fc-gray-200)" }}>
                        Call Anytime, Day or Night: (555) 555-5555
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center",
                        }}
                    >
                        <Paper>
                            <TextField
                                label="Email"
                                variant="filled"
                                onChange={handleEmailChange}
                            />
                        </Paper>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={handleSendEmail}
                        >
                            Send
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;
