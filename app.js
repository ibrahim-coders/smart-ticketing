const selectSeat = document.getElementById('select-seat');
const totalBooked = document.getElementById('total-booked');
const totalSeat = document.getElementById('total-seat');
const totalPriceEl = document.getElementById('total-price');
const coupnInput = document.getElementById('coupon-input');
const coupnBtn = document.getElementById('coupon-btn');
const defalutText = document.getElementById('default-text');
const discountMoney = document.getElementById('discount-money');

let selectSeats = [];
let totalPrice = 0;
function handeslSelecotSeat(event) {
  // Add class to the clicked seat element
  const value = event.innerText;
  if (selectSeats.includes(value)) {
    return alert('set already booked');
  }

  event.classList.add('bg-green-600');
  event.classList.add('text-white');
  selectSeats.push(event.inntext);
  totalBooked.innerText = selectSeats.length;
  const availableSeatValue = parseFloat(totalSeat.innerHTML);
  const newTotalSeat = availableSeatValue - 1;
  totalSeat.innerText = newTotalSeat;

  defalutText.classList.add('hidden');

  // Adding the selected seat information to the list
  selectSeat.innerHTML += `<li class= "text-base font-normal flex justify-between">
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
  </li>`;

  totalPrice += 550;
  totalPriceEl.innerText = totalPrice.toFixed(2);

  // if (selectSeat.children.length >= 4) {
  //   return alert('Maximum seat booking is 4');
  // } else if (selectSeat.children.length > 4) {
  //   coupnInput.removeAttribute('disabled');
  //   coupnBtn.removeAttribute('disabled');
  // } else {
  //   coupnInput.setAttribute('disabled', 'true');
  //   coupnBtn.setAttribute('disabled', 'true');
  // }

  if (selectSeat.children.length > 4) {
    coupnInput.removeAttribute('disabled');
    coupnBtn.removeAttribute('disabled');
  } else {
    coupnInput.setAttribute('disabled', 'true');
    coupnBtn.setAttribute('disabled', 'true');
  }
  gd();
  // coupon code discound
}

document
  .getElementById('coupon-btn')
  .addEventListener('click', function gd(totalPrice) {
    let copneseve = 0;
    const coupnInputVale = coupnInput.value;
    if (coupnInputVale === 'coupon 20' && coupnInputVale === 'new50') {
      alert('your provided copone is not valid');
    }

    if (coupnInputVale === 'new50') {
      copneseve = totalPrice * 0.15;
    } else if (coupnInputVale === 'coupon 20') {
      copneseve - totalPriceEl * 0.2;
    }
    const grandtotalValue = (totalPriceEl = copneseve);
    discountMoney.innerText = grandtotalValue.toFixed(2);
  });

//  // Check if 4 seats are selected
//   if (selectSeat.children.length === '4') {
//     console.log('You have selected 4 seats');
//   } else {
//     alert('Seat added. Keep selecting!');
//   }

// selectSeats.push(event.innerText);
// totalBooked.innerText = selectSeats.length;

// const availableSeatValue = parseFloat(totalSeat.innerText);
// const newSeat = availableSeatValue - 1;
// totalSeat.innerText = newSeat;
