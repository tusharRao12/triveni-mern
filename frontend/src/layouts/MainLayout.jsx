import FrontHeader from '../components/FrontHeader'
import FrontFooter from '../components/FrontFooter'

const MainLayout = ({ children }) => {
  return (
    <>
        <FrontHeader/>
        <main>{children}</main>
        <FrontFooter/>
    </>
  )
}

export default MainLayout