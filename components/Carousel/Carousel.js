/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let images = [
  './carousel/bones.jpg',
  './carousel/fido.jpg',
  './carousel/max.jpg',
  './carousel/puppers.jpg',
  './carousel/sir.jpg'
]

const body = document.querySelector('.carousel-container')

const leftDiv = document.createElement('div')
const carouselImage = document.createElement('img')
const rightDiv = document.createElement('div')

leftDiv.textContent = "<"
rightDiv.textContent = ">"

let imageNumber = 0

carouselImage.src = images[imageNumber]

const carouselIterator = () => {
  if(imageNumber == images.length-1){
    imageNumber = 0;
  }else{
    imageNumber++;
  }
  carouselImage.src = images[imageNumber]
}

const carouselIteratorReverse = () => {
  if(imageNumber == 0){
    imageNumber = images.length-1
  }else{
    imageNumber--
  }
  carouselImage.src = images[imageNumber]
}


rightDiv.addEventListener('click', () => {
  carouselIterator()
})

leftDiv.addEventListener('click', () => {
  carouselIteratorReverse()
})

function run() {
    return new Promise((resolve, reject) => {
        try {
            carouselIterator()
            return resolve()
        } catch (e) {
            return reject(e)
        }
    })
    .then(setTimeout(() => run(), 5000));
}
run();


body.appendChild(leftDiv)
body.appendChild(carouselImage)
body.appendChild(rightDiv)