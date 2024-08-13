import { useTranslation } from 'react-i18next';
import aboutImg2 from '../../assets/images/about-raound.jpg'
import { useGlobalState } from '../../Context';
import { ImageFun } from '../ImageFun';

const AboutUs = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const { seeting } = useGlobalState();
    return (
        <div className="about-us">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className="fs-1 fw-bold about-heed">
                            {t("About the institute")}
                        </p>
                        <div className="about-text">
                            <p className="fs-2 fw-bold">
                                {
                                    currentLanguage == "ar" ? `${seeting?.name_ar}..` : seeting?.name_en
                                }
                            </p>
                            <p className='my-3'>
                                {
                                    currentLanguage == "ar" ? `${seeting?.vision}..` : seeting?.vision
                                }
                            </p>
                            <p className='m-0'>
                                {
                                    currentLanguage == "ar" ? `${seeting?.mission}..` : seeting?.mission
                                }
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-img-box">
                            <img src={seeting ? ImageFun(seeting.photo) : aboutImg2} alt="about img" loading="lazy" title='about img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;