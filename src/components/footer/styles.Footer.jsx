import styled from "styled-components";

export const Section = styled.div`
    margin: 0;
    background: linear-gradient(to right, #fc4958, #e85d05);
    color: white;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    padding: 4vw;
    p {
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
    }
    ul {
        display: flex;
        list-style-type: none;
        gap: 4vw;
        margin-top: 2vw;
        li {
            padding: 0.8rem;
            border-radius: 2rem;
            background-color: white;
            transition: 0.3s ease-in-out;
            cursor: pointer;
            svg {
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fc4958;
                font-size: 1.6rem;
                transition: 0.3s ease-in-out;
            }
            &:hover {
                background-color: black;
                svg {
                    transform: scale(1.2);
                }
            }
        }
    }
    img {
        filter: brightness(0) invert(1);
        width: 10vw;
    }
    .container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        h3 {
            font-size: 2rem;
        }
    }
    @media screen and (min-widht: 260px) and (max-widht: 1080px) {
        grid-template-columns: 1fr;
        .container {
            img {
                height: 4rem;
                width: 10rem;
            }
        }
    }
`

export const LowerFooter = styled.div`
margin: 0;
text-align: center;
background-color: black;
color: white;
padding: 1rem;
h2 {
    span {
        color: #fc4958;
        text-transform: uppercase;
    }
}
@media screen and (min-widht: 260px) and (max-widht: 450px) {
    h2 {
        span {
            display: block;
        }
    }
}

`