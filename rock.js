

function disabling(){

  if (computerpoints === 3 || userpoints === 3) {
  rock.classList.add('disabled');
  paper.classList.add('disabled');
  scissors.classList.add('disabled');
  setTimeout(function(){rock.classList.remove('disabled')}, 10000);
  setTimeout(function(){paper.classList.remove('disabled')},10000);
  setTimeout(function(){scissors.classList.remove('disabled')},10000);
  
}
}


// We begin with a function "getComputerChoice" for the computer choice that either selects rock, paper or scissors

function getComputerChoice() {

  let computer = Math.floor((Math.random() * 3))
  
  if (computer === 0) {
      return 'rock'
      
  } 
    else if (computer === 1) {
      return 'paper'
   
    }     
    else if (computer === 2) {
      return 'scissors'

    }

  

}



// what i did to to try to implement your code into mine 
const result = document.getElementById("result")



result.addEventListener('animationend', function(e){
  this.classList.remove('animation');
})


// Function called "playRound" that plays a single round of Rock Paper Scissors. It will take 2 parameters, "playerSelection" and "computerSelection", and return a string that declares the winner.

let userpoints = 0
let computerpoints = 0

function playRound(playerSelection, computerSelection) {
  

  

  

  if (playerSelection === computerSelection) {
    document.getElementById("result").style.color = "black";
    
    document.getElementById("result").innerHTML = "THIS ROUND IS A DRAW"
    result.classList.add('animation')
  } 
  
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      userpoints++
      if (userpoints === 3) {
        document.getElementById("result").style.color = "#00ffc8"
        //document.getElementById("result").style.fontFamily = 'Major Mono Display';
        document.getElementById("result").innerHTML = "VICTORY! YOU BEAT RYAN";
        result.classList.add('animation')
      }  
        else {
          

 

    document.getElementById("result").style.color = "#03fc3d";
    document.getElementById("result").innerHTML = "YOU WON THE ROUND";
    result.classList.add('animation') // Adding the classlist when a round has been played
        }
     
}
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
     userpoints++
     if (userpoints === 3) {
      document.getElementById("result").style.color = "#00ffc8"
      //document.getElementById("result").style.fontFamily = 'Major Mono Display';
      document.getElementById("result").innerHTML = "VICTORY! YOU BEAT RYAN";
      result.classList.add('animation')
    } else {
      document.getElementById("result").style.color = "#03fc3d";
     document.getElementById("result").innerHTML = "YOU WON THE ROUND";
     result.classList.add('animation') // Adding the classlist when a round has been played
    }

    

    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
      userpoints++
      if (userpoints === 3) {
        document.getElementById("result").style.color = "#00ffc8"
        //document.getElementById("result").style.fontFamily = 'Major Mono Display';
        document.getElementById("result").innerHTML = "VICTORY! YOU BEAT RYAN";
        result.classList.add('animation')
      } else {
        document.getElementById("result").style.color = "#03fc3d";
      document.getElementById("result").innerHTML = "YOU WON THE ROUND";
      result.classList.add('animation') // Adding the classlist when a round has been played
      }
     
      
    }
    else {
      computerpoints++
      if (computerpoints === 3) {
        document.getElementById("result").style.color = "#f2d9fc"
        document.getElementById("result").innerHTML = "RYAN WON THE ENTIRE GAME!";
        result.classList.add('animation')
      } else {
      document.getElementById("result").style.color = "#ffffff";
      document.getElementById("result").innerHTML = "RYAN WON THE ROUND";
      result.classList.add('animation') // Adding the classlist when a round has been played
      }
     
    
      
    }
   
}



const computerSelection = getComputerChoice();


const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const ryan = document.querySelector(".onhover")




// edit this hover later
// ryan.addEventListener('mouseover', () => {
 
  // document.getElementById("ryanword").innerHTML = "I will crush you. You are nothing but a peasant."
  
// }) 






let player = ""

/* rock.addEventListener('click', () => {
  if (userpoints === 0 && computerpoints === 0) {
    const thestaruser = document.querySelector(".thestaruser");
    thestaruser.innerHTML = "";
  }

  player = 'rock'
  playRound(player, getComputerChoice())
  game()
  checkwinner()
  addstar()

  if (userpoints === 3 || computerpoints === 3) {
    userpoints = 0 
    computerpoints = 0

   
  
    
  }})





paper.addEventListener('click', () => {

if (userpoints === 0 && computerpoints === 0) {
    const thestaruser = document.querySelector(".thestaruser");
    thestaruser.innerHTML = "";
  }

  
  player = 'paper'
  playRound(player, getComputerChoice())
  game()
  checkwinner()
  addstar()


  if (userpoints === 3 || computerpoints === 3) {
    userpoints = 0 
    computerpoints = 0
   
    
  }
    
})

  
scissors.addEventListener('click', () => {
  if (userpoints === 0 && computerpoints === 0) {
    const thestaruser = document.querySelector(".thestaruser");
    thestaruser.innerHTML = "";
  }

  player = 'scissors'
  playRound(player, getComputerChoice())
  game()
  checkwinner()
  addstar()


  if (userpoints === 3 || computerpoints === 3) {
    userpoints = 0 
    computerpoints = 0
   

    
  }

  

}) */


  
  function handleUserClick(e) {
    // what can we put here so that you aren't copying basically the same function over and over?
    disabling()
  
  if (userpoints === 0 && computerpoints === 0) {
      const thestaruser = document.querySelector(".thestaruser");
      const thestar = document.querySelector(".thestar")
      thestaruser.innerHTML = "";
      thestar.innerHTML = "";
    }
  
    player = e.target.className
    playRound(player, getComputerChoice())
    game()
    addstar()
    playaudio()
    disabling()
  
  
    if (userpoints === 3 || computerpoints === 3) {
      userpoints = 0 
      computerpoints = 0
      
     
  
      
    } 
    

  
  
  }

  paper.addEventListener('click', handleUserClick)
  rock.addEventListener('click', handleUserClick)
  scissors.addEventListener('click', handleUserClick)







function game() {

  

  if (userpoints === 0 && computerpoints < 3 && document.getElementById("result").innerHTML === "YOU WON THE ROUND") {
  document.getElementById("player").innerHTML = `> Please go easy on me Ryan, this is all my $`
  }
    else if (userpoints === 1 && computerpoints < 3 && document.getElementById("result").innerHTML === "YOU WON THE ROUND") {
      document.getElementById("player").innerHTML = `> GOTCHA!`
    }
    else if (userpoints === 2  && computerpoints < 3) {
      document.getElementById("player").innerHTML = `> No way im 1 WIN AWAY...`
    }
      else if (userpoints === 3 && computerpoints < 3) {
        document.getElementById("player").innerHTML = `> OMG I JUST WON AGAINST RYAN HAVAR!!!! NO WAY`;

      }
        else if (computerpoints === 3) {
          document.getElementById("player").innerHTML = `> NOOOO... I LOST MY COINS TO A BILLIONAIRE`
        }
          else if (document.getElementById("result").innerHTML === "RYAN WON THE ROUND" && computerpoints < 3) {
              document.getElementById("player").innerHTML = `> NOOOO!! STOP THAT`

          }





  if (computerpoints === 0 && userpoints < 3) {
  document.getElementById("ryanword").innerHTML = `> I will crush you, peasant.`
  }
    else if (computerpoints === 1 && userpoints < 3) {
      document.getElementById("ryanword").innerHTML = `> Your coins will soon be mine.`
    }
      else if (computerpoints === 2 && userpoints < 3) {
        document.getElementById("ryanword").innerHTML = `> Almost there... Reading you like a book`
      }
          else if (computerpoints === 3) {
            document.getElementById("ryanword").innerHTML = `> I won! Will buy a new birkin for my girl :D`
          }

         else if (userpoints === 3) {
            document.getElementById("ryanword").innerHTML = `> Lol, you think losing 1 BTC is a lot to me ?`;
          }
        


  

  
}



 

function checkwinner() {



  if (userpoints === 3) {
    document.getElementById("gameresult").innerHTML = "You won the entire game!"
  } 
    else if (computerpoints === 3) {
      document.getElementById("gameresult").innerHTML = "Ryan won the game!"
    } else {
      document.getElementById("gameresult").innerHTML = ""

    }

}











function addstar() {

  const thestaruser = document.querySelector(".thestaruser")
  const thestar = document.querySelector(".thestar")
  
  const img = document.createElement("img");
  img.src = "https://i.ibb.co/PFw7YMz/2b50-removebg-preview.png";
  img.classList.add("staruser");
  
  thestaruser.addEventListener('animationend', function(e){
        
    this.classList.remove('staruser');
  })
  
  
  
  
  
    if (document.getElementById("result").innerHTML === "YOU WON THE ROUND" || document.getElementById("result").innerHTML === "VICTORY! YOU BEAT RYAN") {
      thestaruser.appendChild(img);
      
      
    } 
  
    if (document.getElementById("result").innerHTML === "RYAN WON THE ROUND" || document.getElementById("result").innerHTML === "RYAN WON THE ENTIRE GAME!") {
  
      thestar.appendChild(img);
    }
    
          
  }
  

  

  




function playaudio() {

  const audioElement = document.querySelector('.hitmarker');
  const audioElement2 = document.querySelector('.missionfailed');
  const audioElement3 = document.querySelector('.pavelow');
  const audioElement4 = document.querySelector('.harrier');
  const audioElement5 = document.querySelector('.victory');


  audioElement.currentTime = 0

  audioElement.play();

  if (computerpoints === 3) {
    audioElement2.play()
  }

  if (userpoints === 2 && document.getElementById("result").innerHTML === "YOU WON THE ROUND") {
    audioElement3.play()
  }

  if (userpoints === 1 && document.getElementById("result").innerHTML === "YOU WON THE ROUND") {
    audioElement4.play()
  }


  if (userpoints === 3) {
    audioElement5.play()

  }

}

