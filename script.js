window.onLoad = () => {
    //Get screen resolution

}
function add(){
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    let pages = document.createElement("div");
    pages.setAttribute("class", "pages");
    const newContent = document.createTextNode("Hi there and greetings!");
    pages.appendChild(newContent);
    let lastDiv = document.getElementById("lastDiv");
    document.body.insertBefore( lastDiv, pages);
//Check if screen is vertical or horizontal
    if (screenWidth > screenHeight) {
        //let screenState = "horizontal";
        //Create div with tag "pages"

        //let pages = document.createElement("div").setAttribute("class", "pages");
    }
    else {
        let screenState = "vertical";
    }
}
document.body.onload = add;
