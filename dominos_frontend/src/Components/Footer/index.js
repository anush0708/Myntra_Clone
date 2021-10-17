import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Locations } from './data'
import {FooterContainer,FooterWrap,LocationWrapper,
    FooterDeleveryLocations,LocationData,SocialMedia,
    SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink,
    TermsWrapper,TermsContent,TermData,Heading } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <LocationWrapper>
                    <p>We delever to... </p>
                    <FooterDeleveryLocations>
                    {Locations.map((loc)=><LocationData>{loc} </LocationData> )}
                    </FooterDeleveryLocations>
                </LocationWrapper>
                <TermsWrapper>
                    <TermsContent>
                        <Heading>Online </Heading>
                        <TermData>Order Pizza Online </TermData>
                        <TermData>Order Cheese Burst Pizza Online </TermData>
                    </TermsContent>
                    <TermsContent>
                        <Heading>Legal </Heading>
                        <TermData>Privacy Policy</TermData> 
                        <TermData>Terms & Conditions</TermData> 
                    </TermsContent>
                    <TermsContent>
                        <Heading>Contact us </Heading>
                        <TermData>Party Orders </TermData>
                    </TermsContent>
                </TermsWrapper>
               
                    
                
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer"> 
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkdin" rel="noopener noreferrer">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
