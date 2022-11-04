
// the lines below depicts the actions of the dark and light mode 
let button = document.querySelector(".nav-right");
let body = document.querySelector(".body");
let theme=  document.querySelector(".nav1");
let image= document.querySelector(".sun")
let search = document.querySelector(".button");
let input=  document.querySelector(".input");
let hidden = document.querySelector(".error");

button.addEventListener("click" , function(){
    // the code below changes the textcontent of the correponding theme onclick 
    body.classList.toggle("light-mode")
    if( theme.textContent===" DARK"){

        theme.textContent= " LIGHT";
    }
    else{
        theme.textContent= " DARK"; 
    }
// the code below swaps betweem the images when clicked 
    if( image.getAttribute('src')=="./assets/icon-sun.svg"){

        image.setAttribute("src", "./assets/icon-moon.svg") 
    }
    else{
        image.setAttribute("src", "./assets/icon-sun.svg")
    }
        
})

// the code below performs the api search of the desired profile 
search.addEventListener("click", getprofile);
async function getprofile(){
    alert("hello")
    let response= await  fetch(`https://api.github.com/users/${input.value}`);
    let data= await response.json();
 //the code below contains the result gotten from the api and diplayed on the screen 
    console.log(data)
    if(!data.avatar_url){
        document.querySelector('.image-holder').setAttribute("src", "./assets/image-user-placeholder.png" );
    }
    else{
        document.querySelector('.image-holder').setAttribute("src", data.avatar_url)
    }
  
    if(!data.bio|| data.bio.length<1){
        document.querySelector('.desktop').textContent ="This profile has no bio";
    }
    else{
        document.querySelector('.desktop').textContent = data.bio;
    }
    // the lines decribe the name and logon of the user 
    if(!data.login || data.login.length<1 ){
        hidden.classList.add("errors");
    }
    else{
        document.querySelector('.p-one').textContent = data.login;
        hidden.classList.remove("errors");
    }

    if(!data.name || data.name.length<1){
        document.querySelector('.name').textContent = data.login; 
    }
    else{
        document.querySelector('.name').textContent= data.name;
    }

    document.querySelector(".follow-num").textContent=data.followers;
    document.querySelector(".following-num").textContent =data.following;
    document.querySelector(".repository-num").textContent= data.public_repos;

    // the code below describrs the behaviour of the userlocatiron
    if(!data.location ||data.location.length<1){
        document.querySelector(".view1").textContent ="Not available";
    }
    else{
        document.querySelector(".view1").textContent   =data.location;
    }
//   the lines below describe the behaviour of the teitteraccounts 
if(!data.twitter_username || data.twitter_username.length<1){
    document.querySelector(".view2").textContent ="Not available";
    document.querySelector(".view2").removeAttribute("href");
}
else{
    document.querySelector(".view2").textContent   =data.twitter_username;
    document.querySelector(".view2").href= `https://twitter.com/${data.twitter_username}`;
}
  

    // the lines below describr the behaviour of the userblog 
    if(!data.blog || data.blog.length<1) {
        document.querySelector(".view3").textContent="Not available";
        document.querySelector(".view3").removeAttribute("href");
    }
    else{
        document.querySelector(".view3").textContent   =data.blog.split('/')[2];
        document.querySelector(".view3").href= data.blog;
    }
// the lines below describe the behaviour of the user's company infos 
if(!data.company || data.company.length<1){
    document.querySelector(".view4").textContent ="Not available";
    document.querySelector(".view4").removeAttribute("href");
}
else{
    document.querySelector(".view4").textContent   =data.company;
    document.querySelector(".view4").href   =data.company;
    
}
   
 //The code below describes the behaviour of the the date joined  
 if(!data.created_at || data.created_at.length<1 ){
    document.querySelector('.dates').textContent= "......";
    document.querySelector('.datex').textContent= "......";
 }
 else{
    document.querySelector('.dates').textContent= data.created_at.split('T')[0];
    document.querySelector('.datex').textContent= data.created_at.split('T')[0];
 }



}