function Tag(props) {
  const { title, icon } = props;

  return (
    <a className="tag">
      {icon && (
        <img
          src={icon}
          alt={title}
          className="tag-icon"
          style={{ width: "25px", height: "25px", marginRight: "8px" }} // Style to fit
        />
      )}
      <span>{title}</span>
    </a>
  );
}

export default Tag;
