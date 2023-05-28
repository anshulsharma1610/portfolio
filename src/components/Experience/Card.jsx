import React from "react";
import styled from "styled-components";

const ExperienceCard = props => {
    const { name, position, from, to, desc, link } = props.item;

    return (
        <Container>
            <Header>
                <CompanyNameLink
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {name}
                </CompanyNameLink>
                <p>{position}</p>
            </Header>
            <Timeline>
                <span>{}</span>
                <span>{formatDate(from) + " - " + formatDate(to)}</span>
            </Timeline>
            <Body>
                <ul>
                    {desc.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </Body>
        </Container>
    );
};

export default ExperienceCard;

const Container = styled.div`
    background: linear-gradient(
        159deg,
        rgb(45, 45, 58) 0%,
        rgb(43, 43, 53) 100%
    );
    padding: 1.5rem 1rem;
    margin: 0 1rem;
`;

const Header = styled.div`
    h1 {
        font-size: 1.4rem;
        font-weight: 700;

        @media (max-width: 580px) {
            font-size: 1rem;
        }
        @media (max-width: 538px) {
            font-size: 0.9rem;
        }
    }

    p {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.5);

        @media (max-width: 538px) {
            font-size: 0.6rem;
        }
    }
`;

const CompanyNameLink = styled.a`
    color: #64ffda;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Timeline = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    span {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.7);
    }
`;

const Body = styled.div`
    font-size: 0.8rem;

    ul {
        margin: 0;
        padding: 0;
        list-style-type: disc;
        margin-left: 1rem;
    }

    li {
        margin-bottom: 0.5rem;
    }
`;

function formatDate(date) {
    const options = { year: "numeric", month: "long" };
    return new Date(date).toLocaleDateString(undefined, options);
}
