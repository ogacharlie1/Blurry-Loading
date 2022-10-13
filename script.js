// This task is about loading a blurry picture from 0 to 100

// First we bring in our parameters
 const loadText = document.querySelector('.loading-text')
  const bg = document.querySelector('.bg')

  // Next we intialize the value load
  let load = 0 

  // create a variable int and run the blurring function to run every 30millisecnds
  let int = setInterval(blurrying, 30)

  // call a function blurring, and take the load value and incremeent by 1
  function blurrying () {
    load++
    
     // The if statement stops the interval from runing endlessly. makes it stop at 100
    if (load > 99) {
      clearInterval(int)
    }

    loadText.innerText = `${load}%`

    // Here, a range of number(opacity 1 to 0) is mapped to another.
    loadText.style.opacity = scale(load, 0, 100, 1, 0)

     // Here, we map 0 - 100 to  30 - 0 because we are starting blur.
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
  }
      // This is used in mapping one number to another
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }


  