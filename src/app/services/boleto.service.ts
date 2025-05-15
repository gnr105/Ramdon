import { Injectable } from '@angular/core';
import { Boleto } from '../models/boleto';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {
  private boletos: Boleto[] = [];



  getBoletos():Boleto[]{
    return this.boletos;
  }

  addBoleto(boleto:Boleto){
    this.boletos.push(boleto);
  }

  clearBoletos(){
    this.boletos = [];
  }


  constructor() { }
}
