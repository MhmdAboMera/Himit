import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import React from "react";
const ContactPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <SEO
        title="contact - Himit"
        description="lorem lorem lorem lorem lorem"
        name="Himit"
        keywords="Himit"
        ogImage={window.location.href + "src/assets/images/himit-logo.png"}
      />
      <ContactForm/>
      <ContactInfo/>
    </>
  );
};

export default ContactPage;
