import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import React from "react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import man from '../../assets/images/avater.jpg'
import { FaEye, FaFacebookF, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import { ImageFun } from '../ImageFun';
import { useGlobalState } from '../../Context';
import { NavLink } from 'react-router-dom';
const Professors = () => {
    const { t, i18n } = useTranslation();
    const { apiUrl } = useGlobalState()
    const currentLanguage = i18n.language;
    const getProfessors = async () => {
        const response = await axios.get(`${apiUrl}/api/website/InstituteOfficialsAndDepartmentHeads`);
        return response.data;
    };
    const { data: professors, error: professorsError, isLoading: isLoadingProfessors } = useQuery('professors', getProfessors);
    if (isLoadingProfessors) {
        return <div className='  position-relative'><div className="Nav-loader position-absolute start-50 top-50 translate-middle"></div></div>;
    }

    if (professorsError) {
        return <div className='  position-relative'><div className="Nav-loader position-absolute start-50 top-50 translate-middle"></div></div>;
    }

    return (
        <div className="professors pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="heed fs-1 fw-bold mb-3">  {t('The administrative and academic structure of the institute')}</div>
                        <p className="fs-5 text-information">
                            {t('The administrative and academic des')}
                        </p>
                    </div>
                </div>
                <div className="row">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        autoplay={{
                            delay: 3000, // Adjust the delay as needed
                            disableOnInteraction: false,
                        }}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        initialSlide={1} // Start with the second slide
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {
                            
                            professors.map((prof) => {
                                const docName = prof[2].split(" ").join("-")
                                return (
                                    <SwiperSlide key={prof[1]}>
                                        <NavLink to={`/doctor/${docName}`} className={`text-decoration-none text-dark`}>
                                            <div className="prof-contant">
                                                <div className="row">
                                                    <div className="col-6 p-0">
                                                        <div className="box-img">
                                                            <img src={prof[3] ? ImageFun(prof[3]) : man} alt="man" width={"100%"} height={"100%"} className='img-fluid h-100 object-fit-cover' />
                                                        </div>
                                                    </div>
                                                    <div className="col-6 ">
                                                        <div className="prof-text h-100 bg-white d-flex flex-column align-items-center justify-content-center ">
                                                            <p className="name fs-5 fw-bold">{currentLanguage == "ar" ? `${`${prof[0]} ${prof[1]}`}` : `${prof[2]}`}</p>
                                                            <p className='m-0 text-dark'>{prof[4]}</p>
                                                         
                                                         
                                                            <div className="icons d-flex gap-3 mt-2 mb-1">
                                                            <FaEye />

                                                                {/* <div > <FaFacebookF /></div>
                                                                <div ><FaSquareXTwitter /></div>
                                                                <div ><FaInstagramSquare /></div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Professors;
