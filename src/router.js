import initForm from "./components/form-save/client-form-component";
import initTable from "./components/list/client-list";
import initFormUpdate from "./components/form-update/client-form-update-component";

const routes = {
  "/": initTable,
  "/cadastro": initForm,
  "/editar": initFormUpdate
};

const rootDiv = document.querySelector("[data-container]");

const navigation = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);

  rootDiv.innerHTML = "";
  const initRoute = routes[window.location.pathname];

  rootDiv.appendChild(initRoute());
};

window.navigation = navigation
window.onpopstate = () => {
    rootDiv.innerHTML = ""
    rootDiv.appendChild(routes[window.location.pathname]())
}

export { navigation };
