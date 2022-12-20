/* Reasons Section (Mainly used at Home) */

import { ReasonsStyles } from "./Reasons.styled"

const Reasons = () => {
  return (
    <ReasonsStyles>
      <div className="reasons">
        <div className="reason">
          <div className="reason-image"></div>
          <div className="reason-content">
            <h1><span>/</span> Crie um bot exclusivo para o seu servidor</h1>
            <p>Personalize da maneira que quiser de forma rápida e intuitiva!</p>
          </div>
        </div>
        <div className="reason">
          <div className="reason-image"></div>
          <div className="reason-content">
            <h1><span>/</span> Nós hospedamos e cuidamos da parte difícil</h1>
            <p>Você não precisa se preocupar com a parte entediante, nós cuidamos de tudo para você ter a melhor experiência possível.</p>
          </div>
        </div>
        <div className="reason">
          <div className="reason-image"></div>
          <div className="reason-content">
            <h1><span>/</span> O suporte mais dinâmico do mercado</h1>
            <p>Iremos te ajudar no que precisar quando quiser, sem custos adicionais. Você não vai ficar na mão!</p>
          </div>
        </div>
      </div>
    </ReasonsStyles>
  )
}

export default Reasons