import { Component, ViewChild } from '@angular/core';

import { ImageInfo } from './model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root', //tag
  templateUrl: './app.component.html', //structure
  styleUrls: ['./app.component.css'] //style
})
export class AppComponent {
  //behaviour
  @ViewChild('inventoryForm') invForm: NgForm;

  cart:  number[] = [];
  pictures: ImageInfo[] = [
    { 
      prodId: 0,
      imageURL: "https://www.bluecross.org.uk/sites/default/files/assets/images/118809lpr.jpg",
      comment: "This is a cat"
    },
    {
      prodId: 1,
      imageURL: "data:image/jpeg;base64,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",
      comment: "This is a dog"
    },
    {
      prodId: 2,
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24Cb5-cQZNdQBid1Rw7pvR_Jvq21w2LePDt5mwKB0CKb4uhIwnQ",
      comment: "This is another dog"
    }
  ];

  processForm() {
    console.log("Processing form");
    console.log(this.invForm.value)
    this.pictures.unshift(this.invForm.value);
    this.invForm.resetForm();
  }

  deleteItem(i: number) {
    console.log('> deleting item: ', i);
    this.cart.splice(i, 1);
  }

  addToCart(prodId: number) {
    console.log("Selected: ", prodId);
    this.cart.push(prodId);
  }

}
