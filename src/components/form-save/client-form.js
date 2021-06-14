import { saveClient } from "../../service/client-service";
import { getCep } from "../../service/cep-service";

const searchCPF = (form) => {
  const cep = form.querySelector("#cep");
  cep.addEventListener("blur", (event) => {
    let cepValue = cep.value;

    if (cepValue !== "") {
      if (cepValue.includes("-")) {
        cepValue = cepValue.replace("-", "");
      }

      getCep(cepValue).then((res) => {
        showDataCEP(res);
      });
    }
  });
};

const showDataCEP = (resultViaCEP) => {
  for (const tag in resultViaCEP) {
    if (document.querySelector(`#${tag}`)) {
      document.querySelector(`#${tag}`).value = resultViaCEP[tag];
    }
  }
};

const eventSubmit = (form) => {
  const alert = (type, message) => {
    const line = document.createElement("section");

    const lineData = `
        <div class="${type}">${message}</div>
    `;

    line.innerHTML = lineData;
    return line;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let formValid = true;

    const nome = document.getElementById("nome");
    const codigo = document.getElementById("codigo");
    const nome_fantasia = document.getElementById("nome_fantasia");
    const data = document.getElementById("data");
    const cnpj = document.getElementById("cnpj");
    const cep = document.getElementById("cep");
    const logradouro = document.getElementById("logradouro");
    const bairro = document.getElementById("bairro");
    const localidade = document.getElementById("localidade");
    const uf = document.getElementById("uf");

    const nomeValue = nome.value.trim();
    const codigoValue = codigo.value.trim();
    const nomeFantasiaValue = nome_fantasia.value.trim();
    const dataValue = data.value.trim();
    const cnpjValue = cnpj.value.trim();
    const cepValue = cep.value.trim();
    const logradouroValue = logradouro.value.trim();
    const bairroValue = bairro.value.trim();
    const localidadeValue = localidade.value.trim();
    const ufValue = uf.value.trim();

    checkInputs();

    function checkInputs() {
      formValid = true;

      if (nomeValue === "") {
        setErrorFor(nome, "Nome em branco, favor preencher.");
      } else {
        setValid(nome)
      }

      if (codigoValue === "") {
        setErrorFor(codigo, "Código em branco, favor preencher.");
      } else {
        setValid(codigo)
      }

      if (nomeFantasiaValue === "") {
        setErrorFor(nome_fantasia, "Nome Fantasia em branco, favor preencher.");
      } else {
        setValid(nome_fantasia)
      }

      if (dataValue === "") {
        setErrorFor(data, "Data em branco, favor preencher.");
      } else {
        setValid(data)
      }

      if (cnpjValue === "") {
        setErrorFor(cnpj, "CNPJ em branco, favor preencher.");
      } else if (cnpjValue.length < 14) {
        setErrorFor(cnpj, "Número de caracteres inválido, favor preencher.");
      } else {
        setValid(cnpj)
      }

      if (cepValue === "") {
        setErrorFor(cep, "CEP em branco, favor preencher.");
      } else {
        setValid(cep)
      }
    }

    function setValid(input) {
      const formControl = input.parentElement;
      const small = formControl.querySelector("small");

      small.innerText = '';
    }

    function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector("small");

      small.innerText = message;

      formValid = false;
    }

    if (formValid) {
      const body = {
        codigo: codigoValue,
        nome: nomeValue,
        nome_fantasia: nomeFantasiaValue,
        data: dataValue,
        cnpj: cnpjValue,
        cep: cepValue,
        logradouro: logradouroValue,
        bairro: bairroValue,
        localidade: localidadeValue,
        uf: ufValue,
      };

      saveClient(body)
        .then((res) => {
          form.appendChild(
            alert("alert alert-success", `Cliente criado com sucesso!`)
          );
          setTimeout(() => {
            navigation("/");
          }, 500);
        })
        .catch((err) => {
          form.appendChild(
            alert("alert alert-warning", `Não foi possível criar o Cliente`)
          );
        });
    }
  });
};

export { eventSubmit, searchCPF };
