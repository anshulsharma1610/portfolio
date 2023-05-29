import React from "react";
import styled from "styled-components";

const ProjectCard = ({ name, desc, link, from, to, technologies, img }) => {
    return (
        <Card>
            <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
                {img && <ProjectImage src={img} alt={name} />}
                <span>
                    <h2>{name}</h2>
                </span>
            </ProjectLink>
            <ul>
                {desc.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="details">
                <span>
                    {from} - {to}
                </span>
                <Technologies>
                    {technologies.map((tech, index) => (
                        <Technology key={index}>{tech}</Technology>
                    ))}
                </Technologies>
            </div>
        </Card>
    );
};

export default ProjectCard;

const ProjectLink = styled.a`
    color: #64ffda;
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;

    &:hover {
        text-decoration: underline;
    }
`;

const Card = styled.div`
    background: linear-gradient(
        159deg,
        rgb(45, 45, 58) 0%,
        rgb(43, 43, 53) 100%
    );
    filter: drop-shadow(0px 0.4px 4px #64ffda);
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-bottom: 1rem;

    h2 {
        display: flex;
        flex-wrap: wrap;
        font-size: 1.3rem;
        font-weight: 500;
        margin-bottom: 1rem;
        color: #64ffda;
        text-decoration: none;
    }

    ul {
        list-style-type: disc;
        text-align: start;
        margin-left: 1.5rem;
        margin-bottom: 1.5rem;

        li {
            margin-bottom: 0.5rem;
            color: #fff;
        }
    }

    .details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;

        span {
            font-size: 0.9rem;
            color: #ccc;
        }
    }
`;

const Technologies = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const Technology = styled.span`
    background-color: #64ffda;
    color: #000 !important;
    padding: 0.3rem 0.7rem;
    border-radius: 1rem;
    font-size: 0.8rem;

    &:hover {
        color: #fff !important;
    }
`;

const ProjectImage = styled.img`
    display: flex;
    flex-wrap: wrap;
    width: 300px; /* Adjust the width as needed */
    height: 200px; /* Adjust the height as needed */
    object-fit: contain;
    border-radius: 0.5rem;
    margin-bottom: 0rem;
    margin-right: 2rem;
    margin-top: -1rem;
`;
