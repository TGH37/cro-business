import Link from 'next/link'
import { useContext } from 'react'
import Layout from '../components/Layout'
import { GlobalContext } from '../contexts/GlobalContext'
import styles from '../styles/css/legalPages.module.css'

const PrivacyPolicyPage = () => {
  const { companyName, fullNameOfLegalEntity, emailAddress, hqAddress } = useContext(GlobalContext);
  const updateDate = "05 July 2021"
  const cookiePolicyLink = "/cookie-policy"

  return (
  <Layout title={`Privacy Policy | ${companyName}`}
          description={`Privacy policy, describing how user data is treated and analysed by ${companyName}`}
  >
    <h1>Privacy Policy</h1>
    <div className={styles.contentContainer}>
      <p>{companyName} respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>

      <h3>Purpose of this privacy policy</h3>
      <p>This privacy policy aims to give you information on how {companyName} collects and processes your personal data through your use of this website, including any data you may provide through this website when you purchase a product or service.</p>
      <p>This website is not intended for children and we do not knowingly collect data relating to children. It is important that you read this privacy policy together with any other privacy policy or fair processing policy we may provide on specific occasions when we are collecting or processing personal data about you so that you are fully aware of how and why we are using your data. This privacy policy supplements other notices and privacy policies and is not intended to override them.</p>

      <h3>Contact details</h3>
      <p>If you have any questions about this privacy policy or our privacy practices, contact our Data Protection Officer (DPO) in the following ways: 
          Full name of legal entity: {fullNameOfLegalEntity}
          Email address: {emailAddress}
          Postal address: Data Protection Officer, {companyName}, {hqAddress} 
        You have the right to make a complaint at any time to the Information Commissioner's Office (ICO), the UK supervisory authority for data protection issues (<a href="www.ico.org.uk" target="_blank">www.ico.org.uk</a>). 
        We would, however, appreciate the chance to deal with your concerns before you approach the ICO so please contact us in the first instance.
      </p>

      <h3>Changes to the privacy policy and your duty to inform us of changes</h3>
      <p>We keep our privacy policy under regular review. This version was last updated on {updateDate}. Historic versions can be obtained by contacting us.</p>
      <p>It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us.</p>

      <h3>Third-party links</h3>
      <p>This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.</p>

      <h3>The data we collect about you</h3>
      <p>Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data). We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
      <ul>
        <li>Identity and Contact Data includes first name, last name, title, address, phone number, date of birth and gender and any personal data you may submit to us in filling in a form or applying for a position with us.</li>
        <li>Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
        <li>Usage Data includes information about how you use our website, products and services.</li>
        <li>Marketing and Communications Data includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
      </ul>
      <p>We also collect, use and share Aggregated Data such as statistical or demographic data for any purpose. Aggregated Data could be derived from your personal data but is not considered personal data in law as this data will not directly or indirectly reveal your identity. For example, we may aggregate your Usage Data to calculate the percentage of users accessing a specific website feature. However, if we combine or connect Aggregated Data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this privacy policy.</p>


      <h3>If you fail to provide personal data</h3>
      <p>Where we need to collect personal data by law, or under the terms of a contract we have with you, and you fail to provide that data when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with the requested services). In this case, we may have to cancel a product or service you have with us but we will notify you if this is the case at the time.</p>


      <h3>How is your personal data collected?</h3>
      <p>We use different methods to collect data from and about you including through:</p>
      <ul>
        <li>Direct interactions. You may give us your Identity and Contact by filling in forms or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide when you:
          <ul>
            <li>apply for our products or services;</li>
            <li>subscribe to our service or publications;</li>
            <li>request marketing to be sent to you;</li>
            <li>apply for a position with us; or</li>
            <li>give us feedback or contact us.</li>
          </ul>
        </li>
        <li>Automated technologies or interactions. As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies and other similar technologies. We may also receive Technical Data about you if you visit other websites employing our cookies. Please see our <Link href={cookiePolicyLink}><a >cookie policy</a></Link> for further details.</li>
      </ul>


      <h3>How we use your personal data</h3>
      <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
      <ul>
        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
        <li>Where we need to comply with a legal obligation.</li>
      </ul>
      <p>Generally, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.</p>

      <h3>Purposes for which we will use your personal data</h3>
      <p>Note that we may process your personal data for more than one lawful ground depending on the specific purpose for which we are using your data. Please contact us if you need details about the specific legal ground we are relying on to process your personal data where more than one ground has been set out in the table below.</p>

      <h3>Marketing</h3>
      <p>We strive to provide you with choices regarding certain personal data uses, particularly around marketing and advertising.</p>
      <p>You can ask us or third parties to stop sending you marketing messages at any time by following the opt-out links on any marketing message sent to you or by contacting us at any time. Where you opt out of receiving these marketing messages, this will not apply to personal data provided to us as a result of a product/service purchase.</p>

      <h3>Cookies</h3>
      <p>You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly. For more information about the cookies we use, please see our <Link href={cookiePolicyLink}><a >cookie policy</a></Link>.</p>

      <h3>Change of purpose</h3>
      <p>We will only use your personal data for the purposes for which we collected it unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose. If you wish to get an explanation as to how the processing for the new purpose is compatible with the original purpose, please contact us.</p>
      <p>If we need to use your personal data for an unrelated purpose, we will notify you and we will explain the legal basis which allows us to do so.</p>
      <p>Please note that we may process your personal data without your knowledge or consent, in compliance with the above rules, where this is required or permitted by law.</p>

      <h3>Disclosures of your personal data</h3>
      <p>We may share your personal data with the parties set out below.</p>
      <p>We use a number of carefully selected third parties to supply us with IT products and services but will only share your personal data with them where it is necessary for them to provide us with the services we need.</p>
      <p>We use Google Analytics to collect details of how you use our site, as well as anonymous data that you enter into our forms. We do this to help us analyse how visitors use our site (including behaviour patterns and the tracking of visits across multiple devices). Google Analytics doesn’t collect information that identifies a visitor to our site. All the information that is collected is anonymous and is only used to improve how our site works. We do not allow Google to make any attempt to establish the identities of any users of our site. Please see our <Link href={cookiePolicyLink}><a >cookie policy</a></Link> for further details about Google Analytics.</p>
      <p>Third parties to whom we may choose to sell, transfer or merge parts of our business or our assets. Alternatively, we may seek to acquire other businesses or merge with them. If a change happens to our business, then the new owners may use your personal data in the same way as set out in this privacy policy.</p>
      <p>We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.</p>

      <h3>International transfers</h3>
      <p>A number of our external third parties are based outside the EEA so their processing of your personal data will involve a transfer of data outside the EEA.</p>
      <p>Whenever we transfer your personal data out of the EEA, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented:</p>
      <p>We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data by the European Commission. For further details, see European Commission: Adequacy of the protection of personal data in non-EU countries. Where we use certain service providers, we may use specific contracts approved by the European Commission which give personal data the same protection it has in Europe. For further details, see European Commission:</p>
      <p>Model contracts for the transfer of personal data to third countries.  Where we use providers based in the US, we may transfer data to them if they are part of the Privacy Shield which requires them to provide similar protection to personal data shared between Europe and the US. For further details, see European Commission: EU-US Privacy Shield. Please contact us if you want further information on the specific mechanism used by us when transferring your personal data out of the EEA.</p>

      <h3>Data security</h3>
      <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>
      <p>We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.</p>

      <h3>How long will you use my personal data for?</h3>
      <p>We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.</p>
      <p>To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.</p>
      <p>By law we have to keep basic information about our customers (including Contact, Identity and Transaction Data) for six years after they cease being customers.</p>
      <p>In some circumstances you can ask us to delete your data: see your legal rights below for further information.</p>
      <p>In some circumstances, we will anonymise your personal data (so that it can no longer be associated with you) for research or statistical purposes, in which case we may use this information indefinitely without further notice to you.</p>

      <h3>Recruitment</h3>
      <p>You may wish to share personal information with us regarding employment opportunities. As part of the recruitment process, we may ask for your permission to hold your personal information. We will retain the information for two years, or for the duration of your application. If after this period, we have found no suitable vacancies, we will delete your information. By submitting your details, you give permission for us to circulate your details around {companyName} for recruitment purposes as necessary.</p>

      <h3>Your legal rights</h3>
      <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, detailed below:</p>
      <ul>
        <li>Request access to your personal data.</li>
        <li>Request correction of your personal data.</li>
        <li>Request erasure of your personal data.</li>
        <li>Object to processing of your personal data.</li>
        <li>Request restriction of processing your personal data.</li>
        <li>Request transfer of your personal data.</li>
        <li>Right to withdraw consent.</li>
      </ul>
      <p>If you wish to exercise any of the rights set out above, please contact us using the details set out above</p>

      <h3>No fee usually required</h3>
      <p>You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we could refuse to comply with your request in these circumstances.</p>

      <h3>What we may need from you</h3>
      <p>We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.</p>


      <h3>Time limit to respond</h3>
      <p>We try to respond to all legitimate requests within one month. Occasionally it could take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.</p>
    </div>
  </Layout>
  )
}


export default PrivacyPolicyPage
