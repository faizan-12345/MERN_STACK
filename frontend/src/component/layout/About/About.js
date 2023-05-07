import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from '@mui/icons-material/GitHub';
const About = () => {
  const visitInstagram = () => {
    window.location = "https://github.com/faizan-12345";
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
              src="https://github.githubassets.com/images/modules/open_graph/github-octocat.png"
              alt="Founder"
            />
            <Typography>Muhammad Faizan</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @faizan.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://github.com/faizan-12345"
              target="blank"
            >
              <GitHubIcon className="GithubSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;