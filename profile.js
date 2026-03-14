// Load user data when page loads
window.addEventListener("load", function () {
  // 1. Get data from localStorage
  const savedData = localStorage.getItem("userData");

  // 2. Check if data exists
  if (!savedData) {
    // No data found, redirect to register
    alert("No user data found. Please register first.");
    window.location.href = "register.html";
    return;
  }

  // 3. Parse the data
  const userData = JSON.parse(savedData);

  // 4. Display the data on the page
  document.getElementById("profileName").textContent =
    userData.name + " " + userData.surname;
  document.getElementById("profileId").textContent =
    "ID: " + userData.studentId;
  document.getElementById("profilePhoto").src = userData.photo;
  document.getElementById("profileButton").textContent = userData.name + " ⌄";
});

// Optional: Clear data when leaving
window.addEventListener("beforeunload", function () {
  // You can choose to keep or clear data
  // localStorage.removeItem('userData'); // Uncomment to clear on exit
});
