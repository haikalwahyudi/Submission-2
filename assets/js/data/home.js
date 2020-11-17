// import fetchAPI from "../api.js";

// const club = document.getElementById('club');

// const home = () =>{
//     fetchAPI("https://api.football-data.org/v2/competitions/2001/teams")
//     .then(response => {
//         response.json()
//     })
//     .then(data => {
//         let dataClub = '';
//         data.result.forEach(club => {
//             dataClub += `
//             <div class="card">
//             <div class="card-image">
//                 <img src="${club.crestUrl}" title=""Club>
//             </div>
//             <div class="card-content">
//                 <span class="card-title">${club.name}</span>
                
//             </div>
//             <div class="card-action">
//                 <a href="#">This is a link</a>
//             </div>
//         </div>
//         `;
//         });
//         club.innerHTML = dataClub;
//     });
// }
// home();


