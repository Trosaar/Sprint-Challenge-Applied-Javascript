class Carousel {
  constructor(carouselEl) {
    this.carouselEl = carouselEl;
    this.leftButton = this.carouselEl.querySelector('.left-button');
    this.rightButton = this.carouselEl.querySelector('.right-button');
    this.selector = 0;

    this.rightButton.addEventListener('click', () => {
      if (this.selector < 3) {
        this.selector += 1;
        console.log(this.selector);
      } else {
        this.selector = 0
        console.log(this.selector);
      };
      this.selectImg()
    });

      this.leftButton.addEventListener('click', () => {
        if (this.selector > 0) {
          this.selector -= 1;
          console.log(this.selector);
        } else {
          this.selector = 3
          console.log(this.selector);
        }
        this.selectImg()
      });
  }
  selectImg(){
    const carouselImgs = document.querySelectorAll('.carousel img');
    let selectedImg = carouselImgs[this.selector];
    Array.from(carouselImgs).forEach(img => img.style.display ="none");
    selectedImg.style.display="block";
  }
}
//   selectedImg(){
//     // Select all elements with the .tab class on them
//     const tabs = document.querySelectorAll('.tab');
//
//     // Iterate through the NodeList removing the .active-tab class from each element
//     tabs.forEach(tab => tab.classList.remove('active-tab'));
//
//     // Select all of the elements with the .card class on them
//     const cards = document.querySelectorAll('.card');
//
//     // Iterate through the NodeList setting the display style each one to 'none'
//     Array.from(cards).forEach(card => card.style.display = 'none');
//     // Add a class of ".active-tab" to this.tabElement
//     this.tabElement.classList.add('active-tab');
//
//     // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
//     this.cards.forEach(card => card.selectCard());
// }

let carousel = document.querySelectorAll('.carousel').forEach(el => new Carousel(el));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
