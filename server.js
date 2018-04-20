const User = require('./models/user');
const Card = require('./models/cards');
const Location = require('./models/locations');
const bodyParser = require('body-parser');
const config = require('./config');
const mongoose = require('mongoose');
const moment = require('moment');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const express = require('express');
const app = express();
var unirest = require('unirest');
var events = require('events');
const Unsplash = require('unsplash-js').default;
require('es6-promise').polyfill();  // added to get unsplash to work properly - https://github.com/unsplash/unsplash-js/issues/35
require('isomorphic-fetch'); // added to get unsplash to work properly
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

//console.log("re-started");

mongoose.Promise = global.Promise;

// ---------------- RUN/CLOSE SERVER -----------------------------------------------------
let server = undefined;

function runServer(urlToUse) {
    return new Promise((resolve, reject) => {
        mongoose.connect(urlToUse, err => {
            if (err) {
                return reject(err);
            }
            server = app.listen(config.PORT, () => {
                console.log(`Listening on localhost:${config.PORT}`);
                resolve();
            }).on('error', err => {
                mongoose.disconnect();
                reject(err);
            });
        });
    });
}

if (require.main === module) {
    runServer(config.DATABASE_URL).catch(err => console.error(err));
}

function closeServer() {
    return mongoose.disconnect().then(() => new Promise((resolve, reject) => {
        console.log('Closing server');
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    }));
}

app.use(express.static('public'));

// NEW UNSPLASH CODE ****************
const unsplash = new Unsplash({
    applicationId: "23922",
    secret: "59a91ca0156d21055e91bfe056f4867eb8a07cb88af308623bf64b24be57bc43",
    callbackUrl: "https://mecards-fullstack-capstone.herokuapp.com/unsplash",
    headers: {
        "Client-ID": "e6b8899c96e25cba8ea16bf7f346778125f9537fd83f547591e4ed430a0930d6"
    }
});


const getPhotos = function (searchTerm) {
    const emitter = new events.EventEmitter();
    unirest.get("https://api.unsplash.com/search/photos?query=" + searchTerm + "&page=1&per_page=10&client_id=e6b8899c96e25cba8ea16bf7f346778125f9537fd83f547591e4ed430a0930d6")
        .header("Accept", "application/json")
        .end(function (result) {
        if (result.ok) {
            emitter.emit('end', result.body);
        }
        else {
            emitter.emit('error', result.code);
        }
    });
    return emitter;
};

app.get('/unsplash/:searchTerm', (req, res) => {
    const searchReq = getPhotos(req.params.searchTerm);
    searchReq.on('end', function (item) {
//        console.log("claimed to be ok; results:", item);
        res.json(item);
    });
    searchReq.on('error', function (code) {
        res.sendStatus(code);
    });

});



//console.log("in previewCard");
//if (createCard.photoList[createCard.imageNumber].width < 1.1*createCard.photoList[createCard.imageNumber].height) {
//    $("#previewBody").addClass("portraitPic");
//    //                        alert("Applying narrower text");
//}
//else {
//    $("#previewBody").removeClass("portraitPic");
//    //                        alert("Wound up in else - no narrower text");
//}
//$("#previewParent").addClass("makeVisible");
//$("#previewHeader").text(createCard.titleText);
//$("#previewBody").text(createCard.bodyText);
//$("#previewFooter").text(createCard.footerText);
//$("#previewHeader").css("font-family", FONTS[createCard.titleFontNumber]);
//$("#previewBody").css("font-family", FONTS[createCard.bodyFontNumber]);
//$("#previewFooter").css("font-family", FONTS[createCard.footerFontNumber]);
//$("#previewHeader").css("color", COLORS[createCard.titleColorNumber]);
//$("#previewBody").css("color", COLORS[createCard.bodyColorNumber]);
//$("#previewFooter").css("color", COLORS[createCard.footerColorNumber]);
//$("#previewHeader").css("font-size", createCard.titleFontSize + "em");
//$("#previewBody").css("font-size", createCard.bodyFontSize + "em");
//$("#previewFooter").css("font-size", createCard.footerFontSize + "em");
//$("#previewHeader").css("text-shadow", TEXTSTYLES[createCard.titleStyle][1]);
//$("#previewHeader").css("background-color", TEXTSTYLES[createCard.titleStyle][0]);
//$("#previewBody").css("text-shadow", TEXTSTYLES[createCard.bodyStyleNumber][1]);
//$("#previewBody").css("background-color", TEXTSTYLES[createCard.bodyStyleNumber][0]);
//$("#previewFooter").css("text-shadow", TEXTSTYLES[createCard.footerStyleNumber][1]);
//$("#previewFooter").css("background-color", TEXTSTYLES[createCard.footerStyleNumber][0]);
//$("#previewPhoto").css("border-style", BORDERS[createCard.borderStyle]);
//$("#previewPhoto").css("border-color", COLORS[createCard.borderColor]);
//$("#previewPhoto").css("border-width", createCard.borderSize + "px");
//$("#previewParent").css("background-color", COLORS[createCard.backgroundNumber]);
//$("#previewPhoto").attr("src", createCard.photoList[createCard.imageNumber].photoLink);
//$("#previewCreds").html(`<a href="${createCard.photoList[createCard.imageNumber].photogLink}" target="_blank">${createCard.photoList[createCard.imageNumber].photogName}</a>, via <a href="https://unsplash.com/" target="_blank">Unsplash</a>`);
//}




//save card
app.post('/create', (req, res) => {
    let userName = req.body.userName;
    let title = req.body.title;
    let body = req.body.body;
    let footer = req.body.footer;
    let titleFont = req.body.titleFont;
    let bodyFont = req.body.bodyFont;
    let footerFont = req.body.footerFont;
    let titleColor = req.body.titleColor;
    let bodyColor = req.body.bodyColor;
    let footerColor = req.body.footerColor;
    let titleSize = req.body.titleSize;
    let bodySize = req.body.bodySize;
    let footerSize = req.body.footerSize;
    let titleShadow = req.body.titleShadow;
    let bodyShadow = req.body.bodyShadow;
    let footerShadow = req.body.footerShadow;
    let titleBackground = req.body.titleBackground;
    let bodyBackground = req.body.bodyBackground;
    let footerBackground = req.body.footerBackground;
    let borderStyle = req.body.borderStyle;
    let borderColor = req.body.borderColor;
    let borderWidth = req.body.borderWidth;
    let backgroundColor = req.body.backgroundColor;
    let photo = req.body.photo;
    let photographer = req.body.photographer;
    let photoUrl = req.body.photoUrl;
    let width = req.body.width;
    let height = req.body.height;
    Card.create({
        userName,
        title,
        body,
        footer,
        titleFont,
        bodyFont,
        footerFont,
        titleColor,
        bodyColor,
        footerColor,
        titleSize,
        bodySize,
        footerSize,
        titleStyle,
        bodyStyle,
        footerStyle,
        borderStyle,
        borderColor,
        borderWidth,
        backgroundColor,
        photo,
        photographer,
        photoUrl,
        width,
        height
    }, (err, item) => {
        if (err) {
            return res.status(500).json({
                message: 'Infernal Server Error'
            });
        }
        if (item) {
            console.log(`Card ${title} by ${userName} saved.`);
            return res.json(item);
        }
    });
});


const getClipart = function (searchTerm) {
//    console.log("got into getClipart");
    const emitter = new events.EventEmitter();
    unirest.get("https://openclipart.org/search/json/?query=" + searchTerm + "&amount=20")
        .end(function (result) {
        if (result.ok) {
            emitter.emit('end', result.body);
        }
        else {
            emitter.emit('error', result.code);
        }
    });
    return emitter;
};

app.get('/clipart/:searchTerm', (req, res) => {
    const searchReq = getClipart(req.params.searchTerm);
    console.log("search term: ", searchReq);
    searchReq.on('end', function (item) {
        console.log("claimed to be ok; results:", item);
        res.json(item);
    });
    searchReq.on('error', function (code) {
        console.log("wound up in error code; code = ", code);
        res.sendStatus(code);
    });

});


const openclipartkey = "1edba4dc2b1f025dc9e994a1eb71fe1e";
//app.get('/clipart/:searchTerm', (req, res) => {
//    var emitter = new events.EventEmitter();
//    unirest.get("https://openclipart.org/search/json/?query=" + req.params.searchTerm + "&amount=20")
//        .end(function (result) {
//        console.log(result.status, result.headers, result.body);
//        //success scenario
//        if (result.ok) {
//            emitter.emit('end', result.body);
//        }
//        //failure scenario
//        else {
//            emitter.emit('error', result.code);
//        }
//    });
//});








//app.get('/unsplash/:searchTerm', function (req, res) {
//    console.log("Search term: ", req.params.searchTerm);
//    unsplash.search.photos(req.params.searchTerm, 1)
////        .then(toJson)
//        .then(results => {
//                console.log(results);
//                res.json({
//                    results
//                });
//    });
////    Location
////        .find()
////        .then(function (results) {
////        res.json({
////            results
////        });
////    })
////        .catch(function (err) {
////        console.error(err);
////        res.status(500).json({
////            message: 'Internal server error'
////        });
////    });
//});



// Create new user
app.post('/users/create', (req, res) => {
    let username = req.body.username;
    username = username.trim();
    let password = req.body.password;
    password = password.trim();
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            console.log("encryption error1");
            return res.status(500).json({
                message: 'Internal server error'
            });
        }

        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                console.log("encryption error2");
                return res.status(500).json({
                    message: 'Internal server error'
                });
            }

            User.create({
                username,
                password: hash,
            }, (err, item) => {
                if (err) {
                    console.log("creation error");
                    return res.status(500).json({
                        message: 'Internal Server Error'
                    });
                }
                if (item) {
                    console.log(`User \`${username}\` created.`);
                    return res.json(item);
                }
            });
        });
    });
});

// Login / sign a user in
app.post('/signin', function (req, res) {
    //    const user = req.body.username;
    //    const pw = req.body.password;
    User
        .findOne({
            username: req.body.username
        }, function (err, items) {
            if (err) {
                return res.status(500).json({
                    message: "Internal server error"
                });
            }
            if (!items) {
                // bad username
                return res.status(401).json({
                    message: "Not found!"
                });
            } else {
                items.validatePassword(req.body.password, function (err, isValid) {
                    if (err) {
                        console.log('There was an error validating the password.');
                    }
                    if (!isValid) {
                        return res.status(401).json({
                            message: "Not found"
                        });
                    } else {
                        var logInTime = new Date();
                        console.log("User logged in: " + req.body.username + ' at ' + logInTime);
                        return res.json(items);
                    }
                });
            };
        });
});


// retrieve all of the venues
app.get('/locations', function (req, res) {
    Location
        .find()
        .then(function (results) {
            res.json({
                results
            });
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json({
                message: 'Internal server error'
            });
        });
});

// check to see if user has saved cards
app.get('/findcards/:userName', function (req, res) {
    let userName = req.params.userName;
    Card
        .find({
            userName: userName
        })
        .then(function (results) {
//            console.log("In get one review, results: ", results);
            res.json({
                results
            });
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json({
                message: 'Internal server error'
            });
        });
});

app.get('/onecard/:cardId', function (req, res) {
    let cardId = req.params.cardId;
    console.log("cardId:", cardId);
    Card.findById(cardId)
        .then(function (results) {
        //            console.log("In get one review, results: ", results);
        res.json({
            results
        });
    })
        .catch(function (err) {
        console.error(err);
        res.status(500).json({
            message: 'Internal server error'
        });
    });
});


// get one venue
app.get('/locations/onevenue/:venName', function (req, res) {
    const {
        venName
    } = req.params;
    Location
        .findOne({
            venuename: venName
        })
        .then(function (results) {
            //            console.log("req.params: ", req.params, " & results: ", results);
            res.json({
                results
            });
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json({
                message: 'Internal server error'
            });
        });
});

// get reviews for requested venue
app.get('/venuereviews/:venName', function (req, res) {
    const {
        venName
    } = req.params;
    //    console.log("This is what I got for venName when retrieving reviews:", venName);
    Review
        .find({
            venueName: venName
        })
        .then(function (results) {
            //            console.log("RESULTS FROM QUERYING REVIEWS:", results);
            res.json({
                results
            });
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json({
                message: 'Internal server error'
            });
        });
});

// get list of venues, based upon user-selected filters
app.get('/venues/partiallist/:venuetype/:venuesize/:freeticketed', function (req, res) {
    let venuetype = req.params.venuetype;
    let venuesize = req.params.venuesize;
    let freeticketed = req.params.freeticketed;
    if (venuetype === "all" && venuesize === "all" && freeticketed === "all") {
        Location
            .find()
            .then(function (results) {
                res.json({
                    results
                });
            })
            .catch(function (err) {
                console.error(err);
                res.status(500).json({
                    message: 'Internal server error'
                });
            });
    } else if (venuetype === "all" && venuesize === "all" && freeticketed === "free") {
        Location
            .find({
                free: "TRUE"
            })
            .then(function (results) {
                res.json({
                    results
                });
            })
            .catch(function (err) {
                console.error(err);
                res.status(500).json({
                    message: 'Internal server error'
                });
            });
    } else if (venuetype === "all" && venuesize === "all") {
        Location
            .find({
                ticketed: "TRUE"
            })
            .then(function (results) {
                res.json({
                    results
                });
            })
            .catch(function (err) {
                console.error(err);
                res.status(500).json({
                    message: 'Internal server error'
                });
            });
    } else if (venuetype === "all" && freeticketed === "all") {
        Location
            .find({
                venuesize: venuesize
            })
            .then(function (results) {
                res.json({
                    results
                });
            })
            .catch(function (err) {
                console.error(err);
                res.status(500).json({
                    message: 'Internal server error'
                });
            });
    } else if (venuesize === "all" && freeticketed === "all") {
        Location
            .find({
                venuetype: venuetype
            })
            .then(function (results) {
                res.json({
                    results
                });
            })
            .catch(function (err) {
                console.error(err);
                res.status(500).json({
                    message: 'Internal server error'
                });
            });
    } else if (venuetype === "all" && freeticketed === "free") {
        Location
            .find({
                venuesize: venuesize,
                free: "TRUE"
            })
            .then(function (results) {
                res.json({
                    results
                });
            })
            .catch(function (err) {
                console.error(err);
                res.status(500).json({
                    message: 'Internal server error'
                });
            });
    } else if (venuetype === "all") {
        Location
            .find({
                venuesize: venuesize,
                ticketed: "TRUE"
            })
            .then(function (results) {
                res.json({
                    results
                });
            })
            .catch(function (err) {
                console.error(err);
                res.status(500).json({
                    message: 'Internal server error'
                });
            });
    } else if (venuesize === "all" && freeticketed === "free") {
        Location
            .find({
                venuetype: venuetype,
                free: "TRUE"
            })
            .then(function (results) {
                res.json({
                    results
                });
            })
            .catch(function (err) {
                console.error(err);
                res.status(500).json({
                    message: 'Internal server error'
                });
            });
    } else if (venuesize === "all") {
        Location
            .find({
                venuetype: venuetype,
                ticketed: "TRUE"
            })
            .then(function (results) {
                res.json({
                    results
                });
            })
            .catch(function (err) {
                console.error(err);
                res.status(500).json({
                    message: 'Internal server error'
                });
            });
    } else if (freeticketed === "all") {
        Location
            .find({
                venuetype: venuetype,
                venuesize: venuesize
            })
            .then(function (results) {
                res.json({
                    results
                });
            })
            .catch(function (err) {
                console.error(err);
                res.status(500).json({
                    message: 'Internal server error'
                });
            });
    } else if (freeticketed === "free") {
        Location
            .find({
                venuetype: venuetype,
                venuesize: venuesize,
                free: "TRUE"
            })
            .then(function (results) {
                res.json({
                    results
                });
            })
            .catch(function (err) {
                console.error(err);
                res.status(500).json({
                    message: 'Internal server error'
                });
            });
    } else {
        Location
            .find({
                venuetype: venuetype,
                venuesize: venuesize,
                ticketed: "TRUE"
            })
            .then(function (results) {
                res.json({
                    results
                });
            })
            .catch(function (err) {
                console.error(err);
                res.status(500).json({
                    message: 'Internal server error'
                });
            });
    }
});

//create new review
app.post('/new/create', (req, res) => {
    let venueName = req.body.venueName;
    let userName = req.body.userName;
    let listeningExperience = req.body.listeningExperience;
    let venueFeel = req.body.venueFeel;
    let musicValue = req.body.musicValue;
    let musicQuality = req.body.musicQuality;
    let foodQuality = req.body.foodQuality;
    let foodValue = req.body.foodValue;
    let userReview = req.body.userReview;
    Review.create({
        venueName,
        userName,
        listeningExperience,
        venueFeel,
        musicValue,
        musicQuality,
        foodQuality,
        foodValue,
        userReview
    }, (err, item) => {
        if (err) {
            return res.status(500).json({
                message: 'Infernal Server Error'
            });
        }
        if (item) {
            console.log(`Review for ${venueName} by ${userName} added.`);
            return res.json(item);
        }
    });
});

// PUT --------------------------------------
// update a review by id
app.put('/review/update/:id', function (req, res) {
    let toUpdate = {};
    let updateableFields = ['listeningExperience', 'foodQuality', 'foodValue', 'musicQuality', 'musicValue', 'userReview'];
    updateableFields.forEach(function (field) {
        if (field in req.body) {
            toUpdate[field] = req.body[field];
        }
    });
    Review
        .findByIdAndUpdate(req.params.id, {
            $set: toUpdate
        }).exec().then(function (achievement) {
            return res.status(204).end();
        }).catch(function (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        });
});


// DELETE ----------------------------------------
// delete a review by id
app.delete('/delete/:id', function (req, res) {
    Review.findByIdAndRemove(req.params.id).exec().then(function () {
        console.log("Review", req.params.id, "deleted");
        return res.status(204).end();
    }).catch(function (err) {
        return res.status(500).json({
            message: 'Internal Server Error - review not deleted'
        });
    });
});




// MISC ------------------------------------------
// catch-all endpoint if client makes request to non-existent endpoint
app.use('*', (req, res) => {
    res.status(404).json({
        message: 'Not Found'
    });
});

exports.app = app;
exports.runServer = runServer;
exports.closeServer = closeServer;
