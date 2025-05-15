import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto3.component.html',
  styleUrl: './punto3.component.css'
})
export class Punto3Component implements OnInit {
  palabras = ['LEOPARDO', 'HIPOPOTAMO', 'KOALA', 'HIENA', 'CARPINCHO', 'GORILA', 'MARMOTA', 'FLAMENCO', 'COCODRILO', 'PERRO'];
  categoria = 'Animales';
  palabraElegida = '';
  letrasAdivinadas: string[] = [];
  intentosRestantes = 6;
  abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  juegoTerminado = false;
  gano = false;

  ngOnInit(): void {
    this.reiniciarJuego();
  }

  reiniciarJuego(): void {
    const randomIndex = Math.floor(Math.random() * this.palabras.length);
    this.palabraElegida = this.palabras[randomIndex];
    this.letrasAdivinadas = [];
    this.intentosRestantes = 6;
    this.juegoTerminado = false;
    this.gano = false;
  }

  mostrarPalabra(): string {
    return this.palabraElegida.split('').map(letra => this.letrasAdivinadas.includes(letra) ? letra : '_').join(' ');
  }

  elegirLetra(letra: string): void {
    if (this.juegoTerminado || this.letrasAdivinadas.includes(letra)) return;

    if (this.palabraElegida.includes(letra)) {
      this.letrasAdivinadas.push(letra);
    } else {
      this.intentosRestantes--;
    }

    this.verificarEstado();
  }

  verificarEstado(): void {
    const palabraFormada = this.palabraElegida.split('').every(letra => this.letrasAdivinadas.includes(letra));

    if (palabraFormada) {
      this.gano = true;
      this.juegoTerminado = true;
    } else if (this.intentosRestantes <= 0) {
      this.juegoTerminado = true;
    }
  }

  obtenerImagenAhorcado(): string {
    return `assets/ahorcado${6 - this.intentosRestantes}.png`; // ej: ahorcado1.png, ahorcado2.png...
  }
}
