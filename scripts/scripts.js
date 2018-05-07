const app = {};


// Paul Kentish - Medlars
// Melinda Stuart - Capful of Moonglow
// Catherine Bukowski - Paw Paw
// tariusxj - persimmon tree
// Toshihiro Gamo - Fruits of Japanese Plum
// manuel m.v. - Loganberry
// Lotus Johnson - goumiberry
// Rastoney - Mulberry tree
// Michael Camilleri - Pineberries
// Edsel Little - Elderberries
// Schisandra Vine - Tatters ✾
// Goji Berries - Lotus Johnson
// Aronia Berry - Birgit Fostervold
// Autumn Olives - mwms1916





// solutionObj used as the key to determine which plant to return to the user
app.solutionObj = {
    tree: {
        honeySweetPear: {
            zone: 4,
            type: 'European Pear Tree',
            name: 'Honey Sweet Pear Tree',
            img: 'https://www.starkbros.com/images/dynamic/1613-960x960.jpg',
            info: {
                taste: "Sweet, smooth, creamy taste",
                plantFact: "Hardy and resistant to fireblight and foliage diseases",
                plantBlerb: "One of the few pears that will bear fruit without a pollenizer"
            },
            link: "https://www.starkbros.com/products/fruit-trees/pear-trees/stark-honeysweet-pear"
        },
        moonglowPear: {
            zone: 4,
            type: 'European Pear Tree',
            name: 'Moonglow Pear Tree',
            img: 'images/display/moonglow-M.jpg',
            info: {
                taste: "White flesh with a soft, juicy flavour",
                plantFact: "Healthy tree, fireblight resistant",
                plantBlerb: "Ripens to peak flavour in cold storage for 10 to 15 days after picking"
            },
            link: 'https://www.backyardgardener.com/plantname/pyrus-communis-moonglow-pear/'
        },
        chojuroRumPear: {
            zone: 5,
            type: 'Asian Pear Tree',
            name: 'Chojuro Rum Pear Tree',
            img: 'https://www.starkbros.com/images/dynamic/1617-960x960.jpg',
            info: {
                taste: "Dark, golden fruit with rich rum-like flavour",
                plantFact: "Fruit stores up to 6 months",
                plantBlerb: "Sometimes called 'old world', it originated in Japan in 1895"
            },
            link: 'https://www.backyardgardener.com/plantname/pyrus-pyrifolia-chojuro-asian-pear/'
        },
        pawPawTree: {
            zone: 5,
            type: 'Paw Paw Tree',
            name: 'Paw Paw Tree',
            img: 'images/display/pawpaw-M.jpg',
            info: {
                taste: "Vanilla, custard flavoured flesh.",
                plantFact: "Virtually no insect or diseas problems.",
                plantBlerb: "Surprisingly, this tropical tree is native to Canada."
            },
            link: 'https://www.thestar.com/life/2016/09/16/pawpaw-is-a-tropical-fruit-that-actually-grows-in-ontario.html'
        },
        persimmonTree: {
            zone: 5,
            type: 'Persimmon Tree',
            name: 'Persimmon Tree',
            img: 'images/display/persimmon-M.jpg',
            info: {
                taste: "Tastes like apricot with a jelly texture",
                plantFact: "Require both female and male trees to bear fruit",
                plantBlerb: "This member of the ebony family can reach 50 feet in height",
            },
            link: 'https://en.wikipedia.org/wiki/Persimmon'
        },
        medlarTree: {
            zone: 5,
            type: 'Medlar Tree',
            name: 'Royal Medlar Tree',
            img: 'images/display/medlar-M.jpg',
            info: {
                taste: "Sweet, soft, apple-like taste",
                plantFact: "In the middle ages most walled monasteries had a number of medlar trees",
                plantBlerb: "A medlar tree in bloom can rival a rose bush in beauty"
            },
            link: 'https://en.wikipedia.org/wiki/Mespilus_germanica'
        },
        wanetaPlum: {
            zone: 2.5,
            type: 'Plum Tree',
            name: 'Waneta Plum Tree',
            img: 'images/display/wanetaplum-M.jpg',
            info: {
                taste: "Tender, sweet & moderately juicy",
                plantFact: "Extremely cold hardy, reliable & productive",
                plantBlerb: "Named after a Yanktonai chief who became famous during the War of 1812"
            },
            link: 'https://www.starkbros.com/products/fruit-trees/plum-trees/waneta-plum'
        }

    },
    bush: {
        loganberry: {
            zone: 6,
            type: 'Blackberry, Raspberry Cross',
            name: 'Loganberry',
            img: 'images/display/loganberry-M.jpg',
            info: {
                taste: "Unique sweet & tart flavour.",
                plantFact: "Loganberry juice is highly regarded for its health boosting properties.",
                plantBlerb: "Discovered in the late 1800s, it is believed to be a cross of wild blackberry and raspberry."
            },
            link: 'https://en.wikipedia.org/wiki/Loganberry'
        },
        goumiBerry: {
            zone: 5,
            type: 'Goumi Bush',
            name: 'Goumi Bush',
            img: 'images/display/goumiberry-M.jpg',
            info: {
                taste: "Sprightly, refreshing flavour.",
                plantFact: "In late spring the bush is covered in a fragrant haze of small yellow flowers.",
                plantBlerb: "The most desirable and hard to find member of the nitrogen-fixing eleagnus family."
            },
            link: 'https://en.wikipedia.org/wiki/Elaeagnus_multiflora'
        },
        mulberryBush: {
            zone: 4.5,
            type: 'Mulberry Bush',
            name: 'Mulberry Bush',
            img: 'images/display/mulberry-M.jpg',
            info: {
                taste: "flavourful blackberry-like fruit.",
                plantFact: "Can be used for fresh eating, jam, wine and more.",
                plantBlerb: "Ripens over an extended period of time from early to mid-summer."
            },
            link: 'https://www.growingmulberry.org/morus-nigra'
        },
        pineberry: {
            zone: 4,
            type: 'Strawberry',
            name: 'Pineberry',
            img: 'images/display/pineberry-M.jpg',
            info: {
                taste: "Delicious pineapple & strawberry flavour",
                plantFact: "Hardy, everbearing plant.  Ideal for hanging pots.",
                plantBlerb: "Attractive white berries add an intriguing dimension to any fruit salad."
            },
            link: 'https://www.starkbros.com/growing-guide/article/all-about-pineberry'
        },
        elderberry: {
            zone: 4,
            type: 'Elderberry',
            name: 'Elderberry',
            img: 'images/display/elderberry-M.jpg',
            info: {
                taste: "Tart & mildly sweet flavour.",
                plantFact: "Extremely high in antioxidants.",
                plantBlerb: "Proven antiviral effects."
            },
            link: 'https://www.backyardgardener.com/plantname/sambucus-nigra-elderberry/'
        },
        schisandraVine: {
            zone: 4,
            type: 'Schisandra Vine',
            name: 'Schisandra Vine',
            img: 'images/display/schisandra-vine-M.jpg',
            info: {
                taste: "Sweet, sour, salty, bitter & pungent flavour.",
                plantFact: "Most often dried and used in medicinal extracts.",
                plantBlerb: "Adaptogenic, anti-aging & immune-boosting properties"
            },
            link: 'https://en.wikipedia.org/wiki/Schisandra_chinensis'
        },
        gojiBerry: {
            zone: 3,
            type: 'Goji Berry',
            name: 'Dynamite Goji Berry',
            img: 'images/display/gojiberry-M.jpg',
            info: {
                taste: "Fruit is usually dried, tasting like tart raisins.",
                plantFact: "Native to Tibet, this superfood can grow in almost any soil type.",
                plantBlerb: "Packed with essential amino acids, vitamins & minerals."
            },
            link: 'https://www.rhs.org.uk/advice/profile?PID=581'
        },
        aroniaBerry: {
            zone: 3,
            type: 'Aronia Berry',
            name: 'Aronia Berry',
            img: 'images/display/aroniaberry-M.jpg',
            info: {
                taste: "Tender, sweet & moderately juicy",
                plantFact: "58% more antioxidant content than blueberries.",
                plantBlerb: "The fruit can be used to make jam, juice, wine and tea."
            },
            link: 'https://www.backyardgardener.com/plantname/aronia-arbutifolia-red-chokeberry/'
        },
        autumnOlives: {
            zone: 3,
            type: 'Autumn Olives',
            name: 'Ruby Autumn Olives',
            img: 'images/display/autumnolives-M.jpg',
            info: {
                taste: "Tart & mildly sweet flavour.",
                plantFact: "Not related to the olive but has similar looking grey-green leaves.",
                plantBlerb: "Loaded with the antioxidant lycopene which is reported to help protect against prostate cancer."
            },
            link: 'https://en.wikipedia.org/wiki/Elaeagnus_umbellata'
        }
    }
}

// zonesObj used to determin which plant hardiness zone the user is in
app.zonesObj = {
    3.5: ['Saskatoon', 'Regina', 'Saguenay', 'Thunder Bay'],
    4: ['Calgary', 'Edmonton', 'Winnipeg'],
    4.5: ['Sudbury'],
    5: ['Gatineau', 'Sherbrooke', 'Lévis', 'Trois-Rivières'],
    5.5: ['Ottawa', 'Quebec City', 'Barrie', 'Guelph', 'Terrebonne'],
    6: ['Montreal', 'Brampton', 'Laval', 'Markham', 'Vaughan', 'Longueuil', 'Richmond Hill', 'Oshawa', 'Cambridge', 'Whitby', 'Kingston', 'Ajax', 'Milton', "St. John's"],
    6.5: ['Mississauga', 'Hamilton', 'Halifax', 'London', 'Kitchener', 'Oakville', 'Burlington'],
    7: ['Toronto', 'Windsor', 'St. Catharines', 'Kelowna'],
    8: ['Surrey', 'Richmond', 'Coquitlam', 'Langley'],
    8.5: ['Vancouver', 'Burnaby', 'Abbotsford', 'Saanich'],
}


// === generic functions ===
// Function to return random number between 0 - max
app.random = function(max) {
    return Math.floor(Math.random() * max);
}


// === background logic ===
app.background = {};
// View port height
app.background.vpHeight = $('main').height();

// Position of last row of icons
app.background.lastIconPos = 0;

// Array used to store icons 
app.background.icons = [350629, 351039, 351121, 351156, 351625, 351637, 351802, 351812, 351945, 352260, 353283];

// Uses app.random() to select a random icon from app.background.icons
app.background.randomIcon = function() {
    return app.background.icons[app.random(app.background.icons.length)];
}

// Function to add a new row of icons, and animate them
app.background.addRow = function(){
    $('.background').prepend('<ul class="background__roster"></ul>');
    for(let i = 1; i <= 10; i++){
        $('.background__roster').first().append(`<li class="background__roster__icon"><img src="images/icons/noun_${app.background.randomIcon()}_cc.svg" alt="" class="icon"></li>`)
        .animate({
            top: "+=100px",
        },{
            easing: "linear",
            duration: 3000
        });
    }
    // Updates iconHeight when new row is added
    app.background.iconHeight = $(".background__roster__icon").height();
    // Updates iconStartPos when new row is added
    app.background.iconStartPos = $(".background__roster").position();
}

app.background.interval = function(){
    setInterval(function () {
        app.background.firstIconPos = $('.background__roster').first().position();
        console.log(app.background.firstIconPos.top);
        //Updates lastIconPos every .5 sec
        app.background.lastIconPos = $('.background__roster').last().position();
        // Call removeRow when icons are below view port
        if (app.background.lastIconPos.top > app.background.vpHeight) {
            app.background.removeRow();
        }
        // Calls app.background.addRow() once there is enough space.
        if (app.background.firstIconPos.top >= (app.background.iconStartPos.top + app.background.iconHeight)) {
            app.background.addRow();
        }

    }, 500);
}
// Removes the last row of icons when called
app.background.removeRow = function(){
    $('.background__roster').last().remove();
}


// === quiz logic ===
app.quiz = {};
app.quiz.cityArr = [];
app.quiz.userZone = 0;
app.quiz.userLocation = "";
app.quiz.userTreeBush = "";

// = setup =
// Populates location drop down with city names
app.quiz.populateSelect = function() {
    for(let i = 0; i < app.quiz.cityArr.length; i++){
        $(".content-section__container2__select")
        .append(`<option value="${app.quiz.cityArr[i]}">${app.quiz.cityArr[i]}</option`);
    }
}

// Takes city names in app.quiz.zonesObj and concatinates them to app.quiz.cityArr
app.quiz.objToArr = function() {
    for (cityArr in app.zonesObj){
        app.quiz.cityArr = app.quiz.cityArr
        .concat(app.zonesObj[cityArr])
        .sort(); 
    }
    app.quiz.populateSelect();
}

//Based on user criteria, create array of all viable plants in solutionObj
app.quiz.viablePlantsArr = function() {
    let viablePlantsArr = [];
    // Iterate over app.solutionObj selecting for tree||bush === app.quiz.userTreeBush
    for (key in app.solutionObj[app.quiz.userTreeBush]){
        // Selecting for plants where zone <= the user's zone
        if (app.solutionObj[app.quiz.userTreeBush][key]["zone"] <= app.quiz.userZone){
            viablePlantsArr.push(app.solutionObj[app.quiz.userTreeBush][key]);
        }
    }
    app.quiz.populateDisplay(viablePlantsArr);
}

// Find user zone based on their location, using app.zoneObj
app.quiz.findUserZone = function(){
    for(cityArr in app.zonesObj){
        let $num = $.inArray(app.quiz.userLocation, app.zonesObj[cityArr]);
        if($num >= 0){
            app.quiz.userZone = Number(cityArr);
            return
        }
    }
}

app.quiz.populateDisplay = function (viablePlantsArr) {
    let solution = viablePlantsArr[app.random(viablePlantsArr.length)];
    $(".content-section__display__img").attr("src", solution.img);
    $(".content-section__display__title").text(solution.name);
    $(".display__text-box__link").attr("href", solution.link);
    $(".content-section__display").toggleClass("display--grid").fadeIn(1000);
    $(".reset-btn").show();
    for(fact in solution.info){
        console.log(solution.info[fact][fact]);
        $(".display__text-box__list").append(`<li class="display__text-box__list__item">${solution["info"][fact]}</li>`)
    }

}

//Event listeners
app.listeners = function() {
    const $container1 = $(".content-section__container1");
    const $container2 = $(".content-section__container2");
    const $container3 = $(".content-section__container3")
    // Window resize listeners
    $(window).resize(function () {
        // Updates vpHeight value when window resized
        app.vpHeight = $('main').height();
        //Updates iconHeight value when window resizes
        app.background.iconHeight = $(".background__roster__icon").height();
    });
    $('.content-section__container1__btn').on('click', function(e){
        e.preventDefault();
        $($container1).hide();
        $($container2).show();
    });
    $(".content-section__container2__btn").on("click", function(e){
        e.preventDefault();
        $($container2).hide();
        $($container3).show();
        app.quiz.userLocation = $(".content-section__container2__select option:selected").val();
        app.quiz.findUserZone();
    });
    $(".content-section__container3__btn").on("click", function(e){
        e.preventDefault();
        $($container3).hide();
        app.quiz.userTreeBush = $("input[name=tree-bush]:checked").val();
        app.quiz.viablePlantsArr();
    });
    $(".reset-btn").on("click", function(){
        $(".content-section__display").hide().toggleClass("display--grid");
        $(".reset-btn").hide();
        $(".display__text-box__list").empty();
        $($container2).show();
    });
}

app.init = function(){
    app.listeners();
    app.background.addRow();
    app.background.interval();
    app.quiz.objToArr();
}
$(function(){
    // $(".content-section__display").hide();
    app.init();
});