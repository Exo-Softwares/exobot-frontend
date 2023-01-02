/* Pricing Section (Mainly used at Home) */

/* Styles Imports */
import './Pricing.styled';
import { PricingStyles } from './Pricing.styled';

/* Font Awesome Imports */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

/* Atoms Imports */
import { TitleLight } from '../../../atoms/Titles';
import { ButtonDefault } from '../../../atoms/Buttons';


const Pricing = () => {
  return (
    <PricingStyles>
      <section>
        <div className="pricing-wrapper">
          <TitleLight fontSize='30px'>Qual desses <span>mais combina com a sua necessidade</span>?</TitleLight>
          <div className="panels-container">
            {/* Standard */}
            <div className="panel">
              <div className="panel-header">
                <div className="title-wrapper standard">
                  <h1>Standard</h1>
                </div>
                <div className="price-wrapper">
                  <p><span>R$</span>25,90</p>
                  <p id="monthly">cobrança mensal</p>
                </div>
              </div>
              <div className="panel-benefits">
                <div className="benefit">
                  <FontAwesomeIcon icon={faCheck} /> <p>Benefit</p>
                </div>
                <div className="benefit">
                  <FontAwesomeIcon icon={faCheck} /> <p>Benefit</p>
                </div>
                <div className="benefit">
                  <FontAwesomeIcon icon={faCheck} /> <p>Benefit</p>
                </div>
                <div className="benefit">
                  <FontAwesomeIcon icon={faCheck} /> <p>Benefit</p>
                </div>
                <div className="benefit">
                  <FontAwesomeIcon icon={faCheck} /> <p>Benefit</p>
                </div>
              </div>

              <div className="panel-bottom">
                <ButtonDefault margin='30px 0px 0px 0px' padding='22px' width='100%'>Continuar</ButtonDefault>
              </div>
            </div>

            {/* Pro */}
            <div className="panel">
              <div className="panel-header">
                <div className="title-wrapper pro">
                  <h1>Pro</h1>
                </div>
                <div className="price-wrapper">
                  <p><span>R$</span>49,90</p>
                  <p id="monthly">cobrança mensal</p>
                </div>
              </div>

              <div className="panel-benefits">
                <div className="benefit">
                  <FontAwesomeIcon icon={faCheck} /> <p>Benefit</p>
                </div>
                <div className="benefit">
                  <FontAwesomeIcon icon={faCheck} /> <p>Benefit</p>
                </div>
                <div className="benefit">
                  <FontAwesomeIcon icon={faCheck} /> <p>Benefit</p>
                </div>
                <div className="benefit">
                  <FontAwesomeIcon icon={faCheck} /> <p>Benefit</p>
                </div>
                <div className="benefit">
                  <FontAwesomeIcon icon={faCheck} /> <p>Benefit</p>
                </div>
              </div>
              <div className="panel-bottom">
                <ButtonDefault margin='30px 0px 0px 0px' padding='22px' width='100%'>Continuar</ButtonDefault>
              </div>
            </div>

            {/* Advanced */}
            <div className="panel">
              <div className="panel-header">
                <div className="title-wrapper advanced">
                  <h1>Advanced</h1>
                </div>
                <div className="price-wrapper">
                  <p><span>R$</span>69,90</p>
                  <p id="monthly">cobrança mensal</p>
                </div>
              </div>
              <div className="panel-benefits">
                <div className="benefit">
                  <FontAwesomeIcon icon={faCheck} /> <p>Benefit</p>
                </div>
                <div className="benefit">
                  <FontAwesomeIcon icon={faCheck} /> <p>Benefit</p>
                </div>
                <div className="benefit">
                  <FontAwesomeIcon icon={faCheck} /> <p>Benefit</p>
                </div>
                <div className="benefit">
                  <FontAwesomeIcon icon={faCheck} /> <p>Benefit</p>
                </div>
                <div className="benefit">
                  <FontAwesomeIcon icon={faCheck} /> <p>Benefit</p>
                </div>
              </div>

              <div className="panel-bottom">
                <ButtonDefault margin='30px 0px 0px 0px' padding='22px' width='100%'>Continuar</ButtonDefault>
              </div>
            </div>
          </div>
          {/*<img src={ paymentFlags } alt='Bandeiras de pagamento' />*/}
        </div>
      </section>
    </PricingStyles>
  )
}

export default Pricing