// Here We can group all my components to make it much easier to use

// PUBLIC PART OF THE WEB
export { default as OrderQr } from "./Section_Public/OrdersQr/OrdersQr";

export { default as PuntosPage } from "./Section_Public/PointsPage/PointsPage";
export { Login } from "./Section_Public/Login/Login";
export { default as Register } from "./Section_Public/Register/Register";
export { default as ContactWthUs } from "./Section_Public/Contact/ContactWthUs";
export { default as ChangePasswodEmail } from "./Section_Public/ChangePasswordByEmail/ModalChangePassEmail/ChangePasswodEmail";
export { default as WelcomePage } from "./Section_Public/WelcomeRegister/WelcomePage";
export { default as Home } from "./Section_Public/Home/Home";
export { default as FormChangePasswordEmail } from "./Section_Public/ChangePasswordByEmail/FormChangePasswordEmail/FormChangePasswordEmail";

// CONTROL PANEL PART OF THE WEB ADMIN
export { ManageUsers } from "./Section_Contol_Panel/AdminPage/ManageUsers/ManageUsers";
export { ChangePassword } from "./Section_Contol_Panel/AdminPage/ManageUsers/ChangePassword";
export { InformationSetting } from "./Section_Contol_Panel/AdminPage/InformationSettings/InformationSetting";
export { ManageTables } from "./Section_Contol_Panel/AdminPage/ManagsTables/ManageTables";
export { ManageMenus } from "./Section_Contol_Panel/AdminPage/ManageMenus/ManageMenus";
export { ManageCategories } from "./Section_Contol_Panel/AdminPage/ManageCategories/ManageCategories";
export { ManageProducts } from "./Section_Contol_Panel/AdminPage/ManageProducts/ManageProducts";
export { default as GenerateQR } from "./Section_Contol_Panel/AdminPage/GenerateQR/GenerateQR";
export { default as ShowInformation } from "./Section_Contol_Panel/AdminPage/InformationSettings/ShowInformation/ShowInformation";
export { default as RegisterUser } from "./Section_Contol_Panel/AdminPage/ManageUsers/RegisterUser/RegisterUser";

// CONTROL PANEL PART OF THE WEB WORKER
export { OrdersTable } from "./Section_Contol_Panel/WorkerPage/OrdersTable/OrdersTable";
export { Kitchen } from "./Section_Contol_Panel/WorkerPage/Kitchen/Kitchen";
