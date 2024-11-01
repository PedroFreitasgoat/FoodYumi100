import styled from "styled-components";
import { TitleStyles } from '../ReusableStyles.jsx'



export const Section = styled.section`
    margin: 2rem 4rem;
    ${TitleStyles}
    .services {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10vw;
        margin-top: 4rem;
        .service {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5vw;
            padding: 0 3vw;
            img {
                height: 2.8rem;
            }
            p {
                text-align: center;
                line-height: 2rem;
                font-size: 1.1rem;
                letter-spacing: 0.1rem;
                span {
                    color: #fc4958;
                }
            }
            button {
                padding: 0.6rem 3rem;
                letter-spacing: 0.2rem;
                border-radius: 2rem;
                font-size: 1.1rem;
                border: none;
                color: white;
                background-color: #fc4958;
                transition: 0.3s ease;

                &:hover {
                    background-color: #f9c74f;
                }
            }
        }
        .yellow {
            button {
                background-color: #f9c74f;
                &:hover {
                    background-color: #fc4958;
                }
            }
        }
    }
    @media screen and (min-widht: 260px) and (max-widht: 1080px) {
        margin: 2rem;
        .services {
            grid-template-columns: 1fr;
        }
    }
`