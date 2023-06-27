/* eslint-disable react/jsx-key */
import { Title } from '@/components/atoms/Title'
import { ModulesListWrapper } from './ModulesList.styled'
import { BotProps } from '@/types/bot'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Pagination } from 'swiper'
import { Module } from '@/types/modules'
import { useState } from 'react'

interface ModulesProps {
  active: BotProps
  modules: Module[]
}

const ModulesList = ({ active, modules }: ModulesProps) => {
  const [moduleActive, setModuleActive] = useState(0)

  return (
    <ModulesListWrapper color={active.color}>
      <header>
        <Title>Módulos</Title>
        <div className="modules">
          {modules.map((module, index) => (
            <div className={`module ${index === moduleActive && 'active'}`}>
              {module.name}
            </div>
          ))}
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
          {modules[moduleActive].commands.map((command) => (
            <SwiperSlide>
              <div className="command">
                <Title className="medium-title thin white-colored">
                  <span>/</span>
                  {command.name}
                </Title>
                <div className="command-description">{command.description}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ModulesListWrapper>
  )
}

export default ModulesList
