.barra {
    width: 100%;
    height: 100px;
    background-color: rgb(121, 185, 140);
    text-align: center;
}

.mobile{
    font-size: 60px;
    color: rgb(7, 56, 3);
    text-align: center;
}
.tablet{
    display: none;
}
.desktop{
    display: none;
}
.conteudo{
    width: 100%;
    background-color: rgb(196, 255, 230);
}
.botoes{
    width: 100%;
    height: 30px;
    background-color: rgb(0, 184, 184);
    font-size: 28px;
    padding-top: 2px;
    padding-bottom: 4px;
}

.abageral{
    width: 100%;
    height: 400px;
}
.aba1 {
    width: 100%;
    height: 400px;
    background-color: rgb(167, 216, 199);
    display: none;
}
.aba2 {
    width: 100%;
    height: 400px;
    background-color: rgb(128, 233, 189);
    display: none;
}
.aba3 {
    width: 100%;
    height: 400px;
    background-color: rgb(119, 211, 179);
    display: none;
}
.aba4 {
    width: 100%;
    height: 400px;
    background-color: rgb(94, 223, 178);
    display: none;
}
@media (min-width: 800px) {
    .barra{
        height: 150px;
        background-color: rgb(161, 216, 253);
    }
    .mobile {
        display: none;
    }
    .tablet {
        display: inline;
        font-size: 30px;
        color: rgb(5, 0, 80);
    }
    .botoes{
        width: 24.7%;
    }
}

@media (min-width: 1228px){
    .barra {
        height: 200px;
        background-color: cadetblue;
    }
    #tablet {
        display: none;
    }
    #desktop {
        display: inline;
        font-size: 70px;
        color: rgb(155, 221, 229);
        text-align: center; 
    }
}
