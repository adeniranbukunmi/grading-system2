var song = "Audio/eyi_kii_se_opin.mp3"
var songToPlay = new Audio(song)
var  song =  "Audio/Johnny_Drille_-_For_You.mp3"
var  song2ToPlay =new Audio(song)

var  song =  "Audio/song1.mp3"
var  song3ToPlay =new Audio(song)

var  song =  "Audio/Kcee_-_Ft_Teni_Skiibii_Ebelebe.mp3"
var  song4ToPlay =new Audio(song)

var  song =  "Audio/stand up.mp3"
var  song5ToPlay =new Audio(song)



function calcu (){
    if (num.value == "") {
        alert("Please Fill In The Required Space")}
    else if (num.value >=0 && num.value <= 40){
            showData.innerHTML="F-FAIL 😒"
            songToPlay.play()
            song2ToPlay.pause()
            song3ToPlay.pause()
            song4ToPlay.pause()
            song5ToPlay.pause()


        }
    else  if(num.value >=  40 && num.value <=45){
            showData.innerHTML="E- Pass 😂"
            songToPlay.play()
            song2ToPlay.pause()
            song3ToPlay.pause()
            song4ToPlay.pause()
            song5ToPlay.pause()

        }
    else  if(num.value >= 45 && num.value <=50 ){ 
            showData.innerHTML="D- Pass 🤣"
            song2ToPlay.play()
            songToPlay.pause()
            song3ToPlay.pause()
            song4ToPlay.pause()
            song5ToPlay.pause()

        }
    else  if(num.value >= 50 && num.value <=60){
            showData.innerHTML="C- Credit 👍"
            
            song3ToPlay.play()
            songToPlay.pause()
            song2ToPlay.pause()
            song4ToPlay.pause()
            song5ToPlay.pause()


        }
    else  if(num.value >= 60 && num.value <=65){
        showData.innerHTML="B3 -Good 😍"
        song4ToPlay.play()
        song3ToPlay.pause()
        songToPlay.pause()
        song2ToPlay.pause()
        song5ToPlay.pause()

    }
    else  if(num.value >= 65 && num.value <=70){
        showData.innerHTML="B2 Very-Good 😍 "
        song4ToPlay.play()
        song3ToPlay.pause()
        songToPlay.pause()
        song2ToPlay.pause()
        song5ToPlay.pause()
    }
    else  if(num.value >= 70 && num.value <=100){
        showData.innerHTML="A- Excellent 🙌 😘"
        song5ToPlay.play()
        song4ToPlay.pause()
        song3ToPlay.pause()
        songToPlay.pause()
        song2ToPlay.pause()
    }
    else{
        alert("invalid input")
    }
}




