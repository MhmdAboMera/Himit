import { useTranslation } from "react-i18next";
import logo from "../../assets/images/himit-logo.png";
import { NavLink } from "react-router-dom";
import { t } from "i18next";
const SideNave = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const links = [
    { text: t('Suggestions and complaints'), href: `/Services/Suggestions_Complaints` },
    { text: t('Military Education'), href: `/Services/MilitaryEducation` },
    { text: t('Questionnaires'), href: `/Services/survey` }
  ];
  return (
    <div className="col-sm-12 col-lg-3 mb-5 aside-Graduates">
      <div className="list-group" id="list-tab" role="tablist">
        <div className="aside  rounded px-3 mt-2">
          <img className="img w-100" src={logo} alt="logo" />
          <ul className="list-unstyled p-0">
            {links.map((link, index) => (
              <li key={index} className="my-2">
                <NavLink className={`aside_btn__odCRK btn  p-2 w-100 ${index == 0 ? "rounded-0 mb-2" : ""} ${currentLang == 'en' ? 'text-start' : ''}`} to={link.href}>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNave;
