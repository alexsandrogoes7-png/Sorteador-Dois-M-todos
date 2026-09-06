const inputQuantidade = document.querySelector("#input-quantidade")
const inputInicio = document.querySelector("#input-inicio")
const inputFim = document.querySelector("#input-fim")

const botaoSortear = document.querySelector("#btn-sortear")

const resultado = document.querySelector("#resultado")
const formulario = document.querySelector("#formulario")
const numerosSorteados = document.querySelector("#numeros-sorteados")

const textoBotao = document.querySelector("#texto-botao")
const iconeSortear = document.querySelector("#icone-sortear")
const iconeNovamente = document.querySelector("#icone-novamente")

//Sortear Benchmark
const inputQuantidadeBench = document.querySelector("#input-quantidade-bench")
const botaoSortearBench = document.querySelector("#btn-sortear-bench")
const iconeSortearBench = document.querySelector("#icone-sortear-bench")
const iconeNovamenteBench = document.querySelector("#icone-novamente-bench")
const benchArea = document.querySelector("#bench-area")

//Sortear Cripto
const botaoCripto = document.querySelector("#btn-sortear-cripto")


botaoSortear.addEventListener("click", () => {

    if (formulario.classList.contains("hidden")) {

        formulario.classList.remove("hidden")
        benchArea.classList.remove("hidden")
        botaoCripto.classList.remove("hidden")

        resultado.classList.add("hidden")
        textoBotao.textContent = "Sortear"

        iconeSortear.classList.remove("hidden")
        iconeNovamente.classList.add("hidden")

        return
    }


    const quantidade = Number(inputQuantidade.value)
    const inicio = Number(inputInicio.value)
    const fim = Number(inputFim.value)



    if (quantidade <= 0) {
        alert("Digite uma quantidade válida de números.")
        return
    }

    if (inicio >= fim) {
        alert("O número inicial deve ser menor que o número final.")
        return
    }





    const numeros = []

    while (numeros.length < quantidade) {
        const numeroAleatorio = Math.floor(
            Math.random() * (fim - inicio + 1)
        ) + inicio

        numeros.push(numeroAleatorio)
    }

    formulario.classList.add("hidden")
    benchArea.classList.add("hidden")
    botaoCripto.classList.add("hidden")


    numerosSorteados.innerHTML = ""



        numeros.forEach((numero) => {

            
                
                numerosSorteados.innerHTML += `
                        <div
                            data-numero="${numero}"
                            class="flex h-12 w-12 items-center justify-center rounded-md font-mono text-lg font-bold opacity-0"
                            style="
                                background-color: #C58DE7;
                                color: #030203;
                                transform: scale(1.5);
                            "
                        >

                            <span style="opacity: 0;">
                                ${numero}
                            </span>
                        </div>
                    `
            
        })

    const quadrados = numerosSorteados.children

    Array.from(quadrados).forEach((quadrado, index) => {

        
        const numero = quadrado.querySelector("span")
       

        
        quadrado.style.transition = "transform 1s ease-in-out"
     

        setTimeout(() => {
            quadrado.style.transform = "scale(2.5) rotate(360deg)"
            quadrado.style.opacity ="1"

            setTimeout(() => {
                numero.style.opacity = "1"

                setTimeout(() => {

                    quadrado.style.backgroundColor = "transparent"
                    numero.style.color = "#C58DE7"

                }, 300)

            }, 500)

        }, index * 1000)


    })

    resultado.classList.remove("hidden")
    textoBotao.textContent = "Sortear novamente"

    iconeSortear.classList.add("hidden")
    iconeNovamente.classList.remove("hidden")

    console.log(numeros)

})


botaoSortearBench.addEventListener("click", () => {

    const quantidadeBench = Number(inputQuantidadeBench.value)

    const numeros = []

    while (numeros.length < quantidadeBench){
        const numeroAleatorio = Math.floor(
            
        )
    }
})