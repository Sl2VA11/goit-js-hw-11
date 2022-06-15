fetch('https://pixabay.com/api/?key=28055837-436de9124f9241a9654f163e0&q=cat&image_type=photo&pretty=true')
   .then(response => response.json())
   .then(console.log)