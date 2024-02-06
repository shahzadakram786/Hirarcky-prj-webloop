const Data = {
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
            }. {
                name: "AliAbbas"
            }]
        }
    }

}