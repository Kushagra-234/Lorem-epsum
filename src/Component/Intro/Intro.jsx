import React from "react";
import "./Intro.css";
import me from "../../img/me.png";

const Intro = () => {
  return (
    <>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">My name is </h2>
            <h1 className="i-name">Kushagra gupta</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web developer</div>
                <div className="i-title-item">UX/UI designer </div>
                <div className="i-title-item">Coding enthusiast</div>
                <div className="i-title-item">Photographer</div>
              </div>
            </div>
            <div className="i-desc">
              I design and create services for my customers of all size,and have
              specialization in creating stylish,modern websites web
              services,online stores Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Ullam similique est tempora porro minus impedit?
              Molestiae vitae illum minus nobis?
            </div>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={me} alt="" className="i-img" />
        </div>
      </div>
    </>
  );
};

export default Intro;
