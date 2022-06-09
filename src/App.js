import "./App.css";
import { Typography } from "@mui/material";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Showcase from "./components/Showcase";

function App() {
    const testimonials = [
        {
            speaker: "Bobby Boucher",
            body: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus consectetur eaque exercitationem, explicabo et blanditiis commodi sed non consequuntur deserunt hic officiis distinctio labore qui accusamus repellat dicta quaerat nihil voluptates eveniet! Error excepturi quidem minus laboriosam iusto vero velit saepe magnam ipsa molestiae sequi facilis in, itaque assumenda."',
        },
    ];
    return (
        <>
            <Hero />
            <Bio />
            <Services />
            <Testimonial
                text={testimonials[0].body}
                speaker={testimonials[0].speaker}
            />
            <Showcase />
        </>
    );
}

export default App;
