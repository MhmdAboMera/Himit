import CustomButton from '../CustomButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import { useGlobalState } from '../../Context';
import { ImageFun } from '../ImageFun';
const Landing = () => {
    const { seeting, seetingError, isLoadingSeeting, apiUrl } = useGlobalState();
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const getImages = async () => {
        const response = await axios.get(`${apiUrl}/api/website/sliders`);
        return response.data;
    };
    const { data: images, error: imagesError, isLoading: isLoadingImages } = useQuery('images', getImages);

    if (isLoadingImages || isLoadingSeeting) {
        return <div className='home-landing isLoading-landing'><div className="loader position-absolute start-50 top-50 translate-middle"></div></div>;
    }
    if (imagesError || seetingError) {
        return <div className='home-landing isLoading-landing'><div className="loader position-absolute start-50 top-50 translate-middle"></div></div>;
    }
    return (
        <div className="home-landing py-2 py-md-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-4 col-xl-5">
                        <p className="fs-2 text-heed fw-bold">
                            {currentLanguage === 'en' ? seeting?.name_en : seeting?.name_ar}
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 text-landing-contant d-none d-md-block ">
                        <p className="fs-3 mb-2 text-white fw-bold">
                            {seeting?.vision}
                        </p>
                        <p className='my-3 fs-6 text-white'>
                            {seeting?.mission}
                        </p>
                        <div className="row">
                            <div className="col-4">
                                <CustomButton text={t("For More")} color="#fff" to={'/about'} routeTo={'/about'} />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 d-flex justify-content-end mt-0 mt-md-3 ">
                        <Swiper
                            spaceBetween={30}
                            pagination={{ clickable: true }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                            loop={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            speed={2000}
                        >
                            {images?.map((image) => (
                                <SwiperSlide key={image.photo}>
                                    <div className="img-landing-box">
                                        <img src={ImageFun(image.photo)} alt="img land" width="100%" height="100%" className="img-landing" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
