import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Zoom } from "react-awesome-reveal";

let projects = [
    {
        name: "Trendr - News Summarization Application",
        img: "images/trendr.png",
        desc: [
            "Utilized Stripe webhooks to automate subscription management and monitor payment status, and developed a dashboard to provide insights into key metrics such as revenue and user engagement",
            "Integrated GPT-4 APIs to summarize news articles and provide a concise and relevant overview of the content",
        ],
        link: "https://github.com/anshulsharma1610/Trendr-News_Summarization",
        from: "March 2023",
        to: "April 2023",
        technologies: ["Next.js", "React", "Redux", "Node.js", "Mongoose"],
    },
    {
        name: "Movie Ticket Reservation & Recommendation System",
        img: "",
        desc: [
            "Designed a database schema, an Entity-Relationship Model, and System Architecture to create a Twitter bot for extracting and processing live tweets to populate relevant databases",
            "Deployed data pipeline to preprocess data using data preparation techniques such as data scraping, normalization, standardization, stored procedures, and data engineering with data audits and visualizations",
        ],
        link: "https://github.com/anshulsharma1610/Movie-Reservation-and-Recommendation-System",
        from: "September 2022",
        to: "December 2022",
        technologies: ["Python", "SQL", "Tableau"],
    },
    {
        name: "Travel Management System",
        img: "",
        desc: [
            "Architected an application on Java swing to plan and book travel itineraries, food ordering, and table bookings",
            "Enhanced application security by implementing 10 different role-based access control to protect sensitive information within the system",
        ],
        link: "https://github.com/anshulsharma1610/Travel_Management_System",
        from: "November 2022",
        to: "December 2022",
        technologies: ["Java", "Java Swing", "SQL", "HTML", "CSS"],
    },
    {
        name: "Soldier Health & Position Tracking System (IoT)",
        img: "",
        desc: [
            "Programmed a data retrieval and storage system using C language, incorporating Neo6M GPS and SR001 Pulse Rate sensors located on soldiers' arms to transmit crucial data to army control room",
            "Formed a cloud server on Blynk and visualized insightful real-time data on soldiers' health parameters",
        ],
        link: "/",
        from: "July 2019",
        to: "March 2020",
        technologies: [
            "C",
            "Arduino",
            "Raspberry Pi 3",
            "PostgreSQL",
            "Blynk Cloud",
        ],
    },
];
const Projects = () => {
    return (
        <Container id="projects">
            <Zoom>
                <h1>
                    Recent <span className="green">Projects</span>
                </h1>
            </Zoom>
            <Zoom>
                {projects.map((project, index) => (
                    <Card key={index} {...project} />
                ))}
            </Zoom>
        </Container>
    );
};

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media (max-width: 840px) {
        width: 90%;
    }
    h1 {
        font-size: 1.9rem;
    }

    p {
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media (max-width: 500px) {
            width: 90%;
        }
    }
`;

const Slide = styled.div``;
