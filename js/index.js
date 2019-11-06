// Using your index.js file, create 10 unique event listeners.

// step 1: create variables 
// step 2 set up event action



// MOUSEOVER EVENT

const travelImages = document.querySelectorAll('.img-content');
const lastTravelImage = document.querySelector('.content-destination img');

  // For the center images on the page create mouse in mouse out action 
    travelImages.forEach((image) => {
      image.addEventListener('mouseenter', (event) => {
        image.style.transform = 'scale(1.2)';
        image.style.transition = 'transform 0.5s';
      });

      image.addEventListener('mouseleave', (event) => {
        image.style.transform = 'scale(1.0)';
        image.style.transition = 'transform 0.5s';
      });
    });


    // For the last image on the page create mouse in mouse out action 
    lastTravelImage.addEventListener('mouseenter', (event) => {
      lastTravelImage.style.transform = 'scale(1.15)';
      lastTravelImage.style.transition = 'transform 0.5s';
    });

    lastTravelImage.addEventListener('mouseleave', (event) => {
      lastTravelImage.style.transform = 'scale(1.0)';
      lastTravelImage.style.transition = 'transform 0.5s';
    });


//////////////////////////////////////////////////////////////////////////////////

// CLICK + MOUSEOVER EVENT

    const firstTravelImage = document.querySelector('.intro img');

    // mouse over and change image when click
    firstTravelImage.addEventListener('mouseenter', (event) => {
      firstTravelImage.style.transform = 'scale(1.15)';
      firstTravelImage.style.transition = 'transform 0.5s';

      firstTravelImage.addEventListener('click', (event) => {
        firstTravelImage.src = '../img/fun-bus2.jpg';
        firstTravelImage.alt = 'NEW BUS LOCATION';
      });
    });

    // mouse leave 
    firstTravelImage.addEventListener('mouseleave', (event) => {
      firstTravelImage.style.transform = 'scale(1.0)';
      firstTravelImage.style.transition = 'transform 0.5s';
    });


//////////////////////////////////////////////////////////////////////////////////

// SCROLL EVENT

    // when you reach the bottom of the page a message pops up. 
    window.addEventListener('scroll', () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;

      const scrolled = window.scrollY; 

      if(Math.ceil(scrolled) === scrollable) {
        alert('You\'ve reached the bottom of the page! Now it\'s time to start traveling!');
      }
    }); 


//////////////////////////////////////////////////////////////////////////////////

// DOUBLE CLICK EVENT WITH MESSAGE

    // message popup when you double click nav links 
    const mouseHoverLinks = document.querySelectorAll(".nav-link");
    const buttonLow = document.querySelectorAll('.destination .btn');

    mouseHoverLinks.forEach((a) => {
      a.addEventListener('dblclick', () => {
        a.style.color = 'red';
        alert('These thinks curently don\'t work.')
      }); 
    }); 


// DOUBLE CLICK EVENT

    // butons color change to coral and white
    buttonLow.forEach((button)=>{
        button.addEventListener('dblclick', () =>{ 
        button.style.backgroundColor = 'coral';
        button.style.color = 'white';
        });
    });

//////////////////////////////////////////////////////////////////////////////////

// RANDOME EVENT

    // ZOOM 
    const H2 = document.querySelectorAll("h2");

    document.addEventListener('wheel', (zoom)=> {
        H2[0].style.transform= "scale(1.5)";
    });

    // COPY
    document.addEventListener('copy', (e)=>{
      H2[0].textContent = 'Stop copying that!'
    }); 


    //MOUSE DOWN 
    document.addEventListener('mousedown', (e)=>{
      H2[0].textContent = 'You have been pressing that for too long'
    }); 

    //MOUSE UP
    document.addEventListener('mouseup', (e)=>{
      H2[0].textContent = 'You finaly let go!'
    }); 

    // KEYPRESS
    const body = document.querySelector("*");
    body.addEventListener("keypress", () => (body.style.backgroundColor = "black"));
    body.addEventListener("keyup", () => (body.style.color = "#fff"));

    