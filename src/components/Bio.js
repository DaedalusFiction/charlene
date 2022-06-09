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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus dolorum suscipit dolore non soluta aliquam optio
                        voluptas doloremque adipisci doloribus? Doloribus,
                        ratione quo aperiam accusamus perspiciatis non, iste nam
                        maxime ad totam dolorum reiciendis, autem tenetur
                        perferendis nobis similique ut inventore reprehenderit.
                        Repellat aliquid distinctio quae ab possimus, rerum
                        repudiandae.
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Bio;
