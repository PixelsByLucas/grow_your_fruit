const app = {};

// solutionObj used as the key to determine which plant to return to the user
app.solutionObj = {
    tree: {
        honeySweetPear: {
            zone: 4,
            type: 'European Pear Tree',
            name: 'Honey Sweet Pear Tree',
            img: 'https://www.starkbros.com/images/dynamic/1613-960x960.jpg',
            info: 'Similar to the well known Sugar Pear but in a larger, longer keeping fruit.  Delectable, smooth, creamy flesh is super sweet and firm.  Honey Sweet is hardy and resistant to fireblight and foliage diseases.  It is one of the few pears that will set fruit without a pollenizer, but the fruit will be bigger if you have another varierty nearby.  Ripens early September.',
            link: 'https://www.backyardgardener.com/plantname/pyrus-communis-honeysweet-pear/'
        },
        moonglowPear: {
            zone: 4,
            type: 'European Pear Tree',
            name: 'Moonglow Pear Tree',
            img: 'https://cdn.shopify.com/s/files/1/1488/2350/products/moonglow_pear.jpg?v=1475087811',
            info: 'A medium to large sized yellow fruit with a pink blush.  Soft, juicy, white flesh and almost no grit.  Excellent mild flavour that is well suited for fresh eating or canning.  Stores well.  Moonglow is a healthy tree that is fireblight resistant.  Good choice for commercial production or home gardens.  Ripens to peak flavour in cold storage for 10 to 15 days after picking.',
            link: 'https://www.backyardgardener.com/plantname/pyrus-communis-moonglow-pear/'
        },
        chojuroRumPear: {
            zone: 5,
            type: 'Asian Pear Tree',
            name: 'Chojuro Rum Pear Tree',
            img: 'https://www.starkbros.com/images/dynamic/1617-960x960.jpg',
            info: 'Sometimes called "old world", it originated in Japan back in 1895.  Medium to large, dark golden fruit has a rich, distinctive, rum-like flavour.  Mid-size tree is vigorous, early-bearing and productive.  Stores for up to 6 months.',
            link: 'https://www.backyardgardener.com/plantname/pyrus-pyrifolia-chojuro-asian-pear/'
        },
        pawPawTree: {
            zone: 5,
            type: 'Paw Paw Tree',
            name: 'Paw Paw Tree',
            img: 'https://c4media.naturehills.com/media/catalog/product/cache/afad95d7734d2fa6d0a8ba78597182b7/p/a/paw_paw_fruit_425x425.jpg',
            info: 'Long before Columbus sailed the ocean blue, North American Indians were enjoying the vanilla custard flavoured flesh of this northern banana.  Large, lush, drooping leaves give the pawpaw a tropical appearance.  A slow growing pyramid shaped tree, it can reach anywhere from 10-25ft at maturity.  It has virtually no insect or diseas problems and requires very little pruning.  This exotic and fascinating native tree is in high demand.',
            link: 'https://www.thestar.com/life/2016/09/16/pawpaw-is-a-tropical-fruit-that-actually-grows-in-ontario.html'
        },
        persimmonTree: {
            zone: 5,
            type: 'Persimmon Tree',
            name: 'Persimmon Tree',
            img: 'https://i.pinimg.com/originals/7e/16/64/7e16643cc31fd70debda6bd8190d5146.jpg',
            info: 'How does one describe a persimmon... Perhaps you could imagine a perfect orb of apricot jelly, solid enough to bite into, yet jelly enough that it drips down your chin... A persimmon is one thing in life you must try for yourself!  Please eat only very ripe fruit as an under ripe Persimmon is very astringent!  This member of the ebony family can reach 50 feet in height and bears small orange fruit, 1-2 inches in diameter.  Persimmon trees are dioecious and require both female and male trees to set fruit!',
            link: 'https://en.wikipedia.org/wiki/Persimmon'
        },
        medlarTree: {
            zone: 5,
            type: 'Medlar Tree',
            name: 'Royal Medlar Tree',
            img: 'https://cdn.gardenista.com/wp-content/uploads/2015/04/fields/medlar%20tree%20shape%20and%20topiary.jpg',
            info: 'Medlar trees with their sweet, soft and delicious apple-like fruit are very rare and quite unique.  Their history goes back to medieval times in England and Europe.  In the Middle Ages most walled monastery gardens included a number of these graggy but elegant trees.  A medlar in bloom will rival a rose bush in dignified beauty with its large white blossoms nestled in a whorl of dark green leaves.',
            link: 'https://en.wikipedia.org/wiki/Mespilus_germanica'
        },
        wanetaPlum: {
            zone: 2.5,
            type: 'Plum Tree',
            name: 'Waneta Plum Tree',
            img: 'https://www.horsfordnursery.com/wp-content/uploads/2017/03/xPrunus20Waneta.jpg',
            info: 'Waneta was named after a Yanktonai Indian chief who became famous in the War of 1812.  Introduced by NE Hanson of South Dakota in 1913, the extremely cold hardy tree is reliable, productive and precocious.  Very large, maroon-red, pointy shaped plums have tender, sweet moderately juicy orange flesh and a small pit.  High quality fruit is fine for fresh use or processing.',
            link: 'https://www.starkbros.com/products/fruit-trees/plum-trees/waneta-plum'
        }

    },
    bush: {
        loganberry: {
            zone: 6,
            type: 'Blackberry, Raspberry Cross',
            name: 'Loganberry',
            img: 'https://www.scotplantsdirect.co.uk/image/cache/data/BOYSENBERRIES/BOYSENBERRY%20HEDGE/boysenberry%20bush-500x500.jpg',
            info: 'Discovered in California in the late 1800s, it is believed to be a cross of wild blackberry and red raspberry.  Large, tender, dark red, elongated berries have their own uniquely delictable taste that is considered by many people to be second to none.  Loganberry juice is highly regarded for its health boosting properties.  Other uses include baking, freezing preserves and wine besides fresh eating.  The fruit ripens over an extended time period.  Give the trailing canes a trellis and winter protection.',
            link: 'https://en.wikipedia.org/wiki/Loganberry'
        },
        goumiBerry: {
            zone: 5,
            type: 'Goumi Bush',
            name: 'Goumi Bush',
            img: 'https://st.hzcdn.com/simgs/e03238f504b0429c_8-7534/home-design.jpg',
            info: 'The most compact, desirable and hard-to-find member of the nitrogen-fixing eleagnus family.  Goumi bushes are usually only 3, high and wide at maturity.  The slender leaves are dark green on the upper side and silvery below which creates a shimmering effect when a light breeze stirs the foliage.  In late spring the bush is covered in a fragrant haze of small yellow flowers folloowed by glossy, cherry-red fruits flecked with silver.  They contain a single hard seed and have a sprightly, refreshing flavour.',
            link: 'https://en.wikipedia.org/wiki/Elaeagnus_multiflora'
        },
        blackBeautyMulberryBush: {
            zone: 4.5,
            type: 'Mulberry Bush',
            name: 'Black Beauty Mulberry Bush',
            img: 'https://plant.daleysfruit.com.au/ml/mulberry-black-english-1894.jpg',
            info: 'This variety of Persian mulberry produces flavourful blackberry-like fruit that is large, juicy and black.  Can be used for fresh eating, deserts, jam, wine and the list goes on!  It ripens over an extended period of time from early to mid-summer.',
            link: 'https://www.growingmulberry.org/morus-nigra'
        },
        wonderfulPineberry: {
            zone: 4,
            type: 'Strawberry',
            name: 'Wonderful Pineberry',
            img: 'https://www.fast-growing-trees.com/images/D/Wonderful-Pineberry-Pot-450w.jpg',
            info: 'Demand is strong for this wonderful new variety.  Attractive white berries accented with holiday red seeds add an intriguing dimension to any fruit salad.  The pineberry part of the name refers to the delicious pineapple flavour that distinguishes this sweet, aromatic berry.  Firm, medium sized fruit from a hardy, everbearing plant that you can easily tuck into your flowerbed or use as a ground cover.  Also ideal for hanging pots as it produces few runners.',
            link: 'https://www.starkbros.com/growing-guide/article/all-about-pineberry'
        },
        elderberry: {
            zone: 4,
            type: 'Elderberry',
            name: 'Elderberry',
            img: 'https://img.aws.livestrongcdn.com/ls-article-image-673/ds-photo/getty/article/232/44/487676436.jpg',
            info: 'Here is a plant that is finally getting the attention it deserves.  Numerous new scientific studies are now verifying the benefits that previous generations have observed.  Not only is elderberry juice extremely high in antioxidants, the particular antioxidants found in elderberries have a proven antiviral effect as well.',
            link: 'https://www.backyardgardener.com/plantname/sambucus-nigra-elderberry/'
        },
        schisandraVine: {
            zone: 4,
            type: 'Schisandra Vine',
            name: 'Schisandra Vine',
            img: 'https://ae01.alicdn.com/kf/HTB1xlQlOVXXXXXxaFXXq6xXFXXXr/50-pcs-bag-schisandra-Seeds-DIY-Home-Garden-Plant-Chinese-Magnolia-Vine-Edible-Fruit-Seeds-Free.jpg',
            info: 'This superberry is native to northeastern China and parts of Russia.  The Chinese name "Wu Wei Zu" means five flavoured berry, referring to its feat of being sweet, sour, salty, bitter and pungent all at the same time..  Although it is sometimes eaten fresh, Schisandra berries are more often dried and used in medicinal extracts.  Despite being extensively used in China for well over two centuries, it is just now becoming known in North America.  Study after study have validated the wide ranging claims of its adaptogenic, anti-aging and immune-boosting properties so that Schisandra is now rightfully considered one of the most highly protective of all medicinal plants.',
            link: 'https://en.wikipedia.org/wiki/Schisandra_chinensis'
        },
        gojiBerry: {
            zone: 3,
            type: 'Goji Berry',
            name: 'Dynamite Goji Berry',
            img: 'https://ae01.alicdn.com/kf/HTB15gFQSFXXXXcJXVXXq6xXFXXXi/100pcs-Wolfberry-Seeds-Chinese-Goji-Berries-Seed-Health-Benefit-Medlar-Goji-Berry-Lycii-Seed-Dwarf-Bush.jpg_640x640q90.jpg',
            info: 'Native to Tibet, this superfood can grow in almost any soil type, even depleted soils as long as it is well drained.  The oblong bright orange-red fruit is most commonly dried, tasting like tart raisins, but they can also be eaten raw or added to soups and stews.  The young leaves and shoots are popular in Cantonese stir-fries.  The berries are packed with essential amino acids, vitamins and minerals which makes a potent elixir highly regarded as an immune system booster.  Other claims include: improved vision, increased white blood cell counts, better liver function and stronger muscles and bones.  An attractive 1.2 - 1.8 meter tall shrub, gojis have small, light purple, bell shaped flowers in spring.  Later the arching branches are loaded with crimson-orange berries.',
            link: 'https://www.rhs.org.uk/advice/profile?PID=581'
        },
        aroniaBerry: {
            zone: 3,
            type: 'Aronia Berry',
            name: 'Aronia Berry',
            img: 'https://i1.wp.com/www.justberryplants.co.za/wp-content/uploads/2017/11/Aronia-berry-black.jpg?fit=800%2C600',
            info: 'Native to North America, the Aronia berry is a tough, disease resistant shrub that boasts masses of white flowers in the spring, spectacular red leaves in the fall and bunches of small black berries that hang well into the winter.  The berries are packer with antioxidants making it one of the best super fruits with 58% mire antioxidant content than blueberries.  The fruit can be used to make jam, juice, wine and tea.  Aronia berries are incredibly easy to grow in almost any conditions.',
            link: 'https://www.backyardgardener.com/plantname/aronia-arbutifolia-red-chokeberry/'
        },
        autumnOlives: {
            zone: 3,
            type: 'Autumn Olives',
            name: 'Ruby Autumn Olives',
            img: 'https://mdc.mo.gov/sites/default/files/styles/centered_full/public/media/images/2011/08/autumnolive_08-02-11.jpg?itok=K6jTXEUK',
            info: 'Autumn olive also known as autumn silverberry, is a wide spreading shrub that can grow up to 5 meters tall.  It is not related to the olive but has similar looking grey-green leaves.  The pea-sized red berries ripen in late September and are loaded with the antioxidant lycopene which is reported to help protect against prostate and other cancers.  With lycopene levels 17 times higher than tomatoes, these berries make very healthy drinks or preserves.',
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
// Function to return random number between 0 - max
app.random = function(max) {
    return Math.floor(Math.random() * max);
}

// app.background holds all the code necessary to make the background work
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

// app.quiz holds all code necessary to make the quiz work
app.quiz = {};
app.quiz.cityArr = [];
app.quiz.userZone = 0;
app.quiz.userLocation = "";
app.quiz.userTreeBush = "";

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

    for (key in app.solutionObj[app.quiz.userTreeBush]){
        // console.log(key);
        if (app.solutionObj[app.quiz.userTreeBush][key]["zone"] <= app.quiz.userZone){
            console.log(key);
            app.quiz.viablePlantsArr.push(app.solutionObj[app.quiz.userTreeBush][key]);
            console.log(app.quiz.viablePlantsArr);
        }
    }
}

// app.viablePlantsArr = function () {
//   

//     for (let key in solutionObj[$treeOrBush]) {
//         if (solutionObj[$treeOrBush][key]['zone'] <= $userZone) { //Here we compare plant hardiness zone to user hardiness zone
//             viablePlantsArr.push(solutionObj[$treeOrBush][key]); //If the zones are compatible, we push the particular plant object into viablePlantsArr 
//         }
//     }
//     return viablePlantsArr[app.randomViablePlant(viablePlantsArr.length)];
// }

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

//Event listeners
app.listeners = function() {
    // Window resize listeners
    $(window).resize(function () {
        // Updates vpHeight value when window resized
        app.vpHeight = $('main').height();
        //Updates iconHeight value when window resizes
        app.background.iconHeight = $(".background__roster__icon").height();
    });
    $('.content-section__container1__btn').on('click', function(e){
        e.preventDefault();
        $('.content-section__container1').hide();
        $('.content-section__container2').show();
    });
    $(".content-section__container2__btn").on("click", function(e){
        e.preventDefault();
        $('.content-section__container2').hide();
        $('.content-section__container3').show();
        app.quiz.userLocation = $(".content-section__container2__select option:selected").val();
        app.quiz.findUserZone();
    });
    $(".content-section__container3__btn").on("click", function(e){
        e.preventDefault();
        $(".content-section__container3").hide();
        app.quiz.userTreeBush = $("input[name=tree-bush]:checked").val();
        app.quiz.viablePlantsArr();
    });
}

app.init = function(){
    app.listeners();
    app.background.addRow();
    app.background.interval();
    app.quiz.objToArr();
}
$(function(){
    app.init();
});