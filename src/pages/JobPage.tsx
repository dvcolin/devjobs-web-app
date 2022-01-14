import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../scss/pages/JobPage.scss";
import JobInfoGroup from "../components/JobInfoGroup";
import ScrollToTop from "../components/util/ScrollToTop";
import Spinner from "../components/Spinner";
import { JobType } from "../types";
import data from "../data.json";

const JobPage = () => {
  const [job, setJob] = useState<JobType | null>(null);
  const { id } = useParams<"id">();

  useEffect(() => {
    setTimeout(() => {
      const job = data.find((j) => j.id === +id!);
      if (job) setJob(job);
    }, 1000);
  }, [id]);

  return (
    <>
      <ScrollToTop />
      <div className="job-page">
        {job ? (
          <>
            <Helmet>
              <title>
                {job.position} - {job.company} | Devjobs
              </title>
            </Helmet>
            <div className="job-page__content">
              <div className="job-page__company-box">
                <div className="job-page__company-box-content">
                  <div
                    className="job-page__company-logo-box"
                    style={{ backgroundColor: job.logoBackground }}
                  >
                    <img
                      className="job-page__company-logo"
                      src={`${process.env.PUBLIC_URL}/${job.logo}`}
                      alt={`${job.company} logo`}
                    />
                  </div>
                  <div className="job-page__company-details">
                    <div className="job-page__company-info">
                      <h2 className="job-page__company-name">{job.company}</h2>
                      <p className="job-page__company-website">{job.website}</p>
                    </div>
                    <a
                      className="job-page__company-website-link"
                      href={job.website}
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
                      {job.postedAt} &middot; {job.contract}
                    </p>
                    <h1 className="job-page__job-position">{job.position}</h1>
                    <h4 className="job-page__job-location">{job.location}</h4>
                  </div>
                  <a
                    className="job-page__apply-button"
                    href={job.apply}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apply Now
                  </a>
                </div>
                <p className="job-page__job-description">{job.description}</p>
                <JobInfoGroup
                  heading="Requirements"
                  content={job.requirements.content}
                  items={job.requirements.items}
                  listType="unordered"
                />
                <JobInfoGroup
                  heading="What You Will Do"
                  content={job.role.content}
                  items={job.role.items}
                  listType="ordered"
                />
              </div>
            </div>
            <div className="job-page__footer">
              <div className="job-page__footer-content">
                <div className="job-page__footer-job-details">
                  <h3 className="job-page__footer-position">{job.position}</h3>
                  <p className="job-page__footer-company">{job.company}</p>
                </div>
                <a
                  className="job-page__footer-apply-button"
                  href={job.apply}
                  target="_blank"
                  rel="noreferrer"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </>
        ) : (
          <div className="job-page__spinner-container">
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};

export default JobPage;
