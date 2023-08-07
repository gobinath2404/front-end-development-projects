//fetch
fetch('json/booking.json')
  .then(response => response.json())
  .then(json => {
    offers(json["saels"]);
    tickets(json["book"]);
    locations(json["worldTour"]);
    prices(json[ "validations"]);
    steps(json[ "dealings"]);
    recommandation(json["uniques"]);
    international(json["airlines"]);
  });
  //fare json
  let getOffer = '';
  function offers (traveller) {
    traveller.forEach (selected => {
      getOffer +=`
      <div class="col-sm-3">
        <div class="discount">
          <img src = "${selected.image}" alt = "${selected.title}" title = "${selected.title}"/>
          <p>${selected.booking}</p>
          <div class="airlines">
            <img src = "${selected.logo}" alt = "${ selected.name}" title = "${selected.name}">
          </div>
        </div>
      </div>`
    });
    if(document.querySelector('.fares')){
      document.querySelector('.fares').innerHTML = getOffer;
      // inner html assigned creat html    
    } 
  }
  //explore json
  let getAmazing = '';
  function tickets (checks) {
    checks.forEach (economy => {
      getAmazing +=`
        <div class="col-sm-4">
          <div class="world">
            <h4>${economy.from}<i class="fa fa-long-arrow-right" aria-hidden="true"></i>${economy.to}</h4>
            <p>${economy.date}</p>
            <div class="plane">
              <img src = "${economy.image}" alt = "${economy.title}" title = "${economy.title}"/>
              <h6>${economy.flight}</h6>
              <h6>${economy.class}</h6>
            </div>
            <h3><i class="fa fa-usd dollar" aria-hidden="true"></i>${economy.price}</h3>
          </div>
        </div>`
    });
    if(document.querySelector('.explore')){
      document.querySelector('.explore').innerHTML = getAmazing;
    // inner html assigned creat html    
    }   
  }
  //trips json
  let getAirline = '';
  function locations (ways){
    ways.forEach (trips => {
      getAirline +=`
        <div class="col-sm-3 ">
          <div class="economy">
            <img src = "${trips.image}" alt = "${trips.title}" title = "${trips.title}" />
            <div class="oneway">
              <h4>${trips.city}</h4>
              <p>${trips.trip}</p>
              <span>${trips.start}</span>
              <span class="currency"><i class="fa fa-usd dollar" aria-hidden="true"></i>${trips.price}</span>
            </div>
            <div class="logo">
              <img src = "${trips.logo}" alt = "${trips.logotitle}" title = "${trips.logotitle}" />
              <a href="javascript:;">${trips.name}</a>
            </div>
          </div>
        </div>`
    });
    if(document.querySelector('.trips')){
      document.querySelector('.trips').innerHTML = getAirline;
      // inner html assigned creat html  
    }  
  }
  //detail json
  let getTrip = ''; 
  function prices (seats) {
    seats.forEach (famous => {
      getTrip +=`
        <div class="col-sm-4">
          <div class="product">
            <img class="img-rounded" src = "${famous.image}" alt = "${famous.title}" title = "${famous.title}"/>
            <p>${famous.city}</p>
            <p class="places">${famous.discount}</p>
            <button class="btn">${famous.book}</button>
          </div>
        </div>`
    });
    if(document.querySelector('.detail')){
      document.querySelector('.detail').innerHTML = getTrip;
    // inner html assigned creat html    
    }  
  }
  //best json
  let getDeal = '';
  function steps (searching) {
    searching.forEach (book => {
      getDeal +=`
        <div class="col-sm-4">
          <div class="steps">
            <i  class= "${book.class}" aria-hidden="true"></i>
            <h4>${book.select}</h4>
            <p>${book.guide}</p>
            <span>${book.no}</span>
          </div>
        </div>`
    });
    if(document.querySelector('.best')){
      document.querySelector('.best').innerHTML = getDeal;
      // inner html assigned creat html 
    }  
  }
  // show json
  let getExperience = '';
  function recommandation (special) {
    special.forEach (tour => {
      getExperience +=`
        <div class="col-sm-4">
          <div class="experience">
            <div class="popular"><img class="img-rounded" src = "${tour.image}" alt = "${tour.titles}" title="${tour.titles}" /></div>
            <div class="select">
              <h4>${tour.country}</h4>
              <h5>${tour.price}</h5>
            </div>
          </div>
        </div>`
    });
    if(document.querySelector('.show')){
      document.querySelector('.show').innerHTML = getExperience;
      // inner html assigned creat html 
    }  
  }
  //list json
  let getSearch = '';
  function international (agency) {
    agency.forEach (reset => {
      getSearch +=`
        <div class="row">
          <div class="col-sm-12">
            <div class="list">
              <div class="row">
                <div class="col-sm-3">
                  <div class="logos">
                    <img src = "${reset.logo}" alt = "${reset.title}" title = "${reset.title}"/>
                    <h5>${reset.airline}</h5>
                    <h5>${reset.number}</h5>
                    <h6>${reset.detail}</h6>
                  </div>
                </div>
                <div class="col-sm-2">
                  <div class="depart">
                    <h5>${reset.depart}</h5>
                    <span>${reset.from}</span>
                  </div>
                </div>
                <div class="col-sm-2">
                  <div class="time">
                    <h6>${reset.duration}</h6>
                    <span>${reset.connect}</span>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="arrive">
                    <h5>${reset.arrive}</h5>
                    <span>${reset.to}</span>
                  </div>
                </div>
                <div class="col-sm-2">
                  <div class="price">
                    <h4><i class="fa fa-usd dollar" aria-hidden="true"></i>${reset.price}</h4>
                    <button class="btns">${reset.select} </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`
    });
    if(document.querySelector('.filter')){
      document.querySelector('.filter').innerHTML = getSearch;
      // inner html assigned creat html    
    }
  }
// exchange orgin to destination
let getTravels = document.querySelectorAll('.orgin');
getTravels.forEach(getTravels => {
  let getExchange = getTravels.querySelector('.change');
  let getSelects = getTravels.querySelectorAll('.startpoint');
  getExchange.addEventListener('click',function(){
    let getOrgin = getSelects[0].querySelector('.form-control').value;
    let getDestination = getSelects[1].querySelector('.form-control').value;
    getSelects[0].querySelector('.form-control').value = getDestination;
    getSelects[1].querySelector('.form-control').value = getOrgin;
  });
});
//increment-decrement-input
let getElements = document.querySelectorAll(".increment-decrement-input");
let getIncrement = document.querySelectorAll(".increment-button");
let getDecrement = document.querySelectorAll(".decrement-button");
getIncrement.forEach((button, index) => {
  button.addEventListener("click", function() {
    let getValue = parseInt(getElements[index].value);
    getElements[index].value = getValue + 1;
    if(getValue >= 20){
      getElements[index].value = getValue;
    }
  });
});
getDecrement.forEach((button, index) => {
  button.addEventListener("click", function() {
    let getValue = parseInt(getElements[index].value);
    getElements[index].value = getValue - 1;
    if(getValue <= 0){
      getElements[index].value = getValue;
    }
  });
});
//add remove inputs
let addBtn = document.querySelector(".create");
let getInput = document.querySelector(".input-added");
function getAddInput(){
  //orgin
  let getOrgin = document.createElement("input");
  getOrgin.type = "text";
  getOrgin.placeholder = "Orgin";
  getOrgin.className = "form-controls";
  let getIcon = document.createElement("i");
  getIcon.className = "fa fa-map-marker";
  getIcon.setAttribute("aria-hidden","true");
  let getUsedSpan = document.createElement("span");
  getUsedSpan.className = "starting";
  let getCreatedDiv = document.createElement("div");
  getCreatedDiv.className ="col-sm-3";
  let getAdded = document.createElement("div");
  getAdded.className =" form-group started";
  getCreatedDiv.appendChild(getAdded);
  getUsedSpan.appendChild(getIcon);
  getAdded.appendChild(getUsedSpan);
  getAdded.appendChild(getOrgin);
  //destination
  let getDestinations = document.createElement("input");
  getDestinations.type = "text";
  getDestinations.placeholder = "Destination";
  getDestinations.className = "form-controls";
  let getLocation = document.createElement("i");
  getLocation.className ="fa fa-map-marker";
  getLocation.setAttribute("aria-hidden","true");
  let getSpan = document.createElement("span");
  getSpan.className = "ending";
  let getDiv = document.createElement("div");
  getDiv.className = "col-sm-3";
  let getEnding = document.createElement("div");
  getEnding.className = " form-group areas";
  getDiv.appendChild(getEnding);
  getSpan.appendChild(getLocation);
  getEnding.appendChild(getSpan);
  getEnding.appendChild(getDestinations);
  //date
  let getDate = document.createElement("input");
  getDate .type = "text";
  getDate.placeholder = "Depart Date";
  getDate.className = "check";
  let getPick = document.createElement("i");
  getPick.className ="fa fa-calendar";
  getPick.setAttribute("aria-hidden","true");
  let getFirstSpan = document.createElement("span");
  getFirstSpan.className = "tourist";
  let getFirstDiv = document.createElement("div");
  getFirstDiv.className = "col-sm-3";
  let getMonth = document.createElement("div");
  getMonth.className = " form-group years";
  getFirstDiv.appendChild(getMonth);
  getFirstSpan.appendChild( getPick);
  getMonth.appendChild(getFirstSpan);
  getMonth.appendChild(getDate);
  // remove button
  let getButtons = document.createElement("button");
  getButtons.className ="buttons";
  getButtons.innerHTML ="Remove";
  let getSecondDiv = document.createElement("div");
  getSecondDiv.className ="col-sm-3";
  let getRemoved = document.createElement("div");
  getRemoved.className ="removed";
  getSecondDiv.appendChild(getRemoved);
  getRemoved.appendChild(getButtons);
  // input remove
  getSecondDiv.addEventListener('click',removeInput);
  //main parent div
  let getParent = document.createElement("div");
  getParent.className ="row";
  // main parents append
  getInput.appendChild(getParent);
  getParent.appendChild(getCreatedDiv);
  getParent.appendChild(getDiv);
  getParent.appendChild(getFirstDiv);
  getParent.appendChild(getSecondDiv);
}
function removeInput() {
  this.parentElement.remove();
}

