$( document ).ready(function() {
  //Start drawing random numbers by clicking button
  $('.draw').on('click', drawBallots);

  function drawBallots() {
    //Disable button while drawing
    $('.draw').attr('disabled', true);
    //Clear display of previous ballots if any
    $('.ballot').remove();
    //Start clean
    const ballots = [];

    while (ballots.length < 5) {
      //Generate random numbers from 1 to 69
      let randomNumber = Math.floor(Math.random() * 69) + 1;

      //Random numbers must not repeat
      if (!ballots.includes(randomNumber)) {
        ballots.push(randomNumber);
      }
    }

    //Sort ballots in ascending order
    const sortedBallots = ballots.sort((a, b) => a - b);
    //Generate random number from 1 to 26
    let randomSuperNumber = Math.floor(Math.random() * 26) + 1;
    sortedBallots.push(randomSuperNumber);

    //Append sortedBallots to display
    sortedBallots.forEach((ballot, i) => {
      $('.display').append(`<div class="ballot ballot${i}">${ballot}</div>`);
    });

    //Animate drawing
    const displayInterval = setInterval(displayBallots, 400);
    let interval = 0;

    function displayBallots() {
      if (interval < 6) {
        $(`.ballot${interval}`).css('visibility', 'visible');

        if ($('.ballot5').css('visibility') === 'visible') {
          clearInterval(displayInterval);
          $('.draw').attr('disabled', false);
        }

        interval++;
      }
    }
  }
});
