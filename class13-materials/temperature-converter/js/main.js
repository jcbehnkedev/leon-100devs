//Write your pseduo code first! 

// 0 - 32
document.querySelector('#yell').addEventListener('click', convert)

function convert() {
    // need the value in celsius
    let temp = document.querySelector('#celsius').value
    // convert C to F
    temp = temp * 9/5 + 32
    // show the new value
    document.querySelector('#placeToYell').innerText = temp

  }
