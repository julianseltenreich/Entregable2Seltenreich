import { imagenes } from './img.js';

export class productos{
    constructor( nombre = '',precio = '', img ='', color = '' , memoria = '' ){
    this.nombre = nombre;
    this.precio = Number(precio);  
    this.img = img;
    this.color = color; 
    this.memoria = memoria;
    };
}

export const productosTotales =  [
    new productos( 'Iphone 12', 500, imagenes.iphone12 , 'Verde' , '64Gb' ),
    new productos('Iphone 11', 350, imagenes.iphone11Red, 'Rojo', '128Gb'),
    new productos('Iphone 15 Pro', 700, imagenes.iphone15Pro, 'Azul Titanio', '256Gb'),
    new productos('Iphone 16', 800, imagenes.iphone16 ,'ultramarino', '128Gb'),
    new productos('Iphone 14', 600, imagenes.iphone14, 'gris', '256Gb'),
    new productos('Airpods 2Pro', 200,  imagenes.airpods2Pro, 'blanco'),
    new productos('Airpods 3', 150,  imagenes.airpods3, 'blanco'),
    new productos ('Funda Silicona Iphone 14' , 10 ,  imagenes.fundaSilicon14Lila, 'lila',),
    new productos ('Funda Silicona Iphone 16' , 10 , imagenes.fundaIp16SiliconaAzul, 'azul'),
    new productos ('Cable UsbC Apple ' , 20 , imagenes.cableUsbCApple, 'blanco'),
    new productos ('Funda Silicona Iphone 15', 10 ,  imagenes.fundaIp15SiliconaVerde, 'verde'),
    new productos ('Funda Transparente Iphone 16', 15 ,  imagenes.fundaTransparente16, 'transparente'),
  ]
  
  