import { Component } from '@angular/core';

interface Iitem {
  image: string
}

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {


  itemList:Iitem[]=[

    {
      image:"/Images/poert1.png"
    },
    {
      image:"/Images/port2.png"
    },
    {
      image:"/Images/port3.png"
    },
    {
      image:"/Images/poert1.png"
    },
    {
      image:"/Images/port2.png"
    },
    {
      image:"/Images/port3.png"
    },


  ]

  isModalOpen = false;
  selectedImage = '';


  openModal(item: Iitem) {
    this.selectedImage = item.image;
    this.isModalOpen = true;
  }


  closeModal() {
    this.isModalOpen = false;
  }


}
