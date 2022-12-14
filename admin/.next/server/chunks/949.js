"use strict";
exports.id = 949;
exports.ids = [949];
exports.modules = {

/***/ 949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AX": () => (/* binding */ UPDATE_USER),
/* harmony export */   "AZ": () => (/* binding */ DELETE_USER),
/* harmony export */   "IG": () => (/* binding */ CREATE_PRODUCT_MUTATION),
/* harmony export */   "Q7": () => (/* binding */ UPDATE_PRODUCT),
/* harmony export */   "qK": () => (/* binding */ CREATE_USER),
/* harmony export */   "u7": () => (/* binding */ DELETE_PRODUCT)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CREATE_PRODUCT_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation CreateProduct(
    $nombre: String
    $marca: String
    $precio: String
    $categorias: String
    $descripcion: String
    $disponibilidad: String
  ) {
    createProduct(
      nombre: $nombre
      marca: $marca
      precio: $precio
      categorias: $categorias
      descripcion: $descripcion
      disponibilidad: $disponibilidad
    ) {
      nombre
    }
  }
`;
const UPDATE_PRODUCT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation UpdateProduct(
    $id: String
    $nombre: String
    $precio: String
    $marca: String
    $categorias: String
    $descripcion: String
    $disponibilidad: String
  ) {
    updateProduct(
      id: $id
      nombre: $nombre
      precio: $precio
      marca: $marca
      categorias: $categorias
      descripcion: $descripcion
      disponibilidad: $disponibilidad
    ) {
      successful
    }
  }
`;
const CREATE_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation CreateUser(
    $nombre: String
    $usuario: String
    $pass: String
    $email: String
    $telefono: String
    $tipo: String
  ) {
    createUser(
      nombre: $nombre
      usuario: $usuario
      pass: $pass
      email: $email
      telefono: $telefono
      tipo: $tipo
    ) {
      token
    }
  }
`;
const UPDATE_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation UpdateUser(
    $id: String
    $nombre: String
    $usuario: String
    $tipo: String
    $telefono: String
    $email: String
  ) {
    updateUser(
      id: $id
      nombre: $nombre
      usuario: $usuario
      tipo: $tipo
      telefono: $telefono
      email: $email
    ) {
      successful
    }
  }
`;
const DELETE_PRODUCT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation DeleteProduct($id: ID) {
    deleteProduct(id: $id) {
      id
    }
  }
`;
const DELETE_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation DeleteUser($id: ID){
    deleteUser(id: $id){
      id
    }
  }
`;


/***/ })

};
;