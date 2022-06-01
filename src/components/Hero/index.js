import React from "react";

const Hero = (props) => {
  const { title, subtitle, img } = props;
  return (
    <section
      className="o-hero"
      style={{
        backgroundImage: `url('${img}')`,
      }}
    >
      <div className="wrapper">
        <h1 className="o-hero__title u-heading-alpha">{title}</h1>
        {subtitle && (
          <p className="o-hero__subtitle u-heading-delta u-display">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;
