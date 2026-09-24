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

// Sortear Benchmark

const inputQuantidadeBench = document.querySelector("#quant-bench")
const botaoSortearBench = document.querySelector("#btn-sortear-bench")
const iconeSortearBench = document.querySelector("#icone-sortear-bench")
const iconeNovamenteBench = document.querySelector("#icone-novamente-bench")
const benchArea = document.querySelector("#bench-area")
const resultadoBench = document.querySelector("#resultado-bench")
const tabelaBench = document.querySelector("#tabela-bench")
const botaoRetornar = document.querySelector("#btn-retornar")
const modalBench = document.querySelector("#modal-bench-area")
const inputFimBench = document.querySelector("#num-max")

const repeticoesNormalElemento = document.querySelector("#repeticoes-normal")
const repeticoesCriptoElemento = document.querySelector("#repeticoes-cripto")


// Sortear Cripto

const botaoCripto = document.querySelector("#btn-sortear-cripto")
const textoBotaoCripto = document.querySelector("#texto-botao-cripto")
const iconeSortearCripto = document.querySelector("#icone-sortear-cripto")
const iconeNovamenteCripto = document.querySelector("#icone-novamente-cripto")

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
    botaoCripto.classList.add("hidden")

    numerosSorteados.innerHTML = ""

    numeros.forEach((numero) => {

        numerosSorteados.innerHTML += `

            <div
                data-numero="${numero}"
                class="flex h-12 w-12 items-center justify-center rounded-md bg-purple-300 font-mono text-lg font-bold text-zinc-950 opacity-0 scale-150"
            >

                <span class="opacity-0">
                    ${numero}
                </span>

            </div>

        `
    })

    const quadrados = numerosSorteados.children

    Array.from(quadrados).forEach((quadrado, index) => {

        const numero = quadrado.querySelector("span")

        quadrado.classList.add(
            "transition-[scale,rotate]",
            "duration-1000",
            "ease-in-out"
        )

        setTimeout(() => {

            quadrado.classList.remove("opacity-0", "scale-150")

            quadrado.classList.add(
                "opacity-100",
                "scale-250",
                "rotate-360"
            )

            setTimeout(() => {

                numero.classList.remove("opacity-0")
                numero.classList.add("opacity-100")

                setTimeout(() => {

                    quadrado.classList.remove("bg-purple-300")
                    quadrado.classList.add("bg-transparent")

                    numero.classList.remove("text-zinc-950")
                    numero.classList.add("text-purple-300")

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

function contarRepeticoes(listNumbers){
    const repeatingNumbers = new Set()

    for (let i = 0; i < listNumbers.length; i++){
        const numbersDuplicated = listNumbers.filter(
            number => number === listNumbers[i]
        )

        if(numbersDuplicated.length > 1){
            repeatingNumbers.add(listNumbers[i])
        }
    }

    return Array.from(repeatingNumbers).length
}

botaoSortearBench.addEventListener("click", () => {
    const quantidadeBench = Number(inputQuantidadeBench.value)
    const numeros = []
    const numerosCripto = []

    const fimBench = Number(inputFimBench.value)

    while (numeros.length < quantidadeBench) {
        const numeroAleatorio = Math.floor(
            Math.random() * (fimBench - 1 + 1) + 1
        )

        const array = new Uint32Array(1)
        crypto.getRandomValues(array)

        const numeroCripto = (array[0] % fimBench) + 1

        numeros.push(numeroAleatorio)
        numerosCripto.push(numeroCripto)
    }

    console.log(numeros)
    console.log(numerosCripto)

    const repeticoesNormal = contarRepeticoes(numeros)
    const repeticoesCripto = contarRepeticoes(numerosCripto)

    repeticoesNormalElemento.textContent = repeticoesNormal
    repeticoesCriptoElemento.textContent = repeticoesCripto

    numeros.forEach((numero, index) => {
        tabelaBench.innerHTML += `
            <tr class="border-t border-zinc-800">
                <td class="px-4 py-3 text-center font-mono text-sm font-bold text-zinc-400">
                    ${index + 1}
                </td>

                <td class="px-4 py-3 text-center font-mono text-lg font-bold text-purple-300">
                    ${numero}
                </td>

                <td class="px-4 py-3 text-center font-mono text-lg font-bold text-purple-300">
                    ${numerosCripto[index]}
                </td>
            </tr>
        `
    })

    console.log(tabelaBench.innerHTML)

    resultadoBench.classList.remove("hidden")
    modalBench.classList.add("hidden")
})

botaoRetornar.addEventListener("click", () => {
    formulario.classList.remove("hidden")
    benchArea.classList.remove("hidden")
    botaoSortear.classList.remove("hidden")
    botaoCripto.classList.remove("hidden")
    modalBench.classList.remove("hidden")
    resultadoBench.classList.add("hidden")

    tabelaBench.innerHTML = ""
})

botaoCripto.addEventListener("click", () => {

    if (formulario.classList.contains("hidden")) {

        formulario.classList.remove("hidden")
        benchArea.classList.remove("hidden")
        botaoSortear.classList.remove("hidden")
        resultado.classList.add("hidden")

        textoBotaoCripto.textContent = "Sorteio Criptografado"
        iconeSortearCripto.classList.remove("hidden")
        iconeNovamenteCripto.classList.add("hidden")

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

        const array = new Uint32Array(1)

        crypto.getRandomValues(array)

        const numeroAleatorio =
            (array[0] % (fim - inicio + 1)) + inicio

        numeros.push(numeroAleatorio)
    }

    formulario.classList.add("hidden")
    botaoSortear.classList.add("hidden")

    numerosSorteados.innerHTML = ""

    numeros.forEach((numero) => {

        numerosSorteados.innerHTML += `

            <div
                data-numero="${numero}"
                class="flex h-12 w-12 items-center justify-center rounded-md bg-purple-300 font-mono text-lg font-bold text-zinc-950 opacity-0 scale-150"
            >

                <span class="opacity-0">
                    ${numero}
                </span>

            </div>

        `
    })

    const quadrados = numerosSorteados.children

    Array.from(quadrados).forEach((quadrado, index) => {

        const numero = quadrado.querySelector("span")

        quadrado.classList.add(
            "transition-[scale,rotate]",
            "duration-1000",
            "ease-in-out"
        )

        setTimeout(() => {

            quadrado.classList.remove(
                "opacity-0",
                "scale-150"
            )

            quadrado.classList.add(
                "opacity-100",
                "scale-250",
                "rotate-360"
            )

            setTimeout(() => {

                numero.classList.remove("opacity-0")
                numero.classList.add("opacity-100")

                setTimeout(() => {

                    quadrado.classList.remove("bg-purple-300")
                    quadrado.classList.add("bg-transparent")

                    numero.classList.remove("text-zinc-950")
                    numero.classList.add("text-purple-300")

                }, 300)

            }, 500)

        }, index * 1000)
    })

    resultado.classList.remove("hidden")

    textoBotaoCripto.textContent = "Sortear novamente"

    iconeSortearCripto.classList.add("hidden")
    iconeNovamenteCripto.classList.remove("hidden")

    console.log(numeros)
})