    var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var chances = 0;
    var stats= {
      Wins: 0,
      Losses: 0,

        WhenUserWin: function(){
          this.Wins=this.Wins+1;
          alert("Wins: "+this.Wins);
        },

        WhenUserLose: function(){
          this.Losses=this.Losses+1;
          alert("Losses: "+this.Losses);
        }
    };


    function RewriteStats(){
      console.log("Wins: "+stats.Win);
      console.log("Losses: "+stats.Losses);
    }

    document.onkeyup = function(event) {

      var userGuess = event.key.toUpperCase();
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

          if (userGuess === computerGuess){
            alert("Correct! The letter was "+computerGuess);
            stats.WhenUserWin();
          }

          else

          if(userGuess != computerGuess){
            alert("Wrong! You guessed "+userGuess+". The letter was "+computerGuess);
            stats.WhenUserLose();
      }
    };