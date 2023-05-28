import React from "react";
import { MdWeb, MdOutlineKeyboard } from "react-icons/md";
import { FiDatabase } from "react-icons/fi";
import { CgCloud } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Skills = () => {
    return (
        <Container id="skills">
            <Slide direction="down">
                <h1>
                    <span className="green">Skills</span>
                </h1>
            </Slide>
            <Cards>
                <Slide direction="left">
                    <Card
                        Icon={MdWeb}
                        title={"Web Technologies"}
                        disc={[
                            "HTML5",
                            "CSS3",
                            "React",
                            "Next.js",
                            "Node.js",
                            "Express.js",
                            "Vue.js",
                            "Redux",
                            "REST",
                        ]}
                    />
                </Slide>
                <Slide direction="up">
                    <Card
                        Icon={MdOutlineKeyboard}
                        title={"Languages"}
                        disc={[
                            "JavaScript",
                            "TypeScript",
                            "Java",
                            "Python",
                            "C",
                            "SQL",
                        ]}
                    />
                </Slide>
                <Slide direction="up">
                    <Card
                        Icon={FiDatabase}
                        title={"Databases"}
                        disc={[
                            "MySQL",
                            "MongoDB",
                            "PostgreSQL",
                            "ElasticSearch",
                            "Sequelize",
                            "Mongoose",
                            "SQL Server",
                        ]}
                    />
                </Slide>
                <Slide direction="right">
                    <Card
                        Icon={CgCloud}
                        title={"Tools"}
                        disc={[
                            "Git",
                            "NPM",
                            "GitHub",
                            "VS Code",
                            "Eclipse",
                            "Jira",
                            "Linux",
                            "Heroku",
                            "AWS",
                        ]}
                    />
                </Slide>
            </Cards>
        </Container>
    );
};

export default Skills;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    @media (max-width: 840px) {
        width: 90%;
    }

    h1 {
        padding-top: 1rem;
    }
`;
const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    margin-top: 4rem;
    gap: 1rem;
`;
