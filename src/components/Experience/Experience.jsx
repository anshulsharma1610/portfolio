import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

let companies = [
    {
        name: "Gupshup Technologies",
        position: "Software Engineer",
        from: "March 2022",
        to: "August 2022",
        desc: [
            "Built POC AI chatbots on Node.js & Javascript scripting generating over 2M+ rupees in sales",
            "Constructed and delivered POC Omnichannel Conversational AI chatbots for more than 25+ clients",
            "Created lead management Omnichannel chatbot using Scrum principles for sales managers to organize leads on Salesforce, Zendesk, Hubspot, Zoho, and Freshdesk by saving up to 50% of time",
        ],
        link: "https://www.gupshup.io",
    },
    {
        name: "Areli Commerce (Frendy)",
        position: "Full Stack Developer",
        from: "September 2020",
        to: "February 2022",
        desc: [
            "Planned software lifecycle and initiated CMS, CRM, WMS's front-end, and backend utilized to process 10k+ orders per day in a RESTful Microservices environment, reducing order processing time of warehouse by 40%",
            "Developed algorithm for an Offers System leveraged in e-commerce using agile software development methodologies to run 40 different campaigns having a positive 30% influence on company sales",
            "Implemented Google Analytics on e-commerce apps to picture user journeys, assisting management in maintaining a 20% customer retention rate",
            "Created a dashboard using ReactJS, and NodeJS incorporating web-scraped data to compare product pricing from competing businesses, improving efficiency of catalog managers by about 60%",
        ],
        link: "https://www.frendy.in",
    },
    {
        name: "NyxWolves Freelance and Business Solutions",
        position: "Web Developer Intern & Intern Manager",
        from: "April 2018",
        to: "September 2018",
        desc: [
            "Architected 15+ responsive websites in HTML5 for IEEE Conferences and deployed projects on Godaddy.com",
            "Supervised 6 interns' day-to-day tasks and implemented a smooth workflow to optimize project delivery time, enabling 20%  faster execution of projects",
        ],
        link: "https://www.nyxwolves.com",
    },
];

const Experience = () => {
    let company = "";
    company = companies.map((item, i) => <Card item={item} key={i} />);

    return (
        <Container id="experience">
            <Slide triggerOnce direction="left">
                <h1 className="green">Experience</h1>
            </Slide>
            <Slide triggerOnce direction="right">
                <Testimonials>{company}</Testimonials>
            </Slide>
        </Container>
    );
};

export default Experience;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media (max-width: 840px) {
        width: 90%;
    }

    span {
        font-weight: 700;
        text-transform: uppercase;
    }

    h1 {
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list,
    .slick-slider,
    .slick-track {
        padding: 0;
    }

    .slick-dots {
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before {
        content: "";
    }

    .slick-dots li button {
        width: 9px;
        height: 4px;
        background: linear-gradient(
            159deg,
            rgb(45, 45, 58) 0%,
            rgb(43, 43, 53) 100%
        );
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }

    .slick-dots li.slick-active button {
        background: #01be96;
        width: 15px;
    }

    .slick-dots li {
        margin: 0;
    }
`;

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`;
