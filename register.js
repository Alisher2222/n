// Get the form
const registerForm = document.getElementById("registerForm");

// Handle form submission
registerForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop page from refreshing

  // 1. Get values from inputs
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const studentId = document.getElementById("studentId").value;
  const photoFile = document.getElementById("photo").files[0];

  // 2. Check if all fields are filled
  if (!name || !surname || !studentId || !photoFile) {
    alert("Please fill all fields and upload a photo");
    return;
  }

  // 3. Read the photo file
  const reader = new FileReader();

  reader.onload = function (e) {
    // 4. Create user data object
    const userData = {
      name: name,
      surname: surname,
      studentId: studentId,
      photo: e.target.result, // This is the image as base64 string
    };

    // 5. Save to localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    // 6. Redirect to profile page
    window.location.href = "profile.html";
  };

  // Read the photo as data URL
  reader.readAsDataURL(photoFile);
});

// Optional: Show photo preview
const photoInput = document.getElementById("photo");
const photoPreview = document.getElementById("photoPreview");

photoInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      photoPreview.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width: 200px; margin-top: 10px;">`;
    };
    reader.readAsDataURL(file);
  }
});
