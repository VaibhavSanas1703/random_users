
const APIURL = "https://api.freeapi.app/api/v1/public/randomusers/user/random";
const userContainer = document.querySelector('.user-container');
const getRandomBtn = document.querySelector('button');

const getUser = async () => {
     try{
          const res = await fetch(APIURL)
          const userDta = await res.json()
          const roles = ['Frontend Developer','Backend Developer','UI/UX Designer','Full Stack Developer','Web Designer','Web Developer']
          const randomRoles = Math.floor(Math.random() * roles.length);
          const dataOB = new Date(userDta.data.dob.date).toLocaleString('en-US',{
               timeZone: 'Asia/Jakarta'
          })
          userContainer.innerHTML = "<h2>Finding user...</h2>"
          setTimeout(() => {
           userContainer.innerHTML = `
           <div class='top'>
           <p>${roles[randomRoles]}</p>
           </div>
          <div class="image-container">
          <img src=${userDta.data.picture.large} id='image'>
          </div>
          <div class="user-info">
          <h1>${userDta.data.name.title}. ${userDta.data.name.first} ${userDta.data.name.last}</h1>
          <h3> From ${userDta.data.location.country}</h3>
          <p>Email : ${userDta.data.email}</p>
          <p>Contact : ${userDta.data.phone}</p>
          </div>
          `
          }, 700);   

          setTimeout(() => {
               const imageContainer = document.querySelector('.image-container');
               const userInfo = document.querySelector('.user-info');
               const top = document.querySelector('.top');
               top.classList.add('active')
               userInfo.classList.add('active')
               imageContainer.classList.add('active')
          }, 750);
     }
     catch{
          userContainer.innerHTML = "<h2>Server not Respond!</h2>"
     }
}

getRandomBtn.addEventListener('click',getUser)
document.addEventListener('DOMContentLoaded',() => {
     setTimeout(() => {
          getUser()
     }, 200);
})