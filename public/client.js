let LOGGEDIN = false;
let USERNAME = "";

// NOTE - If the following values are changed, it could affect saved cards.  If values are added to any of these arrays, they should be added to the end so that they do not impact saved cards.
const FONTS = ['Roboto','Tajawal','Do Hyeon','Lato','Montserrat','Hi Melody','Gugi','Raleway','Gaegu','Merriweather','Ubuntu','Black Han Sans','Playfair Display','Poppins','Gamja Flower','Inconsolata','Indie Flower','Dosis','Crimson Text','Jua','Arvo','Libre Baskerville','Cute Font','Lobster','Pacifico','Dokdo','Shadows Into Light','Dancing Script','Black And White Picture'];
const COLORS = ['white', 'black', 'maroon', 'teal', 'aqua', 'navy', '#6495ED', '#E9967A', '#FF5555', '#FF9B55', '#35A091', '#44CC44', '#FFFC55', '#BE3F9B', '#C9F251', '#8040AB', '#DE4A81', '#34959A', '#FFFF55', '#DAB8CE', 'rgba(0,0,0,.6)', 'rgba(255,255,255,.6)'];
const BORDERS = ['none', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'];
const TEXTSTYLES = [["transparent", "none"],["transparent", "2px 2px black"],["transparent", "5px 5px black"],["transparent", "2px 2px white"],["transparent", "5px 5px white"],["transparent", "2px 2px 8px white"],["transparent", "2px 2px 8px black"],["transparent", "0 0 3px #FF0000, 0 0 5px #0000FF"],["rgba(0,0,0,.4)", "none"],["rgba(255,255,255,.4)", "none"]];


// primary object for app - createCard contains all card values and most functions

let createCard = {
    titleText: "",
    bodyText: "",
    footerText: "",
    titleFontNumber: 0,
    bodyFontNumber: 0,
    footerFontNumber: 0,
    titleColorNumber: 0,
    bodyColorNumber: 0,
    footerColorNumber: 0,
    titleFontSize: 2,
    bodyFontSize: 1,
    footerFontSize: 2,
    titleStyleNumber: 0,
    bodyStyleNumber: 0,
    footerStyleNumber: 0,
    borderStyle: 0,
    borderColor: 0,
    borderSize: 10,
    backgroundNumber: 1,
    imageNumber: 0,
    photoList: [],

    changeHeader: function() {
        this.titleText = $("#titleText").val();
        if (this.titleText==="") {  // if user deletes text, put the instructions back on screen
            $("#cardHeader").text("Header (optional)");
        }
        else {
            $("#cardHeader").text(this.titleText);
        }
    },

    changeBody: function() {
        this.bodyText = $("#bodyText").val();
        if (this.bodyText==="") {
            $("#cardBody").text("Body text. Header, body, & footer are all optional. If you want the header, body, and/or footer to be blank, place a space in the corresponding text box.");
        }
        else {
            $("#cardBody").text(this.bodyText);
        }
    },

    changeFooter: function() {
        this.footerText = $("#footertext").val();
        if (this.footerText==="") {
            $("#cardFooter").text("Footer (optional)");
        }
        else {
            $("#cardFooter").text(this.footerText);
        }
    },
    headerFont: function() {
        $("#nextTitleFont").click(
            function() {
                createCard.titleFontNumber++;
                if (createCard.titleFontNumber >= FONTS.length) {
                    createCard.titleFontNumber = 0;
                }
                $("#cardHeader").css("font-family", FONTS[createCard.titleFontNumber]);
            }
        );
        $("#prevTitleFont").click(
            function() {
                createCard.titleFontNumber--;
                if (createCard.titleFontNumber < 0) {
                    createCard.titleFontNumber = FONTS.length - 1;
                }
                $("#cardHeader").css("font-family", FONTS[createCard.titleFontNumber]);
            }
        );
    },
    bodyFont: function() {
        $("#nextBodyFont").click(
            function() {
                createCard.bodyFontNumber++;
                if (createCard.bodyFontNumber >= FONTS.length) {
                    createCard.bodyFontNumber = 0;
                }
                $("#cardBody").css("font-family", FONTS[createCard.bodyFontNumber]);
            }
        );
        $("#prevBodyFont").click(
            function() {
                createCard.bodyFontNumber--;
                if (createCard.bodyFontNumber < 0) {
                    createCard.bodyFontNumber = FONTS.length - 1;
                }
                $("#cardBody").css("font-family", FONTS[createCard.bodyFontNumber]);
            }
        );
    },
    footerFont: function() {
        $("#nextFooterFont").click(
            function() {
                createCard.footerFontNumber++;
                if (createCard.footerFontNumber >= FONTS.length) {
                    createCard.footerFontNumber = 0;
                }
                $("#cardFooter").css("font-family", FONTS[createCard.footerFontNumber]);
            }
        );
        $("#prevFooterFont").click(
            function() {
                createCard.footerFontNumber--;
                if (createCard.footerFontNumber < 0) {
                    createCard.footerFontNumber = FONTS.length - 1;
                }
                $("#cardFooter").css("font-family", FONTS[createCard.footerFontNumber]);
            }
        );
    },
    headerColor: function() {
        $("#prevTitleColor").click(
            function() {
                createCard.titleColorNumber--;
                if (createCard.titleColorNumber < 0) {
                    createCard.titleColorNumber = COLORS.length-1;
                }
                $("#cardHeader").css("color", COLORS[createCard.titleColorNumber]);
            }
        );
        $("#nextTitleColor").click(
            function() {
                createCard.titleColorNumber++;
                if (createCard.titleColorNumber >= COLORS.length) {
                    createCard.titleColorNumber = 0;
                }
                $("#cardHeader").css("color", COLORS[createCard.titleColorNumber]);
            }
        );
    },
    bodyColor: function() {
        $("#prevBodyColor").click(
            function() {
            createCard.bodyColorNumber--;
                if (createCard.bodyColorNumber < 0) {
                    createCard.bodyColorNumber = COLORS.length-1;
                }
                $("#cardBody").css("color", COLORS[createCard.bodyColorNumber]);
            }
        );
        $("#nextBodyColor").click(
            function() {
                createCard.bodyColorNumber++;
                if (createCard.bodyColorNumber >= COLORS.length) {
                    createCard.bodyColorNumber = 0;
                }
                $("#cardBody").css("color", COLORS[createCard.bodyColorNumber]);
            }
        );
    },
    footerColor: function() {
        $("#prevFooterColor").click(
            function() {
                createCard.footerColorNumber--;
                if (createCard.footerColorNumber < 0) {
                    createCard.footerColorNumber = COLORS.length-1;
                }
                $("#cardFooter").css("color", COLORS[createCard.footerColorNumber]);
            }
        );
        $("#nextFooterColor").click(
            function() {
                createCard.footerColorNumber++;
                if (createCard.footerColorNumber >= COLORS.length) {
                    createCard.footerColorNumber = 0;
                }
                $("#cardFooter").css("color", COLORS[createCard.footerColorNumber]);
            }
        );
    },
    headerSize: function() {
        $("#smallerTitle").click(
            function() {
                createCard.titleFontSize/=1.1;
                $("#cardHeader").css("font-size", createCard.titleFontSize + "em");
            }
        );
        $("#largerTitle").click(
            function() {
                createCard.titleFontSize*=1.1;
                $("#cardHeader").css("font-size", createCard.titleFontSize + "em");
            }
        );
    },
    bodySize: function() {
        $("#smallerBody").click(
            function() {
                createCard.bodyFontSize/=1.1;
                $("#cardBody").css("font-size", createCard.bodyFontSize + "em");
            }
        );
        $("#largerBody").click(
            function() {
                createCard.bodyFontSize*=1.1;
                $("#cardBody").css("font-size", createCard.bodyFontSize + "em");
            }
        );
    },
    footerSize: function() {
        $("#smallerFooter").click(
            function() {
                createCard.footerFontSize/=1.1;
                $("#cardFooter").css("font-size", createCard.footerFontSize + "em");
            }
        );
        $("#largerFooter").click(
            function() {
                createCard.footerFontSize*=1.1;
                $("#cardFooter").css("font-size", createCard.footerFontSize + "em");
            }
        );
    },
    headerStyle: function() {
        $("#prevHeaderStyle").click(
            function() {
                createCard.titleStyleNumber--;
                if (createCard.titleStyleNumber < 0) {
                    createCard.titleStyleNumber = TEXTSTYLES.length-1;
                }
                $("#cardHeader").css("text-shadow", TEXTSTYLES[createCard.titleStyleNumber][1]);
                $("#cardHeader").css("background-color", TEXTSTYLES[createCard.titleStyleNumber][0]);
            }
        );
        $("#nextHeaderStyle").click(
            function() {
                createCard.titleStyleNumber++;
                if (createCard.titleStyleNumber >= TEXTSTYLES.length) {
                    createCard.titleStyleNumber = 0;
                }
                $("#cardHeader").css("text-shadow", TEXTSTYLES[createCard.titleStyleNumber][1]);
                $("#cardHeader").css("background-color", TEXTSTYLES[createCard.titleStyleNumber][0]);
            }
        );
    },
    bodyStyle: function() {
        $("#prevBodyStyle").click(
            function() {
                createCard.bodyStyleNumber--;
                if (createCard.bodyStyleNumber < 0) {
                    createCard.bodyStyleNumber = TEXTSTYLES.length-1;
                }
                $("#cardBody").css("text-shadow", TEXTSTYLES[createCard.bodyStyleNumber][1]);
                $("#cardBody").css("background-color", TEXTSTYLES[createCard.bodyStyleNumber][0]);
            }
        );
        $("#nextBodyStyle").click(
            function() {
                createCard.bodyStyleNumber++;
                if (createCard.bodyStyleNumber >= TEXTSTYLES.length) {
                    createCard.bodyStyleNumber = 0;
                }
                $("#cardBody").css("text-shadow", TEXTSTYLES[createCard.bodyStyleNumber][1]);
                $("#cardBody").css("background-color", TEXTSTYLES[createCard.bodyStyleNumber][0]);
            }
        );
    },
    footerStyle: function() {
        $("#prevFooterStyle").click(
            function() {
                createCard.footerStyleNumber--;
                if (createCard.footerStyleNumber < 0) {
                    createCard.footerStyleNumber = TEXTSTYLES.length-1;
                }
                $("#cardFooter").css("text-shadow", TEXTSTYLES[createCard.footerStyleNumber][1]);
                $("#cardFooter").css("background-color", TEXTSTYLES[createCard.footerStyleNumber][0]);
            }
        );
        $("#nextFooterStyle").click(
            function() {
                createCard.footerStyleNumber++;
                if (createCard.footerStyleNumber >= TEXTSTYLES.length) {
                    createCard.footerStyleNumber = 0;
                }
                $("#cardFooter").css("text-shadow", TEXTSTYLES[createCard.footerStyleNumber][1]);
                $("#cardFooter").css("background-color", TEXTSTYLES[createCard.footerStyleNumber][0]);
            }
        );
    },
    borders: function() {
        $("#prevBorderStyle").click(
            function() {
                createCard.borderStyle--;
                if (createCard.borderStyle < 0) {
                    createCard.borderStyle = BORDERS.length-1;
                }
                if(createCard.borderSize < 4) { // If no border or tiny border, increase border size so visible
                    createCard.borderSize = 4;
                    $("#photo").css("border-width", createCard.borderSize + "px");
                }
                $("#photo").css("border-style", BORDERS[createCard.borderStyle]);
            }
        );
        $("#nextBorderStyle").click(
            function() {
                createCard.borderStyle++;
                if (createCard.borderStyle >= BORDERS.length) {
                    createCard.borderStyle = 0;
                }
                if(createCard.borderSize < 4) { // If no border or tiny border, increase border size so visible
                    createCard.borderSize = 4;
                    $("#photo").css("border-width", createCard.borderSize + "px");
                }
                $("#photo").css("border-style", BORDERS[createCard.borderStyle]);
            }
        );
        $("#prevBorderColor").click(
            function() {
                if ($("#photo").css("border-style") === "none") {
                    createCard.borderStyle = 3;
                    $("#photo").css("border-style", BORDERS[createCard.borderStyle]);
                }
                createCard.borderColor--;
                if (createCard.borderColor < 0) {
                    createCard.borderColor = COLORS.length-1;
                }
                if(createCard.borderSize < 4) {
                    createCard.borderSize = 4;
                    $("#photo").css("border-width", createCard.borderSize + "px");
                }
                $("#photo").css("border-color", COLORS[createCard.borderColor]);
            }
        );
        $("#nextBorderColor").click(
            function() {
                if ($("#photo").css("border-style") === "none") {
                    createCard.borderStyle = 3;
                    $("#photo").css("border-style", BORDERS[createCard.borderStyle]);
                }
                createCard.borderColor++;
                if (createCard.borderColor >= COLORS.length) {
                    createCard.borderColor = 0;
                }
                if(createCard.borderSize < 4) {
                    createCard.borderSize = 4;
                    $("#photo").css("border-width", createCard.borderSize + "px");
                }
                $("#photo").css("border-color", COLORS[createCard.borderColor]);
            }
        );
        $("#smallerBorder").click(
            function() {
                if ($("#photo").css("border-style") === "none") {
                    createCard.borderStyle = 3;
                    $("#photo").css("border-style", BORDERS[createCard.borderStyle]);
                }
                createCard.borderSize/=1.3;
                if(createCard.borderSize < 2) {
                    createCard.borderSize = 0;
                }
                $("#photo").css("border-width", createCard.borderSize + "px");
            }
        );
        $("#largerBorder").click(
            function() {
                if ($("#photo").css("border-style") === "none") {
                    createCard.borderStyle = 3;
                    $("#photo").css("border-style", BORDERS[createCard.borderStyle]);
                    createCard.borderSize = 0;
                }
                if (createCard.borderSize === 0) {
                    createCard.borderSize = 2;
                }
                createCard.borderSize*=1.3;
                if (createCard.borderSize > 35.84) {  // set maximum size so that border doesn't get out of control
                    createCard.borderSize = 35.84;
                }
                $("#photo").css("border-width", createCard.borderSize + "px");
            }
        );
        $("#prevBackground").click(
            function() {
                createCard.backgroundNumber--;
                if(createCard.backgroundNumber < 0) {
                    createCard.backgroundNumber = COLORS.length-1;
                }
                console.log(createCard.backgroundNumber);
                $("#cardBox").css("background-color", COLORS[createCard.backgroundNumber]);
            }
        );
        $("#nextBackground").click(
            function() {
                createCard.backgroundNumber++;
                if (createCard.backgroundNumber >= COLORS.length) {
                    createCard.backgroundNumber = 0;
                }
                console.log(createCard.backgroundNumber);
                $("#cardBox").css("background-color", COLORS[createCard.backgroundNumber]);
            }
        );
    },
    getImages: function() {
        $('#querySubmit').click(function (event) {
            event.preventDefault(); // otherwise page reloads when this function starts
            let searchTerm = $("#photoQuery").val();
            $.getJSON('/unsplash/:' + searchTerm, function (res) {
                if (res.total == 0) {
                    console.log("got bupkis");
                    alert(`We found no results for ${searchTerm}!`);
                } else {
                    $("#nextPhoto").addClass("makeVisibleInline");
                    $("#prevPhoto").addClass("makeVisibleInline");
                    if (Number(res.results[0].width) < 1.1*Number(res.results[0].height)) {
                        $("#cardBody").addClass("portraitPic");
                    }
                    else {
                        $("#cardBody").removeClass("portraitPic");
                    }
                    $("#photo").addClass("makeVisible");
                    $("#photo").attr("src", res.results[0].urls.regular);  // add first photo to page
                    $("#photoCreds").html(`<a href="${res.results[0].user.portfolio_url}" target="_blank">${res.results[0].user.name}</a>, via <a href="https://unsplash.com/" target="_blank">Unsplash</a>`);  // set credit for first photo
                    createCard.photoList = [];  // clear the previous results
                    $("#photoQuery").val("");  // clear the previous results
                    for (let x=0; x<res.results.length; x++) {
                        createCard.photoList.push({photoLink: res.results[x].urls.regular, photogName: res.results[x].user.name, photogLink: res.results[x].user.portfolio_url, width: res.results[x].width, height: res.results[x].height});
                    }
                }
            });
        });
        $('#nextPhoto').click(function (event) {
            event.preventDefault();
            createCard.imageNumber++;
            if (createCard.imageNumber >= createCard.photoList.length) {
                createCard.imageNumber = 0;
            }
            if (Number(createCard.photoList[createCard.imageNumber].width) < 1.1*Number(createCard.photoList[createCard.imageNumber].height)) {
                $("#cardBody").addClass("portraitPic");
//                alert("Applying narrower text");
            }
            else {
                $("#cardBody").removeClass("portraitPic");
            }
            $("#photo").attr("src", createCard.photoList[createCard.imageNumber].photoLink);
            $("#photoCreds").html(`<a href="${createCard.photoList[createCard.imageNumber].photogLink}" target="_blank">${createCard.photoList[createCard.imageNumber].photogName}</a>, via <a href="https://unsplash.com/" target="_blank">Unsplash</a>`)
        });
        $('#prevPhoto').click(function (event) {
            event.preventDefault();
            createCard.imageNumber--;
            if (createCard.imageNumber < 0) {
                createCard.imageNumber = createCard.photoList.length - 1;
            }
            if (Number(createCard.photoList[createCard.imageNumber].width) < 1.1*Number(createCard.photoList[createCard.imageNumber].height)) {
                $("#cardBody").addClass("portraitPic");
            }
            else {
                $("#cardBody").removeClass("portraitPic");
            }
            $("#photo").attr("src", createCard.photoList[createCard.imageNumber].photoLink);
            $("#photoCreds").html(`<a href="${createCard.photoList[createCard.imageNumber].photogLink}" target="_blank">${createCard.photoList[createCard.imageNumber].photogName}</a>, via <a href="https://unsplash.com/" target="_blank">Unsplash</a>`)
        });
    },
}

//  setInitial card values after page load of blank card OR load of saved card

function setInitial() {
    $("#cardHeader").css("font-family", FONTS[createCard.titleFontNumber]);
    $("#cardBody").css("font-family", FONTS[createCard.bodyFontNumber]);
    $("#cardFooter").css("font-family", FONTS[createCard.footerFontNumber]);
    $("#cardHeader").css("color", COLORS[createCard.titleColorNumber]);
    $("#cardBody").css("color", COLORS[createCard.bodyColorNumber]);
    $("#cardFooter").css("color", COLORS[createCard.footerColorNumber]);
    $("#cardHeader").css("font-size", createCard.titleFontSize + "em");
    $("#cardBody").css("font-size", createCard.bodyFontSize + "em");
    $("#cardFooter").css("font-size", createCard.footerFontSize + "em");
    console.log(createCard.titleStyleNumber);
    $("#cardHeader").css("text-shadow", TEXTSTYLES[createCard.titleStyleNumber][1]);
    $("#cardHeader").css("background-color", TEXTSTYLES[createCard.titleStyleNumber][0]);
    $("#cardBody").css("text-shadow", TEXTSTYLES[createCard.bodyStyleNumber][1]);
    $("#cardBody").css("background-color", TEXTSTYLES[createCard.bodyStyleNumber][0]);
    $("#cardFooter").css("text-shadow", TEXTSTYLES[createCard.footerStyleNumber][1]);
    $("#cardFooter").css("background-color", TEXTSTYLES[createCard.footerStyleNumber][0]);
    $("#photo").css("border-style", BORDERS[createCard.borderStyle]);
    $("#photo").css("border-color", COLORS[createCard.borderColor]);
    $("#photo").css("border-width", createCard.borderSize + "px");
    $("#cardBox").css("background-color", COLORS[createCard.backgroundNumber]);
    if (createCard.photoList[createCard.imageNumber]) {
        console.log("Line 487, photoList:", createCard.photoList);
        $("#photo").attr("src", createCard.photoList[createCard.imageNumber].photoLink);
        $("#photoCreds").html(`<a href="${createCard.photoList[createCard.imageNumber].photogLink}" target="_blank">${createCard.photoList[createCard.imageNumber].photogName}</a>, via <a href="https://unsplash.com/" target="_blank">Unsplash</a>`);
    }
    createCard.changeHeader;
    createCard.changeBody;
    createCard.changeFooter;
}


// open the full-screen card preview

function viewCard() {
    if (Number(createCard.photoList[createCard.imageNumber].width) < 1.1*Number(createCard.photoList[createCard.imageNumber].height)) {
        $("#previewBody").addClass("portraitPic");
    }
    else {
        $("#previewBody").removeClass("portraitPic");
    }
    let height = window.innerHeight*.9;
    let width = height*Number(createCard.photoList[createCard.imageNumber].width)/Number(createCard.photoList[createCard.imageNumber].height);
    $("#previewParent").addClass("makeVisible");
    $("#previewHeader").text(createCard.titleText);
    $("#previewBody").text(createCard.bodyText);
    $("#previewFooter").text(createCard.footerText);
    $("#previewHeader").css("font-family", FONTS[createCard.titleFontNumber]);
    $("#previewBody").css("font-family", FONTS[createCard.bodyFontNumber]);
    $("#previewFooter").css("font-family", FONTS[createCard.footerFontNumber]);
    $("#previewHeader").css("color", COLORS[createCard.titleColorNumber]);
    $("#previewBody").css("color", COLORS[createCard.bodyColorNumber]);
    $("#previewFooter").css("color", COLORS[createCard.footerColorNumber]);
    $("#previewHeader").css("font-size", createCard.titleFontSize + "em");
    $("#previewBody").css("font-size", createCard.bodyFontSize + "em");
    $("#previewFooter").css("font-size", createCard.footerFontSize + "em");
    $("#previewHeader").css("text-shadow", TEXTSTYLES[createCard.titleStyleNumber][1]);
    $("#previewHeader").css("background-color", TEXTSTYLES[createCard.titleStyleNumber][0]);
    $("#previewBody").css("text-shadow", TEXTSTYLES[createCard.bodyStyleNumber][1]);
    $("#previewBody").css("background-color", TEXTSTYLES[createCard.bodyStyleNumber][0]);
    $("#previewFooter").css("text-shadow", TEXTSTYLES[createCard.footerStyleNumber][1]);
    $("#previewFooter").css("background-color", TEXTSTYLES[createCard.footerStyleNumber][0]);
    $("#previewPhoto").css("border-style", BORDERS[createCard.borderStyle]);
    $("#previewPhoto").css("border-color", COLORS[createCard.borderColor]);
    $("#previewPhoto").css("border-width", createCard.borderSize + "px");
    $("#previewParent").css("background-color", COLORS[createCard.backgroundNumber]);
    $("#cardPreview").css("width", width);
    $("#cardPreview").css("height", height);
    $("#cardPreview").css("background", `url('${createCard.photoList[createCard.imageNumber].photoLink}')`);
    $("#previewCreds").html(`<a href="${createCard.photoList[createCard.imageNumber].photogLink}" target="_blank">${createCard.photoList[createCard.imageNumber].photogName}</a>, via <a href="https://unsplash.com/" target="_blank">Unsplash</a>`);
}

function closePreview() {
    $("#previewParent").removeClass("makeVisible");
}

// Save a card:
function saveCard() {
    let photo, photographer, photoUrl, width, height;
    if (!createCard.photoList[createCard.imageNumber]) {
        // no photo selected
        photo = "";
        photographer = "";
        photoUrl = "";
        width = "0";
        height= "0";
    }
    else  {
        photo = createCard.photoList[createCard.imageNumber].photoLink;
        photographer = createCard.photoList[createCard.imageNumber].photogName;
        photoUrl = createCard.photoList[createCard.imageNumber].photogLink;
        width = createCard.photoList[createCard.imageNumber].width;
        height = createCard.photoList[createCard.imageNumber].height;
    }
    let cardArray = {
        userName: USERNAME,
        title: createCard.titleText,
        body: createCard.bodyText,
        footer: createCard.footerText,
        titleFont: createCard.titleFontNumber,
        bodyFont: createCard.bodyFontNumber,
        footerFont: createCard.footerFontNumber,
        titleColor: createCard.titleColorNumber,
        bodyColor: createCard.bodyColorNumber,
        footerColor: createCard.footerColorNumber,
        titleSize: createCard.titleFontSize,
        bodySize: createCard.bodyFontSize,
        footerSize: createCard.footerFontSize,
        titleStyle: createCard.titleStyleNumber,
        bodyStyle: createCard.bodyStyleNumber,
        footerStyle: createCard.footerStyleNumber,
        borderStyle: createCard.borderStyle,
        borderColor: createCard.borderColor,
        borderWidth: createCard.borderSize,
        backgroundColor: createCard.backgroundNumber,
        photo: photo,
        photographer: photographer,
        photoUrl: photoUrl,
        width: width,
        height: height
    };
    $.ajax({
            type: 'POST',
            url: '/create',
            dataType: 'json',
            data: JSON.stringify(cardArray),
            contentType: 'application/json'
        })
        .done(function (result) {
            console.log("new card saved:", result);
            $("#cardPickup").html(`Card can be retrieved at:  <a href="https://mecards-fullstack-capstone.herokuapp.com/creations/${result._id}">https://mecards-fullstack-capstone.herokuapp.com/${result._id}</a>`);
            $("#cardPickup").removeClass("invisible");
            alert(`Your mE-Card has been saved! It can be retrieved at https://mecards-fullstack-capstone.herokuapp.com/creations/${result._id}`);
        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}

// Code to create new user:

$('#newUser').on('submit', function (event) {
//    alert("new user clicked");
    event.preventDefault();
    const uname = $('input[name="userName"]').val();
    const pw = $('input[name="password"]').val();
    const confirmPw = $('input[name="passwordConfirm"]').val();
    if (pw !== confirmPw) {
        alert('Passwords must match!');
    } else if (uname.length === 0) {
        alert('You must enter a username!');
    } else if (pw.length < 6) {
        alert('Your password must have at least 6 characters!');
    } else if (/\s/.test(uname) || /\s/.test(pw)) {
        alert("Sorry, usernames & passwords cannot contain spaces!");
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




$(document).on('click', '#oldUserNewCard', addCard);

function addCard() {
    $('.prevCards').removeClass('makeVisible');
    $('.userCard').addClass('makeVisible');
}



// Code to log user in:

$('#login').on('click', '#loginClicked', function (event) {
    event.preventDefault();
    // AJAX call to validate login info and sign user in
    const inputUname = $('input[name="signinUserName"]').val();
    const inputPw = $('input[name="signinPassword"]').val();
    // check for spaces, empty, undefined
    if ((!inputUname) || (inputUname.length < 1) || (inputUname.indexOf(' ') > 0)) {
        alert('You entered an invalid username');
    } else if ((!inputPw) || (inputPw.length < 1) || (inputPw.indexOf(' ') > 0)) {
        alert('You entered an invalid password');
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
                $('input[name="signinUserName"]').val("");
                $('input[name="signinPassword"]').val("");
                $('.intro').addClass('hideMe');
                $('#login').addClass('hideMe');
                alert(`Welcome, ${user}!  You're now logged in!`);  // ***** NOTE TO ME - CONSIDER REINSTITUTING MY CUSTOM ALERT
                $.getJSON('/findcards/' + USERNAME, function (res) {
                    if (res.results.length === 0) { // no results - no saved cards
                        $('.userCard').addClass('makeVisible');
                        alert("found no cards");
                    } else {
                        console.log(res);
                        $('.prevCards').addClass('makeVisible');
                        for (let x=0; x < res.results.length; x++) {
                            $('#prevCards').append(`<div class="row"><div class="col-4"><div class="prevCardsBackground" style="background-color: ${res.results[x].backgroundColor}"><img src="${res.results[x].photo}"></div></div><div class="col-6 prevCardsText">${res.results[x].title}</div><input type="hidden" id="${res.results[x]._id}" class="userCardsIdValue" value="${res.results[x]._id}"><div class="col-2"><button class="userCards">Edit</button></div></div>`);
                        }
                    }
                });
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
                alert('You entered an invalid username and password combination. Please check your username and password and try again.');
            });
    };
});

// edit saved card
$(document).on('click', '.userCards', function(event) {
    event.preventDefault();
    let clickedUserCardId = $(this).parent().parent().find(".userCardsIdValue").val();
    $.getJSON('/onecard/' + clickedUserCardId, function (res) {
        console.log("card info:", res);
        createCard.titleText = res.results.title;
        createCard.bodyText = res.results.body;
        createCard.footerText = res.results.footer;
        createCard.titleFontNumber = Number(res.results.titleFont);
        createCard.bodyFontNumber = Number(res.results.bodyFont);
        createCard.footerFontNumber = Number(res.results.footerFont);
        createCard.titleColorNumber = Number(res.results.titleColor);
        createCard.bodyColorNumber = Number(res.results.bodyColor);
        createCard.footerColorNumber = Number(res.results.footerColor);
        createCard.titleFontSize = Number(res.results.titleSize);
        createCard.bodyFontSize = Number(res.results.bodySize);
        createCard.footerFontSize = Number(res.results.footerSize);
        createCard.titleStyleNumber = Number(res.results.titleStyle);
        createCard.bodyStyleNumber = Number(res.results.bodyStyle);
        createCard.footerStyleNumber = Number(res.results.footerStyle);
        createCard.borderStyle = Number(res.results.borderStyle);
        createCard.borderColor = Number(res.results.borderColor);
        createCard.borderSize = Number(res.results.borderWidth);
        createCard.backgroundNumber = Number(res.results.backgroundColor);
        createCard.imageNumber = 0;
        createCard.photoList = [{photoLink: res.results.photo, photogName: res.results.photographer, photogLink: res.results.photoUrl, width: res.results.width, height: res.results.height}];
        $('.userCard').addClass('makeVisible');
        $('.newUser').removeClass('makeVisible');
        $('.prevCards').removeClass('makeVisible');
        console.log("photoList:", createCard.photoList);
        $("#titleText").val(createCard.titleText);
        $("#cardHeader").text(createCard.titleText);
        $("#bodyText").val(createCard.bodyText);
        $("#cardBody").text(createCard.bodyText);
        $("#footertext").val(createCard.footerText);
        $("#cardFooter").text(createCard.footerText);
        setInitial();
    });
    console.log("clicked button", clickedUserCardId); // MAKE GET CALL TO ID
});

// open saved card full-screen
function displayCard() {
    $.getJSON('/creations/' + clickedUserCardId, function (res) {
        console.log("card info:", res);
        createCard.titleText = res.results.title;
        createCard.bodyText = res.results.body;
        createCard.footerText = res.results.footer;
        createCard.titleFontNumber = Number(res.results.titleFont);
        createCard.bodyFontNumber = Number(res.results.bodyFont);
        createCard.footerFontNumber = Number(res.results.footerFont);
        createCard.titleColorNumber = Number(res.results.titleColor);
        createCard.bodyColorNumber = Number(res.results.bodyColor);
        createCard.footerColorNumber = Number(res.results.footerColor);
        createCard.titleFontSize = Number(res.results.titleSize);
        createCard.bodyFontSize = Number(res.results.bodySize);
        createCard.footerFontSize = Number(res.results.footerSize);
        createCard.titleStyleNumber = Number(res.results.titleStyle);
        createCard.bodyStyleNumber = Number(res.results.bodyStyle);
        createCard.footerStyleNumber = Number(res.results.footerStyle);
        createCard.borderStyle = Number(res.results.borderStyle);
        createCard.borderColor = Number(res.results.borderColor);
        createCard.borderSize = Number(res.results.borderWidth);
        createCard.backgroundNumber = Number(res.results.backgroundColor);
        createCard.imageNumber = 0;
        createCard.photoList = [{photoLink: res.results.photo, photogName: res.results.photographer, photogLink: res.results.photoUrl, width: res.results.width, height: res.results.height}];
        $('.userCard').addClass('makeVisible');
        $('.newUser').removeClass('makeVisible');
        $('.prevCards').removeClass('makeVisible');
        console.log("photoList:", createCard.photoList);
        $("#titleText").val(createCard.titleText);
        $("#cardHeader").text(createCard.titleText);
        $("#bodyText").val(createCard.bodyText);
        $("#cardBody").text(createCard.bodyText);
        $("#footertext").val(createCard.footerText);
        $("#cardFooter").text(createCard.footerText);
        setInitial();
    });
}

function createNewUser(event) {
    console.log("hi from createNewUser");
    event.preventDefault(); // otherwise page reloads when this function starts
//    alert("got into createNewUser");
    $('.login').removeClass('makeVisible');
    $('.newUser').addClass('makeVisible');
}

$('.newUser').on('click', '#cancelNewUser', function () {
    $('input[name="userName"]').val(""); // clear the input fields
    $('input[name="password"]').val("");
    $('input[name="passwordConfirm"]').val("");
    $('.newUser').removeClass('makeVisible');
    $('.jsHide').addClass("makeVisible");
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


$(setInitial);
$(document).on('click', '#newUserButton', createNewUser);
$(document).on('click', '#preview', viewCard);
$(document).on('click', '#closePreview', closePreview);
$(document).on('click', '#saveChanges', saveCard);
$(createCard.getImages);
$(createCard.headerFont);
$(createCard.bodyFont);
$(createCard.footerFont);
$(createCard.headerColor);
$(createCard.bodyColor);
$(createCard.footerColor);
$(createCard.headerSize);
$(createCard.bodySize);
$(createCard.footerSize);
$(createCard.borders);
$(createCard.headerStyle);
$(createCard.bodyStyle);
$(createCard.footerStyle);
