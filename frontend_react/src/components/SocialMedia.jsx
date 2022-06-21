import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaFacebookF, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/rasmus-buhl-jakobsen-686980104/"
        target="_blank"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://github.com/Buhl93?tab=repositories" target="_blank">
        <div>
          <FaGithub />
        </div>
      </a>
      <a href="https://www.facebook.com/rasse10/" target="_blank">
        <div>
          <BsFacebook />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
