import React,{useEffect} from 'react'
import Navbar from "../Navbar"
import Footer from "../Footer"
import styled from "styled-components";

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar/>
            <Container>
            <H1> Privacy Policy AgriVision4U </H1>
            <H2>General</H2>
             <H3>By using, accessing or participating in the Service, you agree to the terms of this privacy policy (the "Privacy Policy"). Capitalized terms not defined in this Privacy Policy have the meanings set forth in the Terms and Conditions, located here. We reserve the right to change our Privacy Policy at any time. If we do this, we will post a notice regarding the changes made to any of the Privacy Policies on the Website for at least 7 days after the changes are posted and will indicate at the bottom of the Privacy Policy the date these terms were last revised. Any revisions to this Privacy Policy will become effective on the earlier of<br/>
                <OL>
                    <LI>the end of the foregoing 7-day period or </LI>
                    <LI> the first time you access or use the Service after any such changes. If you do not agree to abide by this Privacy Policy, you are not authorized to use, access or participate in the Service.</LI>
                </OL>
             </H3>
             <H2>Information We Collect</H2>
             <H3>
                When you use the Services, you provide us with two types of information:<br/>
                <OL>
                    <LI> information you submit via the Service and</LI>
                    <LI> information regarding your use of the Service collected by us as you interact with the Service.</LI>
                </OL>
             When you enter the Website, we collect your browser type and IP address. This information is gathered for all Website visitors. In addition, we store certain information from your browser using "cookies." A cookie is a piece of data stored on the user's computer tied to information about the user. We use session ID cookies to confirm that users are logged in. If you do not want information collected through the use of cookies, there is a simple procedure in most browsers that allows you to deny or accept the cookie feature; however, you should note that cookies may be necessary to provide you certain features (e.g., customized delivery of information) available on the Website.</H3>
             <H3>Through the registration process you may provide us with your name, email address, hometown, and other information that may be requested during the registration process. When you use the Service you may submit information and content to your profile, generate Activity Data through engaging in educational activities on the Service, or send messages and otherwise transmit information to other users. We store this information so that we can provide you the Service and offer personalized features.</H3>
            <H2>Use Of Information Obtained by AgriVision4U</H2>
            <H3>We may use your contact information to send you notifications regarding new services offered by AgriVision4U and its partners that we think you may find valuable. AgriVision4U may also send you service-related announcements from time to time through the general operation of the Service. Generally, you may opt out of such emails, although AgriVision4U reserves the right to send you notices about your account even if you opt out of all voluntary email notifications.</H3>
            <H3>Profile information is used by AgriVision4U primarily to be presented back to and edited by you when you access the Service and to be presented to other users. In some cases, other users may be able to supplement your profile, including by submitting comments.</H3>
            <H3>AgriVision4U may use aggregate or anonymous data collected through the Service, including Activity Data, for any purpose. This data may be used by AgriVision4U and shared with third parties in any manner</H3>
            <H2>Sharing Your Personally-Identifiable Information with Third Parties</H2>
            <H3>AgriVision4U shares your personally-identifiable information only in limited circumstances where AgriVision4U believes such sharing is reasonably necessary to offer the Service, legally required or permitted by you.</H3>
            <H3>We may provide personally-identifiable information to service providers who help us bring you the Service, such as hosting the Service at a co-location facility or sending email updates. In connection with these operations, our service providers may have access to personally identifiable information for use for a limited time.</H3>
            <H3>Where we utilize service providers for the processing of any personally-identifiable information, we implement reasonable contractual protections limiting the use of that personally-identifiable information to the provision of services to AgriVision4U.</H3>
            <H3>Notwithstanding anything else in this policy, we may work with partners who use mobile SDKs, including the OneSignal Messaging SDK, to passively collect information (collectively, “SDK Information''), which generally helps us deliver personalized notifications. This data may also be used to identify you in a unique manner across other devices or browsers for the purposes of customizing ads or content. Depending on the permissions granted to this application, this information may include personally identifiable information (PII) including your e-mail address. This information may also include precise location (i.e. GPS-level data) or WiFi information, apps you have installed and enabled, and your mobile identifier (e.g., Android Advertising ID).</H3>
            <H2>Consumer Control & Opt-Out Options</H2>
            <H3>Opting-out of OneSignal Push Notifications - You may in most cases opt out of receiving push notifications by going to your device “Settings” and clicking on “Notifications,” and then changing those settings for some or all of the apps on your device. (Different device configurations, or updates to devices, may affect or change how these settings work.)</H3>
            <H3>Opting Out of “Cross-App” Advertising on Mobile Devices - You can opt out of having your mobile advertising identifiers used for certain types of interest-based (also called “cross-app”) mobile behavioral advertising, by accessing the “settings” on your Apple or Android mobile device, as follows: By opening the Google Settings app on your device, selecting Ads, and then selecting the option to opt-out of interest-based ads. (Different device configurations, or updates to devices, may affect or change how these settings work.)</H3>
            <H3>We may be required to disclose personally-identifiable information pursuant to lawful requests, such as subpoenas or court orders, or in compliance with applicable laws. Additionally, we may share accounts or other personally-identifiable information when we believe it is necessary to comply with law, to protect our interests or property, to prevent fraud or other illegal activity perpetrated through the Service or using the AgriVision4U name, or to prevent imminent harm. This may include sharing personally-identifiable information with other companies, lawyers, agents or government agencies.</H3>
            <H3>If the ownership of all or substantially all of the AgriVision4U business, or individual business units or assets owned by AgriVision4U that are related to the Service, were to change, your personally-identifiable information may be transferred to the new owner. In any such transfer of information, your personally-identifiable information would remain subject to this section.</H3>
            <H2>Links</H2>
            <H3>The Service may contain links to other websites. We are not responsible for the privacy practices of other websites. We encourage users to be aware when they leave the Service to read the privacy statements of other websites that collect personally identifiable information. This Privacy Policy applies solely to information collected by AgriVision4U via the Service. We may also integrate with third parties who will interact with you under their terms of service. One such third party is YouTube and by using the Sites or Services, you agree to be bound by the YouTube Terms of Service located here and also by the privacy policies of Google located here.</H3>
            <H3>We use YouTube APIs to show you the video views count and Embed YouTube videos on Free Videos page</H3>
        </Container>
        <Footer/>
        
        </div>
    )
}
const Container = styled.div`
    width: 70%;
    max-width: 90rem;
    margin:3.5rem auto;
`;
const OL = styled.ol`
    list-style-type:upper-roman
`;

const LI = styled.li`
    list-style-type:upper-roman
`;
const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  border-bottom: #000000 1px solid;
  margin: 1.5rem 0;
`;
const H2 = styled.div`
  line-height: 1.75;
  font-weight: 700;
  font-size: 1.5rem;
  padding: 1rem;
  padding-top: 0;
`;
const H3 = styled.div`
  width:95%;
  line-height: 1.75;
  font-size: 1.25rem;
  padding: 1rem;
  padding-top: 0;
`;
export default Privacy
