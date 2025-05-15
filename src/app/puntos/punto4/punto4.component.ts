import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BoletoService } from '../../services/boleto.service';
import { Boleto } from '../../models/boleto';
import { CommonModule } from '@angular/common';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;

@Component({
  selector: 'app-punto4',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbCarouselModule],
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit, AfterViewInit {
  showNavigationArrows = false;
	showNavigationIndicators = false;
	images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  boletoForm!: FormGroup;
  precioFinal: number | null = null;
  boletos: Boleto[] = [];
  dtInitialized = false;

  constructor(private fb: FormBuilder, private boletoService: BoletoService, config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.boletoForm = this.fb.group({
      dni: ['', Validators.required],
      precio: [null, Validators.required],
      categoriaTurista: ['', Validators.required],
      fechaCompra: [new Date(), Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngAfterViewInit(): void {
    this.initDataTable();
  }

  initDataTable() {
    if (!this.dtInitialized && this.boletos.length > 0) {
      setTimeout(() => {
        $('#miTabla').DataTable({
          pagingType: 'full_numbers',
          pageLength: 5,
          responsive: true,
          language: {
            url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'
          }
        });
        this.dtInitialized = true;
      }, 0);
    }
  }

  calcularPrecio() {
    const precio = this.boletoForm.value.precio;
    const categoria = this.boletoForm.value.categoriaTurista;

    if (precio && categoria) {
      switch (+categoria) {
        case 1: this.precioFinal = precio * 0.65; break;
        case 3: this.precioFinal = precio * 0.5; break;
        default: this.precioFinal = precio; break;
      }
    } else {
      this.precioFinal = null;
    }
  }

  registrarBoleto() {
    if (this.boletoForm.valid && this.precioFinal !== null) {
      const boleto: Boleto = {
        ...this.boletoForm.value,
        precioFinal: this.precioFinal
      };
      this.boletoService.addBoleto(boleto);
      this.boletos = this.boletoService.getBoletos();
      this.boletoForm.reset({ fechaCompra: new Date() }); // Resetea el formulario y mantiene la fecha de compra
      this.precioFinal = null;

      // 🔁 Reinicializamos la DataTable
      if (this.dtInitialized) {
        $('#miTabla').DataTable().destroy();
        this.dtInitialized = false;
      }
      this.initDataTable();
    }
  }
}
