import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Testimonial = ({ text, speaker }) => {
    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: { xs: "4rem 0", md: "7vw 0" },
                }}
            >
                <Box>
                    <Typography sx={{ maxWidth: "75ch", fontStyle: "italic" }}>
                        {text}
                    </Typography>
                    <Typography sx={{ textAlign: "right" }}>
                        -{speaker}
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Testimonial;
