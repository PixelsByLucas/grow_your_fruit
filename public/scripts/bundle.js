(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const solutionObj = {
  tree: {
    honeySweetPear: {
      zone: 4,
      type: 'European Pear Tree',
      name: 'Honey Sweet Pear Tree',
      img: 'assets/images/europeanpear-M.jpg',
      twitterImg: 'pic.twitter.com/HwL9aUkInE',
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
      img: 'assets/images/moonglow-M.jpg',
      twitterImg: 'pic.twitter.com/UBDDQR3HAU',
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
      img: 'assets/images/asianpear-M.jpg',
      twitterImg: 'pic.twitter.com/3UOgeMi2cZ',
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
      img: 'assets/images/pawpaw-M.jpg',
      twitterImg: 'pic.twitter.com/VDvcvznXx1',
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
      img: 'assets/images/persimmon-M.jpg',
      twitterImg: 'pic.twitter.com/7Rof16LtFq',
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
      img: 'assets/images/medlar-M.jpg',
      twitterImg: 'pic.twitter.com/rCcNiKbUOq',
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
      img: 'assets/images/wanetaplum-M.jpg',
      twitterImg: 'pic.twitter.com/xydnDuEyBx',
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
      img: 'assets/images/loganberry-M.jpg',
      twitterImg: 'pic.twitter.com/d4up5F4nDq',
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
      img: 'assets/images/goumiberry-M.jpg',
      twitterImg: 'pic.twitter.com/gRzwQay3Qg',
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
      img: 'assets/images/mulberry-M.jpg',
      twitterImg: 'pic.twitter.com/poZXIIxvmi',
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
      img: 'assets/images/pineberry-M.jpg',
      twitterImg: 'pic.twitter.com/CJcP92ep7P',
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
      img: 'assets/images/elderberry-M.jpg',
      twitterImg: 'pic.twitter.com/Xlhejunvsx',
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
      img: 'assets/images/schisandra-vine-M.jpg',
      twitterImg: 'pic.twitter.com/NIwyzuowC3',
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
      img: 'assets/images/gojiberry-M.jpg',
      twitterImg: 'pic.twitter.com/44PST9AwWK',
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
      img: 'assets/images/aroniaberry-M.jpg',
      twitterImg: 'pic.twitter.com/Hho0h6qQ6q',
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
      img: 'assets/images/autumnolives-M.jpg',
      twitterImg: 'pic.twitter.com/yhqQd7j8qR',
      info: {
        taste: "Tart & mildly sweet flavour.",
        plantFact: "Not related to the olive but has similar looking grey-green leaves.",
        plantBlerb: "Loaded with the antioxidant lycopene which is reported to help protect against prostate cancer."
      },
      link: 'https://en.wikipedia.org/wiki/Elaeagnus_umbellata'
    }
  }
}

module.exports = solutionObj
},{}],2:[function(require,module,exports){
const zonesObj = {
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

module.exports = zonesObj
},{}],3:[function(require,module,exports){
const solutionObj = require('./data/solutionObj')
const zonesObj = require('./data/zonesObj')
const { random } = require('./utils/utils')

const app = {
    // === background logic ===
    background: {
        icons: [350629, 351039, 351121, 351156, 351625, 351637, 351802, 351812, 351945, 352260, 353283],

        randomIcon() {
            return this.icons[random(this.icons.length)]
        },

        addRow() {
            $('.background').prepend('<ul class="background__roster"></ul>');
            for(let i = 0; i < 10; i++){
                $('.background__roster').first().append(
                    `<li class="background__roster__icon">
                        <img src="assets/icons/noun_${this.randomIcon()}_cc.svg" alt="fruit icon" class="icon">
                    </li>`)
        
                $(".background__roster").animate({
                    top: "+=1125px"
                }, {
                        easing: "linear",
                        duration: 37500
                });
            }
        },

        interval() {
            const viewHeight = $("body").height()
            const iconStartPos = $(".background__roster").offset()
        
            intervalCallback = function() {
                const lastRowPos = $(".background__roster").last().offset()
                const firstRowPos = $('.background__roster').first().offset()
                const iconHeight = $('.icon').first().height()

                if (lastRowPos.top > (viewHeight + iconHeight)) {
                    this.removeRow()
                }
                if (firstRowPos.top > (iconStartPos.top + iconHeight)) {
                    this.addRow()
                }
                if(!window.focus) {
                    console.log("OUT OF FOCUS")
                }
            }

            setInterval(intervalCallback.bind(this), 100)
        },
        removeRow(){
            $('.background__roster').last().remove();
        }

    },
    // === quiz logic ===
    quiz: {
        cityArr: [],
        userZone: 0,
        userLocation: "",
        userTreeBush: "",
        // = setup =
        // Takes city names in zonesObj and pushes them into app.quiz.cityArr
        createCityArr() {
            let result = []
            for (city in zonesObj){
                result = result.concat(zonesObj[city])
            }
            this.cityArr = result.sort()
        },
        // Populates location drop down with city names
        populateSelect() {
            this.createCityArr();

            for(let i = 0; i < this.cityArr.length; i++) {
                $(".content-section__container2__select")
                .append(`<option value="${this.cityArr[i]}">${this.cityArr[i]}</option`)
            }
        },
        //Based on user criteria, create array of all viable plants in solutionObj
        viablePlantsArr() {
            let viablePlantsArr = []
            for (key in solutionObj[this.userTreeBush]) {
                // Selecting for plants where zone <= the user's zone
                if (solutionObj[this.userTreeBush][key].zone <= this.userZone) {
                    viablePlantsArr.push(solutionObj[this.userTreeBush][key])
                }
            }
            app.quiz.populateDisplay(viablePlantsArr);
        },
        // Find user zone based on their location, using app.zoneObj
        findUserZone() {
            for(cityArr in zonesObj) {
                let num = $.inArray(this.userLocation, zonesObj[cityArr])
                if(num >= 0){
                    app.quiz.userZone = Number(cityArr)
                    return
                }
            }
        },
        populateDisplay(viablePlantsArr) {
            let solution = viablePlantsArr[random(viablePlantsArr.length)]
            this.populateTweet(solution)
            $(".content-section__display__btns").show()
            $(".content-section__display").toggleClass("display--grid")
            $(".content-section__display").show().animate({ opacity: 1 }, 1000, function () { console.log("fading in") })
            $(".content-section__display__img").attr("src", solution.img)
            $(".content-section__display__title").text(solution.name)
            $(".display__text-box__link").attr("href", solution.link)
            for(fact in solution.info) {
                $(".display__text-box__list").append(`<li class="display__text-box__list__item">${solution["info"][fact]}</li>`)
            }
        },
        populateTweet(solution) {
            $(".twitter-share-button").attr("href", 
                `https://twitter.com/intent/tweet?text=This%20year%20I'm%20growing%20a%20${solution.name}%20which%20grows%20in%20hardiness%20zone%20${solution.zone}%20or%20above!
                %0A${solution.twitterImg}
                %0ATake%20the%20quiz:&url=http://lucas-knight.com/grow_your_fruit/`
            )
        }

    },
    //Event listeners
    listeners() {
        const $container1 = $(".content-section__container1");
        const $container2 = $(".content-section__container2");
        const $container3 = $(".content-section__container3")

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
            $(".content-section__display").hide().css({ opacity: 0 }).toggleClass("display--grid");
            $(".content-section__display__btns").hide();
            $(".display__text-box__list").empty();
            $($container2).show();
        });
    },
    
    init() {
        this.listeners();
        $(".background").fadeIn(65000)
        this.background.addRow();
        this.background.interval();
        this.quiz.populateSelect();
    }
}

$(function() {
    app.init();
});
},{"./data/solutionObj":1,"./data/zonesObj":2,"./utils/utils":4}],4:[function(require,module,exports){
random = function(max) {
  return Math.floor(Math.random() * max)
}

module.exports = {
  random
}
},{}]},{},[3]);
