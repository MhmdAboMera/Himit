import { useRef, useState } from 'react';
import { useGlobalState } from '../Context';
import SocialIcons from './SocialIcons';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from "react-google-recaptcha";

const Suggestions_Complaints = () => {
  const { seeting } = useGlobalState();
  const { t } = useTranslation();
  const recaptchaRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();
    if (recaptchaValue) {
      // Handle form submission and reCAPTCHA verification
      alert("Form submitted and reCAPTCHA verified.");
    } else {
      alert("Please complete the reCAPTCHA.");
    }
  };

  return (
    <div>
      <div className="problems-contact py-5">
        <div className="bg-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#1A3051"
              fillOpacity="1"
              d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,170.7C672,160,768,192,864,208C960,224,1056,224,1152,213.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-white mb-1 pb-0 pb-md-4">{t('Suggestions and complaints')}</h1>
              <h3 className=" mb-3 text-white mt-2 Suggestions-notes">{t('Suggestions and complaints des')}</h3>
              <div className="contact-box d-flex align-items-center gap-3 text-white mb-3">
                <SocialIcons
                  tel1={seeting?.tel1}
                  twitter={seeting?.twitter}
                  linkedin={seeting?.linkedin}
                  youtube={seeting?.youtube}
                  instagram={seeting?.instagram}
                />
              </div>
            </div>
            <div className="col-md-6">
              <form className="px-3" onSubmit={handleSubmit}>
                <input
                  id="name"
                  data-aos="flip-up"
                  type="text"
                  className="form-control mb-2"
                  placeholder={t('Name')}
                />
                <input
                  id="Email"
                  data-aos="flip-up"
                  type="email"
                  className="form-control mb-2"
                  placeholder={t('Email')}
                />
                <input
                  id="subject"
                  data-aos="flip-up"
                  type="text"
                  className="form-control mb-2"
                  placeholder={t('subject')}
                />
                <textarea
                  rows={3}
                  id="Message"
                  data-aos="flip-up"
                  placeholder={t('Message')}
                  className="form-control mb-2"
                ></textarea>
                <div className="d-flex">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Lf1UyIqAAAAANFPOcDkErlJvqYsGRsiOZl9d3DD" // Replace with your actual site key
                    className="mb-2 w-100 d-flex justify-content-center"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button className="main-button " type='submit'>
                    <span className="transition"></span>
                    <span className="gradient"></span>
                    <span className="label">{t('Send')}
                    </span></button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions_Complaints;
