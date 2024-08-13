import { useTranslation } from "react-i18next";

const Survey = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-2">
      <div className="mb-3">
        <h2>{t('what_is_survey')}</h2>
        <p>{t('survey_description')}</p>
      </div>
      <div className="mb-3">
        <h2>{t('survey_importance')}</h2>
        <p>{t('survey_importance_description')}</p>
        <ol className="px-3">
          <li className="mb-2">{t('survey_benefit1')}</li>
          <li className="mb-2">{t('survey_benefit2')}</li>
          <li className="mb-2">{t('survey_benefit3')}</li>
          <li className="mb-2">{t('survey_benefit4')}</li>
        </ol>
      </div>
    </div>
  );
};

export default Survey;
