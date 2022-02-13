//delete a  blog
const attendlButtonHandler = async (event) => {
  console.log("attend");
  if (event.target.hasAttribute("data-id")) {
    //activity id
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/activity/${id}`, {
      method: "POST",
    });

    if (response.ok) {
      console.log("response in js ok");
      document.location.replace("/homepage");
    } else {
      alert("Failed to add attendance");
    }
  }
};

document
  .getElementById("attend")
  .addEventListener("click", attendlButtonHandler);
