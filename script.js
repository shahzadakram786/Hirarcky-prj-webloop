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
                        name: "sheraz",
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


for (let i = 0; i < deta.length; i++) {
    // let Data = deta[i];
    console.log("jelo")

    let Ceo = document.getElementById("Ceo");
    Ceo.addEventListener("click", () => {
        console.log(deta.name);
    })

    console.log("jelo")


    // now is for manager button

    let Managr = document.getElementById("manger");
    Managr.addEventListener("click", () => {
        console.log(data[i].hir.managers.name)

    });


}