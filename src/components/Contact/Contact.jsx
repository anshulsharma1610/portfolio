import React from "react";
import styled from "styled-components";
import { HiOutlineMailOpen } from "react-icons/hi";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineArrowUp,
    AiOutlineInstagram,
} from "react-icons/ai";
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const Footer = () => {
    const scrollUp = () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <Container id="contact">
            <Profile>
                <Slide direction="left" delay={1}>
                    <h1 className="green">Contact</h1>
                </Slide>

                <div className="links">
                    <div>
                        <Slide direction="left">
                            <span>
                                <HiOutlineMailOpen />
                            </span>
                        </Slide>
                        <Slide>
                            <a href="mailto:anshulsharma1610@gmail.com">
                                anshulsharma1610@gmail.com
                            </a>
                        </Slide>
                    </div>
                </div>
                <div className="profiles">
                    <Slide direction="left">
                        <h1>Social profiles</h1>
                    </Slide>
                    <div className="icons">
                        <Zoom>
                            <span>
                                <a href="/">
                                    <AiFillLinkedin />
                                </a>
                            </span>
                        </Zoom>
                        <Zoom>
                            <span>
                                <a href="/">
                                    <AiFillGithub />
                                </a>
                            </span>
                        </Zoom>
                        <Zoom>
                            <span>
                                <a href="/">
                                    <AiOutlineInstagram />
                                </a>
                            </span>
                        </Zoom>
                    </div>
                </div>
            </Profile>

            <Fade>
                <ArrowUp onClick={scrollUp}>
                    <AiOutlineArrowUp />
                </ArrowUp>
            </Fade>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
    margin-top: 2rem;
    position: relative;
    padding: 2rem 0;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 840px) {
        width: 90%;
    }

    @media (max-width: 650px) {
        flex-direction: column;
        gap: 3rem;
    }
`;
const Profile = styled.div`
    flex: 1;
    .address {
        padding: 1rem 0;
        h1 {
            font-size: 1.2rem;
        }

        p {
            width: 60%;
            padding-top: 0.5rem;
            @media (max-width: 650px) {
                width: 100%;
            }
        }
    }

    .links {
        h1 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }

        div {
            margin-top: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            a {
                text-decoration: none;
                color: lightgray;
                :hover {
                    color: #64ffda;
                }
            }
        }
    }

    .profiles {
        h1 {
            font-size: 1.2rem;
            padding: 1rem 0;
            margin-top: 1rem;
        }

        .icons {
            display: flex;
            align-items: center;

            span {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #000;
                width: 2rem;
                height: 2rem;
                margin-right: 0.5rem;
                border-radius: 50px;

                :hover {
                    background-color: #64ffda;
                }

                a {
                    margin-top: 0.2rem;
                    color: #fff;
                }
            }
        }
    }
`;
const ArrowUp = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: #64ffda;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: 1rem;
    @media (max-width: 650px) {
        position: fixed;
        bottom: 15rem;
        right: 3rem;
        z-index: 999;
    }
`;
