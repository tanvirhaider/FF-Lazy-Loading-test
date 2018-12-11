

// @codekit-prepend "_GlobalVars.js"
// @codekit-prepend  "willow-js/stage.js"
// @codekit-prepend  "willow-js/sprite.js"


function generateAhref (data){

    console.log(data);

    var holderDiv = document.createElement("div");
    var parentDiv;

    if (data.id) {holderDiv.setAttribute('id', data.id);}
    if (data.position) { holderDiv.style.position = data.position;}
    else {holderDiv.style.position = "absolute";}

    if (data.target) {var mydiv = document.getElementById(data.target);}

    if (data.container) { parentDiv = document.getElementById(data.container);}
    else { parentDiv = mydiv.parentElement;}

    var aTag = document.createElement('a');

    if (data.link) {aTag.setAttribute('href',data.link.content);}
    if (data.link.target) {aTag.setAttribute('target',data.link.target);} else {aTag.setAttribute('target',"_blank");}
    if (data.link.function) {aTag.onclick = data.link.function;}

    aTag.appendChild(mydiv);
    holderDiv.appendChild(aTag);
    parentDiv.appendChild(holderDiv);
}




function init () {

    var STAGE = document.getElementById("willow-ad-container");
    var adContent = document.getElementById("messaging-content");

    generateAhref ({
        link: {
            content: "%%CLICK_URL_UNESC%%%%DEST_URL_UNESC%%"
        },
        target: "messaging-content",
        id: "messaging-contentAtag"
    });


    function exits (whichOne) {
        console.log(whichOne);
    }

 
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


