programa
{
    /* 
     *  A inclusão da biblioteca "Tipos" não é obrigatória para o desafio,
     *  mas fará a conversão do valor inteiro dos contadores para que o 
     *  cálculo dos percentuais (reais) seja feito sem que os contadores
     *  precisem ser declarados como tipo real.
    */
    /*function audioConfirmacao(){
        const audio = new Audio("./confirmacao.mp3");
        audio.play(); 
    }ou direto sem declaracar uma funcao expecifica pra usar o 'window.alert("Mensagem no Alert\nOutra mensagem\n\nMais uma mensagem")' dentro da funcao geral.*/

    // if (codigoVoto ! == null){
    //    codigoVoto = parseInt(codigoVoto);
    // } else {
    //     break;
    // }

    /*OS BOTÕES VÃO NO IDES.HTML
    <button type="button" onclick="urnaEletronica()">Começar</button>
    <button type="button" onclick="audioConfirmacao()">"Testar audio"</button>*/

    function escreveNoConsoleAlert() {
        window.alert("Mensagem no Alert\nOutra mensagem\n\nMais uma mensagem")
        {
            inteiro
            codigoVoto,
                votosTotais = 0,
                votosCandidato1 = 0,
                votosCandidato2 = 0,
                votosCandidato3 = 0,
                votosBranco = 0,
                votosNulo = 0,
                votosTotaisGanhador = 0

            real
            percentualVotosCandidato1 = 0.0,
                percentualVotosCandidato2 = 0.0,
                percentualVotosCandidato3 = 0.0,
                percentualVotosBranco = 0.0,
                percentualVotosNulo = 0.0,
                percentualGanhador = 0.0

            cadeia
            nomeCandidato1 = "Celso Portioli",
                nomeCandidato2 = "Luciano Huck",
                nomeCandidato3 = "Pedro de Lara",
                nomeGanhador = ""

            logico
            opcaoInvalida = false,
                empate = false

            // Laço responsável pela votação
            do {

                console.clear()

                if (opcaoInvalida) {
                    console.log("** Opção inválida! \n\n")
                    opcaoInvalida = falso
                }

                console.log("** Opções de voto: \n\n")
                console.log("1 | ", nomeCandidato1, "\n")
                console.log("2 | ", nomeCandidato2, "\n")
                console.log("3 | ", nomeCandidato3, "\n")
                console.log("5 | Voto em branco \n")
                console.log("8 | Voto nulo \n")
                console.log("0 | Encerrar a votação \n\n")

                console.log("Digite agora o código do seu voto: ")
                leia(codigoVoto)

                switch (codigoVoto) {
                    case 0:
                        pare
                    case 1:
                        votosCandidato1++
                        votosTotais++
                        pare
                    case 2:
                        votosCandidato2++
                        votosTotais++
                        pare
                    case 3:
                        votosCandidato3++
                        votosTotais++
                        pare
                    case 5:
                        votosBranco++
                        votosTotais++
                        pare
                    case 8:
                        votosNulo++
                        votosTotais++
                        pare
                    case contrario:
                        opcaoInvalida = true
                }
            } while (codigoVoto != 0)


            // determinar o ganhador, com situação de empate
            if (votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3) {

                nomeGanhador = nomeCandidato1
                votosTotaisGanhador = votosCandidato1 + votosBranco
            } else if (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3) {

                nomeGanhador = nomeCandidato2
                votosTotaisGanhador = votosCandidato2 + votosBranco
            } else if (votosCandidato3 > votosCandidato1 && votosCandidato3 > votosCandidato2) {

                nomeGanhador = nomeCandidato3
                votosTotaisGanhador = votosCandidato3 + votosBranco
            } else {
                empate = true
            }

            console.clear()
            console.log("** Resultado da apuração desta urna\n\n")

            // Esta condição evita a divisão por 0 caso a votação seja encerrada sem nenhum voto
            if (votosTotais != 0) {

                percentualGanhador = (tp.inteiro_para_real(votosTotaisGanhador) / tp.inteiro_para_real(votosTotais)) * 100.0

                console.log("Votos totais: ", votosTotais, "\n")

                console.log("Votos no candidato ", nomeCandidato1, ": ", votosCandidato1, " (",
                    tp.inteiro_para_real(votosCandidato1) / tp.inteiro_para_real(votosTotais) * 100.0, "%)\n")

                console.log("Votos no candidato ", nomeCandidato2, ": ", votosCandidato2, " (",
                    tp.inteiro_para_real(votosCandidato2) / tp.inteiro_para_real(votosTotais) * 100.0, "%)\n")

                console.log("Votos no candidato ", nomeCandidato3, ": ", votosCandidato3, " (",
                    tp.inteiro_para_real(votosCandidato3) / tp.inteiro_para_real(votosTotais) * 100.0, "%)\n")

                console.log("Votos em branco: ", votosBranco, " (",
                    tp.inteiro_para_real(votosBranco) / tp.inteiro_para_real(votosTotais) * 100.0, "%)\n")

                console.log("Votos nulos: ", votosNulo, " (",
                    tp.inteiro_para_real(votosNulo) / tp.inteiro_para_real(votosTotais) * 100.0, "%)\n\n")

            } else {

                console.log("** Nenhum voto registrado\n")

            }

            // se nao falso
            else (false) {
                console.log("** Ganhador nesta urna\n\n nomeGanhador, com ", votosTotaisGanhador, " votos (",
                    percentualGanhador, "%) somados os votos em branco\n")
            } if {
                console.log("** Não foi possível determinar um ganhador nesta urna\n\n")
            }


        }
    }
}
