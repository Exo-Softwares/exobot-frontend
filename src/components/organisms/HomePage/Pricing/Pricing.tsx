/* eslint-disable react/jsx-key */
import { PricingWrapper } from './Pricing.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Title from '@/components/atoms/Title'
import { pricingData } from '@/data/pricingContent'
import Button from '@/components/atoms/Button'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { Text } from '@/components/atoms/Text'
import { Icon } from '@/components/atoms/Icon'

const Pricing = () => {
  return (
    <PricingWrapper>
      <div className="pricing-wrapper">
        <Title weight="light" fontSize="30px" center>
          Qual desses <strong>mais combina com a sua necessidade</strong>
          <span>?</span>
        </Title>
        <Text className="disclaimer">
          <Icon nameIcon="MdSwipe" propsIcon={{ className: 'icon' }} />
          Arraste pro lado
        </Text>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            865: {
              slidesPerView: 1,
            },
            1000: {
              slidesPerView: 2,
            },
            1700: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          className="panels-container"
        >
          {pricingData.map((plan) => (
            <SwiperSlide>
              <div className="panel">
                <header className="panel-header">
                  <div className={`title-wrapper ${plan.name.toLowerCase()}`}>
                    <h1>{plan.name}</h1>
                  </div>
                  <div className="price-wrapper">
                    <p>
                      <span>R$</span>
                      {String(plan.price.toFixed(2)).replace('.', ',')}
                    </p>
                    <p id="monthly">cobrança mensal</p>
                  </div>
                </header>
                <div className="panel-benefits">
                  {plan.benefits.map((benefit) => (
                    <div className="benefit">
                      <FontAwesomeIcon className="icon" icon={faCheck} />{' '}
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="panel-bottom">
                  <Button icon="RiArrowRightLine">Continuar</Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </PricingWrapper>
  )
}

export default Pricing
