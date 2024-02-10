let cont = document.getElementById("container");
let docfirst = document.querySelectorAll(".firstdiv");
let docCeo = document.querySelectorAll(".CeoDiv");
let docManagr = document.querySelector(".ManagerDiv")
const deta = {
    level: 1,
    title: "CEO",
    name: "Sheraz",
    age: 28,
    img: "./sheraz.png",
    hir: {
        level: 2,
        name: "manager",
        managers: {
            title: "HR",
            img: "./saleem.png",
            name: "saleem",
            age: 27
        },
        subhir1: {
            level: 3,
            types: [{
                    name: "front-end",
                    developers: [{
                            img: "./saqib.png",
                            name: "saqib",
                            skill: "html,css,js"
                        },
                        {
                            img: "./aliyan.png",
                            name: "Aliyan",
                            skill: "html,css,js"
                        },
                        {
                            img: "./shakir.png",
                            name: "Shakir",
                            skill: "html,css,js"
                        }
                    ],
                },
                {
                    name: "back-end",
                    developers: [{
                        name: "Asad",
                        skill: "Nodejs/php/blockchan"
                    }, {
                        name: "Nasir",
                        skills: "Nodejs/php/blockchain"
                    }, {
                        name: "Kashif",
                        skill: "Python/Django"
                    }]
                }
            ]

        },
        subhir2: {
            level: 4,

            name: "Interns",
            Interns: [{
                name: "shahzad",
            }, {
                name: "Danial",

            }, {
                name: "Mansoor"

            }, {
                name: "AliAbbas"
            }]
        }
    }

}






























// let subCeo = document.querySelectorAll(".docCeo ")

for (let i = 0; i < docCeo.length; i++) {
    docCeo[i].innerHTML += `
    <div class = "sheraz dp2">
    <img src="${deta.img}" class="img" id="sherzimg">

    <div id="ceoInfo" class= "info">
   <a href = "https://www.linkedin.com/in/sheraz-ali-0215ab205/"><i class="fa-brands fa-linkedin-in"></i></a>

    <h2>Title :${deta.title}</h2>
    <h3>Name :${deta.name} \t\t Age :${deta.age}</h3>
    
    </div> 

    </div>
    <button id = "Ceobtn">Ceo</button>
    `;
}







// for hr manager 

let HrDiv = document.querySelectorAll(".HrDiv ")

for (let i = 0; i < HrDiv.length; i++) {
    HrDiv[i].innerHTML += `
    <div class = "Saleem dp2">

    <img src="${deta.hir.managers.img}" id="imgSalem" class="img">
    
     <div id="hrInfo" class= "info">
    <a href = "https://www.linkedin.com/in/saleem-muhammad-9676551b4/"><i class="fa-brands fa-linkedin-in"></i></a>
    <h2>Title :${deta.hir.managers.title}</h2>
    <h3> Name :${deta.hir.managers.name} \t\t  Age :${deta.hir.managers.age}</h3>
    
    </div> 

    </div>
    <button id="hrbtn">Manager</button>

   
    `;

    console.log("jelo")

    let Ceo = document.getElementById("Ceobtn");
    Ceo.addEventListener("click", () => {

        console.log(deta.name);
        let img = document.querySelector(".sheraz img");
        img.style.display = "block";

        let cebtn = document.getElementById("Ceobtn");
        cebtn.style.display = "none";
        let ceoinfo = document.getElementById("ceoInfo")
        ceoinfo.style.display = "block";




    })
}





let frontDev = document.querySelectorAll(".FDvlpr")
for (let i = 0; i < frontDev.length; i++) {
    frontDev[i].innerHTML += `
        <div class="FDev dp3">

        <img src="${deta.hir.subhir1.types[0].developers[0].img}"  id="imgSaqib" class="img frnt_img">

         <div id="FrDevInfo" class= "info dvlprsDp">
        <h2> Name :${deta.hir.subhir1.types[0].developers[0].name} \t\t  Skills :${deta.hir.subhir1.types[0].developers[0].skill}</h2>

        </div> 

        </div>
        <div class="h_line"></div>


        <div class="FDev2 dp3">

        <img src="${deta.hir.subhir1.types[0].developers[1].img}"  id="imgAliyan" class="img frnt_img"" alt= "aliyan">

         <div id="FrDevInfo2" class= "info dvlprsDp">
        <h2> Name :${deta.hir.subhir1.types[0].developers[1].name} \t\t  Skills :${deta.hir.subhir1.types[0].developers[1].skill}</h2>

        </div> 

        </div>
        <div class="h_line"></div>





        <div class="FDev3 dp3">

        <img src="${deta.hir.subhir1.types[0].developers[2].img}" class="img frnt_img" alt= "Shakir">

         <div id="FrDevInfo3" class= "info dvlprsDp">
        <h2> Name :${deta.hir.subhir1.types[0].developers[2].name} \t\t  Skills :${deta.hir.subhir1.types[0].developers[2].skill}</h2>

        </div> 

        </div>








        <button id="FrontDevbtn">Developers</button>
        








`;
    console.log("jelo front")

    let Frnt = document.getElementById("FrontDevbtn");

    Frnt.addEventListener("click", () => {
        console.log(deta.hir.subhir1.types[0].name);
        let imgSaqib = document.querySelector(".FDev img");
        imgSaqib.style.display = "block";


        Frnt.style.display = "none";
        let Fdiv2 = document.querySelector(".FDev2");
        Fdiv2.style.display = "block";

        let Finfo2 = document.getElementById("FrDevInfo2");
        Finfo2.style.display = "block";


        // 2nd developer aliyan


        console.log(deta.hir.subhir1.types[0].name);
        let imgAliyan = document.querySelector(".FDev2 img");
        imgAliyan.style.display = "block";


        Frnt.style.display = "none";
        let Fdiv = document.querySelector(".FDev");
        Fdiv.style.display = "block";

        let Finfo = document.getElementById("FrDevInfo");
        Finfo.style.display = "block";

        // 3rd develpr from here      for shakir


        // console.log(deta.hir.subhir1.types[0].name);
        let imgShakir = document.querySelector(".FDev3 img");
        imgShakir.style.display = "block";


        Frnt.style.display = "none";
        let Fdiv3 = document.querySelector(".FDev3");
        Fdiv3.style.display = "block";

        let Finfo3 = document.getElementById("FrDevInfo3");
        Finfo3.style.display = "block";


    })
}





// now is for manager button

const Man = document.getElementById("hrbtn");
Man.addEventListener("click", () => {
    console.log(deta.hir.managers.name, '-', 'age :', deta.hir.managers.age)
    let imgSlm = document.querySelector(".Saleem img");
    imgSlm.style.display = "block"

    let hrbtn = document.getElementById("hrbtn");
    hrbtn.style.display = "none";

    let hrInfo = document.getElementById("hrInfo");
    hrInfo.style.display = "block";
});



// now evenlistener for front adn back





// for front developers 

// const FrntDev = document.getElementById("FrontDev");
// FrntDev.addEventListener("click", () => {
//     const FrontDev = deta.hir.subhir1.types[0].developers;

//     for (let i = 0; i < FrontDev.length; i++) {
//         console.log(FrontDev[i].name);
//     }
// });






// for frontend interns 



const frnt_intrns = document.getElementById("FrontInters");
frnt_intrns.addEventListener("click", () => {
    const frntIntrns = deta.hir.subhir2.Interns;
    for (let i = 0; i < frntIntrns.length; i++) {
        console.log(frntIntrns[i].name);

    }


});






// const backDvlpr = deta.hir.subhir1.types[1].developers;

// for (let i = 0; i < backDvlpr.length; i++) {
// console.log(backDvlpr[i].name);
// }






// for back end
const Back = document.getElementById("Back-End");

Back.addEventListener("click", () => {

    console.log(deta.hir.subhir1.types[1].name);

});


// for backdevelopers

const bckDev = document.getElementById("bckDev");
bckDev.addEventListener("click", () => {
    const backDvlpr = deta.hir.subhir1.types[1].developers;
    for (let i = 0; i < backDvlpr.length; i++) {
        console.log(backDvlpr[i].name);


    }
});

const bckintrns = document.getElementById("bckIntrns");
bckintrns.addEventListener("click", () => {

    const backIntrns = deta.hir.subhir1.types[1].developers;
    for (let i = 0; i < backDvlpr.length; i++) {
        console.log(backDvlpr[i].name);


    }


});
// })