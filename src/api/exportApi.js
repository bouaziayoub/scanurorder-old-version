// EXPORT APIS

// ? ChangePasswordEmail API
export { SendPasswordEmailApi } from "./ChangePasswordEmailAPI/SendPasswordEmailApi";
export { UpdatePasswordEmailApi } from "./ChangePasswordEmailAPI/UpdatePasswordEmailApi";

// ? Contact API
export { ContactUsAPi } from "./ContactAPI/ContactUsAPi";

// ? Establishment API
export { default as ShowEstablishmentApi } from "./EstablishmentAPI/ShowEstablishmentApi";
export { default as ShowPicEstablishmentApi } from "./EstablishmentAPI/ShowPicEstablishmentApi";
export { UpdateEstablishmentApi } from "./EstablishmentAPI/UpdateEstablishmentsApi";
export { UploadImagesEstablishmentApi } from "./EstablishmentAPI/UploadImgEstablishmentApi";
export { default as DeletePicturesEstablishmentApi } from "./EstablishmentAPI/DeletePicturesEstablishmentApi";

// ? Manageer API
export { ChangePasswordApi } from "./ManagerAPI/ChangePasswordAPI";
export { LoginApi, LoginUsersApi } from "./ManagerAPI/LoginApi";
export { RegisterApi } from "./ManagerAPI/RegisterApi";
export { default as ShowAdmin } from "./ManagerAPI/ShowAdminApi";

// ? Menu API
export { AddProductMenuApi } from "./MenuAPI/AddProductMenuApi";
export { AddProductCategoryApi } from "./MenuAPI/AddProductCategoryApi";
export { RemoveProductMenuAPI } from "./MenuAPI/RemoveProductMenuAPI";
export { RemoveCategoryMenuApi } from "./MenuAPI/RemoveCategoryMenuApi";

// --
export { CreateMenuApi } from "./MenuAPI/CreateMenuApi";
export { default as DeleteMenuApi } from "./MenuAPI/DeleteMenuApi";
export { default as ShowMenuApi } from "./MenuAPI/ShowMenuApi";
export { default as ShowProductMenuApi } from "./MenuAPI/ShowProductMenuApi";
export { UpdateMenuApi } from "./MenuAPI/UpdateMenuApi";

// ? Category API
export { CreateCategoryApi } from "./CategoryAPI/CreateCategoryApi";
export { default as ShowCategoryApi } from "./CategoryAPI/ShowCategoryApi";
export { default as ShowProductsCategoryApi } from "./CategoryAPI/ShowProductsCategoryApi";
export { default as DeleteCategoryApi } from "./CategoryAPI/DeleteCategoryApi";
export { UpdateCategoryApi } from "./CategoryAPI/UpdateCategoryApi";
export { RemoveProductCategoryApi } from "./CategoryAPI/RemoveProductCategoryApi";
export { AddCategoryMenuApi } from "./CategoryAPI/AddCategoryMenuApi";
// ? Order API
export { default as ShowOrderApi } from "./OrdersAPI/ShowOrderApi";
export { UpdateStatusOrderApi } from "./OrdersAPI/UpdateStatusOrderApi";
export { UpdateStatusPaymentApi } from "./OrdersAPI/UpdateStatusPaymentApi";

// ? Product API
export { CreateProductApi } from "./ProdocutAPI/CreateProductApi";
export { default as DeleteProductApi } from "./ProdocutAPI/DeleteProductApi";
export { default as ShowProductsApi } from "./ProdocutAPI/ShowProductsApi";
export { UpdateProductApi } from "./ProdocutAPI/UpdateProductApi";
export { UploadImgProductApi } from "./ProdocutAPI/UploadImgProductApi";
export { default as ShowPicProductApi } from "./ProdocutAPI/ShowPicProductApi";

// ? Table API
export { CreateTableApi } from "./TableAPI/CreateTableApi";
export { default as DeleteTableApi } from "./TableAPI/DeleteTableApi";
export { default as ShowTableApi } from "./TableAPI/ShowTableApi";
export { UpdateTableApi } from "./TableAPI/UpdateTableApi";

// ? QR-API
export { imgQr, qrTable } from "./QR-API/ApiGenerateQR";

// ? Schedule API
export { CreateScheduleApi } from "./ScheduleAPI/CreateScheduleApi";
export { default as DeleteScheduleByNameApi } from "./ScheduleAPI/DeleteScheduleByNameApi";
export { default as ActivateScheduleApi } from "./ScheduleAPI/ActivateScheduleApi";
export { default as ShowAllSchedulesApi } from "./ScheduleAPI/ShowAllSchedulesApi";
export { default as ShowSchedulesByNameApi } from "./ScheduleAPI/ShowSchedulesByNameApi";
export { default as ShowIsOpenApi } from "./ScheduleAPI/ShowIsOpenApi";
export { UpdateScheduleApi } from "./ScheduleAPI/UpdateScheduleApi";

// ? UploadImage & DeleteImage API
export { default as UploadImageApi } from "./UploadImgAPi/UploadImageApi";
export { default as DeletePicturesApi } from "./UploadImgAPi/DeletePicturesApi";

// ? Rerservations API

export { CreateReservationApi } from "./ReservationsAPI/CreateReservationApi";
export { DeleteReservationApi } from "./ReservationsAPI/DeleteReservationApi";
export { default as ShowReservationApi } from "./ReservationsAPI/ShowReservationApi";


// ? USERS API

export { RegisterUserApi } from "./UsersAPI/RegisterUserApi";

