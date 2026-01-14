const $p3 = document.querySelectorAll('p')[2]

// setTimeout(() => {
//   $p3.textContent = 'Australopithecus'
// }, 4000)

setInterval(() => {
  $p3.textContent = 'Australopithecus'
  setTimeout(() => {
    $p3
  }, 2000)
}, 4000)
console.log($p3)
