const Icon = (props) => {
  const { icon } = props;
  return (
    <svg className={`a-icon a-icon-${icon}`} aria-hidden="true">
      <use xlinkHref={`/svg/sprite.svg#icon-${icon}`}></use>
    </svg>
  );
};

export default Icon;
