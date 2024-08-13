import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import SocialIcons from "../components/SocialIcons";
import landImg from '../assets/images/home-landing-img.png'
import '../styles/speech/speech.css'
import Members from "../components/Members";
import { MdPhoneEnabled } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
const Speech = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const [langClass, setLangClass] = useState("en");
    useEffect(() => {
        setLangClass(currentLanguage);
    }, []);
    return (
        <>
            <SEO
                title="service - Himit"
                description="lorem lorem lorem lorem lorem"
        name="Himit"
        keywords="Himit"
        ogImage={window.location.href + "src/assets/images/himit-logo.png"}
            />
            <div className="speech py-5 mb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="fs-1 fw-bold speech-heed">
                                كلمة رئيس المعهد
                            </p>
                            <p className="my-5">تعمل وحدة تقنية المعلومات في المعهد علي تقديم رؤيتها الاستراتيجية والتزامها بتحقيق تقدم متميز في مجال تكنولوجيا المعلومات تعمل وحدة تقنية المعلومات في المعهد علي تقديم رؤيتها الاستراتيجية والتزامها بتحقيق تقدم متميز في مجال تكنولوجيا المعلومات ..</p>
                            <SocialIcons />
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex justify-content-end mt-3">
                            <div className="img-landing-box">
                                <img src={landImg} alt="img land" className='img-landing' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Members />
            <div className="problems-contact py-5">
                <div className="bg-wave">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#1A3051" fillOpacity="1" d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,170.7C672,160,768,192,864,208C960,224,1056,224,1152,213.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="fs-3 mb-3 text-white">
                                تعمل وحدة تقنية المعلومات في المعهد علي تقديم رؤيتها الاستراتيجية والتزامها بتحقيق تقدم متميز .
                            </p>
                            <div className="contact-box d-flex align-items-center gap-3 text-white mb-3">
                                <MdPhoneEnabled className="phone-icon" />
                                <p className="m-0">01017969172</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form className="px-3">
                                <input
                                    id="name"
                                    data-aos="flip-up"
                                    type="text"
                                    className="form-control  mb-2"
                                    placeholder="Name"
                                />

                                <input
                                    id="Email"
                                    data-aos="flip-up"
                                    type="email"
                                    className="form-control mb-2"
                                    placeholder="Email"
                                />
                                <textarea
                                    rows={3}
                                    id="Message"
                                    data-aos="flip-up"
                                    placeholder="Message"
                                    className="form-control mb-2"
                                ></textarea>
                                <button style={{ width: "200px" }} className={`m-auto d-block p-1 mb-2`} type="submit" data-aos="flip-up">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="puls-icons d-flex flex-column gap-3 text-white">
                    <FaPlus />
                    <FaPlus />
                    <FaPlus />
                </div>
            </div>
        </>
    );
};

export default Speech;
