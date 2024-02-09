let cont = document.getElementById("container");
let docfirst = document.querySelectorAll(".firstdiv");
let docCeo = document.querySelectorAll(".CeoDiv");
let docManagr = document.querySelector(".ManagerDiv")
const deta = {
    level: 1,
    name: "Sheraz ",
    hir: {
        level: 2,
        name: "manager",
        managers: {
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


// for (let i = 0; i < deta.length; i++) {
//     let Data = deta[i];

console.log("jelo")

let Ceo = document.getElementById("Ceo");
Ceo.addEventListener("click", () => {
    console.log(deta.name);
})

console.log("jelo")


// now is for manager button

const Man = document.getElementById("manger");
Man.addEventListener("click", () => {
    console.log(deta.hir.managers.name, '-', 'age :', deta.hir.managers.age)

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