import Link from 'next/link'
import { useContext } from 'react'
import Layout from '../components/Layout'
import { GlobalContext } from '../contexts/GlobalContext'
import styles from '../styles/css/legalPages.module.css'

const TermsOfServicePage = () => {
  const { companyName, fullNameOfLegalEntity, webAddress, registeredAddress } = useContext(GlobalContext);
  const updateDate = "05 July 2021"
  const companyNumber = "03102456"

  return (
  <Layout title={`Terms of Service | ${companyName}`}
          description={`The terms of which services are provided by ${companyName} to clients, detailing rights and responsibilities of both parties entering into the contract of service`}
  >
    <h1>Terms of Service</h1>
    <div className={styles.contentContainer}>
      <h3>Who We Are</h3>
      <p>The website https://{webAddress}/ is owned and operated by {fullNameOfLegalEntity} trading as {companyName}.  Company: {fullNameOfLegalEntity}  Company number: {companyNumber} Country: Incorporated in England and Wales Registered office: {registeredAddress}</p>
      <p>Please review the Terms and Conditions of Use (“Terms”) set out below before using this website. These Terms govern the use of this website.</p>
      <p>You must read and accept these Terms before you may become a user of this website. Your use of this website constitutes your acceptance of these Terms. This website is controlled by equation digital from offices in the United Kingdom and is principally directed at mainland UK users. International users are welcome to access this website but they must accept responsibility for compliance with local laws applicable to them.</p>


      <h3>Copyright</h3>
      <p>This website was created by equation digital and all design, text and graphics, and the layout thereof, are the copyrighted works of equation digital. All rights are reserved. You may not use, reproduce, display, modify, copy, distribute, transmit, transfer, upload or publish any information or material from this website whether in whole or in part without the prior written permission of equation digital. You may, however, copy, print or download material or information from this website solely for your own personal, non-commercial use.</p>

      <h3>Acceptable Use</h3>
      <p>You may only use this website in accordance with these Terms and, in any event, for lawful and proper purposes which include complying with all applicable laws and regulations within the UK or any other jurisdiction from which you are accessing this website. You agree that you will not:</p>
        <ul>
          <li>transmit or disseminate any information via this website or do anything which is or may be harmful, obscene, threatening, defamatory or otherwise in breach of any applicable laws or regulations;</li>
          <li>use this website in a manner which may cause an infringement of copyright, privacy or the rights of any other party;</li>
          <li>interfere or attempt to interfere with the operation of this website via whatever means including but not limited to uploading or transmitting material containing corrupt data or software viruses or to intercept or access without authority any system or data; or</li>
          <li>interfere with, deface or alter this website or the underlying software code.</li>
        </ul>
      
      <h3>Changes to the Website</h3>
      <p>We may at any time without notice make improvements or changes to the information, content and other materials on this website. We reserve the right at any time to discontinue, temporarily or permanently, any of the content or information on this website or the products and services we offer.</p>

      <h3>Changes to these Terms</h3>
      <p>We reserve the right to amend or modify these Terms from time to time and such modification shall be effective immediately upon posting of the modified Terms on this website. Your continued use of this website after amendments are posted constitutes your acceptance of these Terms as modified.</p>

      <h3>Data Protection and Privacy</h3>
      <p>Our Privacy Policy contains information concerning our use of any personal information which may be supplied to us when you use this website and you agree that we may deal with the information you provide us in accordance with our Privacy Policy.</p>

      <h3>Cookies</h3>
      <p>Our Cookie Policy contains information concerning our use of cookies when you use this website and you agree to the use of cookies in accordance with this policy.</p>

      <h3>No Warranties</h3>
      <p>This website is provided for your use “as is” and “as available” without warranty of any kind, either express or implied. To the maximum extent permitted by law, we exclude all implied warranties with regard to the information and materials on this website.</p>
      <p>We do not guarantee that the website, or any content on it, will always be available or be uninterrupted or that the website will be secure or free from bugs or viruses. You are responsible for configuring your information technology, computer programmes and platform to access the website and should use your own virus protection software.</p>

      <h3>Limitation of Liability</h3>
      <p>We do not exclude or limit in any way our liability to you where it would be unlawful to do so. This includes liability for death or personal injury caused by our negligence or the negligence of our employees, agents or subcontractors and for fraud or fraudulent misrepresentation.</p>
      <p>We shall not be liable to you for any loss or damage however caused arising from or in connection with your use of, or inability to use this website or your use of or reliance on any content displayed on this website.</p>
      <p>Where the website contains links to other sites and resources provided by third parties, these links are provided for your information only. Such links should not be interpreted as approval by us of those linked websites or information you may obtain from them.</p>

      <h3>Governing Law</h3>
      <p>These Terms shall be governed by and interpreted in accordance with the laws of England and Wales and the courts of those countries shall have exclusive jurisdiction in relation to any claim or dispute concerning these Terms and any matter arising from them.</p>

      <h3>General</h3>
      <p>Headings included in these Terms are for reference purposes only. If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck out and the remaining provisions shall be enforced as if that provision had never existed.</p>

      <h3>Feedback</h3>
      <p>We welcome the submission of your comments and feedback through this website. Please contact us with any comments you may have.</p>
    </div>
  </Layout>
  )
}


export default TermsOfServicePage
