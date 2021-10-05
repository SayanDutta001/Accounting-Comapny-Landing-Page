// Initialize and add the map
function initMap() {
  // Your location
  const location = { lat: 22.5726, lng: 88.3639 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: location
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: location, map:
  map });
}

// CDN -> Content  Delivery Network

// Sticky menu background
window.addEventListener('scroll', function () {
     if (window.scrollY > 150) {
          document.querySelector('#navbar').style.opacity = 0.9;
     } else {
          document.querySelector('#navbar').style.opacity = 1;
     }
});

// Smooth Scrolling code from JQuery CDN
$('#navbar a, .btn').on('click', function (event) {
     if (this.hash !== '') {
          event.preventDefault();

          const hash = this.hash;

          $('html, body').animate(
               {
                    scrollTop: $(hash).offset().top - 100
               },
               800
          );
     }
});