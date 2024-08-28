// styles.js
import styled from "styled-components";

export const ContactWrapper = styled.section`
  padding: 4rem 0;
  background: var(--clr-primary-10);
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    color: var(--clr-primary-5);
  }
  p {
    line-height: 1.8;
    color: var(--clr-grey-3);
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.1rem;
  }
  .contact-form {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.75rem;
    border: none;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    transition: var(--transition);
  }

  .form-input {
    background-color: var(--clr-grey-10);
    color: var(--clr-grey-1);
  }

  .form-input:focus {
    box-shadow: var(--dark-shadow);
  }

  .message-input {
    height: 120px;
    resize: none;
  }

  .submit-btn {
    background: var(--clr-primary-5);
    color: var(--clr-white);
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }

  .submit-btn:hover {
    background: var(--clr-primary-4);
    transform: translateY(-2px);
    box-shadow: var(--dark-shadow);
  }

  @media (min-width: 768px) {
    .content {
      margin-top: 3rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }
    p {
      margin-bottom: 0;
    }
  }

  @media (min-width: 1024px) {
    padding: 6rem 0;
  }
`;