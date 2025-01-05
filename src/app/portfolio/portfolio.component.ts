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
    this.currentIndex = index;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  nextImage(): void {
    if (this.currentIndex < this.itemList.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }


  prevImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.itemList.length - 1;
    }
  }

}
