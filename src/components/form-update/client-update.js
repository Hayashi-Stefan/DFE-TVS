import { getClientById, updateClient } from "../../service/client-service";
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

const updateForm = (form) => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  getClientById(id).then((data) => {
    Id.value = data.Id;
    codigo.value = data.codigo;
    nome.value = data.nome;
    nome_fantasia.value = data.nome_fantasia;
    date.value = data.data;
    cnpj.value = data.cnpj;
    cep.value = data.cep;
    logradouro.value = data.logradouro;
    bairro.value = data.bairro;
    localidade.value = data.localidade;
    uf.value = data.uf;
  });

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

    const body = {
      codigo: document.getElementById("codigo").value,
      nome: document.getElementById("nome").value,
      nome_fantasia: document.getElementById("nome_fantasia").value,
      data: document.getElementById("date").value,
      cnpj: document.getElementById("cnpj").value,
      cep: document.getElementById("cep").value,
      logradouro: document.getElementById("logradouro").value,
      bairro: document.getElementById("bairro").value,
      localidade: document.getElementById("localidade").value,
      uf: document.getElementById("uf").value,
    };

    updateClient(id, body)
      .then(() => {
        form.appendChild(
          alert("alert alert-success", `Cliente: ${id} atualizado com sucesso!`)
        );
        setTimeout(() => {
          navigation("/");
        }, 500);
      })
      .catch(() => {
        form.appendChild(
          alert(
            "alert alert-warning",
            `Não foi possível editar o Cliente: ${id}`
          )
        );
      });
  });
};

export { updateForm, searchCPF };
