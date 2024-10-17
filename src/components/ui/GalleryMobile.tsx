import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { images } from '../../const/const';

interface Props { }



export function GalleryMobile({ }: Props) {
    return <div className='block md:hidden'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
            enabled: true,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
    >
        {images.map((el, idx) => (
            <SwiperSlide key={idx}>
                <img src={`/${el}`} alt={el} />
            </SwiperSlide>
        ))}
    </Swiper>
    </div>
}
