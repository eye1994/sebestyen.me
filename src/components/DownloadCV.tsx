import { FiDownload } from "react-icons/fi/index.js";

export const DownloadCV = (): JSX.Element => {
  return (
    <a
      className="download-cv"
      href="/Roland_Sebestyen_-_Technical_Lead.pdf"
      target="_blank"
    >
      <FiDownload />
      <span className="label">Download CV</span>
    </a>
  );
};
