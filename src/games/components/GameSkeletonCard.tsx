const GameSkeletonCard = () => {
  return (
    <div className="card" aria-hidden="true">
      <svg
        className="bd-placeholder-img card-img-top"
        width="100%"
        height="180"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <rect width="100%" height="100%" fill="#868e96"></rect>
      </svg>
      <div className="card-body">
        <p className="card-text placeholder-glow">
          <span className="placeholder col-9"></span>
          <span className="placeholder col-3"></span>
        </p>
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-12"></span>
        </h5>
      </div>
    </div>
  );
};

export default GameSkeletonCard;
