import AdminLayout from "../../layouts/AdminLayout";
import { useAuth } from "../../context/AuthContext"; 

const Dashboard = () => {
  const { user } = useAuth(); 

  return (
    <AdminLayout>
      <h2>Welcome, {user?.name}</h2>
    </AdminLayout>
  );
};

export default Dashboard;
