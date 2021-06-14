import { eventSubmit, searchCPF } from "./client-form";

const initForm = () => {
  const form = document.createElement("form");

  const template = `
  <div class="container">
    <div class="form-group">
      <label for="Id">ID</label>
      <input type="text" class="form-control" id="Id" readonly />
    </div>

    <div class="form-group">
      <label for="codigo">Codigo</label>
      <input type="text" class="form-control" id="codigo" />
      <small small></small>
    </div>

    <div class="form-group">
      <label for="nome">Nome</label>
      <input type="text" class="form-control" id="nome" />
      <small small></small>
    </div>

    <div class="form-group">
      <label for="nome_fantasia">Nome Fantasia</label>
      <input type="text" class="form-control" id="nome_fantasia" />
      <small small></small>
    </div>

    <div class="form-group">
      <label for="data">Data</label>
      <input type="date" class="form-control" id="data" />
      <small small></small>
    </div>

    <div class="form-group">
      <label for="cnpj">CNPJ</label>
      <input type="text" class="form-control" maxlength="14" id="cnpj" />
      <small small></small>
    </div>

    <div class="form-group">
      <label for="cep">CEP</label>
      <input
        type="text"
        class="form-control"
        maxlength="9"
        id="cep"
      />
      <small small></small>
    </div>

    <div class="form-group">
      <label for="logradouro">Endereço</label>
      <input type="text" class="form-control" id="logradouro" readonly />
    </div>

    <div class="form-group">
      <label for="bairro">Bairro</label>
      <input type="text" class="form-control" id="bairro" readonly />
    </div>

    <div class="form-group">
      <label for="localidade">Cidade</label>
      <input type="text" class="form-control" id="localidade" readonly />
    </div>

    <div class="form-group">
      <label for="uf">UF</label>
      <input type="text" class="form-control" id="uf" readonly />
    </div>

    <br />
    <button class="btn btn-primary" type="submit">Salvar</button>
  </div>
  `;

  form.innerHTML = template;

  searchCPF(form)
  eventSubmit(form);
  return form;
};



export default initForm;
