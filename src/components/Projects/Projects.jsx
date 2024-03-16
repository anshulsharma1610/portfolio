import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Zoom } from "react-awesome-reveal";

let projects = [
    {
        name: "Scalable Node.js App on AWS through IaC",
        // img: "images/trendr.png",
        desc: [
            "Automated CI for efficient AMI creation, optimizing resources for seamless deployment & established a robust architecture with custom domain setup using Route 53 for high availability and optimal app performance",
            "Performed AWS deployment with Pulumi, GitHub Actions & Packer for a scalable Node.js Application & orchestrated VPC, EC2, RDS, GCS, L7 load balancer, lambda functions & auto-scaling, coupled with CloudWatch logging & metrics"    
        ],
        link: "https://github.com/anshulsharma1610/Scalable-Node.js-App-on-AWS-through-IaC",
        from: "September 2023",
        to: "December 2023",
        technologies: ["AWS", "GCP", "GitHub Actions", "Shell Script", "Lambda", "Packer", "Terraform"],
    },
    {
        name: "Dutch Auction using Solidity",
        // img: "images/trendr.png",
        desc: [
            "Tested & deployed NFT smart contracts with Dutch Auction structure on Ethereum testnet, utilizing Hardhat for contract deployment and ensuring proper functionality in handling bids, auction termination, and fund transfers",
            "Executed decentralized application (DApp) with React UI hosted on IPFS, utilized IPNS for generating fixed name, enhancing overall accessibility and persistence of the application"
        ],
        link: "https://github.com/anshulsharma1610/Dutch_Auction",
        from: "May 2023",
        to: "June 2023",
        technologies: ["Solidity", "Typescript", "NFTs", "Web3", "Blockchain", "Cryptocurrency"],
    },
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
            "PostgreSQL",
            "Raspberry Pi",
            "Arduino Uno",
            "Blynk Cloud",
        ],
    },
];
const Projects = () => {
    return (
        <Container id="projects">
            <Zoom triggerOnce>
                <h1>
                    Recent <span className="green">Projects</span>
                </h1>
            </Zoom>
            <Zoom triggerOnce>
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
