/* FAQ Section (Mainly used at Home) */

/* General Imports */
import { data } from '../../../../data/faqContent.js';
import FaqContainer from 'react-faq-component';

/* Styles Imports */
import './Faq.styled';
import { FAQStyles } from './Faq.styled';

const Faq = () => {
  const styles = {
    bgColor: '#1c1c1c',
    titleTextColor: 'white',
    rowTitleColor: 'white',
    rowContentColor: 'hsla(0,0%,100%,.7)',
    arrowColor: '#1775e1',
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
            data={data}
            styles={styles}
            config={config}
          />
        </div>
      </section>
    </FAQStyles>
  );
}

export default Faq