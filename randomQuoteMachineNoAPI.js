$(function () {
    var projector = document.createElement("audio");
    var source = "http://k003.kiwi6.com/hotlink/s87mpqw9qa/Projector.mp3";
    projector.src = source;
    projector.play();
    return projector;
});

$(document).ready(function() {

  $(".films").css ({
    "background-image": "url(http://image.ibb.co/dxdUFb/film.jpg)",
    "background-repeat": "repeat-x",
    "position": "fixed",
    "width": "100%",
    "padding": "25",
    "z-index": "1",
    });

  $(".top").css ({ "top": "0" });
  $(".bottom").css ({ "bottom": "0" });

  $("#poster").hover (
    function() {
    $("#poster").css("opacity", "1");
    $("#text, #title").css("opacity", "0.15"); },
    function() {
    $("#poster").css("opacity", "0.25");
    $("#text, #title").css("opacity", "1");
    });

  $("#text").css ( "fontSize", "1.1em" );
  $("#title").css ( "font-family", "Cinzel Decorative", "cursive" );
  $("#button-quote, #tweet").css ( "fontSize", "3em" );

  music();
  quotes();
  
  $("#button-quote").click(function() { quotes(); });

});

function quotes() {

    $("#text, #title, #poster").empty();

    function background() {
     var hex = "0123456789ABCDEF";
     var colors = "#" + "";
     for (var i=0; i<6; i++) {
     colors += hex[Math.floor(Math.random() * 16)]; }
     return colors;
    }

    $("body").css("background-color", background());
    $("#poster").css("background-color", background());
    $("#tweet").css("color", background());

    var films = [{
      title: "The Godfather",
      quote: "My father made him an offer he couldn't refuse.",
      poster: "<img src='https://image.tmdb.org/t/p/original/ubO1zBNGhxUH4Ni3BKmFO1TaQAJ.jpg'>"
      },{
      title: "The Godfather",
      quote: "It means Luca Brasi sleeps with the fishes.",
      poster: "<img src='https://image.tmdb.org/t/p/original/d4KNaTrltq6bpkFS01pYtyXa09m.jpg'>"
      },{
      title: "The Godfather Part II",
      quote: "My father taught me many things here - he taught me in this room. He taught me: keep your friends close, but your enemies closer.",
      poster: "<img src='https://image.tmdb.org/t/p/original/tqigQLUoG8YEaInfBEWsstOVxjr.jpg'>"
      },{
      title: "The Godfather Part II",
      quote: "Michael, we're bigger than U.S. Steel.",
       poster: "<img src='https://image.tmdb.org/t/p/original/tHbMIIF51rguMNSastqoQwR0sBs.jpg'>"
      },{
      title: "The Dark Knight",
      quote: "All you care about is money. This city deserves a better class of criminal. And I'm gonna give it to them!",
      poster: "<img src='https://image.tmdb.org/t/p/original/92uIElFHOabvamxBlhEVma7oqQR.jpg'>"
      },{
      title: "The Dark Knight",
      quote: "You see, madness, as you know, is like gravity. All it takes is a little push!",
      poster: "<img src='https://image.tmdb.org/t/p/original/teMyM4NyhkSAWd3uBatXQYMQLU0.jpg'>"
      },{
      title: "12 Angry Men",
      quote: "Listen to me. We're... This kid on trial here... his type, well, don't you know about them? There's a, there's a danger here. These people are dangerous. They're wild. Listen to me. Listen.",
      poster: "<img src='https://image.tmdb.org/t/p/original/qcL1YfkCxfhsdO6sDDJ0PpzMF9n.jpg'>"
      },{
      title: "12 Angry Men",
      quote: "We may be trying to let a guilty man go free, I don't know. Nobody really can. But we have a reasonable doubt, and that's something that's very valuable in our system. No jury can declare a man guilty unless it's sure.",
      poster: "<img src='https://image.tmdb.org/t/p/original/wvlFtIwh0GIqHRAz9F5cCch2IJD.jpg'>"
      },{
      title: "Schindler's List",
      quote: "This list... is an absolute good. The list is life. All around its margins lies the gulf.",
      poster: "<img src='https://image.tmdb.org/t/p/original/yPisjyLweCl1tbgwgtzBCNCBle.jpg'>"
      },{
      title: "Schindler's List",
      quote: "It's Hebrew, it's from the Talmud. It says, 'Whoever saves one life, saves the world entire.'",
      poster: "<img src='https://image.tmdb.org/t/p/original/uJQHamlmKKP9M77iOFVOCWTuwIj.jpg'>"
      },{
      title: "Il buono, il brutto, il cattivo",
      quote: "You want to know who you are? Huh? You want to know who's son you are? You don't, I do, everybody does... you're the son of a thousand fathers, all bastards like you.",
      poster: "<img src='https://image.tmdb.org/t/p/original/c2kF4gdJSBS764bXczt2Kl5SpPZ.jpg'>"
      },{
      title: "Il buono, il brutto, il cattivo",
      quote: "You see, in this world there's two kinds of people, my friend: Those with loaded guns and those who dig. You dig.",
      poster: "<img src='https://image.tmdb.org/t/p/original/wfPHdfofBD5PN96dV96a51B3Ja2.jpg'>"
      },{
      title: "The Lord of the Rings: The Return of the King",
      quote: "Certainty of death. Small chance of success. What are we waiting for?",
      poster: "<img src='https://image.tmdb.org/t/p/original/j6NCjU6Zh7SkfIeN5zDaoTmBn4m.jpg'>"
      },{
      title: "The Lord of the Rings: The Return of the King",
      quote: "I can't carry it for you, but I can carry you.",
      poster: "<img src='https://image.tmdb.org/t/p/original/c6jYmrSTTmhHwgeUuhcgfbsDSiP.jpg'>"
      },{
      title: "Fight Club",
      quote: "The things you own end up owning you.",
      poster: "<img src='https://image.tmdb.org/t/p/original/dXRuldPtua2kJccNTugCix2V6tD.jpg'>"
      },{
      title: "Fight Club",
      quote: "Welcome to Fight Club. The first rule of Fight Club is: you do not talk about Fight Club.",
      poster: "<img src='https://image.tmdb.org/t/p/original/hpt3aa5i0TrSAnEdl3VJrRrje8C.jpg'>"
      },{
      title: "The Lord of the Rings: The Fellowship of the Ring",
      quote: "In the land of Mordor, in the fires of Mount Doom, the Dark Lord Sauron forged in secret, a master ring, to control all others.",
      poster: "<img src='https://image.tmdb.org/t/p/original/yi1FcsfMpvuIWeSvV2xBoDmhJw4.jpg'>"
      },{
      title: "The Lord of the Rings: The Fellowship of the Ring",
      quote: " In the common tongue it reads 'One Ring to Rule Them All. One Ring to Find Them. One Ring to Bring Them All and In The Darkness Bind Them.'",
      poster: "<img src='https://image.tmdb.org/t/p/original/9HG6pINW1KoFTAKY3LdybkoOKAm.jpg'>"
      },{
      title: "Star Wars: Episode V - The Empire Strikes Back",
      quote: "No. Try not. Do... or do not. There is no try.",
      poster: "<img src='https://image.tmdb.org/t/p/original/4OJwe3xBo1EiATWJ7CmI0Xea2U6.jpg'>"
      },{
      title: "Star Wars: Episode V - The Empire Strikes Back",
      quote: "The force is with you, young Skywalker, but you are not a Jedi yet.",
      poster: "<img src='https://image.tmdb.org/t/p/original/8PEvRNA9LghFLrYSD8bBjPkSgIG.jpg'>"
      },{
      title: "Inception",
      quote: "An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.",
      poster: "<img src='https://image.tmdb.org/t/p/original/tAXARVreJnWfoANIHASmgYk4SB0.jpg'>"
      },{
      title: "Inception",
      quote: "If we are gonna perform Inception then we need imagination.",
      poster: "<img src='https://image.tmdb.org/t/p/original/9qFzQ7x4KeolkPYtk0G7huA724B.jpg'>"
      },{
      title: "The Matrix",
      quote: "Welcome to the desert of the real.",
      poster: "<img src='https://image.tmdb.org/t/p/original/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg'>"
      },{
      title: "The Matrix",
      quote: "What is real? How do you define 'real'? If you're talking about what you can feel, what you can smell, what you can taste and see, then 'real' is simply electrical signals interpreted by your brain.",
      poster: "<img src='https://image.tmdb.org/t/p/original/p6goxqP4rd4MDJtkrhpXcDo67IN.jpg'>"
      },{
      title: "La vita è bella",
      quote: "Buon giorno, Principessa!",
      poster: "<img src='https://image.tmdb.org/t/p/original/oCwn7hReh3Y6KQZqwiBy8GJ9lTp.jpg'>"
      },{
      title: "La vita è bella",
      quote: "You can lose all your points for any one of three things. One: If you cry. Two: If you ask to see your mother. Three: If you're hungry and ask for a snack! Forget it!",
      poster: "<img src='https://image.tmdb.org/t/p/original/f7DImXDebOs148U4uPjI61iDvaK.jpg'>"
      },{
      title: "Léon",
      quote: "Leon, I think I'm kinda falling in love with you.",
      poster: "<img src='https://image.tmdb.org/t/p/original/rC3Irg7b1qwu05yjpuzys81AexU.jpg'>"
      },{
      title: "Léon",
      quote: "It's my best friend. Always happy. No questions.",
      poster: "<img src='https://image.tmdb.org/t/p/original/gE8S02QUOhVnAmYu4tcrBlMTujz.jpg'>"
      },{
      title: "The Pianist",
      quote: " I love to see a woman playing the cello.",
      poster: "<img src='https://image.tmdb.org/t/p/original/iunmxWkOi7Vk17Ob3G2HwwjgHsr.jpg'>"
      },{
      title: "The Pianist",
      quote: "They all want to be better Nazis than Hitler.",
      poster: "<img src='https://image.tmdb.org/t/p/original/hfMeo073RxKKjZZV4gSGema1yog.jpg'>"
      },{
      title: "Gladiator",
      quote: "My name is Gladiator.",
      poster: "<img src='https://image.tmdb.org/t/p/original/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg'>"
      },{
      title: "Gladiator",
      quote: "And now we are Free. I will see you again... but not yet... Not yet!",
      poster: "<img src='https://image.tmdb.org/t/p/original/3hqCDebxsAvFcZ5UoRs0KDLZh92.jpg'>"
      },{
      title: "Memento",
      quote: " I have to believe in a world outside my own mind. I have to believe that my actions still have meaning, even if I can't remember them. ",
      poster: "<img src='https://image.tmdb.org/t/p/original/fQMSaP88cf1nz4qwuNEEFtazuDM.jpg'>"
      },{
      title: "Memento",
      quote: "I can't remember to forget you.",
      poster: "<img src='https://image.tmdb.org/t/p/original/AiN06Oq5wvftiJT0j2kA0lCveZR.jpg'>"
      },{
      title: "The Great Dictator",
      quote: "I'm a vegetarian",
      poster: "<img src='https://image.tmdb.org/t/p/original/s46T7w3Cyw4PsS4pxssnsohK5gU.jpg'>"
      },{
      title: "The Great Dictator",
      quote: "Our knowledge has made us cynical; our cleverness, hard and unkind. We think too much and feel too little. More than machinery, we need humanity. More than cleverness, we need kindness and gentleness. Without these qualities, life will be violent and all will be lost.",
      poster: "<img src='https://image.tmdb.org/t/p/original/yYMxGeii9NUOM0r6QRqw9gxnhBm.jpg'>"
      },{
      title: "Le fabuleux destin d'Amélie Poulain",
      quote: "At least you'll never be a vegetable - even artichokes have hearts.",
      poster: "<img src='https://image.tmdb.org/t/p/original/tDOzV7CeC1PplhmNTxbTq4uCxt6.jpg'>"
      },{
      title: "Le fabuleux destin d'Amélie Poulain",
      quote: "I had two heart attacks, an abortion, did crack... while I was pregnant. Other than that, I'm fine.",
      poster: "<img src='https://image.tmdb.org/t/p/original/xvYhM98azPftMCKKrv7oqZRFCGc.jpg'>"
      },{
      title: "Amadeus",
      quote: "I will speak for you, Father. I speak for all mediocrities in the world. I am their champion. I am their patron saint.",
      poster: "<img src='https://image.tmdb.org/t/p/original/chNMAdhSpUslHU4dsmIVvlvnDq9.jpg'>"
      },{
      title: "Amadeus",
      quote: "My dear young man, don't take it too hard. Your work is ingenious. It's quality work. And there are simply too many notes, that's all. Just cut a few and it will be perfect.",
      poster: "<img src='https://image.tmdb.org/t/p/original/flnoqdC38mbaulAeptjynOFO7yi.jpg'>"
      },{
      title: "Blade Runner",
      quote: " I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time to die.",
      poster: "<img src='https://image.tmdb.org/t/p/original/lBi7H6vc0YcYe6B1aFGA7Dzl53Z.jpg'>"
      },{
      title: "Blade Runner",
      quote: "Replicants are like any other machine - they're either a benefit or a hazard. If they're a benefit, it's not my problem.",
      poster: "<img src='https://image.tmdb.org/t/p/original/yC1jADtfCp599IORuVXxTvd9o3u.jpg'>"
      },{
      title: "Det sjunde inseglet",
      quote: "I want knowledge! Not faith, not assumptions, but knowledge. I want God to stretch out His hand, uncover His face and speak to me.",
      poster: "<img src='https://image.tmdb.org/t/p/original/iJXSumDrz64AvmFZaHHNBGDO1ex.jpg'>"
      },{
      title: "Det sjunde inseglet",
      quote: "We must make an idol of our fear, and call it god.",
      poster: "<img src='https://image.tmdb.org/t/p/original/r1FHspwMYbo8Z6IYQ8GDLSxis6B.jpg'>"
      },{
      title: "Superman",
      quote: "Um, sorry, Miss Lane, I didn't mean to embarrass you.",
      poster: "<img src='https://image.tmdb.org/t/p/original/39VN1fypFcdLmu9LapMK4sUahUP.jpg'>"
      },{
      title: "Superman",
      quote: "Ha ha, I told you. That's kryptonite, Superman. A little piece of the rock you were born on. I've spared no expense to make you feel right at home.",
      poster: "<img src='https://image.tmdb.org/t/p/original/n2DOECThGG7h7m5AjLi2Nuh23u1.jpg'>"
      },{
      title: "El secreto de sus ojos",
      quote: "A guy can change anything. His face, his home, his family, his girlfriend, his religion,his God. But there's one thing he can't change. He can't change his passion...",
      poster: "<img src='https://image.tmdb.org/t/p/original/j8tqe0Xk8fbi8RvU5Bb1x1cOmgo.jpg'>"
      },{
      title: "El secreto de sus ojos",
      quote: "And I don't know if it's a memory or a memory of a memory I'm left with.",
      poster: "<img src='https://image.tmdb.org/t/p/original/wz1s9sS4PSCNEX70ItrfnaCtRxV.jpg'>"
      },{
      title: "The Bridge on the River Kwai",
      quote: "I hate the British! You are defeated but you have no shame. You are stubborn but you have no pride. You endure but you have no courage.",
      poster: "<img src='https://image.tmdb.org/t/p/original/vtPR6tSHeu35rF6qTDw3Yjr9eDg.jpg'>"
      },{
      title: "The Bridge on the River Kwai",
      quote: "Madness! Madness!",
      poster: "<img src='https://image.tmdb.org/t/p/original/tGiGTjVLhLJpxZ9Vbocnx0UOUCn.jpg'>"
      },{
      title: "Mr. Smith Goes to Washington",
      quote: "I wouldn't give you two cents for all your fancy rules if, behind them, they didn't have a little bit of plain, ordinary, everyday kindness and a little looking out for the other fella, too.",
      poster: "<img src='https://image.tmdb.org/t/p/original/jZDRazOQhKFGoK322rYiBk1fpsY.jpg'>"
      },{
      title: "Mr. Smith Goes to Washington",
      quote: "I can promise you one thing, I'll do nothing to disgrace the office of - the United States Senate.",
      poster: "<img src='https://image.tmdb.org/t/p/original/vh2OcwWyfvNobg8isSrGU5fH8C.jpg'>"
      },{
      title: "The Elephant Man",
      quote: "It's just that I-I'm not used to being treated so well by a beautiful woman...",
      poster: "<img src='https://image.tmdb.org/t/p/original/lDXJUmLQsViSKLbil2luD91l2kE.jpg'>"
      },{
      title: "The Elephant Man",
      quote: "I am not an elephant! I am not an animal! I am a human being! I am a man!",
      poster: "<img src='https://image.tmdb.org/t/p/original/nEEhyTPsjA9HQQwqvwrnJp86eD5.jpg'>"
      },{
      title: "Gran Torino",
      quote: "I'll blow a hole in your face then go inside and sleep like a baby.",
      poster: "<img src='https://image.tmdb.org/t/p/original/zpcbU5x1lMI79szkP96WxEOTSP8.jpg'>"
      },{
      title: "Gran Torino",
      quote: "Take these three items, some WD-40, a vise grip, and a roll of duct tape. Any man worth his salt can fix almost any problem with this stuff alone.",
      poster: "<img src='https://image.tmdb.org/t/p/original/9ip2LgCyVMdovhJqY4mttTWfyo6.jpg'>"
      },{
      title: "La La Land",
      quote: "They worship everything and they value nothing.",
      poster: "<img src='https://image.tmdb.org/t/p/original/pmX3SuniHVbtv13uWehTEF2Dg2.jpg'>"
      },{
      title: "La La Land",
      quote: "People love what other people are passionate about.",
      poster: "<img src='https://image.tmdb.org/t/p/original/hYSqZgyE20daxhr4dB7HVjzA5VA.jpg'>"
      },{
      title: "Ben-Hur",
      quote: "Your eyes are full of hate, forty-one. That's good. Hate keeps a man alive. It gives him strength.",
      poster: "<img src='https://image.tmdb.org/t/p/original/cNSBgQgJx2yXxYlIyWFhWz2F377.jpg'>"
      },{
      title: "Ben-Hur",
      quote: "Sextus, you ask how to fight an idea. Well I'll tell you how... with another idea!",
      poster: "<img src='https://image.tmdb.org/t/p/original/syPMBvvZsADTTRu3UKuxO1Wflq.jpg'>"
      },{
      title: "Сталкер",
      quote: "The Zone wants to be respected. Otherwise it will punish.",
      poster: "<img src='https://image.tmdb.org/t/p/original/mzJxTxIODATNaYUwyJ2C2XPkhXW.jpg'>"
      },{
      title: "Сталкер",
      quote: "When a man is just born, he is weak and flexible. When he dies, he is hard and insensitive. When a tree is growing, it's tender and pliant. But when it's dry and hard, it dies. Hardness and strength are death's companions.",
      poster: "<img src='https://image.tmdb.org/t/p/original/nKffjt2dpGzNApxFQYTUn024IAn.jpg'>"
      },{
      title: "The Truman Show",
      quote: "Good morning, and in case I don't see ya, good afternoon, good evening, and good night!",
      poster: "<img src='https://image.tmdb.org/t/p/original/w072hVYOk4ZFfieqNxS5EwPYvfb.jpg'>"
      },{
      title: "The Truman Show",
      quote: "I hereby proclaim this planet Trumania of the Burbank Galaxy.",
      poster: "<img src='https://image.tmdb.org/t/p/original/zuvnjhQXjeFrwkqmQvsNF7nWCys.jpg'>"
      },{
      title: "Dead Poets Society",
      quote: "No matter what anybody tells you, words and ideas can change the world.",
      poster: "<img src='https://image.tmdb.org/t/p/original/3Ri2GReavqSHqWemlP6HYn8i2P9.jpg'>"
      },{
      title: "Dead Poets Society",
      quote: "We don't read and write poetry because it's cute. We read and write poetry because we are members of the human race. And the human race is filled with passion.",
      poster: "<img src='https://image.tmdb.org/t/p/original/3Ri2GReavqSHqWemlP6HYn8i2P9.jpg'>"
      },{
      title: "Dr. No",
      quote: "Bond. James Bond.",
      poster: "<img src='https://image.tmdb.org/t/p/original/1SgSPBIzS9seY1syDgAU8sZm7sJ.jpg'>"
      },{
      title: "Dr. No",
      quote: "SPECTRE. Special Executive for Counter Intelligence, Terrorism, Revenge, Extortion. The four great cornerstones of power headed by the greatest brains in the world.",
      poster: "<img src='https://image.tmdb.org/t/p/original/h6tnJdvm0rZNQ3BwrlribwgF1YU.jpg'>"
      },{
      title: "Braveheart",
      quote: "In the Year of our Lord 1314, patriots of Scotland - starving and outnumbered - charged the fields of Bannockburn. They fought like warrior poets; they fought like Scotsmen, and won their freedom.",
      poster: "<img src='https://image.tmdb.org/t/p/original/2qAgGeYdLjelOEqjW9FYvPHpplC.jpg'>"
      },{
      title: "Braveheart",
      quote: "Give me the strength to die well.",
      poster: "<img src='https://image.tmdb.org/t/p/original/tEExIvYrff8WlylGKqCMvzDodyd.jpg'>"
      },{
      title: "Forrest Gump",
      quote: "Stupid is as stupid does.",
      poster: "<img src='https://image.tmdb.org/t/p/original/fx5YAjo3iHss3YR00tNvxK9JQO2.jpg'>"
      },{
      title: "Forrest Gump",
      quote: "I had run for 3 years, 2 months, 14 days, and 16 hours.",
      poster: "<img src='https://image.tmdb.org/t/p/original/z4ROnCrL77ZMzT0MsNXY5j25wS2.jpg'>"
      },{
      title: "Star Wars",
      quote: "These aren't the droids you're looking for.",
      poster: "<img src='https://image.tmdb.org/t/p/original/4YEiI3JhLwvaRz1oyAifd178v3g.jpg'>"
      },{
      title: "Star Wars",
      quote: "I find your lack of faith disturbing.",
      poster: "<img src='https://image.tmdb.org/t/p/original/voAEzBWfEvEu9SGTUDvbHncRvzF.jpg'>"
      },{
      title: "Se7en",
      quote: "What's in the box?",
      poster: "<img src='https://image.tmdb.org/t/p/original/zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg'>"
      },{
      title: "Se7en",
      quote: "If we catch John Doe and he turns out to be the devil, I mean if he's Satan himself, that might live up to our expectations, but he's not the devil. He's just a man.",
      poster: "<img src='https://image.tmdb.org/t/p/original/uGJCZR4400oE0EkwKXenSSkqPgQ.jpg'>"
      },{
      title: "The Silence of the Lambs",
      quote: "Well, Clarice - have the lambs stopped screaming?",
      poster: "<img src='https://image.tmdb.org/t/p/original/qjAyTj2BSth1EQ89vNfo0JYVPFN.jpg'>"
      },{
      title: "The Silence of the Lambs",
      quote: "Ah. That is the Duomo seen from the Belvedere. Do you know Florence?",
      poster: "<img src='https://image.tmdb.org/t/p/original/613ss6dxEIaeG50UcivGV2UrrpA.jpg'>"
      },{
      title: "Interstellar",
      quote: "I'm not afraid of death. I'm an old physicist - I'm afraid of time.",
      poster: "<img src='https://image.tmdb.org/t/p/original/5FAPDK7EAB7fx1Yj45jvWoQzHBr.jpg'>"
      },{
      title: "Interstellar",
      quote: "We've always defined ourselves by the ability to overcome the impossible. ",
      poster: "<img src='https://image.tmdb.org/t/p/original/cgQQDY6xbiWUXjXXAJDOA5Xkfyr.jpg'>"
      },{
      title: "Psycho",
      quote: "Wouldn't it be better if you put her... some place...?",
      poster: "<img src='https://image.tmdb.org/t/p/original/oVXm1eBwkgBsOlzTgsMtgkPB2Ha.jpg'>"
      },{
      title: "Psycho",
      quote: "It's not like my mother is a maniac or a raving thing. She just goes a little mad sometimes. We all go a little mad sometimes. Haven't you?",
      poster: "<img src='https://image.tmdb.org/t/p/original/8vHvn1Q8BnOE6RuQYwy0NBZdmtc.jpg'>"
      },{
      title: "Casablanca",
      quote: "Of all the gin joints, in all the towns, in all the world, she walks into mine.",
      poster: "<img src='https://image.tmdb.org/t/p/original/pYjgkdjT1ZpoF2pwCkMoSYIKTRr.jpg'>"
      },{
      title: "Casablanca",
      quote: "Play it once, Sam. For old times' sake.",
      poster: "<img src='https://image.tmdb.org/t/p/original/sm1QVZu5RKe1vXVHZooo4SZyHMx.jpg'>"
      },{
      title: "City Lights",
      quote: "Yes, I can see now.",
      poster: "<img src='https://image.tmdb.org/t/p/original/bXNvzjULc9jrOVhGfjcc64uKZmZ.jpg'>"
      },{
      title: "City Lights",
      quote: "Tomorrow the birds will sing.",
      poster: "<img src='https://image.tmdb.org/t/p/original/4WRqLvcTeeRWxWbkbwITk8qkU2X.jpg'>"
      },{
      title: "Intouchables",
      quote: "Where do you find a paraplegic?",
      poster: "<img src='https://image.tmdb.org/t/p/original/c514XwT4r6BMthqBcTIU1w0Ze2I.jpg'>"
      },{
      title: "Intouchables",
      quote: "What a seducer! He's epistoling like a boss.",
      poster: "<img src='https://image.tmdb.org/t/p/original/epn2RoE1PUzZNlXT8MZXFRiTHbH.jpg'>"
      },{
      title: "Raiders of the Lost Ark",
      quote: "Marion, don't look at it. Shut your eyes, Marion. Don't look at it, no matter what happens!",
      poster: "<img src='https://image.tmdb.org/t/p/original/2n5XqliEHbQ53PRuywQhdc89tAR.jpg'>"
      },{
      title: "Raiders of the Lost Ark",
      quote: "The Ark. If it is there, at Tanis, then it is something that man was not meant to disturb. Death has always surrounded it. It is not of this earth.",
      poster: "<img src='https://image.tmdb.org/t/p/original/44sKJOGP3fTm4QXBcIuqu0RkdP7.jpg'>"
      },{
      title: "Rear Window",
      quote: "Why would a man leave his apartment three times on a rainy night with a suitcase and come back three times?",
      poster: "<img src='https://image.tmdb.org/t/p/original/oXbT7vlLmZ76kWoHe5XJYuyJUgp.jpg'>"
      },{
      title: "Rear Window",
      quote: " I'm not much on rear window ethics.",
      poster: "<img src='https://image.tmdb.org/t/p/original/vtZ94zU2Jb3cQoucV5Gj2BMgHkY.jpg'>"
      },{
      title: "Terminator 2: Judgment Day",
      quote: "Come with me if you want to live!",
      poster: "<img src='https://image.tmdb.org/t/p/original/coUae1uhygMajnMPpXJSSZGRLmS.jpg'>"
      },{
      title: "Terminator 2: Judgment Day",
      quote: "Of all the would-be fathers who came and went over the years, this thing, this machine, was the only one who measured up. In an insane world, it was the sanest choice.",
      poster: "<img src='https://image.tmdb.org/t/p/original/aBy47BXVgSWKewlf1s3fsTp2R63.jpg'>"
      },{
      title: "Back to the Future",
      quote: "There's that word again. 'Heavy.' Why are things so heavy in the future? Is there a problem with the Earth's gravitational pull?",
      poster: "<img src='https://image.tmdb.org/t/p/original/pTpxQB1N0waaSc3OSn0e9oc8kx9.jpg'>"
      },{
      title: "Back to the Future",
      quote: "Last night, Darth Vader came down from Planet Vulcan and told me that if I didn't take Lorraine out, that he'd melt my brain.",
      poster: "<img src='https://image.tmdb.org/t/p/original/vyirYmlGAHJupVEomHcQsW8DVxw.jpg'>"
      },{
      title: "Whiplash",
      quote: "Not quite my tempo.",
      poster: "<img src='https://image.tmdb.org/t/p/original/4C9LHDxMsoYI0S3iMPZdm3Oevwo.jpg'>"
      },{
      title: "Whiplash",
      quote: "Were you rushing or were you dragging?",
      poster: "<img src='https://image.tmdb.org/t/p/original/tcx7hWxbFUz7XdJdByZKs8zGACv.jpg'>"
      },{
      title: "Apocalypse Now",
      quote: "Napalm, son. Nothing else in the world smells like that.",
      poster: "<img src='https://image.tmdb.org/t/p/original/uO54shOMcSHkLFfuB3y5ERbio8l.jpg'>"
      },{
      title: "Apocalypse Now",
      quote: "I've seen horrors... horrors that you've seen. But you have no right to call me a murderer. You have a right to kill me. You have a right to do that... but you have no right to judge me.",
      poster: "<img src='https://image.tmdb.org/t/p/original/5FKXh7uP0E66V6xjeHk0hB3yn15.jpg'>"
      },{
      title: "Alien",
      quote: "Bring back life form. Priority One. All other priorities rescinded.",
      poster: "<img src='https://image.tmdb.org/t/p/original/2h00HrZs89SL3tXB4nbkiM7BKHs.jpg'>"
      },{
      title: "Alien",
      quote: "Something has attached itself to him. We have to get him to the infirmary right away.",
      poster: "<img src='https://image.tmdb.org/t/p/original/mNS1Eg07JEA34eOEyqYB32L42VB.jpg'>"
      },{
      title: "Sunset Blvd.",
      quote: "We didn't need dialogue. We had faces!",
      poster: "<img src='https://image.tmdb.org/t/p/original/oFwzvRgfxJc0FUr2mwYTi10dk3G.jpg'>"
      },{
      title: "Sunset Blvd.",
      quote: "Without me, there wouldn't be any Paramount studio.",
      poster: "<img src='https://image.tmdb.org/t/p/original/7dhl35AOlPwLRhVrJmiRzChsOgs.jpg'>"
      },{
      title: "Nuovo Cinema Paradiso",
      quote: "No, Toto. Nobody said it. This time it's all me. Life isn't like in the movies. Life... is much harder.",
      poster: "<img src='https://image.tmdb.org/t/p/original/iIGyw1UchEwU1yywmH5pHRnY8du.jpg'>"
      },{
      title: "Nuovo Cinema Paradiso",
      quote: "Whatever you end up doing, love it. The way you loved the projection booth when you were a little squirt.",
      poster: "<img src='https://image.tmdb.org/t/p/original/6d1HGc3DuYGmqvJpVTg7JVNe4WO.jpg'>"
      },{
      title: "WALL·E",
      quote: "Foreign contaminant!",
      poster: "<img src='https://image.tmdb.org/t/p/original/rEgwNnenCi2bWU9uXddKNYb9Kic.jpg'>"
      },{
      title: "WALL·E",
      quote: "Eeeee... va?",
      poster: "<img src='https://image.tmdb.org/t/p/original/vN6mC5EStzvzy8TIltXtF3hC9ab.jpg'>"
      },{
      title: "American Beauty",
      quote: "It's like God's looking right at you, just for a second, and if you're careful... you can look right back.",
      poster: "<img src='https://image.tmdb.org/t/p/original/3UBQGKS8c1dxRnDiu5kUK6ej3pP.jpg'>"
      },{
      title: "American Beauty",
      quote: "Remember those posters that said, 'Today is the first day of the rest of your life'? Well, that's true of every day but one - the day you die.",
      poster: "<img src='https://image.tmdb.org/t/p/original/or1MP8BZIAjqWYxPdPX724ydKar.jpg'>"
      },{
      title: "C'era una volta in America",
      quote: "You see, Mr Secretary... I have a story also, a little simpler than yours. Many years ago, I had a friend, a dear friend. I turned him in to save his life, but he was killed. But he wanted it that way. It was a great friendship. But it went bad for him, and it went bad for me too.",
      poster: "<img src='https://image.tmdb.org/t/p/original/fmSKqff7LZL56AKg7FfrmM6z6oA.jpg'>"
      },{
      title: "C'era una volta in America",
      quote: "Age can wither me, Noodles. We're both getting old. All that we have left now are our memories. If you go to that party on Saturday night, you won't have those anymore.",
      poster: "<img src='https://image.tmdb.org/t/p/original/fqP3Q7DWMFqW7mh11hWXbNwN9rz.jpg'>"
      },{
      title: "Citizen Kane",
      quote: "Old age. It's the only disease, Mr. Thompson, that you don't look forward to being cured of.",
      poster: "<img src='https://image.tmdb.org/t/p/original/oFWvF7OJfT2ydAAatlnsgChV4FP.jpg'>"
      },{
      title: "Citizen Kane",
      quote: "Don't believe everything you hear on the radio.",
      poster: "<img src='https://image.tmdb.org/t/p/original/n8wfFsQ5vtm6dM8vdgXb6OLv2GY.jpg'>"
      },{
      title: "M",
      quote: "There are more police on the street tonight than whores",
      poster: "<img src='https://image.tmdb.org/t/p/original/AqE126KXLcT3wwmeM3HtlKqyGze.jpg'>"
      },{
      title: "M",
      quote: "Shoot him like a mad dog!",
      poster: "<img src='https://image.tmdb.org/t/p/original/6aiFi1NltaF3i9bOPG1D43eh3GD.jpg'>"
      },{
      title: "Double Indemnity",
      quote: "Same chair, same perfume, same anklet?",
      poster: "<img src='https://image.tmdb.org/t/p/original/qjcUAII9pf47jm92AYPjgNbuI41.jpg'>"
      },{
      title: "Double Indemnity",
      quote: "Do I laugh now, or wait 'til it gets funny?",
      poster: "<img src='https://image.tmdb.org/t/p/original/x0PNizPJMQCfJnLTSg8zy9jggPu.jpg'>"
      },{
      title: "Eternal Sunshine of the Spotless Mind",
      quote: "Constantly talking isn't necessarily communicating.",
      poster: "<img src='https://image.tmdb.org/t/p/original/gutwXkVChJkpIrclokNESybj0GC.jpg'>"
      },{
      title: "Eternal Sunshine of the Spotless Mind",
      quote: "Sand is overrated. It's just tiny, little rocks.",
      poster: "<img src='https://image.tmdb.org/t/p/original/7y3eYvTsGjxPYDtSnumCLIMDkrV.jpg'>"
      },{
      title: "Taxi Driver",
      quote: "Loneliness has followed me my whole life, everywhere. In bars, in cars, sidewalks, stores, everywhere. There's no escape. I'm God's lonely man.",
      poster: "<img src='https://image.tmdb.org/t/p/original/nGcgVnsL5yLKqg2X4OZcPetsHdd.jpg'>"
      },{
      title: "Taxi Driver",
      quote: "I got some bad ideas in my head.",
      poster: "<img src='https://image.tmdb.org/t/p/original/3ToxPvxHX8Wc92aUcAREGvTbC8l.jpg'>"
      },{
      title: "2001: A Space Odyssey",
      quote: "Daisy, Daisy, give me your answer do. I'm half crazy all for the love of you. It won't be a stylish marriage, I can't afford a carriage. But you'll look sweet upon the seat of a bicycle built for two.",
      poster: "<img src='https://image.tmdb.org/t/p/original/cptBx9l2zoijpbNeHOKDV2QGL2t.jpg'>"
      },{
      title: "2001: A Space Odyssey",
      quote: "Open the pod bay doors, HAL.",
      poster: "<img src='https://image.tmdb.org/t/p/original/mTwZOsbO8wGQWcj9vfweKFOGtya.jpg'>"
      },{
      title: "Toy Story",
      quote: "Hey, Hamm. Look, I'm Picasso!",
      poster: "<img src='https://image.tmdb.org/t/p/original/rhIRbceoE9lR4veEXuwCC2wARtG.jpg'>"
      },{
      title: "Toy Story",
      quote: "This isn't flying, this is falling with style!",
      poster: "<img src='https://image.tmdb.org/t/p/original/s0yX8LUm1AOiW5riLstssed7cpn.jpg'>"
      },{
      title: "The Sting",
      quote: "What was I supposed to do - call him for cheating better than me, in front of the others?",
      poster: "<img src='https://image.tmdb.org/t/p/original/mQaM8fDQdFWwCTFp0TZG8fChlZ5.jpg'>"
      },{
      title: "The Sting",
      quote: "Just poker. And he cheats. Pretty good at it, too.",
      poster: "<img src='https://image.tmdb.org/t/p/original/mQaM8fDQdFWwCTFp0TZG8fChlZ5.jpg'>"
      },{
      title: "Inglourious Basterds",
      quote: "And when the German closes their eyes at night and they're tortured by their subconscious for the evil they have done, it will be with thoughts of us they are tortured with. Sound good?",
      poster: "<img src='https://image.tmdb.org/t/p/original/ai0LXkzVM3hMjDhvFdKMUemoBe.jpg'>"
      },{
      title: "Inglourious Basterds",
      quote: "Consider, for a moment, the world a rat lives in. It's a hostile world, indeed. If a rat were to scamper through your front door right now, would you greet it with hostility?",
      poster: "<img src='https://image.tmdb.org/t/p/original/keAMrS08NxKvMxh8GRDhS9UCph4.jpg'>"
      },{
      title: "Snatch",
      quote: "You can call me Susan if it makes you happy.",
      poster: "<img src='https://image.tmdb.org/t/p/original/h41hpHqtEPpXBY1MFQBXM9lLp0k.jpg'>"
      },{
      title: "Snatch",
      quote: "Good dags. D'ya like dags?",
      poster: "<img src='https://image.tmdb.org/t/p/original/on9JlbGEccLsYkjeEph2Whm1DIp.jpg'>"
      },{
      title: "Good Will Hunting",
      quote: "You're not perfect, sport, and let me save you the suspense: this girl you've met, she's not perfect either. But the question is whether or not you're perfect for each other.",
      poster: "<img src='https://image.tmdb.org/t/p/original/jq8LjngZ7XZEQge5JFTdOGMrHyZ.jpg'>"
      },{
      title: "Good Will Hunting",
      quote: "Were you gonna plagiarize the whole thing for us? Do you have any thoughts of your own on this matter?",
      poster: "<img src='https://image.tmdb.org/t/p/original/scmSlULQhcEVbjEyIBzGlBluchT.jpg'>"
      },{
      title: "Jagten",
      quote: "The world is full of evil but if we hold on to each other, it goes away.",
      poster: "<img src='https://image.tmdb.org/t/p/original/gziSRmsKgMScegNjBZA38Hr9xrC.jpg'>"
      },{
      title: "Jagten",
      quote: " I want a word with Theo. Look into my eyes. Look me in the eyes. What do you see? Do you see anything? Nothing. There's nothing. There's nothing. You leave me alone now. You leave me alone now, Theo. Then I'll go. Thank you.",
      poster: "<img src='https://image.tmdb.org/t/p/original/keiaKpzjqSR4Oo8D7vYDr2kjjGk.jpg'>"
      },{
      title: "Per qualche dollaro in più",
      quote: "No, old man. Thought I was having trouble with my adding. It's all right now.",
      poster: "<img src='https://image.tmdb.org/t/p/original/4Gxx2JWFzGoAxlc6Qb9BvfqntxX.jpg'>"
      },{
      title: "Per qualche dollaro in più",
      quote: "Adios amigo!",
      poster: "<img src='https://image.tmdb.org/t/p/original/3jblmNz3pCdNBpdCQvD08lx7d4v.jpg'>"
      },{
      title: "Metropolis",
      quote: "Women and men, let no one miss today - ! Death to the machines - !",
      poster: "<img src='https://image.tmdb.org/t/p/original/qriaeUUwdmlgethK3aSAx68mG05.jpg'>"
      },{
      title: "Metropolis",
      quote: "HEAD and HANDS need a mediator. THE MEDIATOR BETWEEN HEAD AND HANDS MUST BE THE HEART!",
      poster: "<img src='https://image.tmdb.org/t/p/original/y3No0u3t2zjPj4KRs4stfOly46S.jpg'>"
      },{
      title: "Der Untergang",
      quote: "Our generals are the scum of the German people!",
      poster: "<img src='https://image.tmdb.org/t/p/original/rzE5EgBUq1Qbh5B7Tl7R4zKKct1.jpg'>"
      },{
      title: "Der Untergang",
      quote: "The war is lost... But if you think that I'll leave Berlin for that, you are sadly mistaken. I'd prefer to put a bullet in my head.",
      poster: "<img src='https://image.tmdb.org/t/p/original/vl7wTkvW1KdTg83wDE2lFxommDA.jpg'>"
      },{
      title: "Raging Bull",
      quote: "You didn't get me down, Ray.",
      poster: "<img src='https://image.tmdb.org/t/p/original/peXjIo5HHLeSY09oCnYTZOK4xKY.jpg'>"
      },{
      title: "Raging Bull",
      quote: "Come on, hit me. Harder. Harder.",
      poster: "<img src='https://image.tmdb.org/t/p/original/jeUexN8xdaRbS0dFmzueOWGQu1W.jpg'>"
      },{
      title: "Die Hard",
      quote: "Do you really think you have a chance against us, Mr. Cowboy?",
      poster: "<img src='https://image.tmdb.org/t/p/original/r7CDkRjZIAP79skLaTTvRk8eUp3.jpg'>"
      },{
      title: "Die Hard",
      quote: "Welcome to the party, pal.",
      poster: "<img src='https://image.tmdb.org/t/p/original/mc7MubOLcIw3MDvnuQFrO9psfCa.jpg'>"
      },{
      title: "Heat",
      quote: "What am I doing? I'm talking to an empty telephone.",
      poster: "<img src='https://image.tmdb.org/t/p/original/zMyfPUelumio3tiDKPffaUpsQTD.jpg'>"
      },{
      title: "Heat",
      quote: "Don't let yourself get attached to anything you are not willing to walk out on in 30 seconds flat if you feel the heat around the corner.",
      poster: "<img src='https://image.tmdb.org/t/p/original/xUhvxDk50zT5l2LPVHISycgSkzq.jpg'>"
      },{
      title: "The Third Man",
      quote: "Oh, I still do believe in God, old man. I believe in God and Mercy and all that. But the dead are happier dead. They don't miss much here, poor devils.",
      poster: "<img src='https://image.tmdb.org/t/p/original/rO2Fq0AZZx9obs52KJdx4mRE8p5.jpg'>"
      },{
      title: "The Third Man",
      quote: "A person doesn't change just because you find out more.",
      poster: "<img src='https://image.tmdb.org/t/p/original/7QKdh3bJGJNl10cJrdj5GVxYwjc.jpg'>"
      },{
      title: "Chinatown",
      quote: "'Course I'm respectable. I'm old. Politicians, ugly buildings, and whores all get respectable if they last long enough.",
      poster: "<img src='https://image.tmdb.org/t/p/original/eIeDTzuUt9c6CVJL7X31MdXyL5D.jpg'>"
      },{
      title: "Chinatown",
      quote: "I said I want the truth!",
      poster: "<img src='https://image.tmdb.org/t/p/original/iIHO6FzF6lL4mA90rrmk3Y705XS.jpg'>"
      },{
      title: "El laberinto del fauno",
      quote: "My name is Ofelia. Who are you?",
      poster: "<img src='https://image.tmdb.org/t/p/original/8r7VDffjiVmHZTfrLlKVC4PPfX.jpg'>"
      },{
      title: "El laberinto del fauno",
      quote: "But captain, to obey - just like that - for obedience's sake... without questioning... That's something only people like you do.",
      poster: "<img src='https://image.tmdb.org/t/p/original/anixQP5YXT2CP61TqHMPlyVxkxV.jpg'>"
      },{
      title: "Inside Out",
      quote: "Congratulations San Francisco, you've ruined pizza! First the Hawaiians, and now YOU!",
      poster: "<img src='https://image.tmdb.org/t/p/original/zZqrQLZs764xp5C7LMUmFjriZtP.jpg'>"
      },{
      title: "Inside Out",
      quote: "Okay, caution, there is a dangerous smell, people. Hold on, what is that? That is not brightly colored or shaped like a dinosaur, hold on guys... it's... broccoli!",
      poster: "<img src='https://image.tmdb.org/t/p/original/rDycdoAXtBb7hoWlBpZqbwk2F44.jpg'>"
      },{
      title: "A Beautiful Mind",
      quote: "Terrified... mortified... petrified... stupefied... by you.",
      poster: "<img src='https://image.tmdb.org/t/p/original/4SFqHDZ1NvWdysucWbgnYlobdxC.jpg'>"
      },{
      title: "A Beautiful Mind",
      quote: "Classes will dull your mind, destroy the potential for authentic creativity.",
      poster: "<img src='https://image.tmdb.org/t/p/original/p5MzWzsq2hSzXsRxutnf53TAh6r.jpg'>"
      },{
      title: "The Wolf of Wall Street",
      quote: "The year I turned 26, as the head of my own brokerage firm, I made $49 million, which really pissed me off because it was three shy of a million a week.",
      poster: "<img src='https://image.tmdb.org/t/p/original/A9HJXBd47U1clNkeQyim3KxMoT7.jpg'>"
      },{
      title: "The Wolf of Wall Street",
      quote: "Brad, show them how it's done. Sell me that pen. Watch. Go on.",
      poster: "<img src='https://image.tmdb.org/t/p/original/CyzIgra4XNWSj42PJRcYaOZsb9.jpg'>"
      },{
      title: "Андрей Рублев",
      quote: "I am what I am. You couldn't teach me integrity.",
      poster: "<img src='https://image.tmdb.org/t/p/original/nmSf6Kc0J9VUi9SDDkx0D5dKHLK.jpg'>"
      },{
      title: "Андрей Рублев",
      quote: "In much wisdom there is much grief. And he who increases knowledge increases sorrow.",
      poster: "<img src='https://image.tmdb.org/t/p/original/3zDXAplnwldfaGpAPEuX5bSgK4D.jpg'>"
      },{
      title: "The Big Lebowski",
      quote: "Obviously you're not a golfer.",
      poster: "<img src='https://image.tmdb.org/t/p/original/gJ8uOkbFyYM7vabB2XQcNggngZO.jpg'>"
      },{
      title: "The Big Lebowski",
      quote: "I'm the Dude.",
      poster: "<img src='https://image.tmdb.org/t/p/original/qiE3ovg9TPylHReZjizQ40LsKZV.jpg'>"
      },{
      title: "Finding Nemo",
      quote: "I shall call him Squishy and he shall be mine and he shall be my Squishy. Come on, Squishy. Come on, little Squishy.",
      poster: "<img src='https://image.tmdb.org/t/p/original/rfqXCblXP9iRZHFwMOgTo19Bztq.jpg'>"
      },{
      title: "Finding Nemo",
      quote: "Mine.",
      poster: "<img src='https://image.tmdb.org/t/p/original/r5NVa0McX4CvgWB2kCzVQa9Dsvx.jpg'>"
      },{
      title: "Cool Hand Luke",
      quote: "What we've got here is... failure to communicate.",
      poster: "<img src='https://image.tmdb.org/t/p/original/3rg6PsJfQgI1kMJRK4N7Yc6OH2P.jpg'>"
      },{
      title: "Cool Hand Luke",
      quote: "Nah - calling it your job don't make it right, Boss.",
      poster: "<img src='https://image.tmdb.org/t/p/original/vDwphkloD7ToaDpKASAXGgHOclN.jpg'>"
      },{
     title: "Kill Bill: Vol. 1",
      quote: "It's mercy, compassion, and forgiveness I lack. Not rationality.",
      poster: "<img src='https://image.tmdb.org/t/p/original/9O50TVszkz0dcP5g6Ej33UhR7vw.jpg'>"
      },{
      title: "Kill Bill: Vol. 1",
      quote: "Revenge is never a straight line. It's a forest, And like a forest it's easy to lose your way... To get lost... To forget where you came in.",
      poster: "<img src='https://image.tmdb.org/t/p/original/uNWutOmlOLCqNxwupNhbx05vGlk.jpg'>"
      },{
      title: "Mary y Max",
      quote: "When I was young, I invented an invisible friend called Mr Ravioli. My psychiatrist says I don't need him anymore, so he just sits in the corner and reads.",
      poster: "<img src='https://image.tmdb.org/t/p/original/k0lQISUC4NuvKYasJn59JHc2rla.jpg'>"
      },{
      title: "Mary y Max",
      quote: "Unfortunately, in America, babies are not found in cola cans. I asked my mother when I was four, and she said they came from eggs laid by rabbis. If you aren't Jewish, they're laid by Catholic nuns. If you're an atheist, they're laid by dirty, lonely prostitutes.",
      poster: "<img src='https://image.tmdb.org/t/p/original/o5TLNmIo3ddgEyW5qSuDK0W3MIf.jpg'>"
      },{
      title: "It Happened One Night",
      quote: "YES! But don't hold that against me, I'm a little screwy myself!",
      poster: "<img src='https://image.tmdb.org/t/p/original/k63JqnFvkIGWGhjsqRiksZw2OSs.jpg'>"
      },{
      title: "It Happened One Night",
      quote: "You know, I once knew a man who kept his hat on until he was completely undressed. Yeah, now he made a picture. Years later, his secret came out. He wore a toupee.",
      poster: "<img src='https://image.tmdb.org/t/p/original/y44l6WdL5l0szonjpsfjIKdBXnE.jpg'>"
      },{
      title: "Rush",
      quote: "A wise man can learn more from his enemies than a fool from his friends.",
      poster: "<img src='https://image.tmdb.org/t/p/original/cjEepHZOZAwmK6nAj5jis6HV75E.jpg'>"
      },{
      title: "Rush",
      quote: "Happiness is your biggest enemy. It weakens you. Puts doubts in your mind. Suddenly you have something to lose.",
      poster: "<img src='https://image.tmdb.org/t/p/original/4XIaL1ygIN5BQkB8Xmjwx3vKM5T.jpg'>"
      },{
      title: "The Grand Budapest Hotel",
      quote: "Rudeness is merely an expression of fear. People fear they won't get what they want. The most dreadful and unattractive person only needs to be loved, and they will open up like a flower.",
      poster: "<img src='https://image.tmdb.org/t/p/original/q0jUdH1ZoWYJgw2gT52Wzoaf7IE.jpg'>"
      },{
      title: "The Grand Budapest Hotel",
      quote: "Are you Monsieur Gustave of the Grand Budapest Hotel in Nebelsbad?",
      poster: "<img src='https://image.tmdb.org/t/p/original/3nbUe0LVv2ZYL67jAJy1KKuG1FZ.jpg'>"
      },{
      title: "Jurassic Park",
      quote: "Dinosaurs eat man. Woman inherits the earth.",
      poster: "<img src='https://image.tmdb.org/t/p/original/57jSouoskMN2108VTZ2QB4Kwr3N.jpg'>"
      },{
      title: "Jurassic Park",
      quote: "This isn't some species that was obliterated by deforestation, or the building of a dam. Dinosaurs had their shot, and nature selected them for extinction.",
      poster: "<img src='https://image.tmdb.org/t/p/original/yyCKYaW908ZbpexpnBJ3p8o87HA.jpg'>"
      },{
      title: "Spotlight",
      quote: "We got two stories here: a story about degenerate clergy, and a story about a bunch of lawyers turning child abuse into a cottage industry. Which story do you want us to write? ",
      poster: "<img src='https://image.tmdb.org/t/p/original/ngKxbvsn9Si5TYVJfi1EGAGwThU.jpg'>"
      },{
      title: "Spotlight",
      quote: "You know why I went along with everything? Because priests, are supposed to be the good guys.",
      poster: "<img src='https://image.tmdb.org/t/p/original/uJggcRz5mL0tlLOQwIP5RfbSZmc.jpg'>"
      },{
      title: "Groundhog Day",
      quote: "Well, what if there is no tomorrow?",
      poster: "<img src='https://image.tmdb.org/t/p/original/vXjVd0Vu0MXRZnga7wEnHIIhO5B.jpg'>"
      },{
      title: "Groundhog Day",
      quote: "I never told you but... I knew that I wanted to hold you as hard as I could. I don't deserve someone like you. But if I ever could, I swear I would love you for the rest of my life.",
      poster: "<img src='https://image.tmdb.org/t/p/original/tYuStVleFgqqEc8vPeYMv7g2kyL.jpg'>"
      },{
      title: "Jaws",
      quote: "You're gonna need a bigger boat.",
      poster: "<img src='https://image.tmdb.org/t/p/original/l1yltvzILaZcx2jYvc5sEMkM7Eh.jpg'>"
      },{
     title: "Jaws",
      quote: "Martin, it's all psychological. You yell barracuda, everybody says, 'Huh? What?' You yell shark, we've got a panic on our hands on the Fourth of July.",
      poster: "<img src='https://image.tmdb.org/t/p/original/d47arffC58XlDthohoWY1CYUIzf.jpg'>"
      },{
      title: "Million Dollar Baby",
      quote: "If there's magic in boxing, it's the magic of fighting battles beyond endurance, beyond cracked ribs, ruptured kidneys and detached retinas. It's the magic of risking everything for a dream that nobody sees but you.",
      poster: "<img src='https://image.tmdb.org/t/p/original/h4VZKi2Jt4VoBYJmtC4c3bO8KqM.jpg'>"
      },{
      title: "Million Dollar Baby",
      quote: "Cause she's a better fighter than you are, that's why. She's younger, she's stronger, and she's more experienced. Now, what are you gonna do about it?",
      poster: "<img src='https://image.tmdb.org/t/p/original/h4VZKi2Jt4VoBYJmtC4c3bO8KqM.jpg'>"
      },{
      title: "Butch Cassidy and the Sundance Kid",
      quote: "Boy, I got vision, and the rest of the world wears bifocals.",
      poster: "<img src='https://image.tmdb.org/t/p/original/jQH0mTzQ1gQ56H8a0z52WreiEok.jpg'>"
      },{
      title: "Butch Cassidy and the Sundance Kid",
      quote: "Kid, the next time I say, 'Let's go someplace like Bolivia,' let's GO someplace like Bolivia.",
      poster: "<img src='https://image.tmdb.org/t/p/original/gwjO0mbEHZhIJG7OPJNX53Dp3Wd.jpg'>"
      },{
      title: "Hachi: A Dog's Tale",
      quote: "But if Hachiko wants to wait, then Hachiko should wait.",
      poster: "<img src='https://image.tmdb.org/t/p/original/eldQamovEU6SEoOBjl3eCXZ0nJy.jpg'>"
      },{
      title: "Hachi: A Dog's Tale",
      quote: "Look, you don't have to wait anymore. He's not coming back.",
      poster: "<img src='https://image.tmdb.org/t/p/original/jn1jnUTAbk5fwg52LnQxqtBefgC.jpg'>"
      },{
      title: "The Maltese Falcon",
      quote: "The, uh, stuff that dreams are made of.",
      poster: "<img src='https://image.tmdb.org/t/p/original/95OOYSeegOX4XW8nAeFJSIdxfM4.jpg'>"
      },{
      title: "The Maltese Falcon",
      quote: "You're a good man, sister.",
      poster: "<img src='https://image.tmdb.org/t/p/original/9nnN2i1eiPVKwDW0e3Zbd0mgxK3.jpg'>"
      },{
      title: "Rocky",
      quote: "Yeah. Beethoven was deaf. Helen Keller was blind. I think Rocky's got a good chance.",
      poster: "<img src='https://image.tmdb.org/t/p/original/yAeC4umiswfZAv0OPMBDb94EXbj.jpg'>"
      },{
      title: "Rocky",
      quote: "Apollo Creed vs. the Italian Stallion. Sounds like a damn monster movie.",
      poster: "<img src='https://image.tmdb.org/t/p/original/qKfrH1ur0ncuHPwGfU9GFKzidet.jpg'>"
      },{
      title: "Annie Hall",
      quote: "I feel that life is divided into the horrible and the miserable. That's the two categories. The horrible are like, I don't know, terminal cases, you know, and blind people, crippled. I don't know how they get through life. It's amazing to me. And the miserable is everyone else.",
      poster: "<img src='https://image.tmdb.org/t/p/original/jNnEuaPLWsPHUkdOIIrqJleMXbe.jpg'>"
      },{
      title: "Annie Hall",
      quote: "Sun is bad for you. Everything our parents said was good is bad. Sun, milk, red meat... college.",
      poster: "<img src='https://image.tmdb.org/t/p/original/j9vVQCSyNWvyBU6w9BxExZRlpZZ.jpg'>"
      },{
      title: "Twelve Monkeys",
      quote: "It's all automated. What are we *for* then? We're consumers, Jim. Yeah. Okay, okay. Buy a lot of stuff, you're a good citizen. But if you don't buy a lot of stuff, if you don't, what are you then, I ask you? What? Mentally *ill*.",
      poster: "<img src='https://image.tmdb.org/t/p/original/6kju7Gjv23VlZpcbnTHSdQfqGdS.jpg'>"
      },{
      title: "Twelve Monkeys",
      quote: "All I see are dead people.",
      poster: "<img src='https://image.tmdb.org/t/p/original/6Sj9wDu3YugthXsU0Vry5XFAZGg.jpg'>"
}];

    function index() { return Math.floor(Math.random() * films.length); }

    var item = films[index()];

    function resizer() {
      var po = $(item.poster);
      po.width(250);
      po.height(375);
      return po;
    }

    $("#poster").append( resizer() );
    $("#text").append( item.quote );
    $("#title").append( item.title );

    var tweet = item.quote + item.title;

    if (tweet.length >= 141) {
    alert("Next tweet will be longer than 140 characters.");
    } else {}

    $("#tweet").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&text=" + tweet);
   
}

function music() { setTimeout(function() {
   
  var itms = [18,333,535,721,910,1035,1308,1599,1685,1900,2101];
  function idxMusic() { return Math.floor(Math.random() * itms.length); }
  var secs = itms[idxMusic()] ;
  var audio  = document.createElement("audio");
  var source = "http://k003.kiwi6.com/hotlink/yoxz598drd/Soundtrack_Mix0.mp3#t=" + secs;
  audio.src = source;
  audio.play();
  return audio; }, 6000);
}