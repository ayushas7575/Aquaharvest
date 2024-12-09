let newsForm = document.getElementById('newsletter__form');

newsForm.addEventListener('submit', function(event){
    event.preventDefault(); // Prevents from auto Submitting
    alert('Thank you for subscribing our channel.')
    return true;
})

let helpForm = document.getElementById('Help__form');

helpForm.addEventListener('submit',  function(event){
    event.preventDefault(); // Prevents from auto Submitting
    return true;
})