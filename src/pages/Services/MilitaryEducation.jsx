import { useTranslation } from "react-i18next";

const MilitaryEducation = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-2">
      <div className="mb-3">
        <h2>{t('military_education_objectives')}</h2>
        <ol className="px-3">
          <li className="mb-2">{t('objective1')}</li>
          <li className="mb-2">{t('objective2')}</li>
          <li className="mb-2">{t('objective3')}</li>
          <li className="mb-2">{t('objective4')}</li>
          <li className="mb-2">{t('objective5')}</li>
          <li className="mb-2">{t('objective6')}</li>
          <li className="mb-2">{t('objective7')}</li>
        </ol>
      </div>
      <div className="mb-3">
        <h2>{t('military_education_instructions')}</h2>
        <ol className="px-3">
          <li className="mb-2">{t('instruction1')}</li>
          <li className="mb-2">{t('instruction2')}</li>
          <li className="mb-2">{t('instruction3')}</li>
          <li className="mb-2">{t('instruction4')}</li>
          <li className="mb-2">{t('instruction5')}</li>
          <li className="mb-2">{t('instruction6')}</li>
          <li className="mb-2">{t('instruction7')}</li>
        </ol>
      </div>
    </div>
  );
};

export default MilitaryEducation;
