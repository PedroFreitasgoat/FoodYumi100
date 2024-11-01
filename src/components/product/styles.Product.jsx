import styled from "styled-components";
import { imageZoomEffect, TitleStyles } from "../ReusableStyles";


export const Section = styled.div`
    ${TitleStyles};
    .products {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 3rem;
        margin-top: 3rem;
        .product {
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
            justify-content: center;
            align-items: center;
            h3 {
                color: #fc4958;
            }
            p {
                text-align: center;
                font-size: 1.1rem;
                line-height: 2rem;
                letter-spacing: 0.1rem;
            }
            ${imageZoomEffect}
            .image {
                max-height: 20rem;
                overflow: hidden;
                border-radius: 1rem;
                img {
                    height: 20rem;
                    width: 15rem;
                }
            }
        }
        button {
            border: none;
            padding: 1rem 4rem;
            color: white;
            font-size: 1.4rem;
            border-radius: 4rem;
            cursor: pointer;
            background: linear-gradient(to right, #fc4958, #e85d05);
            &:hover {
            background: linear-gradient(to left, #fc4958, #e85d05);
            }
        }
    }
    @media screen and (min-widht: 260px) and (max-widht: 720px) {
        .products {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
    }
    @media screen and (min-widht: 720px) and (max-widht: 1080px) {
        .products {
            grid-template-columns: repeat(2, 1fr);
        }
    }

`