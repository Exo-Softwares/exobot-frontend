/* FAQ Component Styles */

/* General Imports */
import styled from 'styled-components'

export const FAQStyles = styled.div`
  .faq-section {
    width: 100%;
    margin-top: 80px;
    padding: 40px;
    border-radius: 12px;
    background: ${(props) => props.theme.colors.accentColor};

    .faq-title {
      border-bottom: none !important;
      margin-bottom: 15px;
    }

    .faq-body {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .faq-row {
        border-bottom: 1px solid #383838 !important;
        padding-bottom: 10px;
      }
    }
  }
`
