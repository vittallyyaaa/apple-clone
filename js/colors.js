document.querySelector('.colors').addEventListener('change', (event) => {
if (event.target.nodeName === 'INPUT') {
  document.documentElement.classList.remove('purple', 'gold', 'silver', 'grey');
  document.documentElement.classList.add(event.target.value)
}

})


document.querySelector('.colors').addEventListener('change', (event) => {
  if (event.target.nodeName === 'INPUT') {
    document.documentElement.classList.remove('purple-small', 'gold-small', 'silver-small', 'grey-small');
    document.documentElement.classList.add(event.target.value)
  }
  
  })


    