/* eslint-disable react/jsx-key */
import Button from '@/components/atoms/Button'
import { Title } from '@/components/atoms/Title'
import Faq from '@/components/organisms/HomePage/Faq/Faq'
import { Container } from '@/styles/globals'
import {
  faCcAmex,
  faCcDinersClub,
  faCcMastercard,
  faCcVisa,
  faPix,
} from '@fortawesome/free-brands-svg-icons'
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  Benefit,
  PricingContent,
  PricingHeader,
  PricingShowcase,
  PricingSidebar,
  PricingTemplateWrapper,
  PricingWrapper,
  TitleWrapper,
} from './PricingTemplate.styled'
import useLoading from '@/hooks/useLoading'
import useAuth from '@/hooks/useAuth'
import NoProducts from '@/components/organisms/NoProducts/NoProducts'
import useProducts from '@/hooks/useProducts'
import ModulesList from '@/components/molecules/ModulesList/ModulesList'
import api from '@/lib/axios'

const PricingTemplate = () => {
  const [page, setPage] = useState(0)
  const { user } = useAuth()
  const { bots, modules } = useProducts()
  const { setLoading } = useLoading()

  const active = bots[page]

  const activeModules = modules.filter((v) =>
    active.modules.some((module) => module.id === v.id),
  )

  const router = useRouter()

  const createPayment = async () => {
    setLoading(true, 'Estamos criando o seu pagamento.')
    const { data } = await api.post('checkout/create', { botId: active.id })

    router.push(data.sandbox_init_point)
  }

  return (
    <>
      {bots.length === 0 ? (
        <NoProducts />
      ) : (
        <PricingTemplateWrapper>
          <Container className="container">
            <PricingHeader color={active.color}>
              <TitleWrapper color={active.color}>
                <Title className="large-title white-colored">
                  {active.name}
                </Title>
              </TitleWrapper>
              <div className="line" />
              <div className="navigation-wrapper">
                {/* Next Button */}
                <Button
                  disabled={page === 0}
                  onClick={() => {
                    setPage(page - 1)
                  }}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <span className="prev">Anterior</span>
                </Button>

                {/* Previous Button */}
                <Button
                  disabled={page + 1 === bots.length}
                  onClick={() => {
                    setPage(page + 1)
                  }}
                >
                  <span className="next">Próximo</span>{' '}
                  <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </div>
            </PricingHeader>
            <PricingWrapper>
              <PricingContent>
                {/* Benefits */}
                <div className="benefits-container">
                  <Title className="description">{active.description}</Title>

                  {active.benefits?.map((benefit) => (
                    <Benefit color={active.color}>
                      <FontAwesomeIcon
                        width={20}
                        className="icon"
                        icon={faCheck}
                      />{' '}
                      {benefit.benefit}
                    </Benefit>
                  ))}

                  {/* Showcase */}
                  <PricingShowcase color={active.color}>
                    <div className="section">
                      <div className="title">
                        <p>
                          <span>/ </span> Tenha um bot exclusivo
                        </p>
                      </div>
                      <div className="content">
                        <p>
                          Algo único, diferente de todos e feito do seu jeito.
                        </p>
                      </div>
                    </div>
                  </PricingShowcase>
                </div>

                {/* Modules List */}
                {active.modules.length > 0 && (
                  <ModulesList active={active} modules={activeModules} />
                )}
              </PricingContent>
              <div className="sticky">
                <PricingSidebar color={active.color}>
                  {/* Prices and CTA */}
                  <div className="price-wrapper">
                    <div className="price">
                      <p>
                        R$
                        <span>
                          {String(active.price.toFixed(2)).replace('.', ',')}
                        </span>
                      </p>
                    </div>
                    <p id="monthly">
                      cobrança
                      <br /> mensal
                    </p>
                  </div>

                  <div className="payment-methods">
                    <p>Métodos de pagamento</p>
                    <div className="icons">
                      <FontAwesomeIcon
                        title="VISA"
                        className="icon"
                        icon={faCcVisa}
                      />
                      <FontAwesomeIcon
                        title="MasterCard"
                        className="icon"
                        icon={faCcMastercard}
                      />
                      <FontAwesomeIcon
                        title="DinersClub"
                        className="icon"
                        icon={faCcDinersClub}
                      />
                      <FontAwesomeIcon
                        title="AMEX"
                        className="icon"
                        icon={faCcAmex}
                      />
                      <FontAwesomeIcon
                        title="PIX"
                        className="icon"
                        icon={faPix}
                      />
                    </div>
                    <p>e outros...</p>
                  </div>

                  {user ? (
                    <Button icon="RiArrowRightLine" onClick={createPayment}>
                      Ir para o pagamento
                    </Button>
                  ) : (
                    <Button icon="RiArrowRightLine" onClick={() => {}}>
                      Fazer login
                    </Button>
                  )}
                  <p className="disclaimer">
                    Pagamentos processados com segurança
                  </p>
                </PricingSidebar>
              </div>
            </PricingWrapper>
            <Faq />
          </Container>
        </PricingTemplateWrapper>
      )}
    </>
  )
}

export default PricingTemplate
