import { updateForm, searchCPF } from "./client-update";

const initFormUpdate = () => {
    const form = document.createElement("form");

    const template = `
    <div class="container">
    <div class="form-group">
        <label for="Id">ID</label>
        <input type="text" class="form-control" data-id id="Id" readonly />
    </div>

    <div class="form-group">
        <label for="codigo">Codigo</label>
        <input type="text" class="form-control" data-codigo id="codigo" />
    </div>

    <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" data-nome id="nome" />
    </div>

    <div class="form-group">
        <label for="nome_fantasia">Nome Fantasia</label>
        <input type="text" class="form-control" data-nome-fantasia id="nome_fantasia" />
    </div>

    <div class="form-group">
        <label for="date">Data</label>
        <input type="date" class="form-control" data-data id="date" />
    </div>

    <div class="form-group">
        <label for="cnpj">CNPJ</label>
        <input type="text" class="form-control" maxlength="14" data-cnpj id="cnpj" />
    </div>

    <div class="form-group">
        <label for="cep">CEP</label>
        <input
        type="text"
        class="form-control"
        maxlength="9"
        data-cep
        id="cep"

        />
    </div>

    <div class="form-group">
        <label for="logradouro">Endereço</label>
        <input type="text" class="form-control" data-logradouro id="logradouro" readonly />
    </div>

    <div class="form-group">
        <label for="bairro">Bairro</label>
        <input type="text" class="form-control" data-bairro id="bairro" readonly />
    </div>

    <div class="form-group">
        <label for="localidade">Cidade</label>
        <input type="text" class="form-control" data-localidade id="localidade" readonly />
    </div>

    <div class="form-group">
        <label for="uf">UF</label>
        <input type="text" class="form-control" data-uf id="uf" readonly />
    </div>

    <br />
    <button class="btn btn-primary" type="submit">Salvar</button>
    </div>
    `;

    form.innerHTML = template;
    searchCPF(form)
    updateForm(form)
    return form
}

export default initFormUpdate