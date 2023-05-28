import React from "react";
import styled from "styled-components";

const EducationCard = props => {
    const { name, img, degree, course, coursework, gpa, graduation } =
        props.item;

    return (
        <Container>
            <Header>
                <img src={img} alt={name} />
                <div className="details">
                    <h1>{name}</h1>
                    <p>
                        {degree} in {course}
                    </p>
                </div>
            </Header>
            <Body>
                <p>
                    <strong>Relevant Coursework:</strong>
                </p>
                <ul>
                    {coursework.map((course, index) => (
                        <li key={index}>{course}</li>
                    ))}
                </ul>
                <p>
                    <strong>GPA:</strong> {gpa}
                </p>
                <p>
                    <strong>Graduation:</strong> {graduation}
                </p>
            </Body>
        </Container>
    );
};

export default EducationCard;

const Container = styled.div`
    background: linear-gradient(
        159deg,
        rgb(45, 45, 58) 0%,
        rgb(43, 43, 53) 100%
    );
    padding: 1.5rem 1rem;
    filter: drop-shadow(0px 0.4px 4px #64ffda);
    margin: 1rem 1rem;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
        width: 4.5rem;
        height: 4.5rem;
        border-radius: 10px;
        object-fit: contain;
    }

    .details {
        h1 {
            color: #64ffda;
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
    }
`;

const Body = styled.div`
    font-size: 0.8rem;
    margin-top: 1.5rem;

    p {
        margin-bottom: 0.5rem;
    }

    ul {
        list-style: none;
        padding-left: 1rem;
        margin-top: 0.5rem;

        li {
            margin-bottom: 0.25rem;
        }
    }
`;
