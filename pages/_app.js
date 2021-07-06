import '../styles/css/global.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faMapMarkerAlt, faPhone, faChartLine, faFlask, faUsers, faSearchDollar, faFunnelDollar } from '@fortawesome/free-solid-svg-icons'
import { BreakpointProvider } from '../contexts/MediaBreakpointCxt'
import { GlobalProvider } from '../contexts/GlobalContext'

library.add(fab, faBars, faPhone, faMapMarkerAlt, faChartLine, faFlask, faUsers, faSearchDollar, faFunnelDollar)



function MyApp({ Component, pageProps }) {

  const queries = {
    xs: '(min-width: 768px)',
    md: '(min-width: 1024px)',
    // xl: '(min-width: 1998px)',
    // or: '(orientation: landscape)'
  }

  return (
    <GlobalProvider >
      <BreakpointProvider queries={queries}>
        <Component {...pageProps} />
      </BreakpointProvider>
    </GlobalProvider>
  )
}

export default MyApp
