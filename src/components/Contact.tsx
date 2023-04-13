import { FiSend, FiLinkedin, FiGithub } from "react-icons/fi/index.js";

export const Contact = () => {
  return (
    <section className="white">
      <h2>Contact</h2>
      <div className="contact-container">
        <a href="mailto:sebestyenroland21@gmail.com" target="_blank">
          <FiSend className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/eye1994/" target="_blank">
          <FiLinkedin className="icon" />
        </a>
        <a href="https://github.com/eye1994" target="_blank">
          <FiGithub className="icon" />
        </a>
      </div>
    </section>
  );
};
