import React from "react";
import AdminLayout from "./AdminLayout";
import AddServiceForm from "@/components/AddServiceForm";

const AddService: React.FC = () => {
  return (
    <AdminLayout>
      <AddServiceForm />
    </AdminLayout>
  );
};

export default AddService;
