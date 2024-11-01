import styled from "styled-components";

 export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4vw;
    .brand {
      img {
         margin-top: 1rem;
         cursor: pointer;
      }
      .toggle {
         display: none;
      }
    }
    .links {
      display: flex;
      list-style: none;
      gap: 2rem;
    }

    li {
      a {
         color: #fc4958;
         font-weight: 600;
         text-decoration: none;
         text-transform: uppercase;
         letter-spacing: 0.2rem;
         transition: 0.2s ease-in-out;
         &:hover {
            color: #f9c744;
         }
      }
      .active {
         color: #f9c744;
      }
    }
 `