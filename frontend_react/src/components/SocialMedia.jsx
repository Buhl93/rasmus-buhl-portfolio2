import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaFacebookF, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin />
      </div>
      <div>
        <FaGithub />
      </div>
      <div>
        <BsFacebook />
      </div>
    </div>
  );
};

export default SocialMedia;
