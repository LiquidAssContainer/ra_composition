export const Card = ({ children, title, description, buttonText }) => {
  return (
    <div className="card">
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          {buttonText}
        </a>
      </div>
    </div>
  );
};
