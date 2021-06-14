/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/form-save/client-form-component.js":
/*!***********************************************************!*\
  !*** ./src/components/form-save/client-form-component.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _client_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-form */ \"./src/components/form-save/client-form.js\");\n\r\n\r\nconst initForm = () => {\r\n  const form = document.createElement(\"form\");\r\n\r\n  const template = `\r\n  <div class=\"container\">\r\n    <div class=\"form-group\">\r\n      <label for=\"Id\">ID</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"Id\" readonly />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"codigo\">Codigo</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"codigo\" />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"nome\">Nome</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"nome\" />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"nome_fantasia\">Nome Fantasia</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"nome_fantasia\" />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"data\">Data</label>\r\n      <input type=\"date\" class=\"form-control\" id=\"data\" />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"cnpj\">CNPJ</label>\r\n      <input type=\"text\" class=\"form-control\" maxlength=\"14\" id=\"cnpj\" />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"cep\">CEP</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        maxlength=\"9\"\r\n        id=\"cep\"\r\n        onblur=\"searchCEP()\"\r\n      />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"logradouro\">Endereço</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"logradouro\" readonly />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"bairro\">Bairro</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"bairro\" readonly />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"localidade\">Cidade</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"localidade\" readonly />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"uf\">UF</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"uf\" readonly />\r\n    </div>\r\n\r\n    <br />\r\n    <button class=\"btn btn-primary\" type=\"submit\">Salvar</button>\r\n  </div>\r\n  `;\r\n\r\n  form.innerHTML = template;\r\n\r\n  (0,_client_form__WEBPACK_IMPORTED_MODULE_0__.default)(form);\r\n  return form;\r\n};\r\n\r\nfunction searchCEP() {\r\n  console.log(\"AQUI\");\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initForm);\r\n\n\n//# sourceURL=webpack://totvs-devtest/./src/components/form-save/client-form-component.js?");

/***/ }),

/***/ "./src/components/form-save/client-form.js":
/*!*************************************************!*\
  !*** ./src/components/form-save/client-form.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _service_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/client-service */ \"./src/service/client-service.js\");\n/* harmony import */ var _service_cep_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/cep-service */ \"./src/service/cep-service.js\");\n\r\n\r\n\r\nconst cep = document.querySelector(\"#cep\");\r\n\r\nfunction searchCEP() {\r\n  let cepValue = cep.value;\r\n\r\n  if (cepValue !== \"\") {\r\n    if (cepValue.includes(\"-\")) {\r\n      cepValue = cepValue.replace(\"-\", \"\");\r\n    }\r\n\r\n    (0,_service_cep_service__WEBPACK_IMPORTED_MODULE_1__.getCep)(cepValue).then((res) => {\r\n      console.log(res);\r\n    });\r\n  }\r\n}\r\n\r\nconst eventSubmit = (form) => {\r\n  form.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n\r\n    const body = {\r\n      codigo: document.getElementById(\"codigo\").value,\r\n      nome: document.getElementById(\"nome\").value,\r\n      nome_fantasia: document.getElementById(\"nome_fantasia\").value,\r\n      data: document.getElementById(\"data\").value,\r\n      cnpj: document.getElementById(\"cnpj\").value,\r\n      cep: document.getElementById(\"cep\").value,\r\n      logradouro: document.getElementById(\"logradouro\").value,\r\n      bairro: document.getElementById(\"bairro\").value,\r\n      localidade: document.getElementById(\"localidade\").value,\r\n      uf: document.getElementById(\"uf\").value,\r\n    };\r\n\r\n    (0,_service_client_service__WEBPACK_IMPORTED_MODULE_0__.saveClient)(body);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventSubmit);\r\n\n\n//# sourceURL=webpack://totvs-devtest/./src/components/form-save/client-form.js?");

/***/ }),

/***/ "./src/components/form-update/client-form-update-component.js":
/*!********************************************************************!*\
  !*** ./src/components/form-update/client-form-update-component.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _client_update__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-update */ \"./src/components/form-update/client-update.js\");\n\r\n\r\nconst initFormUpdate = () => {\r\n    const form = document.createElement(\"form\");\r\n\r\n    const template = `\r\n    <div class=\"container\">\r\n    <div class=\"form-group\">\r\n        <label for=\"Id\">ID</label>\r\n        <input type=\"text\" class=\"form-control\" data-id id=\"Id\" readonly />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"codigo\">Codigo</label>\r\n        <input type=\"text\" class=\"form-control\" data-codigo id=\"codigo\" />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"nome\">Nome</label>\r\n        <input type=\"text\" class=\"form-control\" data-nome id=\"nome\" />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"nome_fantasia\">Nome Fantasia</label>\r\n        <input type=\"text\" class=\"form-control\" data-nome-fantasia id=\"nome_fantasia\" />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"date\">Data</label>\r\n        <input type=\"date\" class=\"form-control\" data-data id=\"date\" />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"cnpj\">CNPJ</label>\r\n        <input type=\"text\" class=\"form-control\" maxlength=\"14\" data-cnpj id=\"cnpj\" />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"cep\">CEP</label>\r\n        <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        maxlength=\"9\"\r\n        data-cep\r\n        id=\"cep\"\r\n\r\n        />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"logradouro\">Endereço</label>\r\n        <input type=\"text\" class=\"form-control\" data-logradouro id=\"logradouro\" readonly />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"bairro\">Bairro</label>\r\n        <input type=\"text\" class=\"form-control\" data-bairro id=\"bairro\" readonly />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"localidade\">Cidade</label>\r\n        <input type=\"text\" class=\"form-control\" data-localidade id=\"localidade\" readonly />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"uf\">UF</label>\r\n        <input type=\"text\" class=\"form-control\" data-uf id=\"uf\" readonly />\r\n    </div>\r\n\r\n    <br />\r\n    <button class=\"btn btn-primary\" type=\"submit\">Salvar</button>\r\n    </div>\r\n    `;\r\n\r\n    form.innerHTML = template;\r\n\r\n    const cep = document.querySelector(\"#cep\");\r\n    console.log(cep);\r\n\r\n    (0,_client_update__WEBPACK_IMPORTED_MODULE_0__.default)(form)\r\n    return form\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFormUpdate);\n\n//# sourceURL=webpack://totvs-devtest/./src/components/form-update/client-form-update-component.js?");

/***/ }),

/***/ "./src/components/form-update/client-update.js":
/*!*****************************************************!*\
  !*** ./src/components/form-update/client-update.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _service_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/client-service */ \"./src/service/client-service.js\");\n/* harmony import */ var _service_cep_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/cep-service */ \"./src/service/cep-service.js\");\n\r\n\r\n\r\nconst updateForm = (form) => {\r\n  const url = new URL(window.location);\r\n  const id = url.searchParams.get(\"id\");\r\n\r\n  const cep = document.querySelector(\"#cep\");\r\n  console.log(cep);\r\n\r\n  (0,_service_client_service__WEBPACK_IMPORTED_MODULE_0__.getClientById)(id).then((data) => {\r\n    console.log(data);\r\n    Id.value = data.Id;\r\n    codigo.value = data.codigo;\r\n    nome.value = data.nome;\r\n    nome_fantasia.value = data.nome_fantasia;\r\n    date.value = data.data;\r\n    cnpj.value = data.cnpj;\r\n    cep.value = data.cep;\r\n    logradouro.value = data.logradouro;\r\n    bairro.value = data.bairro;\r\n    localidade.value = data.localidade;\r\n    uf.value = data.uf;\r\n  });\r\n\r\n  const alert = (type, message) => {\r\n    const line = document.createElement(\"section\");\r\n\r\n    const lineData = `\r\n        <div class=\"${type}\">${message}</div>\r\n    `;\r\n\r\n    line.innerHTML = lineData;\r\n    return line;\r\n  };\r\n\r\n  form.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n\r\n    const body = {\r\n      codigo: document.getElementById(\"codigo\").value,\r\n      nome: document.getElementById(\"nome\").value,\r\n      nome_fantasia: document.getElementById(\"nome_fantasia\").value,\r\n      data: document.getElementById(\"date\").value,\r\n      cnpj: document.getElementById(\"cnpj\").value,\r\n      cep: document.getElementById(\"cep\").value,\r\n      logradouro: document.getElementById(\"logradouro\").value,\r\n      bairro: document.getElementById(\"bairro\").value,\r\n      localidade: document.getElementById(\"localidade\").value,\r\n      uf: document.getElementById(\"uf\").value,\r\n    };\r\n\r\n    console.log(body);\r\n    (0,_service_client_service__WEBPACK_IMPORTED_MODULE_0__.updateClient)(id, body)\r\n      .then(() => {\r\n        form.appendChild(\r\n          alert(\"alert alert-success\", `Cliente: ${id} atualizado com sucesso!`)\r\n        );\r\n        setTimeout(() => {\r\n          navigation(\"/\");\r\n        }, 500);\r\n      })\r\n      .catch(() => {\r\n        form.appendChild(\r\n          alert(\r\n            \"alert alert-warning\",\r\n            `N�o foi poss�vel editar o Cliente: ${id}`\r\n          )\r\n        );\r\n      });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateForm);\r\n\r\n// const cep = document.querySelector(\"#cep\");\r\n\r\n// const showDataCEP = (resultViaCEP) => {\r\n//   console.log(resultViaCEP);\r\n//   for (const tag in resultViaCEP) {\r\n//     if (document.querySelector(`#${tag}`)) {\r\n//       document.querySelector(`#${tag}`).value = resultViaCEP[tag];\r\n//     }\r\n//   }\r\n// };\r\n\n\n//# sourceURL=webpack://totvs-devtest/./src/components/form-update/client-update.js?");

/***/ }),

/***/ "./src/components/list/client-list.js":
/*!********************************************!*\
  !*** ./src/components/list/client-list.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _service_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/client-service */ \"./src/service/client-service.js\");\n\r\n\r\nconst initTable = () => {\r\n  const tableHeader = `\r\n    <thead class=\"table-dark\">\r\n      <tr>\r\n        <th scope=\"col\">ID</th>\r\n        <th scope=\"col\">Nome</th>\r\n        <th scope=\"col\">CNPJ</th>\r\n        <th scope=\"col\" colspan=\"2\">Opções</th>\r\n        <th scope=\"col\"><a class=\"btn btn-primary\" onclick=\"navigation('/cadastro'); return false;\">Novo Cliente</a></th>\r\n      </tr>\r\n    </thead>\r\n  `;\r\n\r\n  const table = document.createElement(\"table\");\r\n  table.innerHTML = tableHeader;\r\n  table.classList.add(\"table\");\r\n\r\n  createTableBody(table);\r\n\r\n  return table\r\n}\r\n\r\nconst createTableBody = (table) => {\r\n  const tableData = document.createElement(\"tbody\");\r\n\r\n  const clientData = (Id, nome, cnpj) => {\r\n    const line = document.createElement(\"tr\");\r\n  \r\n    const lineData = `\r\n          <td> ${Id} </td>\r\n          <td> ${nome} </td>\r\n          <td> ${cnpj} </td>\r\n          <button type='button' class='btn btn-outline-primary' onclick=\"navigation('/editar?id=${Id}'); return false;\">Editar</button>\r\n      `;\r\n  \r\n    line.innerHTML = lineData;\r\n    line.appendChild(createButtonDelete(Id))\r\n    return line;\r\n  };\r\n\r\n  (0,_service_client_service__WEBPACK_IMPORTED_MODULE_0__.getClients)().then((data) => {\r\n    data.forEach((client) => {\r\n      tableData.appendChild(clientData(client.Id, client.nome, client.cnpj));\r\n    });\r\n  });\r\n  \r\n  table.appendChild(tableData);\r\n}\r\n\r\nconst createButtonDelete = (id) => {\r\n  const button = document.createElement('button')\r\n  button.classList.add('btn', 'btn-outline-warning')\r\n  button.innerHTML = 'Excluir'\r\n\r\n  button.addEventListener('click', () => {\r\n    onDelete(id)\r\n  })\r\n\r\n  return button\r\n}\r\n\r\nconst onDelete = (id) => {\r\n  if (confirm(\"Deseja deletar o cliente?\")) {\r\n    (0,_service_client_service__WEBPACK_IMPORTED_MODULE_0__.deleteClient)(id);\r\n    window.location.reload();\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initTable);\r\n\n\n//# sourceURL=webpack://totvs-devtest/./src/components/list/client-list.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n\r\n\r\n(0,_router__WEBPACK_IMPORTED_MODULE_0__.navigation)( window.location.pathname )\n\n//# sourceURL=webpack://totvs-devtest/./src/main.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navigation\": () => (/* binding */ navigation)\n/* harmony export */ });\n/* harmony import */ var _components_form_save_client_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/form-save/client-form-component */ \"./src/components/form-save/client-form-component.js\");\n/* harmony import */ var _components_list_client_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/list/client-list */ \"./src/components/list/client-list.js\");\n/* harmony import */ var _components_form_update_client_form_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/form-update/client-form-update-component */ \"./src/components/form-update/client-form-update-component.js\");\n\r\n\r\n\r\n\r\nconst routes = {\r\n  \"/\": _components_list_client_list__WEBPACK_IMPORTED_MODULE_1__.default,\r\n  \"/cadastro\": _components_form_save_client_form_component__WEBPACK_IMPORTED_MODULE_0__.default,\r\n  \"/editar\": _components_form_update_client_form_update_component__WEBPACK_IMPORTED_MODULE_2__.default\r\n};\r\n\r\nconst rootDiv = document.querySelector(\"[data-container]\");\r\n\r\nconst navigation = (pathname) => {\r\n  window.history.pushState({}, pathname, window.location.origin + pathname);\r\n\r\n  rootDiv.innerHTML = \"\";\r\n  const initRoute = routes[window.location.pathname];\r\n\r\n  rootDiv.appendChild(initRoute());\r\n};\r\n\r\nwindow.navigation = navigation\r\nwindow.onpopstate = () => {\r\n    rootDiv.innerHTML = \"\"\r\n    rootDiv.appendChild(routes[window.location.pathname]())\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://totvs-devtest/./src/router.js?");

/***/ }),

/***/ "./src/service/cep-service.js":
/*!************************************!*\
  !*** ./src/service/cep-service.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCep\": () => (/* binding */ getCep)\n/* harmony export */ });\nconst getCep = (cep) => {\r\n  const httpOptions = {\r\n    method: \"GET\",\r\n  };\r\n\r\n  return fetch(`https://viacep.com.br/ws/${cep}/json/`, httpOptions)\r\n    .then((res) => {\r\n      res.json().then((data) => {\r\n        return data;\r\n      });\r\n    })\r\n    .catch((err) => {\r\n      console.log(err);\r\n    });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://totvs-devtest/./src/service/cep-service.js?");

/***/ }),

/***/ "./src/service/client-service.js":
/*!***************************************!*\
  !*** ./src/service/client-service.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getClients\": () => (/* binding */ getClients),\n/* harmony export */   \"getClientById\": () => (/* binding */ getClientById),\n/* harmony export */   \"saveClient\": () => (/* binding */ saveClient),\n/* harmony export */   \"updateClient\": () => (/* binding */ updateClient),\n/* harmony export */   \"deleteClient\": () => (/* binding */ deleteClient)\n/* harmony export */ });\nconst getClients = () => {\r\n  const httpOptions = {\r\n    method: \"GET\",\r\n  };\r\n\r\n  return fetch(\r\n    `https://60afe4991f26610017ffd79f.mockapi.io/api/v1/clientes`,\r\n    httpOptions\r\n  )\r\n    .then((res) => {\r\n      return res.json()\r\n      // res.json().then((data) => {\r\n      //   console.log(data);\r\n      //   return data;\r\n      // });\r\n    })\r\n    .catch((err) => {\r\n      console.log(err);\r\n    });\r\n};\r\n\r\nconst getClientById = (id) => {\r\n  const httpOptions = {\r\n    method: \"GET\",\r\n  };\r\n\r\n  return fetch(\r\n    `https://60afe4991f26610017ffd79f.mockapi.io/api/v1/clientes/${id}`,\r\n    httpOptions\r\n  )\r\n    .then((res) => {\r\n      return res.json()\r\n    })\r\n    .catch((err) => {\r\n      console.log(err);\r\n    });\r\n};\r\n\r\nconst saveClient = (body) => {\r\n  const httpOptions = {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n    },\r\n    body: JSON.stringify(body),\r\n  };\r\n\r\n  return fetch(\r\n    \"https://60afe4991f26610017ffd79f.mockapi.io/api/v1/clientes\",\r\n    httpOptions\r\n  )\r\n    .then((res) => {\r\n      res.json().then((data) => {});\r\n    })\r\n    .catch((err) => {\r\n      console.log(err);\r\n    });\r\n};\r\n\r\nconst updateClient = (id, body) => {\r\n  const httpOptions = {\r\n    method: \"PUT\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n    },\r\n    body: JSON.stringify(body),\r\n  };\r\n\r\n  return fetch(\r\n    `https://60afe4991f26610017ffd79f.mockapi.io/api/v1/clientes/${id}`,\r\n    httpOptions\r\n  )\r\n    .then((res) => {\r\n      res.json().then((data) => {});\r\n    })\r\n    .catch((err) => {\r\n      console.log(err);\r\n    });\r\n};\r\n\r\nconst deleteClient = (id) => {\r\n  const httpOptions = {\r\n    method: \"DELETE\",\r\n  };\r\n\r\n  return fetch(\r\n    `https://60afe4991f26610017ffd79f.mockapi.io/api/v1/clientes/${id}`,\r\n    httpOptions\r\n  )\r\n    .then((res) => {\r\n      res.json().then((data) => {\r\n        console.log(data);\r\n      });\r\n    })\r\n    .catch((err) => {\r\n      console.log(err);\r\n    });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://totvs-devtest/./src/service/client-service.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;