import "../scss/components/JobInfoGroup.scss";

interface JobInfoGroupProps {
  heading: string;
  content: string;
  items: string[];
  listType: "unordered" | "ordered";
}

const JobInfoGroup = ({
  heading,
  content,
  items,
  listType,
}: JobInfoGroupProps) => {
  return (
    <div className="job-info-group">
      <h3 className="job-info-group__heading">{heading}</h3>
      <p className="job-info-group__content">{content}</p>
      {listType === "unordered" ? (
        <ul className="job-info-group__items job-info-group__items--unordered">
          {items.map((item) => (
            <li
              key={item}
              className="job-info-group__item job-info-group__item--unordered"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <ol className="job-info-group__items job-info-group__items--ordered">
          {items.map((item) => (
            <li
              key={item}
              className="job-info-group__item job-info-group__item--ordered"
            >
              {item}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default JobInfoGroup;
