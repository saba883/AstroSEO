import React from "react";
import AdminLayout from "./AdminLayout";

const Dashboard: React.FC = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="mt-4">Welcome to the admin panel. Here you can manage service pages, blog posts, and more.</p>
    </AdminLayout>
  );
};

export default Dashboard;

