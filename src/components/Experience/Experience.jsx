import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

let companies = [
    {
        name: "Northeastern WiNES Lab",
        position: "Research Assistant",
        location: "Boston, USA",
        from: "February 2024",
        to: "Present",
        desc: [
            "Spearheaded development of 3 interactive React websites, elevating presentation of research data findings",
            "Established CI/CD pipeline for 2 React projects, ensuring latest update deployment with AWS, Terraform for scalability",
            "Leveraged Python & Flask to integrate backend, yielding 20% enhancement in web app performance & responsiveness"
        ],
        // link: "https://www.gupshup.io",
    },
    {
        name: "Students Landing",
        position: "Software Developer Intern",
        location: "Boston, USA",
        from: "March 2022",
        to: "August 2022",
        desc: [
            "Elevated user engagement by 30% implementing strategic features in Angular, Flutter optimizing performance",
            "Achieved 20% reduction in latency, orchestrating docker image deployments of Spring Boot Java backend on AWS EC2",
            "Boosted development efficiency by 25% with Dart & Flutter integration for cross-platform mobile app development"
        ],
        link: "https://studentslanding.com/",
    },
    {
        name: "Gupshup Technologies",
        position: "Software Engineer",
        location: "Mumbai, India",
        from: "March 2022",
        to: "August 2022",
        desc: [
            // "Built POC AI chatbots on Node.js & Javascript scripting generating over 2M+ rupees in sales",
            // "Created and maintained robust REST API microservices, reducing integration project development time by 25%",
            // "Constructed Python and JavaScript-based AI chatbot for lead management, saving sales managers 50% of their time across multiple platforms (Salesforce, Hubspot)",
            // "Effectively resolved and documented 200+ bugs through extensive debugging & testing, leading to 30% decrease in client-reported issues",
            // "Collaborated with cross-functional teams of designers, product managers, and QA engineers, resulting in 20% reduction in development time and a 15% increase in feature adoption rate",
            // "Supervised & mentored 3 junior developers in React & Node.js application Development, resulting in a faster onboarding and 25% surge in mentees' code contributions"
            "Constructed conversational AI chatbots using JavaScript, Python generating over 2M+ rupees revenue",
            "Resolved 200+ bugs with TDD, troubleshooting, debugging & testing, leading to decrease in client-reported issues",
            "Collaborated with cross-functional teams of designers, product managers, & quality assurance engineers, resulting in 50% increase in React Native app feature deployment"
        ],
        link: "https://www.gupshup.io",
    },
    {
        name: "Areli Commerce (Frendy)",
        position: "Full Stack Developer",
        location: "Ahmedabad, India",
        from: "September 2020",
        to: "February 2022",
        desc: [
            "Developed and deployed scalable React.js e-commerce applications including CMS, CRM, and WMS's frontend & backend for 25000+ daily users using Agile Scrum methodologies in a RESTful microservices environment",
            "Migrated legacy Java APIs to scalable 6 NodeJS services, enhancing system stability and increasing performance of warehouse order processing by 150%",
            "Implemented various key e-commerce features & coupon code algorithm for diverse promotional campaigns, leading to 30% revenue growth & increasing 20% customer retention",
            "Implemented Google Analytics on e-commerce apps to picture user journeys, assisting management in maintaining a 20% customer retention rate",
            "Utilized Python, Vue.js, and MongoDB to create dashboards for web applications, automating data scraping and competitive price comparison, enhancing catalog management efficiency by 50%",
            "Deployed Multi-language search using ElasticSearch on customer app to provide users with a rich experience, slashing down the time to find products by 50%",
            "Led team of 4 developers in full-stack application development, resulting in 25% surge in team code contributions"
        ],
        link: "https://www.frendy.in",
    },
    {
        name: "NyxWolves Freelance and Business Solutions",
        position: "Web Developer Intern & Intern Manager",
        location: "Mumbai, India",
        from: "April 2018",
        to: "September 2018",
        desc: [
            " Architected 15+ responsive web application projects using HTML, JavaScript, PHP, CSS and SQL and deployed ensuring seamless user experience across various devices and browsers",
            "Supervised 6 interns' day-to-day tasks and implemented a smooth workflow to optimize project delivery time, enabling 20%  faster execution of projects",
        ],
        link: "https://nyxwolves.com/",
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
