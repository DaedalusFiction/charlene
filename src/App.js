import "./App.css";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    const testimonials = [
        {
            speaker: "George",
            body: "We have been working with Charlene for a number of years. When we began I was reluctant to change insurance carriers, but she was persistent [...] We continue to receive requests from other insurance carriers but find her company and service to be the best [...] If she wants to give my name to anyone who wanted super service, please tell them to call me.",
        },
        {
            speaker: "Diane",
            body: "My late husband was referred to Charlene by a friend and after meeting with her we went with [her] and have been so thankful. Charlene's guidance directing us to the best policy for our needs has been invaluable. Since my husband passed away, Charlene has been there for me for the past eleven years. I will get a phone call just to ask me how I'm doing. So thoughtful!  I feel truly blessed to have Charlene not only as my agent but as my friend.",
        },
    ];

    const theme = createTheme({
        palette: {
            primary: {
                main: "#2CF6B3",
            },
            neutral: {
                main: "#64748B",
                contrastText: "#fff",
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Hero />
            <Bio />
            <Services />
            <Testimonial
                text={testimonials[0].body}
                speaker={testimonials[0].speaker}
            />
            <Showcase />
            <Testimonial
                text={testimonials[1].body}
                speaker={testimonials[1].speaker}
            />
            <Contact />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
