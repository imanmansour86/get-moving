const loginFormHandler = async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  //user has entered both fields
  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("redirecting to main page");
      // If successful, redirect the browser to the profile page
      document.location.replace("./");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("./");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .getElementById("login-form")
  .addEventListener("submit", loginFormHandler);

document
  .getElementById("signup-form")
  .addEventListener("submit", signupFormHandler);
