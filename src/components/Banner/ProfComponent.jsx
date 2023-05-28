import React from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import {
    AiOutlineInstagram,
    AiFillLinkedin,
    AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
    const openResume = () => {
        window.open(
            "documents/Anshul_Sharma_Resume.pdf",
            "_blank",
            "fullscreen=yes"
        );
    };

    return (
        <Container id="home">
            <Slide direction="left">
                <Texts>
                    {/* <h4>
                        Hello <span className="green">I'am</span>
                    </h4> */}
                    <h1 className="green">Anshul Sharma</h1>
                    <h3>Full Stack Developer</h3>
                    <p>
                        <span className="green">I build</span> accessible,
                        <br />
                        inclusive <span className="green">products</span> and
                        <br />
                        digital experiences{" "}
                        <span className="green">for the web</span>.
                    </p>
                    <br />
                    <p>
                        <span className="green">I am</span> an engineering
                        professional with a Bachelor's degree in Electronics and
                        Telecommunication Engineering from St. Francis Institute
                        Of Technology, Mumbai University. I am currently
                        pursuing a Master's Degree in Information Systems from
                        Northeastern University.
                    </p>
                    <br />
                    <p>
                        <span className="green">With 2.5 years</span> of
                        experience in Full Stack Development, I have
                        demonstrated a proven track record of working in the
                        information technology and e-commerce industry. My
                        skillset comprises Web Development, Back-End
                        Development, and developing conversational AI Chatbots.
                        I possess expertise in HTML, CSS, JavaScript, Python,
                        Node.js, React.js, Vue.js, SQL, and MongoDB.
                    </p>
                    <br />
                    <p>
                        <span className="green">My fervent interest</span> lies
                        in solving real-world problems.
                    </p>
                    <button
                        onClick={openResume}
                        style={{ marginTop: "1.5rem", borderRadius: "2rem" }}
                    >
                        Resume
                    </button>
                    <Social>
                        <div className="social-icons">
                            <span
                                onClick={() => {
                                    window.open(
                                        "https://www.linkedin.com/in/anshul1610",
                                        "_blank"
                                    );
                                    return false;
                                }}
                            >
                                <a>
                                    <AiFillLinkedin />
                                </a>
                            </span>
                            <span
                                onClick={() =>
                                    window.open(
                                        "https://www.github.com/anshulsharma1610",
                                        "_blank"
                                    )
                                }
                            >
                                <a>
                                    <AiFillGithub />
                                </a>
                            </span>
                            <span
                                onClick={() =>
                                    window.open(
                                        "https://www.instagram.com/anshul1610",
                                        "_blank"
                                    )
                                }
                            >
                                <a>
                                    <AiOutlineInstagram />
                                </a>
                            </span>
                        </div>
                    </Social>
                </Texts>
            </Slide>
            <Slide direction="right">
                <Profile>
                    <img src="images/anshul.jpg" alt="profile" />
                </Profile>
            </Slide>
        </Container>
    );
};

export default ProfComponent;

const Container = styled.div`
    display: flex;
    gap: 2rem;
    padding-top: 2rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    z-index: 1;
    @media (max-width: 840px) {
        width: 90%;
    }

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;
const Texts = styled.div`
    flex: 1;
    h4 {
        padding: 1rem 0;
        font-weight: 500;
    }
    h1 {
        font-size: 2rem;
        font-family: "Secular One", sans-serif;
        letter-spacing: 2px;
    }
    h3 {
        font-weight: 500;
        font-size: 1.2rem;
        padding-bottom: 1.2rem;
        text-transform: capitalize;
    }
    p {
        font-weight: 300;
    }

    button {
        padding: 0.7rem 2rem;
        margin-top: 3rem;
        cursor: pointer;
        background-color: #01be96;
        border: none;
        color: #fff;
        font-weight: 500;
        filter: drop-shadow(0px 10px 10px #01be9551);
        :hover {
            filter: drop-shadow(0px 10px 10px #01be9570);
        }
    }
`;
const Social = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    p {
        font-size: 0.9rem;
        @media (max-width: 690px) {
            font-size: 0.7rem;
        }
    }

    .social-icons {
        display: flex;
        align-items: center;
        gap: 1rem;
        span {
            width: 2.3rem;
            height: 2rem;
            clip-path: polygon(
                25% 0%,
                75% 0%,
                100% 50%,
                75% 100%,
                25% 100%,
                0% 50%
            );
            background-color: #01be96;
            position: relative;
            transition: transform 400ms ease-in-out;
            :hover {
                transform: rotate(360deg);
            }
        }

        a {
            color: #fff;
            position: absolute;
            top: 55%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;
const Profile = styled.div`
    img {
        width: 25rem;
        height: 35rem;
        border-radius: 10rem;
        filter: drop-shadow(0px 10px 10px #01be9570);
        transition: transform 400ms ease-in-out;
        @media (max-width: 790px) {
            width: 20rem;
        }

        @media (max-width: 660px) {
            width: 18rem;
        }

        @media (max-width: 640px) {
            width: 100%;
        }
    }

    :hover img {
        transform: translateY(-10px);
    }
`;
