document.addEventListener('DOMContentLoaded', function(){

const avatarElement=document.getElementById("avatar") 
const nameElement=document.getElementById("name")
const usernameElement=document.getElementById("username")
const reposElement=document.getElementById("repos")
const followersElement=document.getElementById("followers")
const followingElement=document.getElementById("following")
const profileElement=document.getElementById('link')


fetch("https://api.github.com/users/NataliaFonseca1")
.then(response => response.json())
.then(data=>{
  avatarElement.src=data.avatar_url;
 nameElement.innerText=data.name;
 usernameElement.innerText=data.login;
 reposElement.innerText=data.public_repos;
 followersElement.innerText=data.followers;
 followingElement.innerText=data.following;
 profileElement.href=data.html_url;
})
.catch(error => {
  console.error("erro ao buscar cep",error)
})

})