var bicicleta = {
  color: 'rojo',
  modelo: 'BMX',
  frenos: 'De disco',
  velocidadMaxima: '60km',
  cambiaColor: function(nuevo_color) {
    //bicicleta.cor = nuevo nuevo_color;
    this.color = nuevo_color;
    console.log(this);
  }
};


bicicleta.cambiaColor("Azul");
