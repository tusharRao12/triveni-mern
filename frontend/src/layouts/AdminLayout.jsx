import AdminFooter from "../components/AdminFooter"
import AdminHeader from "../components/AdminHeader"

const AdminLayout = ({ children }) => {
  return (
    <>
        <AdminHeader/>
        <main>{children}</main>
        <AdminFooter/>
    </>
  )
}

export default AdminLayout