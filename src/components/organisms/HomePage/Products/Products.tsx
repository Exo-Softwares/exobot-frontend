/* eslint-disable react/jsx-key */
import { ProductsWrapper } from './Products.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Title } from '@/components/atoms/Title'
import { productsData } from '@/data/productsData'
import Button from '@/components/atoms/Button'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { Text } from '@/components/atoms/Text'
import { Icon } from '@/components/atoms/Icon'

const Products = () => {
  return (
    <ProductsWrapper>
      <div className="products-wrapper">
        <Title className="white-colored center">
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
          {productsData.map((plan, index) => (
            <SwiperSlide key={index}>
              <div className="panel">
                <header className="panel-header">
                  <div className={`title-wrapper ${plan.name.toLowerCase()}`}>
                    <Title>{plan.name}</Title>
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
                  {plan.benefits.map((benefit, index) => (
                    <div className="benefit" key={index}>
                      <FontAwesomeIcon className="icon" icon={faCheck} />{' '}
                      <Text>{benefit}</Text>
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
    </ProductsWrapper>
  )
}

export default Products
