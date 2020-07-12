
var bicicleta = {
    marca: 'GW',
    color: 'Verde',
    velocidades: '9',
    frenos: 'disco',

    cambiarColor: function (nuevoColor) {
        this.color = nuevoColor;
        console.log(this);
    }
    
};

bicicleta.cambiarColor("verde");    