import FrontHeader from '../components/FrontHeader'
import FrontFooter from '../components/FrontFooter'

const MainLayout = ({ children }) => {
  return (
    <section id="homepagesection">
        <FrontHeader/>
        {children}
        <FrontFooter/>
    </section>
  )
}

export default MainLayout