import { Link } from 'react-router-dom';
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import {  FaXTwitter } from 'react-icons/fa6'
const SocialIcons = (seeting) => {
  return (
    <div className="d-flex gap-2 social_icon">
      {seeting?.tel1 && <Link to={`https://wa.me/${seeting?.tel1}`} className="whats" target='_blank' aria-label="whatsapp"><FaWhatsapp /></Link>}
      {seeting?.facebook && <Link to={`https://www.facebook.com/${seeting?.facebook}`} className="facebook" target='_blank' aria-label="facebook"><FaFacebook /></Link>}
      {seeting?.instagram && <Link to={`https://www.instagram.com/${seeting?.instagram}`} className="insta" target='_blank' aria-label="instagram"><FaInstagram /></Link>}
      {seeting?.youtube && <Link to={`${seeting?.youtube}`} className="youtube" target='_blank' aria-label="youtube"><FaYoutube /></Link>}
      {seeting?.linkedin && <Link to={`https://www.linkedin.com/in/${seeting?.linkedin}`} className="linkedin" target='_blank' aria-label="linkedin"><FaLinkedin /></Link>}
      {seeting?.twitter && <Link to={`https://twitter.com/${seeting?.twitter}`} className="twitter" target='_blank' aria-label="twitter"><FaXTwitter /></Link>}
    </div>
  )

};

export default SocialIcons;
