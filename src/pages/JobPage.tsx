import "../scss/pages/JobPage.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobInfoGroup from "../components/JobInfoGroup";
import ScrollToTop from "../components/util/ScrollToTop";
import { JobType } from "../types";
import data from "../data.json";

const JobPage = () => {
  const [job, setJob] = useState<JobType | null>(null);
  const { id } = useParams<"id">();

  useEffect(() => {
    const job = data.find((j) => j.id === +id!);
    if (job) setJob(job);
  }, [id]);

  if (!job) {
    return <div>Error</div>;
  }

  const {
    logo,
    logoBackground,
    company,
    website,
    postedAt,
    contract,
    position,
    location,
    apply,
    description,
    requirements,
    role,
  } = job;

  return (
    <>
      <ScrollToTop />
      <div className="job-page">
        <div className="job-page__content">
          <div className="job-page__company-box">
            <div className="job-page__company-box-content">
              <div
                className="job-page__company-logo-box"
                style={{ backgroundColor: logoBackground }}
              >
                <img
                  className="job-page__company-logo"
                  src={`${process.env.PUBLIC_URL}/${logo}`}
                  alt={`${company} logo`}
                />
              </div>
              <div className="job-page__company-details">
                <div className="job-page__company-info">
                  <h2 className="job-page__company-name">{company}</h2>
                  <p className="job-page__company-website">{website}</p>
                </div>
                <a
                  className="job-page__company-website-link"
                  href={website}
                  target="_blank"
                  rel="noreferrer"
                >
                  Company Site
                </a>
              </div>
            </div>
          </div>

          <div className="job-page__job-box">
            <div className="job-page__job-intro">
              <div className="job-page__job-intro-content">
                <p className="job-page__job-details">
                  {postedAt} &middot; {contract}
                </p>
                <h1 className="job-page__job-position">{position}</h1>
                <h4 className="job-page__job-location">{location}</h4>
              </div>
              <a
                className="job-page__apply-button"
                href={apply}
                target="_blank"
                rel="noreferrer"
              >
                Apply Now
              </a>
            </div>
            <p className="job-page__job-description">{description}</p>
            <JobInfoGroup
              heading="Requirements"
              content={requirements.content}
              items={requirements.items}
              listType="unordered"
            />
            <JobInfoGroup
              heading="What You Will Do"
              content={role.content}
              items={role.items}
              listType="ordered"
            />
          </div>
        </div>
        <div className="job-page__footer">
          <div className="job-page__footer-content">
            <div className="job-page__footer-job-details">
              <h3 className="job-page__footer-position">{position}</h3>
              <p className="job-page__footer-company">{company}</p>
            </div>
            <a
              className="job-page__footer-apply-button"
              href={apply}
              target="_blank"
              rel="noreferrer"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPage;
