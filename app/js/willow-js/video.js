
// -------- ******* VIDEO ******* --------- 

var FirstQofVid;
var SecondQofVid;
var ThirdQofVid;

var quarterlyTracking = new Object();
quarterlyTracking.Q1 = true;
quarterlyTracking.Q2 = true;
quarterlyTracking.Q3 = true;


class createVideoPlayer {

    constructor(vidData) {

      //  console.log("vidData: ",vidData.counter);

        var playerContainer;      
        var imgW;
        var imgH;
    
        if (vidData.container)   { playerContainer = vidData.container;}
    
        var obj = document.createElement("video");
            obj.setAttribute('id', vidData.id);
            obj.setAttribute('playsinline', '');
    
            this.obj = obj;
    
            if (vidData.width) {
                imgW = vidData.width +'px';
                imgH = vidData.height +'px';
            }
            else {
                imgW = "100%";
                imgH = "100%";
            }

            if (vidData.class) {
                obj.className += vidData.class;
            }

            if (vidData.counter != undefined) {
                var newCounter = vidData.counter;
                obj.setAttribute('data-counter', newCounter );
               // console.log(" video counter is set: ",vidData.counter);
            }
    
            // var style = obj.style;
            // style.width = imgW;
            // style.height = imgH;
            // style.position = 'absolute';
            // style.objectFit = "cover";
           // style.objectFit = "contain";
            
            if (vidData.preload)    { obj.setAttribute('preload', 'auto' );  }
            if (vidData.autoplay)    { obj.autoplay = vidData.autoplay;}
            if (vidData.poster)      { 
               // console.log("is there a poster frame");
                obj.setAttribute('poster', vidData.poster);
            }
            if (vidData.controls)    { obj.controls = true; }
            if (vidData.muted)       { obj.muted = true;}
    
         //   obj.playsinline = true;
              
            var sourceMP4 = document.createElement("source"); 
            sourceMP4.type = "video/mp4";
            if (vidData.source) { 
                sourceMP4.src = vidData.source;
    
            }
            obj.appendChild(sourceMP4);
            playerContainer.appendChild(obj);
            obj.width = imgW;
            obj.height = imgH;
    
            if (vidData.playwithsound)  { 
                var PlayWitS = new Sprite({
                    id:vidData.id + "_play-with-sound",
                    position:"absolute",
                    container:playerContainer,
                    width: vidData.width,
                    height: vidData.height,
                    image: vidData.playwithsound,
                    click: {function: restartVid}
                });
            }
    
            if (vidData.endframe) {
                var VendScr = new Sprite({
                    id:vidData.id + "_video-end-frame",
                    container:playerContainer,
                    class: "end-frame-style",
                    image: vidData.endframe,
                    display: "none",
                    click: {function: restartVid}
                });
            }
    
            obj.addEventListener('ended', function(){
              // EB.userActionCounter("video-Q4-completed");

               if (this.dataset.counter != undefined) {
                    var counterValue = this.dataset.counter;

                    if (counterValue == 0)       {   EB.userActionCounter("video-Q4-completed"); }
                    else if (counterValue == 1)  {   EB.userActionCounter("video_2-Q4-completed"); }
                    else if (counterValue == 2)  {   EB.userActionCounter("video_3-Q4-completed"); }
                    else if (counterValue == 3)  {   EB.userActionCounter("video_3-Q4-completed"); }
                    else if (counterValue == 4)  {   EB.userActionCounter("video_3-Q4-completed"); }
               }
              
                if (vidData.endframe) {
                        VendScr.obj.style.display = "block";
                        if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){TweenMax.set(VendScr.obj,{css:{opacity:1}});}
                        else {TweenMax.from(VendScr.obj,1,{css:{opacity:0}});}
                    }
                if (vidData.playwithsound) {PlayWitS.obj.style.display = "none";}
                if (vidData.callBack) { vidData.callBack();}
            });
    
             function activateWithDelay (whichOne,indexVal) {
                window.setTimeout(function(){
                   // whichOne = true;

                    if (indexVal == 0) {
                        if (whichOne == "q1")       {   EB.userActionCounter("video-Q1-completed"); }
                        else if (whichOne == "q2")  {   EB.userActionCounter("video-Q2-completed"); }
                        else if (whichOne == "q3")  {   EB.userActionCounter("video-Q3-completed"); }
                    }
                    else if (indexVal == 1) {
                        if (whichOne == "q1")       {   EB.userActionCounter("video_2-Q1-completed"); }
                        else if (whichOne == "q2")  {   EB.userActionCounter("video_2-Q2-completed"); }
                        else if (whichOne == "q3")  {   EB.userActionCounter("video_2-Q3-completed"); }
                    }

                    else if (indexVal == 2) {
                        if (whichOne == "q1")       {   EB.userActionCounter("video_3-Q1-completed"); }
                        else if (whichOne == "q2")  {   EB.userActionCounter("video_3-Q2-completed"); }
                        else if (whichOne == "q3")  {   EB.userActionCounter("video_3-Q3-completed"); }
                    }

                    else if (indexVal == 3) {
                        if (whichOne == "q1")       {   EB.userActionCounter("video_4-Q1-completed"); }
                        else if (whichOne == "q2")  {   EB.userActionCounter("video_4-Q2-completed"); }
                        else if (whichOne == "q3")  {   EB.userActionCounter("video_4-Q3-completed"); }
                    }

                    else if (indexVal == 4) {
                        if (whichOne == "q1")       {   EB.userActionCounter("video_5-Q1-completed"); }
                        else if (whichOne == "q2")  {   EB.userActionCounter("video_5-Q2-completed"); }
                        else if (whichOne == "q3")  {   EB.userActionCounter("video_5-Q3-completed"); }
                    }
                   
                },1000);
            }
    
            obj.addEventListener('timeupdate', function(){

                var counterValue = this.dataset.counter;
                //console.log(counterValue);

                var currentTimeinMiliSeconds = Math.round(obj.currentTime * 1000);
                if (vidData.cue) {
                  //  console.log("there is a cue point");
                    var cuePoint = Math.round(vidData.cue);

                    if (currentTimeinMiliSeconds > cuePoint) {
                        vidData.cueCallBack();
                    }
                }
             
                var calculatedCurrentTime = Math.round(obj.currentTime);
                if (calculatedCurrentTime == FirstQofVid)
                {
                    if (quarterlyTracking.Q1 == true){
                        quarterlyTracking.Q1 = false;
                        activateWithDelay("q1",counterValue);
                    }
                }
    
                if (calculatedCurrentTime == SecondQofVid)
                {
                    if (quarterlyTracking.Q2 == true){
                        quarterlyTracking.Q2 = false;
                        activateWithDelay("q2",counterValue);
                    }
                }
    
                if (calculatedCurrentTime == ThirdQofVid)
                {
                    if (quarterlyTracking.Q3 == true){
                        quarterlyTracking.Q3 = false;
                        activateWithDelay("q3",counterValue);
                    }
                }
            });
    
             function restartVid (event)
              {
                quarterlyTracking.Q1 = true;
                quarterlyTracking.Q2 = true;
                quarterlyTracking.Q3 = true;
                var desktopVideoPlayer = document.getElementById(vidData.id);
                //desktopVideoPlayer.muted = false;
                desktopVideoPlayer.pause();
                desktopVideoPlayer.currentTime = 0;
                desktopVideoPlayer.load();
                if (vidData.playwithsound)    {PlayWitS.obj.style.display = "none";}
                if (vidData.endframe)         {VendScr.obj.style.display = "none";}
              }
    

        this.updateMetaData ();
    
        video = obj;
        try { var videoTrackingModule = new EBG.VideoModule(video); } catch(Error) {}
    
        console.groupEnd();
    }

    updateMetaData () {
        var obj = this.obj;
        obj.onloadedmetadata = function() {
            videoDuration = obj.duration;
            FirstQofVid = Math.round(videoDuration/4);
            SecondQofVid = Math.round(videoDuration/2);
            ThirdQofVid = Math.round((videoDuration/4) *3);
            //console.log("video duration:",videoDuration);
        };
    }

    newVideo (data) {

        var obj = this.obj;

        if (data.counter) {
            var newCounter = data.counter;
            obj.setAttribute('data-counter', newCounter );
        }

        quarterlyTracking.Q1 = true;
        quarterlyTracking.Q2 = true;
        quarterlyTracking.Q3 = true;

       

        obj.firstChild.src = data.url;
        obj.currentTime = 0;
        obj.autoplay = true;
        obj.muted = data.muted;
        obj.load();
    
        if (data.poster) {
            try {
                var poster = obj.nextSibling;
                poster.style.display = "none";
                poster.style.backgroundImage = 'url(' + data.poster + ')';
            }
            catch (Error) {}
        }

      //  video = obj;
     //   try { var videoTrackingModule = new EBG.VideoModule(video); } catch(Error) {}
    }

    pause () {
        var obj = this.obj;
        obj.pause();  
    }

    play () {
        var obj = this.obj;
        obj.autoplay = true;
        obj.muted = false;
        obj.play();  
    }

    mute () {
        var obj = this.obj;
        obj.muted = true;
    }

    unmute () {
        var obj = this.obj;
        obj.muted = false;
    }

    updatePlayhead (whichOne) {
        var obj = this.obj;
        obj.currentTime = whichOne;
        obj.autoplay = true;
        obj.muted = false;
        obj.play();  
    }

    currentTime () {
        var obj = this.obj;
        return obj.currentTime;
    }

    resize (w,h) {
        try {
            var obj = this.obj;
            var vdoPlayerID = obj.id;
            var vdoPlayerEndFrameID = vdoPlayerID + "_video-end-frame";
            obj.height = h;
            obj.width = w;
            obj.style.height = h + "px";
            obj.style.width = w + "px";
            obj.style.backgroundSize = "cover";
            obj.nextElementSibling.style.height = h + "px";
            obj.nextElementSibling.style.width = w + "px";
            obj.nextElementSibling.style.backgroundSize = "cover";
            var poster = obj.nextSibling;
            poster.style.height = h + "px";
            poster.style.width = w + "px";
            poster.style.backgroundSize = "cover";
        }
        catch (Err) {}
    }
}



