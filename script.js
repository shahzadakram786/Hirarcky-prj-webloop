let cont = document.getElementById("container");
let docfirst = document.querySelectorAll(".firstdiv");
let docCeo = document.querySelectorAll(".CeoDiv");
let docManagr = document.querySelector(".ManagerDiv")
const deta = {
    level: 1,
    name: "Sheraz ",
    age: 30,
    img: "./sheraz.png",
    hir: {
        level: 2,
        name: "manager",
        managers: {
            img: "./saleem.png",
            name: "saleem",
            age: 27
        },
        subhir1: {
            level: 3,
            types: [{
                    name: "front-end",
                    developers: [{
                            name: "saqib",
                            skill: "html,css,js"
                        },
                        {
                            name: "Aliyan",
                            skill: "html,css,js"
                        },
                        {
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






























let subCeo = document.querySelectorAll(".docCeo ")

for (let i = 0; i < docCeo.length; i++) {
    docCeo[i].innerHTML += `
    <div class = "sheraz">

    <img src="${deta.img}" class="img">
    <div id="ceoInfo">
    <h3>${deta.name} | age: ${deta.age}</h3>
    
    </div> 

    </div>
    <button id = "Ceobtn">Ceo</button>
    `;
}







// for hr manager 

let HrDiv = document.querySelectorAll(".HrDiv ")

for (let i = 0; i < HrDiv.length; i++) {
    HrDiv[i].innerHTML += `
    <div class = "Saleem">

    <img src="${deta.hir.managers.img}" id="imgSalem" class="img">
    <div id="hrInfo">
    <h3>${deta.hir.managers.name} | age: ${deta.hir.managers.age}</h3>
    
    </div> 

    </div>
    <button id="hrbtn">Manager</button>

   
    `;
}







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


const Front = document.getElementById("Frontend");

Front.addEventListener("click", () => {
    console.log(deta.hir.subhir1.types[0].name);

})


// for front developers 

const FrntDev = document.getElementById("FrontDev");
FrntDev.addEventListener("click", () => {
    const FrontDev = deta.hir.subhir1.types[0].developers;

    for (let i = 0; i < FrontDev.length; i++) {
        console.log(FrontDev[i].name);
    }
});


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