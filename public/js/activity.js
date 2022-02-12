//add a activity blog
const newActivityHandler = async (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const location = document.getElementById("location").value.trim();
  const imageURL = document.getElementById("imageURL").value.trim();

  if (title && description && location && imageURL) {
    const response = await fetch(`/api/activity`, {
      method: "POST",
      body: JSON.stringify({ title, description, location, imageURL }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/activity");
    } else {
      alert("Failed to create new activity");
    }
  }
};

document
  .getElementById("new-activity")
  .addEventListener("submit", newActivityHandler);
