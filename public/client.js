let LOGGEDIN = false;
let USERNAME = "";

// NOTE - If the following values are changed, it could affect saved cards.  If values are added to any of these arrays, they should be added to the end so that they do not impact saved cards.
const FONTS = ['Roboto','Tajawal','Do Hyeon','Lato','Montserrat','Hi Melody','Gugi','Raleway','Gaegu','Merriweather','Ubuntu','Black Han Sans','Playfair Display','Poppins','Gamja Flower','Inconsolata','Indie Flower','Dosis','Crimson Text','Jua','Arvo','Libre Baskerville','Cute Font','Lobster','Pacifico','Dokdo','Shadows Into Light','Dancing Script','Black And White Picture'];
const COLORS = ['white', 'black', 'maroon', 'teal', 'aqua', 'navy', '#6495ED', '#E9967A', '#FF5555', '#FF9B55', '#35A091', '#44CC44', '#FFFC55', '#BE3F9B', '#C9F251', '#8040AB', '#DE4A81', '#34959A', '#FFFF55', '#DAB8CE', 'rgba(0,0,0,.6)', 'rgba(255,255,255,.6)'];
const BORDERS = ['none', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'];
const TEXTSTYLES = [["transparent", "none"],["transparent", "2px 2px black"],["transparent", "5px 5px black"],["transparent", "2px 2px white"],["transparent", "5px 5px white"],["transparent", "2px 2px 8px white"],["transparent", "2px 2px 8px black"],["transparent", "0 0 3px #FF0000, 0 0 5px #0000FF"],["rgba(0,0,0,.4)", "none"],["rgba(255,255,255,.4)", "none"]];

function setInitial() {
    $("#cardHeader").css("font-family", FONTS[0]);
    $("#cardBody").css("font-family", FONTS[0]);
    $("#cardFooter").css("font-family", FONTS[0]);
    $("#cardHeader").css("color", COLORS[0]);
    $("#cardBody").css("color", COLORS[0]);
    $("#cardFooter").css("color", COLORS[0]);
    $("#cardHeader").css("font-size", "2em");
    $("#cardBody").css("font-size", "1em");
    $("#cardFooter").css("font-size", "2em");
    $("#photo").css("border-style", BORDERS[0]); // Set initial border
    $("#photo").css("border-color", COLORS[0]); // Set initial color
    $("#photo").css("border-width", "10px"); // Set initial size
//    $('#login').on('click', '#newUserButton', alert("hi"));// createNewUser);
//    $('#newUserButton').click(createNewUser);
}


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
    titleStyle: 0,
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
                createCard.titleStyle--;
                if (createCard.titleStyle < 0) {
                    createCard.titleStyle = TEXTSTYLES.length-1;
                }
                $("#cardHeader").css("text-shadow", TEXTSTYLES[createCard.titleStyle][1]);
                $("#cardHeader").css("background-color", TEXTSTYLES[createCard.titleStyle][0]);
            }
        );
        $("#nextHeaderStyle").click(
            function() {
                createCard.titleStyle++;
                if (createCard.titleStyle >= TEXTSTYLES.length) {
                    createCard.titleStyle = 0;
                }
                $("#cardHeader").css("text-shadow", TEXTSTYLES[createCard.titleStyle][1]);
                $("#cardHeader").css("background-color", TEXTSTYLES[createCard.titleStyle][0]);
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
                    $("#photo").css("border-style", "solid");
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
                    $("#photo").css("border-style", "solid");
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
                    $("#photo").css("border-style", "solid");
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
                    $("#photo").css("border-style", "solid");
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
//            console.log("In getPhotos");
            let searchTerm = $("#photoQuery").val();
//            console.log(searchTerm);
            $.getJSON('/unsplash/:' + searchTerm, function (res) {
                if (res.total == 0) {
                    console.log("got bupkis");
                    alert(`We found no results for ${searchTerm}!`);
                } else {
//                    console.log(res);
//                    console.log("Did i hit my targets?  Width:", res.results[0].width, "Height:", res.results[0].height, "Username:", res.results[0].user.name, "Photog URL", res.results[0].user.portfolio_url);
                    $("#nextPhoto").addClass("makeVisibleInline");
                    $("#prevPhoto").addClass("makeVisibleInline");
                    if (res.results[0].width < 1.1*res.results[0].height) {
                        $("#cardBody").addClass("portraitPic");
//                        alert("Applying narrower text");
                    }
                    else {
                        $("#cardBody").removeClass("portraitPic");
//                        alert("Wound up in else - no narrower text");
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
            if (createCard.photoList[createCard.imageNumber].width < 1.1*createCard.photoList[createCard.imageNumber].height) {
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
            if (createCard.photoList[createCard.imageNumber].width < 1.1*createCard.photoList[createCard.imageNumber].height) {
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

//imageNumber: 0,
//    photoList: [];



//getImages: function() {
//    $('#querySubmit').click(function (event) {
//        event.preventDefault(); // otherwise page reloads when this function starts
//        console.log("In getPhotos");
//        let searchTerm = $("#photoQuery").val();
//        console.log(searchTerm);
//        $.getJSON('/unsplash/:' + searchTerm, function (res) {
//            if (res.total == 0) {
//                console.log("got bupkis");
//                alert(`We found no results for ${searchTerm}!`);
//            } else {
//                console.log(res);
//                console.log("Did i hit my targets?  Width:", res.results[0].width, "Height:", res.results[0].height, "Username:", res.results[0].user.name, "Photog URL", res.results[0].user.portfolio_url);
//                $("#nextPhoto").addClass("makeVisible");
//                $("#prevPhoto").addClass("makeVisible");
//                $("#photo").addClass("makeVisible");
//                $("#photo").attr("src", res.results[0].urls.regular);  // add first photo to page
//                $("#photoCreds").html(`<a href="${res.results[0].user.portfolio_url}" target="_blank">${res.results[0].user.name}</a>, via <a href="https://unsplash.com/" target="_blank">Unsplash</a>`);  // set credit for first photo
//                photoList = [];  // clear the previous results
//                $("#photoQuery").val("");  // clear the previous results
//                for (let x=0; x<res.results.length; x++) {
//                    photoList.push({photoLink: res.results[x].urls.regular, photogName: res.results[x].user.name, photogLink: res.results[x].user.portfolio_url, width: res.results[x].width, height: res.results[x].height});
//                }
//            }
//        });
//    });
//    $('#clipSubmit').click(function (event) {
//        event.preventDefault(); // otherwise page reloads when this function starts
//        console.log("In getClips");
//        let searchTerm = $("#clipQuery").val();
//        console.log(searchTerm);
//        $.getJSON('/clipart/:' + searchTerm, function (res) {
//            if (res == null || res == "null") {
//                console.log("got bupkis");
//                alert("ain't got no results");
//            } else {
//                console.log(res);
//                console.log("did i hit my target", res.payload[0].svg.url);
//                $("#photo").attr("src", res.payload[0].svg.url);
//                photoList = [];  // clear the previous results
//                for (let x=0; x<res.payload.length; x++) {
//                    photoList.push(res.payload[x].svg.url);
//                }
//            }
//        });
//    });
//    $('#nextPhoto').click(function (event) {
//        event.preventDefault();
//        counter++;
//        if (counter >= photoList.length) {
//            counter = 0;
//        }
//        $("#photo").attr("src", photoList[counter].photoLink);
//        $("#photoCreds").html(`<a href="${photoList[counter].photogLink}" target="_blank">${photoList[counter].photogName}</a>, via <a href="https://unsplash.com/" target="_blank">Unsplash</a>`)
//    });
//    $('#prevPhoto').click(function (event) {
//        event.preventDefault();
//        counter--;
//        if (counter < 0) {
//            counter = photoList.length - 1;
//        }
//        $("#photo").attr("src", photoList[counter].photoLink);
//        $("#photoCreds").html(`<a href="${photoList[counter].photogLink}" target="_blank">${photoList[counter].photogName}</a>, via <a href="https://unsplash.com/" target="_blank">Unsplash</a>`)
//    });
//}


//<div id="cardPreview" class="invisible">
//    <div id="previewHeader"></div>
//<img id="previewPhoto">
//    <p id="previewBody"></p>
//<p id="previewFooter"></p>
//<p id="previewCreds"></p>
//</div>

function previewCard() {
//    console.log("in previewCard");
    if (createCard.photoList[createCard.imageNumber].width < 1.1*createCard.photoList[createCard.imageNumber].height) {
        $("#previewBody").addClass("portraitPic");
        //                        alert("Applying narrower text");
    }
    else {
        $("#previewBody").removeClass("portraitPic");
        //                        alert("Wound up in else - no narrower text");
    }
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
    $("#previewHeader").css("text-shadow", TEXTSTYLES[createCard.titleStyle][1]);
    $("#previewHeader").css("background-color", TEXTSTYLES[createCard.titleStyle][0]);
    $("#previewBody").css("text-shadow", TEXTSTYLES[createCard.bodyStyleNumber][1]);
    $("#previewBody").css("background-color", TEXTSTYLES[createCard.bodyStyleNumber][0]);
    $("#previewFooter").css("text-shadow", TEXTSTYLES[createCard.footerStyleNumber][1]);
    $("#previewFooter").css("background-color", TEXTSTYLES[createCard.footerStyleNumber][0]);
    $("#previewPhoto").css("border-style", BORDERS[createCard.borderStyle]);
    $("#previewPhoto").css("border-color", COLORS[createCard.borderColor]);
    $("#previewPhoto").css("border-width", createCard.borderSize + "px");
    $("#previewParent").css("background-color", COLORS[createCard.backgroundNumber]);
    $("#previewPhoto").attr("src", createCard.photoList[createCard.imageNumber].photoLink);
    $("#previewCreds").html(`<a href="${createCard.photoList[createCard.imageNumber].photogLink}" target="_blank">${createCard.photoList[createCard.imageNumber].photogName}</a>, via <a href="https://unsplash.com/" target="_blank">Unsplash</a>`);
}

function closePreview() {
    $("#previewParent").removeClass("makeVisible");
}

// Save a card:
function saveCard() {
    let cardArray = {
        userName: USERNAME,
        title: createCard.titleText,
        body: createCard.bodyText,
        footer: createCard.footerText,
        titleFont: FONTS[createCard.titleFontNumber],
        bodyFont: FONTS[createCard.bodyFontNumber],
        footerFont: FONTS[createCard.footerFontNumber],
        titleColor: COLORS[createCard.titleColorNumber],
        bodyColor: COLORS[createCard.bodyColorNumber],
        footerColor: COLORS[createCard.footerColorNumber],
        titleSize: createCard.titleFontSize,
        bodySize: createCard.bodyFontSize,
        footerSize: createCard.footerFontSize,
        titleStyle: createCard.titleStyle,
        bodyStyle: createCard.bodyStyle,
        footerStyle: createCard.footerStyle,
        borderStyle: createCard.borderStyle,
        borderColor: createCard.borderColor,
        borderWidth: createCard.borderSize,
        backgroundColor: createCard.backgroundNumber,
        photo: createCard.photoList[createCard.imageNumber].photoLink,
        photographer: createCard.photoList[createCard.imageNumber].photogName,
        photoUrl: createCard.photoList[createCard.imageNumber].photogLink,
        width: createCard.photoList[createCard.imageNumber].width,
        height: createCard.photoList[createCard.imageNumber].height
    };
    $.ajax({
            type: 'POST',
            url: '/create',
            dataType: 'json',
            data: JSON.stringify(cardArray),
            contentType: 'application/json'
        })
        .done(function (result) {
            console.log("new review posted:", result);
            alert(`Your mE-Card has been saved. It can be found at ${result._id}`);
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
                $.getJSON('/findCards/' + USERNAME, function (res) {
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

$(document).on('click', '.userCards', function(event) {
    event.preventDefault();
    let clickedUserCardId = $(this).parent().parent().find(".userCardsIdValue").val();
    $.getJSON('/onecard/:' + clickedUserCardId, function (res) {  // MARKMARKMARK*******
        createCard.titleText = res.titleText;
        createCard.bodyText = res.bodyText;
        createCard.footerText = res.footerText;
        createCard.titleFontNumber = res.titleFontNumber;  // Number or actual font?
        createCard.bodyFontNumber = res.bodyFontNumber;
        createCard.footerFontNumber = res.footerFontNumber;
        createCard.titleColorNumber = res.titleColorNumber;
        createCard.bodyColorNumber = res.bodyColorNumber;
        createCard.footerColorNumber = res.footerColorNumber;
        createCard.titleFontSize = res.titleFontSize;
        createCard.bodyFontSize = res.bodyFontSize;
        createCard.footerFontSize = res.footerFontSize;
        createCard.titleStyle = res.titleStyle;
        createCard.bodyStyleNumber = res.bodyStyleNumber;
        createCard.footerStyleNumber = res.footerStyleNumber;
        createCard.borderStyle = res.borderStyle;
        createCard.borderColor = res.borderColor;
        createCard.borderSize = res.borderSize;
        createCard.backgroundNumber = res.backgroundNumber;
        createCard.imageNumber = res.imageNumber;
        createCard.photoList = res.photoList;

    });
    console.log("clicked button", clickedUserCardId); // MAKE GET CALL TO ID
});

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

function bobbob() {
    console.log(this, this.id, "children:", this.children, "selectall...", this.selectAllChildren);
}

$(setInitial);
$(document).on('click', '#newUserButton', createNewUser);
$(document).on('click', '#preview', previewCard);
$(document).on('click', '#closePreview', closePreview);
$(document).on('click', '#saveChanges', saveCard);

$(document).on('click', '#prevCards', bobbob);


//$('#newUserButton').click(createNewUser);
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
