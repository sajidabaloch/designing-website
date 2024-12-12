


let api = "https://fakestoreapi.com/products"


async function getApi(url) {
     let store = await fetch(url)
     let data = await store.json()
     console.log(data);


     let card = ""

     data.forEach(element => {

        card += `
        <div class="all-cards" style="display: flex;justify-content: center;align-items: center;">
    
      <div class="card m-5" style="width: 18rem;" id="display-card">
        <img src="./img/img.jpg" class="card-img-top row" alt="img">
        <div class="card-body">
          <h5 class="card-title"><b>Product</b></h5>
          <p class="card-text">Some quick example text to build on the card title.</p>
          <h5 class="card-title"><b>Price:50000</b></h5>
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
    </div>
      
        `
        document.getElementById("display-card").innerHTML = card

        
        
     });
     
}

