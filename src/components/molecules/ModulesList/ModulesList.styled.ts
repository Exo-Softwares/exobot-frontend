import styled from 'styled-components'

export const ModulesListWrapper = styled.div`
  width: 100%;

  header {
    margin-bottom: 20px;

    h1 {
      margin-bottom: 20px;
    }

    .modules {
      display: flex;
      height: fit-content;
      align-items: center;
      overflow: scroll;
      overflow-y: hidden;
      gap: 30px;
      height: 80px;
      padding: 8px 0px;

      ::-webkit-scrollbar-thumb {
        background: ${(props) => props.color};
      }

      .module {
        padding: 10px 20px;
        border-radius: 4px;
        font-size: 18px;
        background: ${(props) => props.theme.colors.accentColor};
        cursor: pointer;
        max-height: 47px;
        transition: 0.1s all;

        &.active {
          background: ${(props) => props.color};
          color: white;
        }

        &:hover {
          margin-top: -4px;
        }
      }
    }
  }

  .module-content {
    .swiper {
      &::before {
        content: '';
        position: absolute;
        width: 30px;
        height: 100%;
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(10, 10, 10, 1) 100%
        );
        right: 0px;
        z-index: 2;
      }

      .swiper-wrapper {
        flex-direction: row;
        flex-wrap: wrap;

        .swiper-slide {
          margin-top: 0px !important;
          margin-bottom: 20px;
        }
      }

      .swiper-pagination {
        .swiper-pagination-bullet-active {
          background: ${(props) => props.color};
        }
      }
    }

    .command {
      flex: 1 0 40%;
      min-width: 300px;
      background: ${(props) => props.theme.colors.accentColor};
      outline: 1px solid ${(props) => props.theme.colors.cardOutline};
      border-radius: 8px;
      padding: 15px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      opacity: 0.7;
      transition: 0.1s all;

      &:hover,
      &:target {
        opacity: 1;
      }

      h1 {
        display: flex;
        gap: 10px;

        span {
          color: ${(props) => props.color};
        }
      }
    }
  }
`
