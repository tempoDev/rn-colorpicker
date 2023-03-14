jscolor.presets.default = {
    format:'rgb'
};


const network = new brain.NeuralNetwork();

network.train([
    {input: {rojo: 0.0274509803921569, verde: 0.0156862745098039, azul: 0.7215686274509804}, output: {rojo: 0, verde: 0.9725490196078431, azul: 0.5372549019607843}},
    {input: {rojo: 0.1058823529411765, verde: 0.7019607843137255, azul: 0.8705882352941176}, output: {rojo: 0, verde: 0.0392156862745098, azul: 0.3254901960784314}},
    {input: {rojo: 0.0980392156862745, verde: 0.1647058823529412, azul: 0.2941176470588235}, output: {rojo: 0.2901960784313725, verde: 0.4156862745098039, azul: 0.7098039215686275}},
    {input: {rojo: 0.2509803921568627, verde: 0.1294117647058824, azul: 0.4392156862745098}, output: {rojo: 0.9764705882352941, verde: 0.7176470588235294, azul: 0.1843137254901961}},
    {input: {rojo: 1, verde: 1, azul: 1}, output: {rojo: 0, verde: 0, azul: 0}},
    {input: {rojo: 1, verde: 0, azul: 0}, output: {rojo: 187/255, verde: 227/255, azul: 135/255}},
    {input: {rojo: 231/255, verde: 111/255, azul: 81/255}, output: {rojo: 42/255, verde: 157/255, azul: 143/255}},
    {input: {rojo: 3/255, verde: 4/255, azul: 94/255}, output: {rojo: 72/255, verde: 202/255, azul: 228/255}},
    {input: {rojo: 154/255, verde: 135/255, azul: 255/255}, output: {rojo: 222/255, verde: 239/255, azul: 130/255}},
    {input: {rojo: 120/255, verde: 179/255, azul: 255/255}, output: {rojo: 12/255, verde: 34/255, azul: 74/255}},
    {input: {rojo: 112/255, verde: 89/255, azul: 101/255}, output: {rojo: 116/255, verde: 164/255, azul: 217/255}},
    {input: {rojo: 255/255, verde: 145/255, azul: 230/255}, output: {rojo: 57/255, verde: 126/255, azul: 185/255}},
    {input: {rojo: 0/255, verde: 53/255, azul: 102/255}, output: {rojo: 255/255, verde: 195/255, azul: 0/255}},
    {input: {rojo: 239/255, verde: 35/255, azul: 60/255}, output: {rojo: 237/255, verde: 242/255, azul: 244/255}},
    {input: {rojo: 136/255, verde: 138/255, azul: 137/255}, output: {rojo: 33/255, verde: 75/255, azul: 116/255}}
])

    
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

    // if( resultado.color > .5) { 
    //     h1.style.color = "white"; 
    //     console.log("hola")}
    // else { h1.style.color = "black" }

    // let rgbPick = [];
    // rgbPick.push(picker.channels.r)
    // rgbPick.push(picker.channels.g)
    // rgbPick.push(picker.channels.b)
    // console.log(rgbPick)
}