import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import Mypic from "../../../images/logo1.png";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/mayurborsare/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={Mypic}
              alt="Founder"
            />
            <Typography>M.A.N.A.S</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is an Ecommerce wesbite made by @mayur @anjali @nayan @aniket @samiksha.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Must Visit</Typography>
            <a
              href="https://www.youtube.com/"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/mayurborsare/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
