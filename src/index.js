const fullname = document.getElementById("fullname");
const addPersonButton = document.querySelector(".btn.btn-primary");
const profilePic = document.querySelector("#profile_picture");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  fetch("https://randomuser.me/api/")
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      console.log(json.results[0].name.first);
      console.log(json.results[0].name.last);
      const firstName = json.results[0].name.first;
      const lastName = json.results[0].name.last;
      const fullNameText = `${firstName} ${lastName}`
      const imgUrl = json.results[0].picture.medium
      // console.log(imgUrl)
      addPersonButton.addEventListener("click", (e) => {
        console.log(e.target)
        e.preventDefault()
        fullname.textContent = fullNameText;
        console.log(profilePic.getAttribute("src"));
        profilePic.src = imgUrl;
        // profilePic.value = e.target.src;
      })
    });
    
});
