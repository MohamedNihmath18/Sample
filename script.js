document.addEventListener("DOMContentLoaded", function() {
    const approvalButton = document.getElementById("approvalButton");
  
    approvalButton.addEventListener("click", function() {
      sendFormToHOD();
    });
  
    function sendFormToHOD() {
      const formData = {
        name: document.getElementById("name").value,
        // Add other form field values here
      };
  
      // Assuming your HOD endpoint URL
      const url = "https://example.com/send-form-to-hod";
  
      // AJAX request using fetch API
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        handleApproval(data);
      })
      .catch(error => {
        console.error("Error sending form data:", error);
      });
    }
  
    function handleApproval(data) {
      // Assuming data contains the response from HOD
      console.log("Form sent to HOD:", data);
      alert("Form has been sent to HOD for approval.");
      // Additional logic for handling the approval process
    }
  });
  