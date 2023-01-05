/* eslint-disable react/jsx-key */

/* General Imports */
import { useState } from 'react';
import { pricingData, pricingType } from '../../../data/pricingContent';
import { ButtonDefault } from '../../atoms/Buttons';
import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'
import Router from 'next/router'

/* Styles Imports */
import { TitleBold, TitleLight } from "../../atoms/Titles";
import { PricingWrapper, PricingHeader, PricingPageStyles, PricingSidebar, TitleContainer, PricingContent, Benefit, PricingShowcase } from "./PricingPage.styled";

/* Components Imports */
import Faq from '../../organisms/HomePage/Faq/Faq';

/* Font Awesome Imports */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faPix, faCcVisa, faCcMastercard, faCcDinersClub, faCcAmex } from "@fortawesome/free-brands-svg-icons"

const PricingPage = (user: Session) => {
    const [page, setPage] = useState(0);
    
    console.log(user)

    const checkout = async(active: pricingType) => {
        try {
            await document.getElementById('teste')?.setAttribute('disabled', 'true')
            const res = await fetch(
                `http://localhost:3000/api/checkout/payment`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(active)
                }
            );
            const data = await res.json();
            Router.push(data.body.init_point)
        } catch (err) {
            console.log(err);
        }
    }

    let active = pricingData[page];

    return(
        <PricingPageStyles>
            <PricingHeader mainColor={active.mainColor}>
                <TitleContainer mainColor={active.mainColor}>
                    <TitleBold fontSize="50px">{active.name}</TitleBold>
                </TitleContainer>
                <div className="line" />
                <div className="navigation-wrapper">    
                    
                    {/* Next Button */}
                    <ButtonDefault background='#2e2e2e' color='white' padding='12px 35px' width='100%' disabled={page === 0 ? true : false} onClick={() => {
                        setPage(page - 1)
                    }}>
                        <FontAwesomeIcon icon={faArrowLeft} /><span className='prev'>Anterior</span>
                    </ButtonDefault>

                    {/* Previous Button */}
                    <ButtonDefault background='#2e2e2e' color='white' padding='12px 35px' width='100%' disabled={page === 2 ? true : false} onClick={() => {
                        setPage(page + 1)
                    }}>
                        <span className='next'>Próximo</span> <FontAwesomeIcon icon={faArrowRight} /> 
                    </ButtonDefault>

                </div>
            </PricingHeader>
            <PricingWrapper>
                <PricingContent>
                    <TitleLight fontSize='24px' margin='0px 0px 40px 0px'>{active.description}</TitleLight>

                    {/* Benefits */}
                    <div className="benefits-container">
                        { active.benefits?.map((benefit) => (
                            <Benefit mainColor={active.mainColor}><FontAwesomeIcon className='icon' icon={ faCheck } /> { benefit } </Benefit>
                        ))}
                    </div>

                    {/* Showcase */}
                    <PricingShowcase mainColor={active.mainColor}>
                        <div className="section">
                            <div className="title">
                                <p><span>/ </span> Tenha um bot exclusivo</p>
                            </div>
                            <div className="content">
                                <p>Algo único, diferente de todos e feito do seu jeito.</p>
                            </div>
                        </div>
                    </PricingShowcase>  
                </PricingContent>
                <PricingSidebar mainColor={active.mainColor}>
                    {/* Prices and CTA */}
                    <div className="price-wrapper">
                        <div className="price">
                            <p>
                                R$<span>{String(active.price.toFixed(2)).replace(".", ",")}</span>
                            </p>
                        </div>
                        <p id="monthly">cobrança<br/> mensal</p>
                    </div>

                    <div className='payment-methods'>
                        <p>Métodos de pagamento</p>
                        <div className='icons'>
                            <FontAwesomeIcon title='VISA' className='icon' icon={ faCcVisa } />
                            <FontAwesomeIcon title='MasterCard' className='icon' icon={ faCcMastercard } />
                            <FontAwesomeIcon title='DinersClub' className='icon' icon={ faCcDinersClub } />
                            <FontAwesomeIcon title='AMEX' className='icon' icon={ faCcAmex } />
                            <FontAwesomeIcon title='PIX' className='icon' icon={ faPix } />
                        </div>
                        <p>e outros...</p>

                    </div>

                    { user.user ? <ButtonDefault id='teste' width='100%' onClick={() => checkout(active)}>Ir para o pagamento</ButtonDefault> : <ButtonDefault id='teste' width='100%' onClick={() => signIn('discord')}>Fazer login</ButtonDefault>}
                    <p className='disclaimer'>Pagamentos processados com segurança</p>
                </PricingSidebar>
            </PricingWrapper>
            <Faq />

        </PricingPageStyles>
    )
}

export default PricingPage;