<template>
    <div>
        <form action="">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="nome">Nome Completo</label>
                        <input type="text" class="form-control" id="nome" placeholder="Informe o nome completo">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="cpf">CPF</label>
                        <input type="text" class="form-control" id="cpf" placeholder="000.000.000-00">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="nome">CNS <small>Cartão Nacional de Saúde</small></label>
                        <input type="text" class="form-control" id="nome" aria-describedby="nomeCompleto" placeholder="Informe o nome completo">
                        <small id="nomeCompleto" class="form-text text-muted">Nome Completo.</small>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: "Novo",
    data(){
        return{

        }
    }
}
</script>