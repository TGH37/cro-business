import { useContext } from 'react'
import Layout from '../components/Layout'
import { GlobalContext } from '../contexts/GlobalContext'
import styles from '../styles/css/legalPages.module.css'

const CookiePolicyPage = () => {
  const { companyName, fullNameOfLegalEntity, emailAddress, companyNumber, webAddress } = useContext(GlobalContext);
  const updateDate = "06 July 2021"

  return (
  <Layout title={`Cookie Policy | ${companyName}`} 
          description={`${companyName} cookie policy describing how cookies are used to enhance user experience`}
  >
    <h1>Cookie Policy</h1>
    <div className={styles.contentContainer}>

      <h3>Cookie Notice</h3>
      <p>Our website, {webAddress}, is operated by {fullNameOfLegalEntity} (company number {companyNumber}).</p>
      <p>Where we use “we”, “our” or “us” in this notice, we mean ({companyName}) unless we say otherwise.</p>
      <p>Where we use “our site” in this notice, we mean {webAddress}.</p>

      <h3>What are cookies?</h3>
      <p>Cookies are text files containing small amounts of information which are downloaded to your device when you visit our site. Our site recognises those cookies on each subsequent visit, enabling our site to recognise you.</p>
      <p>Unless you have adjusted your browser settings to refuse cookies (and details of how to do this are signposted at the end of this notice), our site will set cookies as soon as you visit our site.</p>

      <h3>How and why we use cookies</h3>
      <p>We use cookies on our site to:</p>
      <ul>
        <li>recognise you whenever you visit our site</li>
        <li>remember the notifications you’ve seen so that we don’t show them to you again</li>
        <li>allow you to navigate between pages efficiently</li>
        <li>measure how you use our site so it can be updated and improved to give you the best possible experience on our site.</li>
      </ul>
      <p>The information we obtain from our use of cookies will not usually contain information from which you can easily be identified, such as your name.  However, we may collect some personal data relating to your computer or other electronic devices, such as your IP address, your browser and/or other internet log information.</p>
      <p>In most cases, we will need your consent to use cookies on our site.  The exception to this is where the cookie is essential for us to provide you with a service you have requested.</p>
      <p>When you open our site in your browser a cookie pop up message will be displayed and this will ask you for your consent for non-essential cookies to be placed on your device. A record of your acceptance will be stored in a functional cookie for 1 year, after which the cookie will expire, and the cookie pop up message will be displayed again.</p>
      <p>You may withdraw your consent or acceptance at any time by following the instructions for disabling cookies, signposted at the end of this Cookie Notice.</p>

      <h3>Where to find more information</h3>
      <p>You can adjust the settings in your web browser to determine whether (all) sites can set cookies on your computer.  More information about cookies and how to manage them, specific to your browser, can be found at <a href="https://ico.org.uk/for-the-public/online/cookies/" target="_blank">https://ico.org.uk/for-the-public/online/cookies/</a>.</p>
      <p>If you have any further questions, comments or requests regarding our cookies notice or how we use cookies on our site, please contact us at {emailAddress}.</p>
      <p>This version was last updated on {updateDate}.</p>
    </div>
  </Layout>
  );
};


export default CookiePolicyPage;
