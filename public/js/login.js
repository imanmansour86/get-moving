const loginHandler = async (e) => {
  e.preventDefault();

  const email = document.getElementById("").value.trim();
  const password = document.getElementById("").value.trim();

  //user has entered both fields
  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
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

const signupHandler = async (event) => {
  event.preventDefault();

  const name = document.getElementById("").value.trim();
  const email = document.getElementById("").value.trim();
  const password = document.getElementById("").value.trim();

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

document.getElementById("loginForm").addEventListener("submit", loginHandler);

document.getElementById("signUpForm").addEventListener("submit", signupHandler);
