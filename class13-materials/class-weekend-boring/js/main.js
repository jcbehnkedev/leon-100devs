//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "tuesday" || day === "thursday"){
    result = "YOU HAVE CLASS"
  }else if( day === "saturday" || day === "sunday"){
    result = "Its The Weekend"
  } else if (day === "wednesday"){
    result = "You have the day off!"
  }else{
    result = "BORING"
  }

  document.querySelector('#placeToSee').innerText = `${result}`
}
