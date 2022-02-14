//add a activity blog
const newActivityHandler = async (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const location = document.getElementById("location").value.trim();
  const image = document.getElementById("imageURL").value.trim();
  const activity_date = document.getElementById("date").value.trim();

  console.log(activity_date);
  if (title && description && location && image) {
    const response = await fetch(`/api/activity`, {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        location,
        activity_date,
        image,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("test");
      document.location.replace("/activity");
    } else {
      alert("Failed to create new activity");
    }
  }
};

//delete an activity
const delButtonHandler = async (event) => {
  console.log("test delete", event.target);
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/activity/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/activity");
    } else {
      alert("Failed to delete activity");
    }
  }
};

document
  .getElementById("new-activity")
  .addEventListener("submit", newActivityHandler);

//only call delete when the button exists
const deletebtn = document.getElementById("delete");

if (deletebtn) {
  deletebtn.addEventListener("click", delButtonHandler);
}
