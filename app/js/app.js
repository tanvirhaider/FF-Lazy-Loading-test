

// @codekit-prepend "_GlobalVars.js"
// @codekit-prepend  "willow-js/stage.js"
// @codekit-prepend  "willow-js/sprite.js"



function init () {

    var STAGE = document.getElementById("willow-ad-container");
    var adContent = document.getElementById("messaging-content");

 
    adContainer = new Sprite({
        id:"adContainer",
        class: "adContainerStyle",
        container:adContent
    });

    var contentArea = new Sprite({
        id:'contentArea', 
        class: 'contentArea-style',
        container:adContainer.obj
    });

  
    // logo --------------------------------
    setTimeout(function(){ 
        var logo = new Sprite({
            id:'logo', 
            class: 'logo-style',
            container:contentArea.obj,
            image: '[%Logo%]'
        });

        var cta = new Sprite({
            id:'cta', 
            class: 'cta-style', 
            container:contentArea.obj, 
            text: {content: '[%CTA%]'}
        });

    }, 50);


    // header ------------------------------

    setTimeout(function(){ 
        var header = new Sprite({
            id:'header', 
            class: 'header-style', 
            container:contentArea.obj, 
            text: {content: '[%Headline%]'}
        });

    }, 100);

    setTimeout(function(){ 
        var summary = new Sprite({
            id:'summary', 
            class: 'summary-style', 
            container:contentArea.obj, 
            text: {content: '[%Summary%]'}
        });

    }, 150);


    // hero ------------------------------

    setTimeout(function(){ 
        var picArea = new Sprite({
            id:'picArea', 
            class: 'picArea-style',
            container:adContainer.obj,
            image: '[%Image%]'
        });

    }, 200);

}


init ();


