const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function

  let index=0

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      index++

      if (index === code.length) {
        alert("Congratulations!")
        //console.log("Congratulations!")

        index = 0
      }
    } else {
      index = 0
    }
  }

  for (let i=0;i<code.length;i++){
    document.body.addEventListener('keydown', onKeyDownHandler)
  }
}
