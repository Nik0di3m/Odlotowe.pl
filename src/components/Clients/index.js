import React from 'react'
import Tas from '../../images/tas.png';
import Kaja from '../../images/kaja.png';
import Emtech from '../../images/emtech.png';
import Logis from '../../images/logis.png';
import Skibiccy from '../../images/skibiccy.png';
import FlameClients from '../../images/flameClients.svg';
import { ClientContainer, ClientH1, ClientsLogo, ClientsLogoContainer, ClientsTitle, Logo, Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, LogoOverlay } from './ClientsElements';
const Clients = () => {
    return (
        <ClientContainer>
            <ClientsTitle>
                <ClientH1>
                    Zaufali nam
                </ClientH1>
            </ClientsTitle>
            <ClientsLogoContainer>
                <ClientsLogo>
                    <Logo1>
                        <img src={FlameClients} alt="content" className="flameClient" />
                    </Logo1>
                    <Logo2>
                        <img src={Skibiccy} alt="content" className="skibiccy" />
                    </Logo2>
                    <Logo3>
                        <img src={Kaja} alt="content" className="kaja" />
                    </Logo3>
                    <Logo4>
                        <img src={Emtech} alt="content" className="emtech" />
                    </Logo4>
                    <Logo5>
                        <img src={Logis} alt="content" className="logis" />
                    </Logo5>
                    <Logo6>
                        <img src={Tas} alt="content" className="tas-img" />
                    </Logo6>
                </ClientsLogo>

            </ClientsLogoContainer>
        </ClientContainer>
    )
}

export default Clients;
