let cont = document.querySelectorAll(".container");
let docfirst = document.querySelectorAll(".firstdiv");
let docCeo = document.querySelectorAll(".CeoDiv");
let docManagr = document.querySelector(".ManagerDiv")
const getTreeData = {
    level: 1,
    name: "Ceo",
    hir: {
        level: 2,
        name: manager,
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


for (let i = 0; i < Data.length; i++) {
    doc.innerHTML +=
        `
        <div class="cards">
        <h1>Webloop</h1>
        <hr/>
        <h2>${Data.level}</h2>
        <p>${Data.name}</p>
             </div>


    `

}