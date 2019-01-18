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
            const solution = viablePlantsArr[random(viablePlantsArr.length)]
            $(".content-section__display__btns").show()
            $(".content-section__display").toggleClass("display--grid")
            $(".content-section__display").show().animate({ opacity: 1 }, 1000)
            $(".content-section__display__img").attr("src", solution.img)
            $(".content-section__display__title").text(solution.name)
            $(".display__text-box__link").attr("href", solution.link)
            for(fact in solution.info) {
                $(".display__text-box__list").append(`<li class="display__text-box__list__item">${solution["info"][fact]}</li>`)
            }
            this.populateTweet(solution)
        },
        populateTweet(solution) {
            const article = this.getArticle({ ...solution })
            $(".twitter-share-button").attr("href", 
                `https://twitter.com/intent/tweet?text=This%20year%20I'm%20growing%20${article}%20${solution.name}%20which%20grows%20in%20hardiness%20zone%20${solution.zone}%20or%20above!
                %0A${solution.twitterImg}
                %0ATake%20the%20quiz:&url=http://lucas-knight.com/grow_your_fruit/`
            )
        },
        getArticle(solution) {
            const nameArr = solution.name.toLowerCase().split(" ")
            if(nameArr.length < 2) {
                return ''
            }
            const nameFirstLetter = nameArr[0].charAt(0)
            const vowels = ['e', 'a', 'i', 'o', 'u']
            if(vowels.includes(nameFirstLetter)) {
                return 'an'
            } else {
                return 'a'
            }
        }
    },
    // === event listeners ===
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