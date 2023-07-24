$(document).ready(function () {
  $("body").on("click", "#toggleMenu", function () {
    if ($(this).hasClass("close")) {
      $("#toggleMenuItem")
        .removeClass("d_visible")
        .delay(500)
        .removeClass("show");
      $(this).removeClass("close");
    } else {
      $("#toggleMenuItem").addClass("show").delay(500).addClass("d_visible");
      $(this).addClass("close");
    }
  });
  $("#banner-slides").slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    fade: false,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToScroll: 1,
  });
});

const carCategories = [
  {
    cars: [
      {
        name: "Cadillac CTS",
        carUser: "3",
        baggage: "4",
        thumbnail:
          "../images/fleet/car-image/sedan/cadillac-cts/cadillac-cts.webp",
      },
      {
        name: "Mercedes S500",
        carUser: "3",
        baggage: "4",
        thumbnail:
          "../images/fleet/car-image/lux/mercedes-s500/mercedes-s500.webp",
      },
      {
        name: "Chevy Suburban",
        carUser: "7",
        baggage: "6",
        thumbnail:
          "../images/fleet/car-image/suv/chevy-suburban/chevy-suburban.webp",
      },
      {
        name: "Cadillac Escalade",
        carUser: "6",
        baggage: "6",
        thumbnail:
          "../images/fleet/car-image/lux/cadillac-scalade/cadillac-scalade.webp",
      },
      {
        name: "Ford Transit Van",
        carUser: "14",
        baggage: "10",
        thumbnail:
          "../images/fleet-exhibit/car-image/van/ford-transit-van/ford-transit-van.webp",
      },
      {
        name: "Mercedes Sprinter",
        carUser: "11",
        baggage: "10",
        thumbnail:
          "../images/fleet-exhibit/car-image/van/mercedes-sprinter/mercedes-sprinter.webp",
      },
      {
        name: "Small Bus",
        carUser: "24",
        baggage: "20",
        thumbnail:
          "../images/fleet-exhibit/car-image/bus/small-bus/small-bus.webp",
      },
      {
        name: "Mid-Sized Bus",
        carUser: "32",
        baggage: "28",
        thumbnail:
          "../images/fleet-exhibit/car-image/bus/mid-sized-bus/mid-sized-bus.webp",
      },
      {
        name: "Large Bus",
        carUser: "50",
        baggage: "42",
        thumbnail:
          "../images/fleet-exhibit/car-image/bus/large-bus/large-bus.webp",
      },
      {
        name: "Motorcoach",
        carUser: "56",
        baggage: "50",
        thumbnail:
          "../images/fleet-exhibit/car-image/motorcoach/motorcoach/motorcoach.webp",
      },
    ],
  },
];

const singleCar = document.getElementById("singleCarContainer");

let singleCarHTML = "";
carCategories.forEach((category) => {
  category.cars.forEach((car) => {
    singleCarHTML += `
      <div class="car-img text-center">
        <img src="${car.thumbnail}" alt="${car.name}" />
      </div>
      <div class="car-title">
        <h3 class="font-weight-bold text-center">${car.name}</h3>
      </div>
      <div class="car-user-and-baggage d-flex justify-content-center">
        <div class="car-user d-flex align-items-center">
          <img src="assets/images/fleet-exhibit/icons/user.svg" />
          <span class="ml-2">${car.carUser}</span>
        </div>
        <div class="baggage d-flex align-items-center">
          <img src="assets/images/fleet-exhibit/icons/luggage.svg" />
          <span class="ml-1">${car.baggage}</span>
        </div>
      </div>
    `;
  });
});

// Set the car data HTML to the container
singleCar.innerHTML = singleCarHTML;
