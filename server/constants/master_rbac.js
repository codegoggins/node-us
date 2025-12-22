export const master_rbac = [
  {
    section: "user",
    label: "User",
    actions: [
      { key: "create_user", label: "Create New User" },
      { key: "update_user", label: "Update User" },
      { key: "delete_user", label: "Delete User" },
    ],
  },
  {
    section: "role",
    label: "Roles",
    actions: [
      { key: "create_role", label: "Create New Role" },
      { key: "update_role", label: "Update Role" },
      { key: "delete_role", label: "Delete Role" },
      { key: "read_role", label: "Read Roles" },
    ],
  },
  {
    section: "products",
    label: "Products",
    actions: [
      { key: "create_product", label: "Create Product" },
      { key: "update_product", label: "Update Product" },
      { key: "delete_product", label: "Delete Product" },
      { key: "read_product", label: "Read Products" },
    ],
  },
  {
    section: "vendors",
    label: "Vendors",
    actions: [{ key: "approve_vendor", label: "Approve Vendor" }],
  },
];
