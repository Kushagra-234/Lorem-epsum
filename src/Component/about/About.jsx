import React from "react";
import "./about.css";
import Award from "../../img/award.png"

const About = () => {
  return (
    <>
      <div className="a">
        <div className="a-left">
          <div className="a-card-bg "></div>
          <div className="a-card">
            <img
              src="https://cdn.pixabay.com/photo/2017/09/25/18/06/man-2786060_960_720.jpg"
              alt=""
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">
          <h1 className="title">About me </h1>
          <p className="a-sub">
            it is long established fact that reader will be distracted by
            readable content{" "}
          </p>
          <p className="a-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            dolorem vitae excepturi, vel quod aut, explicabo facere facilis
            ipsum sapiente at fugiat odio repellat voluptates veritatis tempora
            rem, id aspernatur praesentium esse dolor quam dolores. Beatae
            deserunt inventore cum velit!
          </p>
          <div className="a-award">
            <img src={Award} alt="" className="a-award-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
