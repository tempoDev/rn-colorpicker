jscolor.presets.default = {
    format:'rgb'
};

const network = new brain.NeuralNetwork();

network.train(palette);
    
/*----------------------------------------------------------------------------- ACTUALIZAR COLOR CAPA */
function update(picker, selector) {
    
    document.querySelector(selector).style.background = picker.toBackground();
    let h1 = document.querySelector(".container h1")

    let entrada = {
        rojo: picker.channels.r / 255,
        verde: picker.channels.g / 255,
        azul: picker.channels.b / 255
    }

    let resultado = network.run(entrada)
    console.log(resultado.rojo, resultado.verde, resultado.azul)

    let color = "rgb(" + Math.round(resultado.rojo * 255) + "," + Math.round(resultado.verde * 255) + "," + Math.round(resultado.azul * 255) +")";
    h1.style.color = color;

}