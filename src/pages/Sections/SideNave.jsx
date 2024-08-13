import logo from "../../assets/images/himit-logo.png";
import { NavLink, useParams } from "react-router-dom";
import { useGlobalState } from "../../Context";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { t } from "i18next";

const SideNave = () => {
  const { name } = useParams()
  const { apiUrl } = useGlobalState()
  const [data, setData] = useState();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  useEffect(() => {
    sectionData();
  }, [name]);
  const sectionData = async () => {
    const response = await axios.get(
      `${apiUrl}/api/website/departments`
    );
    const info = response.data.find(
      (dep) => dep.name_en === name.replace("-", " ")
    );
    return setData(info);
  };

  const links = [
    { text: `${currentLang == "ar" ? data?.name_ar : data?.name_en}`, href: `/department/${name}` },
    { text: t('Head of Department'), href: `/department/${name}/head_Department` },
    { text: t('Department faculty members'), href: `/department/${name}/doctors` },
    { text: t('Faculty members appointed to the department'), href: `/department/${name}/AssistantDoctor` },
    { text: t('Courses and requirements'), href: `/department/${name}/Courses` },
    { text: t('Seminars and workshops'), href: `/department/${name}/workshops` },
    { text: t('Masters and doctoral theses'), href: `/department/${name}/master_doctoral` },
    { text: t('Research projects'), href: `/department/${name}/search_project` },
    { text: t('Scientific trips'), href: `/department/${name}/scientific_trips` },
    { text: t('Publishing Awards'), href: `/department/${name}/rewords` },
    { text: t('Minutes and decisions'), href: `/department/${name}/decisions` },
    { text: t('Research plan'), href: `/department/${name}/ResearchPlan` },
    { text: t('Internal Regulation'), href: `/department/${name}/Regulation` },
    { text: t('Institute requirements'), href: `/department/${name}/rewords` },
    { text: t('Program requirements'), href: `/department/${name}/rewords` },
    { text: t('Program description and report'), href: `/department/${name}/rewords` },
    { text: t('Department booklet'), href: `/department/${name}/rewords` },
    { text: t('Section Council'), href: `/department/${name}/rewords` },
    { text: t('summer training'), href: `/department/${name}/rewords` }
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
