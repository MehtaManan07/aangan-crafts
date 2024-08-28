import styled from "styled-components";

export const ProductWrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
    overflow: hidden;
  }

  .background-blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(10px);
    opacity: 0.6;
    z-index: 0;
  }

  .main-image {
    position: relative;
    z-index: 1;
    width: 100%;
    display: block;
    object-fit: contain;
    border-radius: var(--radius);
    transition: var(--transition);
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    z-index: 2;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }

  .container:hover .main-image {
    opacity: 0.5;
  }

  .container:hover .link {
    opacity: 1;
  }

  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;
