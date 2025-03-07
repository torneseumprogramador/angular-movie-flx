import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/logged/header/header.component';
import { CardComponent } from '../../../components/logged/card/card.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../interfaces/movie';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CardComponent, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  movies: Movie[] = [
    {
      id: 1,
      title: "O Poderoso Chefão",
      description: "Don Corleone, chefe da máfia, precisa passar o legado para seu filho Michael, que reluta em assumir os negócios da família.",
      duration: "1:30h",
      ageRating: "Somente +18",
      approvalRating: 87,
      providerLogo: "/images/patners/apple.png",
      isTop10: true
    },
    {
      id: 2,
      title: "Matrix",
      description: "Um programador descobre que a realidade como conhecemos é uma simulação criada por máquinas e se une a um grupo de rebeldes para libertar a humanidade.",
      duration: "2:16h",
      ageRating: "+16",
      approvalRating: 92,
      providerLogo: "/images/patners/netflix.png",
      isTop10: true
    },
    {
      id: 3,
      title: "Inception",
      description: "Um ladrão especializado em roubar informações através dos sonhos recebe uma missão impossível: plantar uma ideia na mente de alguém.",
      duration: "2:28h",
      ageRating: "+14",
      approvalRating: 89,
      providerLogo: "/images/patners/claro.png",
      isTop10: false
    },
    {
      id: 4,
      title: "O Senhor dos Anéis",
      description: "Um hobbit recebe a missão de destruir um anel mágico que pode salvar ou destruir a Terra-média.",
      duration: "2:58h",
      ageRating: "+12",
      approvalRating: 95,
      providerLogo: "/images/patners/netflix.png",
      isTop10: true
    },
    {
      id: 5,
      title: "Pulp Fiction",
      description: "Várias histórias se entrelaçam em Los Angeles, envolvendo assassinos, boxeadores, gângsteres e criminosos.",
      duration: "2:34h",
      ageRating: "+18",
      approvalRating: 91,
      providerLogo: "/images/patners/apple.png",
      isTop10: true
    },
    {
      id: 6,
      title: "O Silêncio dos Inocentes",
      description: "Uma agente do FBI busca a ajuda de um canibal preso para capturar um serial killer.",
      duration: "1:58h",
      ageRating: "+18",
      approvalRating: 88,
      providerLogo: "/images/patners/claro.png",
      isTop10: false
    },
    {
      id: 7,
      title: "O Poderoso Chefão",
      description: "Don Corleone, chefe da máfia, precisa passar o legado para seu filho Michael, que reluta em assumir os negócios da família.",
      duration: "1:30h",
      ageRating: "+18",
      approvalRating: 88,
      providerLogo: "/images/patners/netflix.png",
      isTop10: false
    }
  ];
}
