import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import student from '../../assets/images/avater.jpg';
import { useTranslation } from 'react-i18next';
import { useGlobalState } from '../../Context';
import { useQuery } from 'react-query';
import axios from 'axios';
import { ImageFun } from '../ImageFun';
import { useNavigate } from 'react-router-dom';
import SocialIcons from '../SocialIcons';
import i18next from 'i18next';

const StudentFeedback = () => {
    const { i18n } = useTranslation();
    const { apiUrl } = useGlobalState();
    const currentLanguage = i18n.language;
    const navigate = useNavigate();

    const getOpinions = async () => {
        const response = await axios.get(`${apiUrl}/api/website/Students/Opinion`);
        return response.data;
    };

    const { data: opinion, error: opinionsError, isLoading: isLoadingOpinions } = useQuery('opinion', getOpinions);

    if (isLoadingOpinions) {
        return <p>Loading...</p>;
    }

    if (opinionsError) {
        return <p>Error loading data</p>;
    }

    return (
        <div className="student-feedback py-5 mt-2">
            <div className="container">
                <div className="row">
                    <div className="fs-1 fw-bold heed mb-3 text-white mb-5 text-center">
                        {i18next.t('Students opinions')}
                    </div>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            567: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1040: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {opinion?.map((opinion) => {
                            const departmentName = opinion.students.departments.name_en.replace(/\s+/g, '-');
                            return (
                                <SwiperSlide key={opinion.student_id}>

                                    <div className="feedback-card">
                                        <div className="row align-items-center">
                                            <div className="col-8">
                                                <div className="card-text p-3">
                                                    <p className='m-0 text-dark'>
                                                        {currentLanguage === "ar" ? opinion.opinions : opinion.opinions}
                                                    </p>
                                                    <div className='d-flex justify-content-center mb-2' title={i18next.t('Watch the video')}>
                                                        <SocialIcons youtube={opinion?.video} />


                                                    </div>
                                                    <button onClick={() => navigate(`/department/${departmentName}`)}>
                                                        {currentLanguage === "ar" ? opinion.students.departments.name_ar : opinion.students.departments.name_en}
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="feedback-box">
                                                    <img src={opinion.students.photo ? ImageFun(opinion.students.photo) : student} alt="student" className="profile-image mb-2" />
                                                    <span className="name text-white">
                                                        {currentLanguage === "ar" ? opinion.students.name : opinion.students.name_en}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default StudentFeedback;
