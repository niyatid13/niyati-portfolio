import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    
    <div>
      <a href="https://github.com/niyatid13" class="github"><BsGithub /></a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/niyati-deshmukh-0653891ba/" class="github">
      <FaLinkedinIn /></a>
    </div>
    <div>
    <a href="https://www.instagram.com/niyati_5302/" class="github">
      <BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
