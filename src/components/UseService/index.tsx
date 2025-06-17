import * as S from './style'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { DodamTag } from '@b1nd/dds-web';
import Handshake from 'src/assets/handshake.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

interface ApiServiceData {
  name: string;
  url: string;
  redirectUrl: string;
  frameworks: string[];
}

interface UseServiceProps {
  data?: ApiServiceData[];
}

const UseService = ({ data }: UseServiceProps) => {
  const tagColors: { [key: string]: string } = {
    'React': '#0083F0',
    'Spring': '#00BF40',
    'Vue': '#009632',
    'Nest': '#FF4242',
    'Next': '#191A1A',
  };

  const getTagColor = (tagName: string): string => {
    return tagColors[tagName] || '#8E8E8E';
  };

  // 더미데이터
  const defaultServices: ApiServiceData[] = [
    {
      name: '대소위키',
      url: 'http://dgsw.wiki/',
      redirectUrl: 'http://dgsw.wiki/callback',
      frameworks: ['React', 'Spring']
    },
    {
      name: '삑',
      url: 'http://beep.com/',
      redirectUrl: 'http://beep.com/callback',
      frameworks: ['Spring', 'Vue']
    },
    {
      name: '담도담도',
      url: 'http://bind.damdodamdo.com/',
      redirectUrl: 'http://bind.damdodamdo.com/callback',
      frameworks: ['Next', 'Nest']
    },
    {
      name: '담도담도',
      url: 'http://bind.damdodamdo.com/',
      redirectUrl: 'http://bind.damdodamdo.com/callback',
      frameworks: ['Next', 'Nest']
    },
    {
      name: '담도담도',
      url: 'http://bind.damdodamdo.com/',
      redirectUrl: 'http://bind.damdodamdo.com/callback',
      frameworks: ['Next', 'Nest']
    },
    {
      name: '담도담도',
      url: 'http://bind.damdodamdo.com/',
      redirectUrl: 'http://bind.damdodamdo.com/callback',
      frameworks: ['Next', 'Nest']
    },
    {
      name: '담도담도',
      url: 'http://bind.damdodamdo.com/',
      redirectUrl: 'http://bind.damdodamdo.com/callback',
      frameworks: ['Next', 'Nest']
    }
  ];

  const services = data || defaultServices;

  return (
    <S.SectionContainer>
      <S.SectionTitle>
        <img src={Handshake} alt="handshake" style={{ width: 24, height: 24}}/>
        사용 서비스
      </S.SectionTitle>
      <S.SwiperContainer>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={services.length > 3} // 카드가 3개보다 많을 때만 무한 반복
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <S.ServiceCard>
                <S.ServiceName>{service.name}</S.ServiceName>
                <S.ServiceUrl>{service.url}</S.ServiceUrl>
                <S.TagContainer>
                  {service.frameworks.map((framework, tagIndex) => (
                    <DodamTag
                      key={tagIndex}
                      text={framework}
                      color={'red'}
                      customStyle={{
                        fontSize: '12px',
                        height: 'auto',
                        minHeight: 'unset',
                        backgroundColor: getTagColor(framework)
                      }}
                    />
                  ))}
                </S.TagContainer>
              </S.ServiceCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.SwiperContainer>
    </S.SectionContainer>
  );
};

export default UseService;