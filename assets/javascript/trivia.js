$(document).ready(function () {


    var questionList = $("#triviaScreen");

    var questions = [
        {
            question: "Who won Best Lead Actor in the Oscars 2019?",
            answers: ["Rami Malek", "Bradley Cooper", "Leonardo DiCaprio", "Christian Bale"],
            correctAnswer: "Rami Malek"
        },
        {
            question: "Who won Best Lead Actress in the Oscars 2019?",
            answers: ["Glenn Close", "Lady Gaga", "Olivia Colman", "Ann Hathaway"],
            correctAnswer: "Olivia Colman"
        },
        {
            question: "Who won Best Director in the Oscars 2019?",
            answers: ["Alfonso Cuaron", "Spike Lee", "Guillermo del Toro", "Adam Mckay"],
            correctAnswer: "Alfonso Cuaron"
        },
        {
            question: "Who won Best Animated Feature in the Oscars 2019?",
            answers: ["Incredibles 2", "Ralph Breaks the Internet", "Isle of Dogs", "Spiderman: Into the Spider-Verse"],
            correctAnswer: "Spiderman: Into the Spider-Verse"
        },
        {
            question: "Who won Best Production Design in the Oscars 2019?",
            answers: ["Black Panther", "First Man", "Tomb Raider", "Mary Poppins Returns"],
            correctAnswer: "Black Panther"
        },
        {
            question:
                "Who won Best Costume Design in the Oscars 2019?",
            answers: ["Avengers: Infinity War", "Mary Queen of Scots", "Ready Player One", "Black Panther"],
            correctAnswer: "Black Panther"
        },
        {
            question: "Who won Best Visual Effects in the Oscars 2019?",
            answers: ["Avengers: Infinity War", "Solo: A Star Wars Story", "Black Panther", "First Man"],
            correctAnswer: "First Man"
        },
        {
            question: "Who won Best Picture in the Oscars 2019?",
            answers: ["BlacKkKlansman", "Bohemian Rhapsody", "A Star Is Born", "Green Book"],
            correctAnswer: "Green Book"
        }
    ];

    var timer;

    var game = {
        correct: 0,
        incorrect: 0,
        counter: 90,

        countdown: () => {
            game.counter--;
            $("#countDownClock").html(game.counter);
            if (game.counter === 0) {
                console.log("OUT OF TIME!!!");
                game.done();
            }
        },

        // when start button is closed data is pulled for questionlist and shown where the ID is triviascreen
        start: () => {
            timer = setInterval(game.countdown, 1000);
            $("#correctAnswers").html(game.correct);
            $("#incorrectAnswers").html(game.incorrect);


            $("#triviaBoard").prepend(
                `<p>Time Remaining: <span id='counter-number'>90</span> Seconds</p>`
            );
            $("#start").remove();

            for (var i = 0; i < questions.length; i++) {
                questionList.append("<hr></hr>" + "<p class='questionHead'>" + questions[i].question + "</p>");
                for (var j = 0; j < questions[i].answers.length; j++) {
                    questionList.append(` <br><input type='radio' + name='   question-` + i +
                        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
                }
            }
            questionList.append("<br><br><br><button class='btn btn-success' id='complete'>Complete</button>");
        },

        //loop through answer choices. if the checked radio button has the same value as the correct answer, then it is correct. Add 1 to correct. And vise versa for the inputs that do not match. Add 1 to incorrect.
        done: () => {
            var inputs = questionList.children("input:checked");
            for (var i = 0; i < inputs.length; i++) {
                if ($(inputs[i]).val() === questions[i].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            }
            this.result();
        },

        result: () => {
            clearInterval(timer);

            $("#triviaBoard").remove();

            questionList.html("<p>Complete!</p>");
            questionList.append("<p>Correct Answers: " + this.correct + "</p>");
            questionList.append("<p>Incorrect Answers: " + this.incorrect + "</p>");
        }


    };
    $(document).on("click", "#start", function () {
        game.start()
    });

    $(document).on("click", "#complete", function () {
        game.done()
    });
});

