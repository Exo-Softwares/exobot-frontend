/* FAQ Section (Mainly used at Home) */

/* General Imports */
import { faqData } from '../../../../data/faqContent.js';
import FaqContainer from 'react-faq-component';

/* Styles Imports */
import './Faq.styled';
import { FAQStyles } from './Faq.styled';

const Faq = () => {
  const styles = {
    bgColor: '#121212',
    titleTextColor: 'white',
    rowTitleColor: 'white',
    rowContentColor: 'hsla(0,0%,100%,.7)',
    arrowColor: '#8d42f5',
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };

  return(
    <FAQStyles>
      <section>
        <div className="faq-section">
          <FaqContainer
            data={faqData}
            styles={styles}
            config={config}
          />
        </div>
      </section>
    </FAQStyles>
  );
}

export default Faq