import Picture from "./../assets/me.jpg";

export const About = () => {
  return (
    <section>
      <div className="about-container">
        <div className="avatar-container">
          <img
            src={Picture}
            width={150}
            height={150}
            alt="Avatar"
            className="avatar"
          />
          <span className="hashtag">#Frontend-Technical-Lead</span>
        </div>
        <p>
          I am Roland Sebestyen and my passion lies in Web Development. I am
          always eager to explore new and cutting-edge technologies. In the
          field of Web Development, I have a broad range of experience with
          several technologies and programming languages including JavaScript,
          Typescript, Angular, React, Ruby, and NodeJS. My goal is to work as a
          Full-Stack developer. I am a quick learner and prefer to find the most
          suitable solution for a situation, rather than being limited to one
          particular language or framework. I am determined and never give up
          until I find the answer. I am also passionate about challenges and
          enjoy facing them. Staying up-to-date with the latest advancements in
          Web Development is a daily priority for me.
        </p>
      </div>
    </section>
  );
};
