/* FAQ Section (Mainly used at Home) */

/* General Imports */
import { faqData } from '../../../../data/faqContent'
import FaqContainer from 'react-faq-component'

/* Styles Imports */
import { FAQStyles } from './Faq.styled'

const Faq = () => {
  const styles = {
    bgColor: '#111',
    titleTextColor: 'white',
    rowTitleColor: 'white',
    rowContentColor: 'hsla(0,0%,100%,.7)',
    arrowColor: '#39e667',
  }

  const config = {
    animate: true,
    tabFocus: true,
  }

  return (
    <FAQStyles>
      <section>
        <div className="faq-section">
          <FaqContainer data={faqData} styles={styles} config={config} />
        </div>
      </section>
    </FAQStyles>
  )
}

export default Faq
