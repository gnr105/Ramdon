import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface CardData {
  imageUrl: string;
  title: string;
  description: string;
  redirectUrl: string;
  buttonText?: string;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards: CardData[] = [
    {
      imageUrl: 'https://www.infobae.com/resizer/v2/YTHTXLZVN5CT5K2PX6UREH5SCM.jpg?auth=8ce06fe634702ed25c3ba96fac8d53cae1cf07c119b01576a625433566fe5446&smart=true&width=577&height=325&quality=85',
      title: 'PUNTO 1 - NOTICIAS DEPORTIVAS',
      description: 'Todas las noticias actualizadas de Deportes a nivel Mundial',
      redirectUrl: '/punto1',
      buttonText: 'Ir al Componente'
    },
    {
      imageUrl: 'https://cdn.forbes.com.mx/2023/11/7-eleven-640x360.webp',
      title: 'PUNTO 2 - TIENDA EN LINEA',
      description: 'Descrubrí nuestra Tienda online, con las mejores promociones para todo el mundo.',
      redirectUrl: '/punto2',
      buttonText: 'Ir al Componente'
    },
    {
      imageUrl: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/04/juegos-mesa-vendidos-historia-3304812.jpg?tf=1200x',
      title: 'PUNTO 3 - EL AHORCADITO',
      description: 'Jugá y divertite con el mejor juego de la historia',
      redirectUrl: '/punto3',
      buttonText: 'Ir al Componente'
    },
    {
      imageUrl: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/BAB7/production/_103799774_gettyimages-923304724.jpg.webp',
      title: 'PUNTO 4 - PASAJES',
      description: 'Te presentamos nuestra novedad más exclusiva. ¡Sé el primero en conocerla!',
      redirectUrl: 'https://ejemplo.com/novedad4', // URL externa
      buttonText: 'Ir al Componente'
    }
  ];

  constructor() { }
}
