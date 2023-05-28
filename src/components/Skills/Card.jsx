import React from "react";
import styled from "styled-components";

const Card = props => {
    const { Icon, disc, title } = props;
    const desc = disc.map((d, index) => (
        <li style={{ textDecoration: "none" }} key={index}>
            {d}
        </li>
    ));

    return (
        <Container>
            <span className="green">
                <Icon />
            </span>
            <h1>{title}</h1>
            <ul>{desc}</ul>
        </Container>
    );
};

export default Card;

const Container = styled.div`
    width: 100%;
    filter: drop-shadow(0px 0.4px 4px #64ffda);
    height: 420px !important;
    background: linear-gradient(
        159deg,
        rgb(45, 45, 58) 0%,
        rgb(43, 43, 53) 100%
    );
    padding: 1rem;
    text-align: center;
    span {
        font-size: 4rem;
    }

    h1 {
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    p {
        font-size: 0.8rem;
    }

    ul {
        list-style: none; /* Add this CSS rule to remove bullets */
        padding-left: 0; /* Optional: Remove left padding from the list */
    }

    li {
        margin: 0.5rem;
    }
`;
