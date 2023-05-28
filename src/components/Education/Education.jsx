import React, { useRef } from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

let schools = [
    {
        name: "Northeastern University",
        img: "images/nu.png",
        degree: "Masters",
        course: "Information Systems",
        coursework: [
            "Program Structure & Algorithms",
            "Web Design & UI/UX Engineering",
            "Application Engineering & Development",
            "Data Management & Database Design",
            "CryptoCurrency & Smart Contracts",
        ],
        gpa: "3.84/4",
        graduation: "Ongoing",
    },
    {
        name: "Mumbai University",
        img: "images/mu.png",
        degree: "Bachelor of Engineering",
        course: "Electronics & Telecommunications",
        coursework: [
            "Object Oriented Programming",
            " Database Management System",
        ],
        gpa: "3.4/4",
        graduation: "October 2020",
    },
];

const Education = () => {
    let school = "";
    school = schools.map((item, i) => <Card item={item} key={i} />);

    return (
        <Container id="education">
            <Slide triggerOnce direction="left">
                <h1 className="green">Education</h1>
            </Slide>
            <Slide triggerOnce direction="right">
                <Testimonials>{school}</Testimonials>
            </Slide>
        </Container>
    );
};

export default Education;

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
