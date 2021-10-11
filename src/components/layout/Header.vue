<template>
    <div>
        <header>
            <div class="container-fluid">
                <div>
                    <a href="/">
                        <img :src="logo" :alt="descricao" />
                    </a>
                </div>
                <div>
                    <div class="btn-group">
                        <button type="button" class="dropdown-toggle menuUsuario" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="circuloImagem">
                                <img :src="imagemUsuario" :alt="descricaoImagemUsuario" class="imagemUsuario" />
                            </div>
                            <span>{{ nomeUsuario }}</span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><button class="dropdown-item" type="button">Perfil</button></li>
                            <li><button class="dropdown-item" type="button">Configurações</button></li>
                            <li><button class="dropdown-item" type="button">Sair</button></li>
                        </ul>
                    </div>
                </div>
            </div>   
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return{
            logo: "/img/logo.png",
            descricao: "Logo",
            imagemUsuario: "/img/ubirajara.png",
            nomeUsuario: "Ubirajara Jucá",
            descricaoImagemUsuario: "Imagem do usuário",
        }
    },
}
</script>
<style scoped>
header{
    position: fixed;
    width: 100%;
    height: 60px;
    background-color: blue;
    top: 0;
    left: 0;
    box-shadow: 0 1px 2px rgb(0 0 0 / 5%);
}
header .container-fluid{
    display: flex;
    justify-content: space-between;
}
header a img {
    width: 50px;
    margin: 5px;
}
header nav{
    width: 100%;
}
header button.menuUsuario {
    display: flex;
    flex-direction: row;
    position: relative;
    width: auto;
    height: 60px;
    border: 0;
    background-color: transparent;
    color: white;
    padding: 0 10px;
}
header button.menuUsuario:hover {
    background-color:rgba(0, 0, 0, 0.1);
}
header button.menuUsuario .circuloImagem {
    border-radius: 50%;
    overflow: hidden;
    margin: 10px 0;
}
header button.menuUsuario img.imagemUsuario {
    width: 40px;
    height: 40px;
}
header button.menuUsuario span{
    font-weight: bold;
    display: block;
    height: 60px;
    line-height: 60px;
    padding: 0 5px;
}
header button.menuUsuario::after{
    position: relative;
    top: 50%;
    margin-top: -1.5px;
}
</style>