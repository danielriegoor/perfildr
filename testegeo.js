  const x = document.getElementById("demo");
  
  const showPosition = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    x.innerHTML = ` Carregando mapa da sua localização... `
    
    // const mapURL = `https://www.openstreetmap.org/export/embed.html?bbox=${lon-0.01},${lat-0.01},${lon+0.01},${lat+0.01}&layer=mapnik&marker=${lat},${lon}`;
    const mapURL = `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`;
    
    /* x.innerHTML = `<iframe src="${mapURL}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    x.style.display = "block";
    x.style.marginTop = "10px";
    x.style.border = "1px solid #ccc"; */

    x.innerHTML = `<iframe src="${mapURL}" 
    width="100%" height="100%" 
    frameborder="0" scrollinng="no"
    marginheight="0" marginwidth="0"
    style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    
  };

  const handleError = (error) => {
    let errorMessage = "Erro ao obter a localização: ";
    switch(error.code) {
      case error.PERMISSION_DENIED:
      errorMessage += "Usuário negou a solicitação de Geolocalização.";
      break;
      case error.POSITION_UNAVAILABLE:
      errorMessage += "Informação de localização indisponível.";
      break;
      case error.TIMEOUT:
      errorMessage += "A requisição para obter a localização expirou.";
      break;
      case error.UNKNOWN_ERROR:
      errorMessage += "Ocorreu um erro desconhecido.";
      break;
      default:
    }
    x.innerHTML = errorMessage;
  };


  const getLocation = () => {

    x.innerHTML = "Obtendo sua localização... Por favor, autorize o acesso à localização do seu dispositivo.";

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    navigator.geolocation ? navigator.geolocation.getCurrentPosition(showPosition, handleError, options)
    : (x.innerHTML = "Geolocation is not supported by this browser.");
    };