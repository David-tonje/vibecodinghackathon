// Handle Symptom Checker
document.getElementById("checkBtn").addEventListener("click", () => {
    const symptoms = document.getElementById("symptomInput").value;
    const resultDiv = document.getElementById("result");
  
    if (symptoms.trim() === "") {
      resultDiv.innerHTML = "<p>Please enter your symptoms first.</p>";
      return;
    }
  
    // Simulated AI response (replace later with Claude.ai API)
    resultDiv.innerHTML = `<p><strong>Possible Insight:</strong> 
      Based on your symptoms, this may require further medical attention. 
      Please consult a healthcare professional.</p>`;
  });
  
  // Initialize Google Maps
  function initMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
  
        const map = new google.maps.Map(document.getElementById("map"), {
          center: userLocation,
          zoom: 14
        });
  
        new google.maps.Marker({
          position: userLocation,
          map: map,
          title: "You are here"
        });
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }
  