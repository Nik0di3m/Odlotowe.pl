import React from 'react'
import Admin from '../../images/admin.png';
import Code from '../../images/code.png';
import Google from '../../images/google.png';
import { WorkCardContainer, WorkCardDescription, WorkCardImg, WorkCardInfo, WorkCardInfoContainer } from './WorkCardElements';
const WorkCard = () => {
    return (
        <WorkCardContainer>
            <WorkCardInfoContainer>
                <WorkCardInfo draggable="true">
                    <WorkCardImg>
                        <img src={Code} alt="content" />
                    </WorkCardImg>
                    <WorkCardDescription>
                        <p>Zrobimy odlotową stronę!
                        Chcesz mieć wizytówkę firmy w internetcie?
                        Dobrze trafiłeś! Stworzymy Tobie stronę dostosowaną do Twoich potrzeb!
                    </p>
                    </WorkCardDescription>
                </WorkCardInfo>
                <WorkCardInfo>
                    <WorkCardImg>
                        <img src={Google} alt="content" />
                    </WorkCardImg>
                    <WorkCardDescription>
                        <p>
                            Chciałbyś pozyskiwać więcej klientów albo zwiększyć ruch na stronie?
                            Z nami to możliwe!
                            Pozycjonowanie i Google ADS nie mają przed nami tajemnic!
                        </p>
                    </WorkCardDescription>
                </WorkCardInfo>
                <WorkCardInfo>
                    <WorkCardImg>
                        <img src={Admin} alt="content" />
                    </WorkCardImg>
                    <WorkCardDescription>
                        <p>
                            Wiemy jak ciężka jest obsługa serwisu, ciągłe zmiany, nowe treści, produkty.
                            Tysiące pomysłów, ale kto to zrobi?
                            Nasz Administrator!
                            Służymy pomocą w profesjonalnej obsłudze Twojej witryny!

                        </p>
                    </WorkCardDescription>
                </WorkCardInfo>
            </WorkCardInfoContainer>
        </WorkCardContainer>
    )
}

export default WorkCard;
