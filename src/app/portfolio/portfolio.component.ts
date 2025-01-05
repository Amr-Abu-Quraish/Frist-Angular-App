import { Component } from '@angular/core';
import { findIndex } from 'rxjs';

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
  currentIndex: number = 0;

  get selectedImage(): Iitem {
    return this.itemList[this.currentIndex];
  }

  openModal(index: number): void {
    console.log('Opening modal with index:', index);
    this.currentIndex = index;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.itemList.length;
    console.log('Next image index:', this.currentIndex);
  }

  prevImage(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.itemList.length) % this.itemList.length;
    console.log('Previous image index:', this.currentIndex);
  }

}
