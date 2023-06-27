import { Title } from '@/components/atoms/Title'
import { ModulesListWrapper } from './ModulesList.styled'
import { BotProps } from '@/types/bot'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Pagination } from 'swiper'

interface ModulesProps {
  active: BotProps
}

const ModulesList = ({ active }: ModulesProps) => {
  return (
    <ModulesListWrapper color={active.color}>
      <header>
        <Title>Módulos</Title>
        <div className="modules">
          <div className="module active">Módulo1</div>
          <div className="module">Módulo2</div>
          <div className="module">Módulo3</div>
        </div>
      </header>

      <div className="module-content">
        <Swiper
          spaceBetween={20}
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
            1100: {
              slidesPerView: 1,
            },
            1300: {
              slidesPerView: 1,
            },
            1500: {
              slidesPerView: 2,
            },
          }}
          grid={{
            rows: 2,
          }}
          modules={[Pagination, Grid]}
          className="panels-container"
        >
          <SwiperSlide>
            <div className="command">
              <Title className="medium-title thin white-colored">
                <span>/</span>Comando
              </Title>
              <div className="command-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                saepe tempora dolores corrupti nobis commodi
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="command">
              <Title className="medium-title thin white-colored">
                <span>/</span>Comando
              </Title>
              <div className="command-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                saepe tempora dolores corrupti nobis commodi
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="command">
              <Title className="medium-title thin white-colored">
                <span>/</span>Comando
              </Title>
              <div className="command-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                saepe tempora dolores corrupti nobis commodi
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="command">
              <Title className="medium-title thin white-colored">
                <span>/</span>Comando
              </Title>
              <div className="command-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                saepe tempora dolores corrupti nobis commodi
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="command">
              <Title className="medium-title thin white-colored">
                <span>/</span>Comando
              </Title>
              <div className="command-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                saepe tempora dolores corrupti nobis commodi
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="command">
              <Title className="medium-title thin white-colored">
                <span>/</span>Comando
              </Title>
              <div className="command-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                saepe tempora dolores corrupti nobis commodi
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </ModulesListWrapper>
  )
}

export default ModulesList
