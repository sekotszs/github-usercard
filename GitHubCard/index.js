/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const gitCardParent = document.querySelector('div.cards');
axios.get('https://api.github.com/users/sekotszs')
.then(response => {
  console.log(response);
  gitCardParent.append(gitCard(response.data))
})
.catch(error => {
  console.log("the data was not returned", error)
})

//new people
axios.get('https://api.github.com/users/sekotszs/followers')
.then(response => {
  console.log(response);
response.data.forEach( person => gitCardParent.append(gitCard(person)))
})
.catch(error => {
  console.log("the data was not returned", error)
})



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

function gitCard (object){
  const divOne = document.createElement('div');
  divOne.classList.add('card');

//IMAGE
const cardImg = document.createElement('img');
cardImg.setAttribute('src',object.avatar_url) 
divOne.appendChild(cardImg);


  //DIV CARDINFO
  const divTwo = document.createElement('div');
  divTwo.classList.add('card-info');
  divOne.appendChild(divTwo);

  
  //H3 Name
  const cardH = document.createElement('h3');
  cardH.classList.add('name');
  cardH.textContent = `${object.name}`;
  divTwo.appendChild(cardH);

  //PARAGRAPH ONE Login
  const pOne = document.createElement('p');
  pOne.classList.add('username');
  pOne.textContent = `${object.login}`;
  divTwo.appendChild(pOne);

  //PARAGRAPH TWO location
  const pTwo = document.createElement('p');
  pTwo.textContent = `Location:
   ${object.location}`;
  divTwo.appendChild(pTwo);

  //PARAGRAPH THREE profile
  const pThree = document.createElement('p');
  divTwo.appendChild(pThree);

  //HREF
  const oneA = document.createElement('a');
  oneA.setAttribute('href',object.html_url);
  oneA.textContent = `Profile`;
  pThree.appendChild(oneA);

  //PARAGRAPH FOUR followers
  const pFour = document.createElement('p');
  pFour.textContent = `Followers: ${object.followers}`
  divTwo.appendChild(pFour);

  //PARAGRAPH FIVE follwoing
  const pFive = document.createElement('p');
  pFive.textContent =`Following: ${object.following}`
  divTwo.appendChild(pFive);

  //PARAGRAPH SIX bio
  const pSix = document.createElement('p');
  pSix.textContent = `Bio: ${object.bio}`;
  divTwo.appendChild(pSix);
    
        
  return divOne;          
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
