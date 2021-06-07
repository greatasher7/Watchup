import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faGithub, faAppStoreIos, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 17vh;
    background-color: rgba(0, 0, 0, .5);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    overflow: hidden;
`;

const ContainerCenter = styled.div`
    width: 65%;
    display: grid;
    grid-template-columns: .5fr 2.5fr 1fr 1fr;
`;

const FooterCont = styled.div`
    padding: 0 2vw;
    
`;

const LogoContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const LogoImage = styled.img`
    width: 7vw;
`;

const Copyright = styled.p`
    height: 100%;
    font-size: .6rem;
    line-height: 1.3;
    color: #999;
    letter-spacing: .05rem;
    display: flex;
    align-items: center;
`;

const FooterTitle = styled.h4`
    font-size: 1rem;
    color: #ccc;
    font-weight: 500;
    padding-top: 3vh;
`;

const FollowUsList = styled.ul`
    display: flex;
    margin-top: 1.5vh;
    margin-left: -5px;
`;

const FollowUs = styled.li`
    &:not(:last-child){
        margin-right: .7vw;
    }
`;

const LinkToFollow = styled.a`
    width: 4vh;
    height: 4vh;
    background-color: #000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    &:hover{
        transition: font-size .3s ease-in-out, background-color .3s ease-in-out;
        font-size: 1.2rem;
        background-color: #e6bd0a;
    }
    
`;

const AppDownloadList = styled.ul`
    margin-top: 1.5vh;
    margin-left: -5px;
`;

const AppDownload = styled.li`
    &:first-child{
        margin-bottom: .5vh;
    }
`;

const LinkToApp = styled.a`
    display: flex;
    align-items: center;
    padding-left: 1vw;
    font-size: .9rem;    
    width: 9vw;
    height: 3.5vh;
    background-color: rgba(50, 50, 50, .5);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    transition: background-color .3s ease-in-out;
    &:hover{
        background-color: #e6bd0a;
    }
`;

const AppString = styled.span`
    margin-left: .7vw;
    font-size: .6rem;
`;

const handleClick = (e) => {
    e.preventDefault();
} 

const Footer = () => {
    return (
        <>
            <Container>
                <ContainerCenter>
                    <FooterCont>
                        <LogoContainer>
                            <LogoImage src={require("assets/logo.png").default} />
                        </LogoContainer>
                    </FooterCont>
                    <FooterCont>
                        <Copyright>
                            © 2021 WATCHUP. All Rights Reserved. All videos and shows on this platform are 
                            trademarks of, and all related images and content are the property of, WATCHUP Inc.
                        </Copyright>
                    </FooterCont>
                    <FooterCont>
                        <FooterTitle>Follow Us</FooterTitle>
                        <FollowUsList>
                            <FollowUs><LinkToFollow href="" onClick={handleClick}><FontAwesomeIcon icon={faFacebookF} /></LinkToFollow></FollowUs>
                            <FollowUs><LinkToFollow href="" onClick={handleClick}><FontAwesomeIcon icon={faInstagram} /></LinkToFollow></FollowUs>
                            <FollowUs><LinkToFollow href="" onClick={handleClick}><FontAwesomeIcon icon={faTwitter} /></LinkToFollow></FollowUs>
                            <FollowUs><LinkToFollow href="" onClick={handleClick}><FontAwesomeIcon icon={faGithub} /></LinkToFollow></FollowUs>
                        </FollowUsList>
                    </FooterCont>
                    <FooterCont>
                        <FooterTitle>Get App</FooterTitle>
                        <AppDownloadList>
                            <AppDownload><LinkToApp href="" onClick={handleClick}><FontAwesomeIcon icon={faAppStoreIos} /><AppString>App Store</AppString></LinkToApp></AppDownload>
                            <AppDownload><LinkToApp href="" onClick={handleClick}><FontAwesomeIcon icon={faGooglePlay} /><AppString>Google Play</AppString></LinkToApp></AppDownload>
                        </AppDownloadList>
                    </FooterCont>
                </ContainerCenter>
            </Container>
        </>
    );
}

export default Footer;
