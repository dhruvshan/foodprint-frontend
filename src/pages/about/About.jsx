import { Container, Typography, Link } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";

export default function About(){
    return(
        <Container> 
            <Navbar/>
            <Container maxWidth="sm" style={{textAlign:"left", display:"flex", flexDirection: "column"}}>
                <Typography variant="h3"> The Story Behind</Typography>
                <Typography variant="h2">Carbon<span style={{color:"#00b300"}}>Foodprint</span></Typography>
                <br />
                <Typography variant="p" color="text.subtitle1">
                    The idea behind CarbonFoodprint came while I was working on my Final Year Project at Nanyang Technological University. My goal then was to build
                    a personal <Link href="https://github.com/dhruvshan/carbonfootprintapp" underline="none" sx={{color:"orange"}} target="_blank">carbon footprint calculator</Link> from a local perspective.
                </Typography>
                <br />
                <Typography variant="p" color="text.subtitle1">
                    As humans, our main contributions to our carbon footprint comes from the food we consume, the type of transport we use and the amount of electricity we use on a day to day basis.
                </Typography>
                <br />
                <Typography variant="p" color="text.subtitle1">
                    However, calculating the footprint of the food we consume is difficult, because of the variety of foods and the impact of each item in a recipe/dish. A lot of research papers have attempted/are attempting to find
                    footprints of multiple food types.
                </Typography>
                <br />
                <Typography variant="p" color="text.subtitle1">
                    To support consumers who may want to know what their food impact is, this platform aggregates this research in a easy to query format, allowing users to enter the names of their food dish and recieve footprint(s) of their various items.
                </Typography>
                <br />
                <Typography variant="h5" sx={{color:"#00b300"}}>How accurate is the data?</Typography>
                <br />
                <Typography variant="p" color="text.subtitle1">Most of the food items have references from which the value has been obtained. These sources could be other carbon footprint related sites, company websites, research papers, open source data etc.</Typography>
                <br />
                <Typography variant="p" color="text.subtitle1">
                    However, there are some items that are &quot;Self Calculated&quot;. These values are obtained from calculation based on the footprint of each item used in the recipe or from percentage values based on other similar food types. Eg. calculating the footprint
                    of a Vege Pizza based on a percentage of the footprint of a Meat Pizza.
                </Typography>
                <br />
                <Typography>
                    These values are notably less accurate as they are based on local calculations but do provide a rough baseline for the estimated footprint of the food item.
                </Typography>
                <br />
                <Typography variant="h5" sx={{color:"#00b300"}}>Built by DS</Typography>
                <br />
                <Typography variant="p" color="text.subtitle1">This project was built by me, Dhruv Shanbhag! I am a full-stack/software developer. You can check out my projects and work experiences <Link href="https://dhruvshanbhag.vercel.app/" underline="none" sx={{color:"orange"}} target="_blank">here!</Link></Typography>
            </Container>
        </Container>
    )
}