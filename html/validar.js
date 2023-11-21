
const usuarios = [
    {
        id: "aluno",
        login: "matheus@educar.rs.gov.br",
        pass: "matheus"
    },
    {
        id: "aluno",
        login: "natan@educar.rs.gov.br",
        pass: "natan"
    },
    {
        id: "aluno",
        login: "henrique@educar.rs.gov.br",
        pass: "henrique"
    },
    {
        id: "aluno",
        login: "kaue@educar.rs.gov.br",
        pass: "kaue"
    },
    {
        id:"professor",
        login:"luan@educar.rs.gov.br",
        pass: "luan"
    },
    {
        id:"professor",
        login:"maiquel@educar.rs.gov.br",
        pass: "maiquel"
    },
];

let botao = document.getElementById("btnLogar");

botao.addEventListener('click', function logar() {
    let pegaUsuario = document.getElementById("usuario").value;
    let pegaSenha = document.getElementById("senha").value;
    let validaLogin = false;
    let userType = "";

    for (let i in usuarios) {
        if (pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass) {
            validaLogin = true;
            userType = usuarios[i].id;
            break;
        } else {
            validaLogin = false;
        }
    }

    if (validaLogin) {
        if (userType === "aluno") {
            location.href = "page.html";
        } else if (userType === "professor") {
            location.href = "page2.html";
        }
    } else {
        alert("Usuário ou senha inválidos.");
    }
});


