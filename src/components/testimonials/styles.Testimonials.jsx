import styled from "styled-components";
import { imageZoomEffect, TitleStyles } from "../ReusableStyles";


export const Section = styled.div`
    margin: 5vw;
    background: linear-gradient(to right, #fc4958, #e85d05);
    padding: 0.2rem;
    border-radius: 1.5rem;
    position: relative;
    .container {
        margin: 0.5rem;
        padding-top: 1vw;
        padding-bottom: 4vw;
        background-color: white;
        border-radius: 1rem;
        ${TitleStyles};
        .title {
            position: absolute;
            top: -1rem;
            left: 25%;
            padding: 0 2rem;
            background-color: white;
        }
        .testimonials {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 6vw;
            background-color: white;
            margin-top: 4vw;
            .testimonial {
                padding: 0 4vw;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                gap: 1rem;
                p {
                    font-size: 1.1rem;
                    line-height: 2rem;
                    letter-spacing: 0.1rem;
                }

                ${imageZoomEffect};
                .image {
                    overflow: hidden;
                    width: max-content;
                    max-height: 10rem;
                    border-radius: 10rem;

                    img {
                        height: 10rem;
                    }
                }
            }
        }
    }
    @media screen and (min-widht: 260px) and (max-widht: 1080px) {
        .container {
            .title {
                position: initial;
                background-color: transparent;
            }
            .testimonials {
                flex-direction: column;
            }
        }
    }

`