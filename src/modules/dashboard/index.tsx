import { DashboardLayout } from "@/components/layouts/dashboard-layout";

const Dashboard = () => {
    return ( 
        <div>
            <p>Hello</p>
        </div>
     );
}

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
 
export default Dashboard;