const container = document.querySelector('.container'); /*selects only one, the first one */
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); /*selects all of them puts them in a node list and can run methods on it as if it were an array*/
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value; /*adding + to the movieSelect turns it from a string to a number. Can also use parseInt */

//Save selected movie index and price
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}


//Update total and count
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    //Copy selected seats into an array 
    const seatsIndex = [...selectedSeats].map( seat => {
        return [...seats].indexOf(seat);
    }) 
    //spread operator copies elements of an array. This will also convert the nodelist into a regular array. Map returns an array, forEach is like a for loop

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex)); //stringify b/c seatsIndex is an array
    
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}


//Get data from localstorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')); //parse does the opposite of JSON.stringify

    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}




//Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

//Seat click event
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
})

//Initial count and total set
updateSelectedCount();








//Examples of map and forEach

//map
// const arr = [1,2,3]
// const arr2 = [...arr, 4, 5]

// const arr3 = arr2.map(function(item) {
//     return item * 2;
// })

// console.log(arr3) returns [2,4,6,8,10]


//forEach
// const arr = [1,2,3]
// const arr2 = [...arr, 4,5]

// arr2.forEach(function(item) {
//     console.log(item + 'Hello')
// })
// returns "1Hello" "2Hello" "3Hello" etc 