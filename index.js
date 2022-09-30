products.forEach((ele)=>{
    let div=document.createElement("div");
    div.className="product-card"

    let imgDiv=document.createElement("div");
    imgDiv.className="imgDiv"

    let dataDiv=document.createElement("div");
    dataDiv.className="dataDiv"

    let image=document.createElement("img");
    image.src=ele.images;

    let price=document.createElement("h1")
    price.innerText=ele.price

    let year=document.createElement("p")
    year.innerText=ele.year

    let model=document.createElement("p")
    model.innerText=ele.model

    let location=document.createElement("p")
    location.innerText=ele.location

    let listed=document.createElement("p")
    listed.innerText=ele.listed;
    let lastDiv=document.createElement("div")
    lastDiv.className="lastDiv";

    lastDiv.append(location,listed)

    imgDiv.append(image)
    dataDiv.append(price,year,model,lastDiv)

    div.append(imgDiv,dataDiv)


    document.querySelector("#main").append(div)
});