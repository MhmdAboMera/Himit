import { useTranslation } from "react-i18next";
const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <div className="contactForm">
      <div className="container">
        <div className="contact-form col-12">
          <h1 data-aos="flip-up">{t('Contact Us for Support and Inquiries')}</h1>
          <p data-aos="flip-up">
            Lorem ipsum dolor sit met, connecter adipiscing elit, Carabid tur
            auctor Justo Lorem ipsum dolor sit met, connecter adipiscing elit
          </p>
          <form>
            <label htmlFor="name" className="form-label">{t('Name')}</label>
            <input
              id="name"
              data-aos="flip-up"
              type="text"
              className="form-control"
              placeholder={t('Name')}
            />
            <label htmlFor="Email" className="form-label">{t('Email')}</label>

            <input
              id="Email"
              data-aos="flip-up"
              type="email"
              className="form-control"
              placeholder={t('Email')}
            />
            <label htmlFor="phone" className="form-label">{t('phone')}</label>
            <input
              id="phone"
              data-aos="flip-up"
              type="text"
              className="form-control"
              placeholder={t('phone')}
            />
            <label htmlFor="Message" className="form-label">{t('Message')}</label>
            <textarea
              id="Message"
              data-aos="flip-up"
              placeholder={t('Message')}
              className="form-control"
            ></textarea>
            <button style={{ width: "200px" }} className={currentLanguage == "en" ? "me-auto" : "ms-auto"} type="submit" data-aos="flip-up">{t('Send')}</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;
