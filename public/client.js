let LOGGEDIN = false;
let USERNAME = "";

const FONTS = ['Roboto','Tajawal','Do Hyeon','Lato','Montserrat','Hi Melody','Gugi','Raleway','Gaegu','Merriweather','Ubuntu','Black Han Sans','Playfair Display','Poppins','Gamja Flower','Inconsolata','Indie Flower','Dosis','Crimson Text','Jua','Arvo','Libre Baskerville','Cute Font','Lobster','Pacifico','Dokdo','Shadows Into Light','Dancing Script','Black And White Picture'];
const COLORS = ['white', 'black', 'maroon', 'teal', 'aqua', 'navy', '#6495ED', '#E9967A', '#FF5555', '#FF9B55', '#35A091', '#44CC44', '#FFFC55', '#BE3F9B', '#C9F251', '#8040AB', '#DE4A81', '#34959A', '#FFFF55', '#DAB8CE', 'rgba(0,0,0,.6)', 'rgba(255,255,255,.6)'];
const BORDERS = ['none', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'];
const TEXTSTYLES = [["transparent", "none"],["transparent", "2px 2px black"],["transparent", "5px 5px black"],["transparent", "2px 2px white"],["transparent", "5px 5px white"],["transparent", "2px 2px 8px white"],["transparent", "2px 2px 8px black"],["transparent", "0 0 3px #FF0000, 0 0 5px #0000FF"],["rgba(0,0,0,.4)", "none"],["rgba(255,255,255,.4)", "none"]];


function changeHeader() {
    let input = $("#titleText").val();
    $("#cardHeader").text(input);
}

function changeBody() {
    let input = $("#bodyText").val();
    $("#cardBody").text(input);
}

function changeFooter() {
    let input = $("#footertext").val();
    $("#cardFooter").text(input);
}

/*  NOTE TO SELF - CONSOLIDATE FOLLOWING THREE FUNCTIONS?  **********************************************************************/
function headerFont() {
    let fontNumber = 0;
    $("#cardHeader").css("font-family", FONTS[fontNumber]); // Set initial font
    $("#nextTitleFont").click(
        function() {
            fontNumber++;
            if (fontNumber >= FONTS.length) {
                fontNumber = 0;
            }
            $("#cardHeader").css("font-family", FONTS[fontNumber]);
        }
    );
    $("#prevTitleFont").click(
        function() {
            fontNumber--;
            if (fontNumber < 0) {
                fontNumber = FONTS.length - 1;
            }
            $("#cardHeader").css("font-family", FONTS[fontNumber]);
        }
    );
}

function bodyFont() {
    let fontNumber = 0;
    $("#cardBody").css("font-family", FONTS[fontNumber]);  // Set initial font
    $("#nextBodyFont").click(
        function() {
            fontNumber++;
            if (fontNumber >= FONTS.length) {
                fontNumber = 0;
            }
            $("#cardBody").css("font-family", FONTS[fontNumber]);
        }
    );
    $("#prevBodyFont").click(
        function() {
            fontNumber--;
            if (fontNumber < 0) {
                fontNumber = FONTS.length - 1;
            }
            $("#cardBody").css("font-family", FONTS[fontNumber]);
        }
    );
}

function footerFont() {
    let fontNumber = 0;
    $("#cardFooter").css("font-family", FONTS[fontNumber]); // Set initial font
    $("#nextFooterFont").click(
        function() {
            fontNumber++;
            if (fontNumber >= FONTS.length) {
                fontNumber = 0;
            }
            $("#cardFooter").css("font-family", FONTS[fontNumber]);
        }
    );
    $("#prevFooterFont").click(
        function() {
            fontNumber--;
            if (fontNumber < 0) {
                fontNumber = FONTS.length - 1;
            }
            $("#cardFooter").css("font-family", FONTS[fontNumber]);
        }
    );
}

/*  NOTE TO SELF - CONSOLIDATE FOLLOWING THREE FUNCTIONS?  **********************************************************************/
function headerColor() {
    let colorNumber = 0;
    $("#cardHeader").css("color", COLORS[colorNumber]); // Set initial color
    $("#prevTitleColor").click(
        function() {
            colorNumber--;
            if (colorNumber < 0) {
                colorNumber = COLORS.length-1;
            }
            $("#cardHeader").css("color", COLORS[colorNumber]);
        }
    );
    $("#nextTitleColor").click(
        function() {
            colorNumber++;
            if (colorNumber >= COLORS.length) {
                colorNumber = 0;
            }
            $("#cardHeader").css("color", COLORS[colorNumber]);
        }
    );
}

function bodyColor() {
    let colorNumber = 0;
    $("#cardBody").css("color", COLORS[colorNumber]); // Set initial color
    $("#prevBodyColor").click(
        function() {
            colorNumber--;
            if (colorNumber < 0) {
                colorNumber = COLORS.length-1;
            }
            $("#cardBody").css("color", COLORS[colorNumber]);
        }
    );
    $("#nextBodyColor").click(
        function() {
            colorNumber++;
            if (colorNumber >= COLORS.length) {
                colorNumber = 0;
            }
            $("#cardBody").css("color", COLORS[colorNumber]);
        }
    );
}

function footerColor() {
    let colorNumber = 0;
    $("#cardFooter").css("color", COLORS[colorNumber]); // Set initial color
    $("#prevFooterColor").click(
        function() {
            colorNumber--;
            if (colorNumber < 0) {
                colorNumber = COLORS.length-1;
            }
            $("#cardFooter").css("color", COLORS[colorNumber]);
        }
    );
    $("#nextFooterColor").click(
        function() {
            colorNumber++;
            if (colorNumber >= COLORS.length) {
                colorNumber = 0;
            }
            $("#cardFooter").css("color", COLORS[colorNumber]);
        }
    );
}

/*  NOTE TO SELF - CONSOLIDATE FOLLOWING THREE FUNCTIONS?  **********************************************************************/
function headerSize() {
    let fontSize = 2;
    $("#cardHeader").css("font-size", fontSize + "em"); // Set initial size
    $("#smallerTitle").click(
        function() {
            fontSize/=1.1;
            $("#cardHeader").css("font-size", fontSize + "em");
        }
    );
    $("#largerTitle").click(
        function() {
            fontSize*=1.1;
            $("#cardHeader").css("font-size", fontSize + "em");
        }
    );
}
function bodySize() {
    let fontSize = 1;
    $("#cardBody").css("font-size", fontSize + "em"); // Set initial size
    $("#smallerBody").click(
        function() {
            fontSize/=1.1;
            $("#cardBody").css("font-size", fontSize + "em");
        }
    );
    $("#largerBody").click(
        function() {
            fontSize*=1.1;
            $("#cardBody").css("font-size", fontSize + "em");
        }
    );
}
function footerSize() {
    let fontSize = 2;
    $("#cardFooter").css("font-size", fontSize + "em"); // Set initial size
    $("#smallerFooter").click(
        function() {
            fontSize/=1.1;
            $("#cardFooter").css("font-size", fontSize + "em");
        }
    );
    $("#largerFooter").click(
        function() {
            fontSize*=1.1;
            $("#cardFooter").css("font-size", fontSize + "em");
        }
    );
}


/*  NOTE TO SELF - CONSOLIDATE FOLLOWING THREE FUNCTIONS?  **********************************************************************/
function headerStyle() {
    let styleNum = 0;
    $("#prevHeaderStyle").click(
        function() {
            styleNum--;
            if (styleNum < 0) {
                styleNum = TEXTSTYLES.length-1;
            }
            $("#cardHeader").css("text-shadow", TEXTSTYLES[styleNum][1]);
            $("#cardHeader").css("background-color", TEXTSTYLES[styleNum][0]);
        }
    );
    $("#nextHeaderStyle").click(
        function() {
            styleNum++;
            if (styleNum >= TEXTSTYLES.length) {
                styleNum = 0;
            }
            $("#cardHeader").css("text-shadow", TEXTSTYLES[styleNum][1]);
            $("#cardHeader").css("background-color", TEXTSTYLES[styleNum][0]);
        }
    );
}
function bodyStyle() {
    let styleNum = 0;
    $("#prevBodyStyle").click(
        function() {
            styleNum--;
            if (styleNum < 0) {
                styleNum = TEXTSTYLES.length-1;
            }
            $("#cardBody").css("text-shadow", TEXTSTYLES[styleNum][1]);
            $("#cardBody").css("background-color", TEXTSTYLES[styleNum][0]);
        }
    );
    $("#nextBodyStyle").click(
        function() {
            styleNum++;
            if (styleNum >= TEXTSTYLES.length) {
                styleNum = 0;
            }
            $("#cardBody").css("text-shadow", TEXTSTYLES[styleNum][1]);
            $("#cardBody").css("background-color", TEXTSTYLES[styleNum][0]);
        }
    );
}
function footerStyle() {
    let styleNum = 0;
    $("#prevFooterStyle").click(
        function() {
            styleNum--;
            if (styleNum < 0) {
                styleNum = TEXTSTYLES.length-1;
            }
            $("#cardFooter").css("text-shadow", TEXTSTYLES[styleNum][1]);
            $("#cardFooter").css("background-color", TEXTSTYLES[styleNum][0]);
        }
    );
    $("#nextFooterStyle").click(
        function() {
            styleNum++;
            if (styleNum >= TEXTSTYLES.length) {
                styleNum = 0;
            }
            $("#cardFooter").css("text-shadow", TEXTSTYLES[styleNum][1]);
            $("#cardFooter").css("background-color", TEXTSTYLES[styleNum][0]);
        }
    );
}


function borders() {
    let styleNumber = 0;
    let colorNumber = 0;
    let borderSize = 10;
    $("#photo").css("border-style", BORDERS[styleNumber]); // Set initial border
    $("#photo").css("border-color", COLORS[colorNumber]); // Set initial color
    $("#photo").css("border-width", borderSize + "px"); // Set initial size
    $("#prevBorderStyle").click(
        function() {
            styleNumber--;
            if (styleNumber < 0) {
                styleNumber = BORDERS.length-1;
            }
            if(borderSize < 4) { // If no border or tiny border, increase border size so visible
                borderSize = 4;
                $("#photo").css("border-width", borderSize + "px");
            }
            $("#photo").css("border-style", BORDERS[styleNumber]);
        }
    );
    $("#nextBorderStyle").click(
        function() {
            styleNumber++;
            if (styleNumber >= BORDERS.length) {
                styleNumber = 0;
            }
            if(borderSize < 4) { // If no border or tiny border, increase border size so visible
                borderSize = 4;
                $("#photo").css("border-width", borderSize + "px");
            }
            $("#photo").css("border-style", BORDERS[styleNumber]);
        }
    );
    $("#prevBorderColor").click(
        function() {
            if ($("#photo").css("border-style") === "none") {
                $("#photo").css("border-style", "solid");
            }
            colorNumber--;
            if (colorNumber < 0) {
                colorNumber = COLORS.length-1;
            }
            if(borderSize < 4) {
                borderSize = 4;
                $("#photo").css("border-width", borderSize + "px");
            }
            $("#photo").css("border-color", COLORS[colorNumber]);
        }
    );
    $("#nextBorderColor").click(
        function() {
            if ($("#photo").css("border-style") === "none") {
                $("#photo").css("border-style", "solid");
            }
            colorNumber++;
            if (colorNumber >= COLORS.length) {
                colorNumber = 0;
            }
            if(borderSize < 4) {
                borderSize = 4;
                $("#photo").css("border-width", borderSize + "px");
            }
            $("#photo").css("border-color", COLORS[colorNumber]);
        }
    );
    $("#smallerBorder").click(
        function() {
            if ($("#photo").css("border-style") === "none") {
                $("#photo").css("border-style", "solid");
            }
            borderSize/=1.3;
            if(borderSize < 2) {
                borderSize = 0;
            }
            $("#photo").css("border-width", borderSize + "px");
        }
    );
    $("#largerBorder").click(
        function() {
            if ($("#photo").css("border-style") === "none") {
                $("#photo").css("border-style", "solid");
                borderSize = 0;
            }
            if (borderSize === 0) {
                borderSize = 2;
            }
            borderSize*=1.3;
            if (borderSize > 35.84) {  // set maximum size so that border doesn't get out of control
                borderSize = 35.84;
            }
            $("#photo").css("border-width", borderSize + "px");
        }
    );
}


// Code to create new user:

$('#newUser').on('submit', function (event) {
    event.preventDefault();
    const uname = $('input[name="userName"]').val();
    const pw = $('input[name="password"]').val();
    const confirmPw = $('input[name="passwordConfirm"]').val();
    if (pw !== confirmPw) {
        myAlert('Passwords must match!', 'ok');
    } else if (uname.length === 0) {
        myAlert('You must enter a username!', 'ok');
    } else if (pw.length < 6) {
        myAlert('Your password must have at least 6 characters!', 'oops');
    } else if (/\s/.test(uname) || /\s/.test(pw)) {
        myAlert("Sorry, usernames & passwords cannot contain spaces!", "oops");
    } else {
        const newUserObject = {
            username: uname,
            password: pw
        };
        // will assign a value to variable 'user' in signin step below
        // AJAX call to send form data up to server/DB and create new user
        $.ajax({
                type: 'POST',
                url: '/users/create',
                dataType: 'json',
                data: JSON.stringify(newUserObject),
                contentType: 'application/json'
            })
            .done(function (result) {
                myAlert(`Thanks for signing up, ${uname}! You may now sign in with your username and password.`, 'ok');
                console.log(result);
                $('input[name="userName"]').val(""); // clear the input fields
                $('input[name="password"]').val("");
                $('input[name="passwordConfirm"]').val("");
                $('.newUser').removeClass('makeVisible');
                $('.login').addClass('makeVisible');
            })
            .fail(function (jqXHR, error, errorThrown) {
                alert("Uh-oh, something went wrong! Try a different username.");
                $('input[name="userName"]').val(""); // clear the input fields
                $('input[name="password"]').val("");
                $('input[name="passwordConfirm"]').val("");
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };
});

// Code to log user in:

$('#login').on('click', '#loginClicked', function (event) {
    event.preventDefault();
    // AJAX call to validate login info and sign user in
    const inputUname = $('input[name="signinUserName"]').val();
    const inputPw = $('input[name="signinPassword"]').val();
    // check for spaces, empty, undefined
    if ((!inputUname) || (inputUname.length < 1) || (inputUname.indexOf(' ') > 0)) {
        myAlert('You entered an invalid username', 'oops');
    } else if ((!inputPw) || (inputPw.length < 1) || (inputPw.indexOf(' ') > 0)) {
        myAlert('You entered an invalid password', 'oops');
    } else {
        const unamePwObject = {
            username: inputUname,
            password: inputPw
        };
        user = inputUname;
        $.ajax({
                type: "POST",
                url: "/signin",
                dataType: 'json',
                data: JSON.stringify(unamePwObject),
                contentType: 'application/json'
            })
            .done(function (result) {
                LOGGEDIN = true;
                USERNAME = user;
                alert(`Welcome, ${user}!  You're now logged in!`);  // ***** NOTE TO ME - CONSIDER REINSTITUTING MY CUSTOM ALERT
                $('input[name="signinUserName"]').val("");
                $('input[name="signinPassword"]').val("");
                //                $('#closeVenue').addClass('makeVisible'); // Show close venue button
                $('.intro').addClass('hideMe');
                $('#login').addClass('hideMe');
                $('.userCard').addClass('makeVisible');
                //                $('#leaveReview').addClass('makeVisible');
//                let venueName = $('#reviewMarquee').attr("title");
//                showReview(venueName);
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
                myAlert('You entered an invalid username and password combination. Pleae check your username and password and try again.', 'oops');
            });
    };
});

function myAlert(sayThis, choice) {
    let okChoices = ["Uhh, sure... OK", "Happy to oblige", "Did I have any other choice?", "It seemed the right thing to do", "I was bored", "My cat's breath smells like cat food", "I didn't realize I had a choice", "Hooray?", "Snazzy.", "Well, I'll be!", "Well, ain't that grand!"];
    let oopsChoices = ["My mouse finger slipped", "I was young, I needed the money", "I was trying to play a cat video", "I did no such thing!", "My cat ran across my keyboard", "The peer pressure got to me", "Somebody else must have done that", "I must have been drunk", "I hit the wrong key", "Don't blame me for that!", "It was an accident", "Don't hold it against me!"];
    let reasons;
    if (choice === "oops") {
        reasons = oopsChoices;
    } else {
        reasons = okChoices;
    }
    let thisReason = reasons[Math.floor(Math.random() * reasons.length)];
    $(".alertBoxContainer").addClass("visibleAlert");
    $(".alertBox").addClass("visibleAlert");
    $(".alertBox").html(sayThis + `<br><button id='yes'>${thisReason}</button>`);
    $(".alertBox").on('click', '#yes', function () {
        event.preventDefault();
        $(".alertBoxContainer").removeClass("visibleAlert");
        $(".alertBox").removeClass("visibleAlert");
        $(".alertBox").html("");
    });
}

function getImages() {
    let photoList = [];
    let counter = 0;
    $('#querySubmit').click(function (event) {
        event.preventDefault(); // otherwise page reloads when this function starts
        console.log("In getPhotos");
        let searchTerm = $("#photoQuery").val();
        console.log(searchTerm);
        $.getJSON('/unsplash/:' + searchTerm, function (res) {
                if (res.results == null || res.results == "null") {
                    console.log("got bupkis");
                    alert("ain't got no results");
                } else {
                    console.log(res);
                    console.log("did i hit my target", res.results[0].urls.regular);
                    $("#photo").attr("src", res.results[0].urls.regular);
                    photoList = [];  // clear the previous results
                    for (let x=0; x<res.results.length; x++) {
                        photoList.push(res.results[x].urls.regular);
                    }
                }
            });
        });
    $('#clipSubmit').click(function (event) {
        event.preventDefault(); // otherwise page reloads when this function starts
        console.log("In getClips");
        let searchTerm = $("#clipQuery").val();
        console.log(searchTerm);
        $.getJSON('/clipart/:' + searchTerm, function (res) {
            if (res == null || res == "null") {
                console.log("got bupkis");
                alert("ain't got no results");
            } else {
                console.log(res);
                console.log("did i hit my target", res.payload[0].svg.url);
                $("#photo").attr("src", res.payload[0].svg.url);
                photoList = [];  // clear the previous results
                for (let x=0; x<res.payload.length; x++) {
                    photoList.push(res.payload[x].svg.url);
                }
            }
        });
    });
    $('#nextPhoto').click(function (event) {
       event.preventDefault();
        counter++;
        if (counter >= photoList.length) {
            counter = 0;
        }
        $("#photo").attr("src", photoList[counter]);
    });
    $('#prevPhoto').click(function (event) {
        event.preventDefault();
        counter--;
        if (counter < 0) {
            counter = photoList.length - 1;
        }
        $("#photo").attr("src", photoList[counter]);
    });
}


$(headerFont);
$(bodyFont);
$(footerFont);
$(headerColor);
$(bodyColor);
$(footerColor);
$(headerSize);
$(bodySize);
$(footerSize);
$(borders);
$(getImages);
$(headerStyle);
$(bodyStyle);
$(footerStyle);


//
//font list:
//font-family: 'Roboto', sans-serif;
//font-family: 'Hi Melody', cursive;
//font-family: 'Poor Story', cursive;
//font-family: 'Jua', sans-serif;
//font-family: 'Yeon Sung', cursive;
//font-family: 'Stylish', sans-serif;
//font-family: 'Open Sans Condensed', sans-serif;
//font-family: 'East Sea Dokdo', cursive;
//font-family: 'Indie Flower', cursive;
//font-family: 'Crimson Text', serif;
//font-family: 'Anton', sans-serif;
//font-family: 'Lobster', cursive;
//$("#fs").change(function() {
//    //alert($(this).val());
//    $('.changeMe').css("font-family", $(this).val());
//});
//$("#size").change(function() {
//    $('.changeMe').css("font-size", $(this).val() + "px");
//});

// ===========================================================================================================================================
// STUFF BELOW IS FROM VENUE E-VALUATOR ******************************************************88
// narrows list of venues based upon typed name
//function searchNames() {
//    var input, venueList, venueNames, a, i;
//    input = document.getElementById("nameSearch").value.toUpperCase();
//    venueList = document.getElementById("listBox");
//    venueNames = venueList.getElementsByTagName("p");
//    for (i = 0; i < venueNames.length; i++) {
//        a = venueNames[i].getElementsByTagName("a")[0];
//        if (a.innerHTML.toUpperCase().indexOf(input) > -1) {
//            venueNames[i].style.display = "";
//        } else {
//            venueNames[i].style.display = "none";
//        }
//    }
//}
//
//function clickClose() {
//    $('#closeVenue').click(function () {
//        $('.jsHide').removeClass('makeVisible');
//        $('.login').removeClass('makeVisible');
//        $('.newUser').removeClass('makeVisible');
//        $('#leaveReview').removeClass('makeVisible');
//    });
//}
//
//function raiseCurtain() {
//    window.location.hash = 'pageTop'; // jump to top of page on page load or reload
//    $(".curtainMain").delay(1000).slideUp(3000);
//}
//
//function watchButtons() {
//    $('.listBox').on('click', 'button', viewVenue); /* Note - viewVenue function is in index.html */
//    $('.venueBox').on('click', '#reviewButton', showReview);
//    $('.login').on('click', '#newUserButton', createNewUser);
//    $('.login').on('click', '#cancelLogin', function () {
//        $('input[name="signinUserName"]').val("");
//        $('input[name="signinPassword"]').val("");
//        $('.login').removeClass('makeVisible');
//        $('.jsHide').addClass("makeVisible");
//    });
//    $('.newUser').on('click', '#cancelNewUser', function () {
//        $('input[name="userName"]').val(""); // clear the input fields
//        $('input[name="password"]').val("");
//        $('input[name="passwordConfirm"]').val("");
//        $('.newUser').removeClass('makeVisible');
//        $('.jsHide').addClass("makeVisible");
//    });
//}
//
//function showReview(venueNameFromLogin) {
//    $('#closeVenue').removeClass('makeVisible'); // Hide close venue button
//    let venueName = $(this).attr("title");
//    if (venueName === undefined) { // if 'this' is undefined, then got to this function via login
//        venueName = venueNameFromLogin;
//    }
//    $('#reviewMarquee').html(venueName.toUpperCase());
//    $('#reviewMarquee').attr("title", venueName); // store venue name in marquee
//    if (!LOGGEDIN) {
//        $('.login').addClass('makeVisible');
//    } else {
//        $.getJSON('/reviews/check/' + USERNAME + '/' + venueName, function (res) {
//            if (res.results == null || res.results == "null") {
//                rateVenue();
//            } else {
//                console.log(res);
//                rateVenue({
//                    listeningExperience: res.results.listeningExperience,
//                    venueFeel: res.results.venueFeel,
//                    musicValue: res.results.musicValue,
//                    musicQuality: res.results.musicQuality,
//                    foodQuality: res.results.foodQuality,
//                    foodValue: res.results.foodValue
//                }, res.results.userReview, res.results._id);
//            }
//        });
//    }
//}
//
//function createNewUser(event) {
//    event.preventDefault(); // otherwise page reloads when this function starts
//    $('.login').removeClass('makeVisible');
//    $('.newUser').addClass('makeVisible');
//}
//
//function rateVenue(ratingsArray, userReview, reviewId) {
//    //    console.log("In rateVenue, initial value of reviewId:", reviewId);
//    $('#leaveReview').addClass('makeVisible');
//    let oldColor = $("body").css("color"); /* target color gets changed when clicked, so get base color from body instead */
//    let newColor = "#86034D";
//    if (userReview === undefined) { // array is ONLY passed if user is logged in and has already left review for venue
//        $("#deleteReview").html(""); // remove 'delete review' button if it exists
//        userReview = ' ';
//        ratingsArray = {
//            listeningExperience: "0",
//            venueFeel: "0",
//            musicValue: "0",
//            musicQuality: "0",
//            foodQuality: "0",
//            foodValue: "0"
//        };
//        $("#skipReview").html("Cancel Review");
//        $("#nowReviewing").html("NOW REVIEWING:");
//    } else {
//        $("#skipReview").html("Cancel Changes");
//        $("#nowReviewing").html("YOUR REVIEW FOR");
//        $("#deleteReview").html("<button id='deleteReviewButton'>Delete Review</button>");
//    }
//    $("#userComments").val(userReview);
//    Object.keys(ratingsArray).forEach(function (key) {
//        let starId = "#" + key;
//        if (ratingsArray[key] === "5") {
//            $(starId).find(".value1").css("color", newColor);
//            $(starId).find(".value2").css("color", newColor);
//            $(starId).find(".value3").css("color", newColor);
//            $(starId).find(".value4").css("color", newColor);
//            $(starId).find(".value5").css("color", newColor);
//        } else if (ratingsArray[key] === "4") {
//            $(starId).find(".value1").css("color", newColor);
//            $(starId).find(".value2").css("color", newColor);
//            $(starId).find(".value3").css("color", newColor);
//            $(starId).find(".value4").css("color", newColor);
//            $(starId).find(".value5").css("color", oldColor);
//        } else if (ratingsArray[key] === "3") {
//            $(starId).find(".value1").css("color", newColor);
//            $(starId).find(".value2").css("color", newColor);
//            $(starId).find(".value3").css("color", newColor);
//            $(starId).find(".value4").css("color", oldColor);
//            $(starId).find(".value5").css("color", oldColor);
//        } else if (ratingsArray[key] === "2") {
//            $(starId).find(".value1").css("color", newColor);
//            $(starId).find(".value2").css("color", newColor);
//            $(starId).find(".value3").css("color", oldColor);
//            $(starId).find(".value4").css("color", oldColor);
//            $(starId).find(".value5").css("color", oldColor);
//        } else if (ratingsArray[key] === "1") {
//            $(starId).find(".value1").css("color", newColor);
//            $(starId).find(".value2").css("color", oldColor);
//            $(starId).find(".value3").css("color", oldColor);
//            $(starId).find(".value4").css("color", oldColor);
//            $(starId).find(".value5").css("color", oldColor);
//        } else {
//            $(starId).find(".value1").css("color", oldColor);
//            $(starId).find(".value2").css("color", oldColor);
//            $(starId).find(".value3").css("color", oldColor);
//            $(starId).find(".value4").css("color", oldColor);
//            $(starId).find(".value5").css("color", oldColor);
//        }
//    });
//    $('body').on('click', '#skipReview', function () {
//        //       reset all values in array before exiting
//        event.preventDefault();
//        ratingsArray.listeningExperience = "0";
//        ratingsArray.foodQuality = "0";
//        ratingsArray.foodValue = "0";
//        ratingsArray.musicQuality = "0";
//        ratingsArray.musicValue = "0";
//        ratingsArray.userName = "";
//        ratingsArray.userReview = "";
//        userReview = "";
//        $('#leaveReview').removeClass('makeVisible');
//        $('.jsHide').addClass("makeVisible");
//    });
//    $('#leaveReview').unbind().on('click', '#deleteReviewButton', function () { // unbind added to prevent click from firing multiple times
//        myBoolean("Are you sure you want to permanently delete your review?", "Delete Review", "Don't Delete!").then(function (res) {
//            console.log("result of query re: deleting review:", res);
//            if (res === "true") {
//                ratingsArray.listeningExperience = "0";
//                ratingsArray.foodQuality = "0";
//                ratingsArray.foodValue = "0";
//                ratingsArray.musicQuality = "0";
//                ratingsArray.musicValue = "0";
//                ratingsArray.userName = "";
//                ratingsArray.userReview = "";
//                userReview = "";
//                $('#leaveReview').removeClass('makeVisible');
//                getOneVenue($('#reviewMarquee').attr("title"));
//                $.ajax({
//                        method: 'DELETE',
//                        url: '/delete/' + reviewId
//                    })
//                    .done(function (result) {
//                        //                        console.log("review deleted:", result);
//                        myAlert(`Your review has been deleted.  Pity.`, 'oops');
//                    });
//            } else {
//                console.log("delete averted!");
//            }
//        });
//    });
//    $("#userReviews").on('click', '.star', function () {
//        let categoryClicked = $(this).parent().attr("id");
//        //        console.log(categoryClicked, "clicked");
//        let ratingClicked = $(this).attr("value");
//        //        console.log(ratingClicked);
//        if (categoryClicked === "listeningExperience") {
//            ratingsArray.listeningExperience = ratingClicked;
//        } else if (categoryClicked === "venueFeel") {
//            ratingsArray.venueFeel = ratingClicked;
//        } else if (categoryClicked === "musicValue") {
//            ratingsArray.musicValue = ratingClicked;
//        } else if (categoryClicked === "musicQuality") {
//            ratingsArray.musicQuality = ratingClicked;
//        } else if (categoryClicked === "foodQuality") {
//            ratingsArray.foodQuality = ratingClicked;
//        } else {
//            ratingsArray.foodValue = ratingClicked;
//        }
//        if (ratingClicked === "5") {
//            $(this).parent().find(".value1").css("color", newColor);
//            $(this).parent().find(".value2").css("color", newColor);
//            $(this).parent().find(".value3").css("color", newColor);
//            $(this).parent().find(".value4").css("color", newColor);
//            $(this).parent().find(".value5").css("color", newColor);
//        } else if (ratingClicked === "4") {
//            $(this).parent().find(".value1").css("color", newColor);
//            $(this).parent().find(".value2").css("color", newColor);
//            $(this).parent().find(".value3").css("color", newColor);
//            $(this).parent().find(".value4").css("color", newColor);
//            $(this).parent().find(".value5").css("color", oldColor);
//        } else if (ratingClicked === "3") {
//            $(this).parent().find(".value1").css("color", newColor);
//            $(this).parent().find(".value2").css("color", newColor);
//            $(this).parent().find(".value3").css("color", newColor);
//            $(this).parent().find(".value4").css("color", oldColor);
//            $(this).parent().find(".value5").css("color", oldColor);
//        } else if (ratingClicked === "2") {
//            $(this).parent().find(".value1").css("color", newColor);
//            $(this).parent().find(".value2").css("color", newColor);
//            $(this).parent().find(".value3").css("color", oldColor);
//            $(this).parent().find(".value4").css("color", oldColor);
//            $(this).parent().find(".value5").css("color", oldColor);
//        } else {
//            $(this).parent().find(".value1").css("color", newColor);
//            $(this).parent().find(".value2").css("color", oldColor);
//            $(this).parent().find(".value3").css("color", oldColor);
//            $(this).parent().find(".value4").css("color", oldColor);
//            $(this).parent().find(".value5").css("color", oldColor);
//        }
//    });
//    console.log("value of ratingsArray after click", ratingsArray);
//    $(".commentButtons").unbind().on('click', '#submitReview', function () { // unbind added to prevent click from firing multiple times
//        event.preventDefault();
//        if (ratingsArray.listeningExperience === "0" || ratingsArray.venueFeel === "0" || ratingsArray.musicValue === "0" || ratingsArray.musicQuality === "0") {
//            myAlert("You can't leave any of the first four star fields blank!", "oops");
//        } else {
//            event.preventDefault();
//            //            console.log("The array that is gonna be sent: ", ratingsArray);
//            let venueName = $('#reviewMarquee').attr("title");
//            userReview = $("#userComments").val().trim();
//            if (userReview.length === 0) {
//                userReview = " ";
//            }
//            ratingsArray.userReview = userReview;
//            ratingsArray.venueName = venueName;
//            ratingsArray.userName = USERNAME;
//            if (reviewId === undefined) { // if no reviewId, then is a new review
//                $.ajax({
//                        type: 'POST',
//                        url: '/new/create',
//                        dataType: 'json',
//                        data: JSON.stringify(ratingsArray),
//                        contentType: 'application/json'
//                    })
//                    .done(function (result) {
//                        console.log("new review posted:", result);
//                        getOneVenue(ratingsArray.venueName);
//                        $('#leaveReview').removeClass('makeVisible');
//                        //reset values
//                        ratingsArray.listeningExperience = "0";
//                        ratingsArray.foodQuality = "0";
//                        ratingsArray.foodValue = "0";
//                        ratingsArray.musicQuality = "0";
//                        ratingsArray.musicValue = "0";
//                        ratingsArray.userName = "";
//                        ratingsArray.userReview = "";
//                        userReview = "";
//                        myAlert(`Thank you for reviewing ${venueName}, ${USERNAME}!`, 'ok');
//                    })
//                    .fail(function (jqXHR, error, errorThrown) {
//                        console.log(jqXHR);
//                        console.log(error);
//                        console.log(errorThrown);
//                    });
//            } else {
//                $.ajax({
//                        type: 'PUT',
//                        url: '/review/update/' + reviewId,
//                        dataType: 'json',
//                        data: JSON.stringify(ratingsArray),
//                        contentType: 'application/json'
//                    })
//                    .done(function (result) {
//                        console.log(`Review ${reviewId} updated:`, result);
//                        getOneVenue(ratingsArray.venueName);
//                        $('#leaveReview').removeClass('makeVisible');
//                        // reset values
//                        ratingsArray.listeningExperience = "0";
//                        ratingsArray.foodQuality = "0";
//                        ratingsArray.foodValue = "0";
//                        ratingsArray.musicQuality = "0";
//                        ratingsArray.musicValue = "0";
//                        ratingsArray.userName = "";
//                        ratingsArray.userReview = "";
//                        userReview = "";
//                        myAlert(`You've updated your review for ${venueName}.  Well done, ${USERNAME}!`, 'ok');
//                    })
//                    .fail(function (jqXHR, error, errorThrown) {
//                        console.log(jqXHR);
//                        console.log(error);
//                        console.log(errorThrown);
//                    });
//            }
//        }
//    });
//}
//
//function listenForFilters() {
//    let venuetype = "all";
//    let venuesize = "all";
//    let freeticketed = "all";
//    $("#venueType").change(function () {
//        venuetype = $("#venueType").val();
//        getSomeVenues(venuetype, venuesize, freeticketed);
//        initMap(venuetype, venuesize, freeticketed);
//    });
//    $("#size").change(function () {
//        venuesize = $("#size").val();
//        getSomeVenues(venuetype, venuesize, freeticketed);
//        initMap(venuetype, venuesize, freeticketed);
//    });
//    $("#freeTicketed").change(function () {
//        freeticketed = $("#freeTicketed").val();
//        getSomeVenues(venuetype, venuesize, freeticketed);
//        initMap(venuetype, venuesize, freeticketed);
//    });
//}
//
//function getSomeVenues(venuetype, venuesize, freeticketed) {
//    $.getJSON('/venues/partiallist/' + venuetype + '/' + venuesize + '/' + freeticketed, function (res) {
//        console.log(res);
//        $("#listBox").html("<span id='venueListTop'></span>"); /* clear existing text, if any, and add target for scrolltop function */
//        if (res.results.length === 0) {
//            $("#listBox").append(`<p>No results found!  You'll need to modify your preferences.</p>`);
//        }
//        for (x = 0; x < res.results.length; x++) {
//            //            console.log("in for/let, key =", key);
//            res.results[x].description.replace(/\s+/g, ' '); /* eliminate extra spaces, if any */
//            let wordList = res.results[x].description.split(" ");
//            let maxWords = 30;
//            let description = "";
//            if (wordList.length > maxWords) {
//                for (y = 0; y < maxWords; y++) {
//                    description += wordList[y] + " ";
//                }
//                description += "...";
//            } else {
//                description = res.results[x].description;
//            }
//            let altClass
//            if (x % 2 === 0) {
//                altClass = "even"
//            } else {
//                altClass = "odd"
//            }
//            $("#listBox").append(`<p class="oneVenue ${altClass}" id="${res.results[x].venuename}"><a href="${res.results[x].website}" class="venueName">${res.results[x].venuename}</a> - <span class="address">${res.results[x].streetaddress}</span><br><span class="description">${description}</span><button>More Info</button><input type="hidden" class = "picUrl" value="${res.results[x].imageurl}"><input type="hidden" class = "fullDesc" value="${res.results[x].description}"><input type="hidden" class = "longName" value="${res.results[x].longvenuename}"></p>`);
//        };
//        $("#listBox").animate({ //scroll to top of list after list generated
//            scrollTop: $('#venueListTop')
//        });
//    });
//}
//
//// note - this calls renderVenue, a function which is in the index.html page (due to needs with Google map)
//function getOneVenue(venueName) {
//    $.getJSON('/locations/onevenue/' + venueName, function (res) {
//        //        console.log("About to renderVenue with:", res, res.results, res.results.website, res.results.streetaddress);
//        renderVenue(res.results.venuename, res.results.website, res.results.streetaddress, res.results.description, res.results.imageurl);
//    });
//}
//
//// Code to create new user:
//
//$('#newUser').on('submit', function (event) {
//    event.preventDefault();
//    const uname = $('input[name="userName"]').val();
//    const pw = $('input[name="password"]').val();
//    const confirmPw = $('input[name="passwordConfirm"]').val();
//    if (pw !== confirmPw) {
//        myAlert('Passwords must match!', 'ok');
//    } else if (uname.length === 0) {
//        myAlert('You must enter a username!', 'ok');
//    } else if (pw.length < 6) {
//        myAlert('Your password must have at least 6 characters!', 'oops');
//    } else if (/\s/.test(uname) || /\s/.test(pw)) {
//        myAlert("Sorry, usernames & passwords cannot contain spaces!", "oops");
//    } else {
//        const newUserObject = {
//            username: uname,
//            password: pw
//        };
//        // will assign a value to variable 'user' in signin step below
//        // AJAX call to send form data up to server/DB and create new user
//        $.ajax({
//                type: 'POST',
//                url: '/users/create',
//                dataType: 'json',
//                data: JSON.stringify(newUserObject),
//                contentType: 'application/json'
//            })
//            .done(function (result) {
//                myAlert(`Thanks for signing up, ${uname}! You may now sign in with your username and password.`, 'ok');
//                console.log(result);
//                $('input[name="userName"]').val(""); // clear the input fields
//                $('input[name="password"]').val("");
//                $('input[name="passwordConfirm"]').val("");
//                $('.newUser').removeClass('makeVisible');
//                $('.login').addClass('makeVisible');
//            })
//            .fail(function (jqXHR, error, errorThrown) {
//                alert("Uh-oh, something went wrong! Try a different username.");
//                $('input[name="userName"]').val(""); // clear the input fields
//                $('input[name="password"]').val("");
//                $('input[name="passwordConfirm"]').val("");
//                console.log(jqXHR);
//                console.log(error);
//                console.log(errorThrown);
//            });
//    };
//});
//
//// Code to log user in:
//
//$('#login').on('click', '#loginClicked', function (event) {
//    event.preventDefault();
//    // AJAX call to validate login info and sign user in
//    const inputUname = $('input[name="signinUserName"]').val();
//    const inputPw = $('input[name="signinPassword"]').val();
//    // check for spaces, empty, undefined
//    if ((!inputUname) || (inputUname.length < 1) || (inputUname.indexOf(' ') > 0)) {
//        myAlert('You entered an invalid username', 'oops');
//    } else if ((!inputPw) || (inputPw.length < 1) || (inputPw.indexOf(' ') > 0)) {
//        myAlert('You entered an invalid password', 'oops');
//    } else {
//        const unamePwObject = {
//            username: inputUname,
//            password: inputPw
//        };
//        user = inputUname;
//        $.ajax({
//                type: "POST",
//                url: "/signin",
//                dataType: 'json',
//                data: JSON.stringify(unamePwObject),
//                contentType: 'application/json'
//            })
//            .done(function (result) {
//                LOGGEDIN = true;
//                USERNAME = user;
//                myAlert(`Welcome, ${user}!  You're now logged in!`, "ok");
//                $('input[name="signinUserName"]').val("");
//                $('input[name="signinPassword"]').val("");
//                //                $('#closeVenue').addClass('makeVisible'); // Show close venue button
//                $('.login').removeClass('makeVisible');
//                //                $('#leaveReview').addClass('makeVisible');
//                let venueName = $('#reviewMarquee').attr("title");
//                showReview(venueName);
//            })
//            .fail(function (jqXHR, error, errorThrown) {
//                console.log(jqXHR);
//                console.log(error);
//                console.log(errorThrown);
//                myAlert('You entered an invalid username and password combination. Pleae check your username and password and try again.', 'oops');
//            });
//    };
//});
//
//function myAlert(sayThis, choice) {
//    let okChoices = ["Uhh, sure... OK", "Happy to oblige", "Did I have any other choice?", "It seemed the right thing to do", "I was bored", "My cat's breath smells like cat food", "I didn't realize I had a choice", "Hooray?", "Snazzy.", "Well, I'll be!", "Well, ain't that grand!"];
//    let oopsChoices = ["My mouse finger slipped", "I was young, I needed the money", "I was trying to play a cat video", "I did no such thing!", "My cat ran across my keyboard", "The peer pressure got to me", "Somebody else must have done that", "I must have been drunk", "I hit the wrong key", "Don't blame me for that!", "It was an accident", "Don't hold it against me!"];
//    let reasons;
//    if (choice === "oops") {
//        reasons = oopsChoices;
//    } else {
//        reasons = okChoices;
//    }
//    let thisReason = reasons[Math.floor(Math.random() * reasons.length)];
//    $(".alertBoxContainer").addClass("visibleAlert");
//    $(".alertBox").addClass("visibleAlert");
//    $(".alertBox").html(sayThis + `<br><button id='yes'>${thisReason}</button>`);
//    $(".alertBox").on('click', '#yes', function () {
//        event.preventDefault();
//        $(".alertBoxContainer").removeClass("visibleAlert");
//        $(".alertBox").removeClass("visibleAlert");
//        $(".alertBox").html("");
//    });
//}
//
//function myBoolean(sayThis, buttonOne, buttonTwo) {
//    $(".alertBoxContainer").addClass("visibleAlert");
//    $(".alertBox").addClass("visibleAlert");
//    $(".alertBox").html(`${sayThis}<br><button title='true'>${buttonOne}</button><button title='false'>${buttonTwo}</button>`);
//    return new Promise((resolve, reject) => {
//        $(".alertBox").on('click', 'button', function () {
//            event.preventDefault();
//            $(".alertBoxContainer").removeClass("visibleAlert");
//            $(".alertBox").removeClass("visibleAlert");
//            $(".alertBox").html("");
//            resolve($(this).attr("title"));
//        });
//    });
//}
//
//
//$(clickClose);
//$(getSomeVenues("all", "all", "all")); // seed the venue list with no filters
//$(watchButtons);
//$(listenForFilters);
//$(raiseCurtain);
