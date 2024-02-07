// let cont = document.querySelectorAll(".container");
// let doc = document.querySelectorAll(".main");
// const getTreeData = {
//     level: 1,
//     name: "Ceo",
//     hir: {
//         level: 2,
//         name: manager,
//         managers: {
//             name: "saleem",
//             age: 27
//         },
//         subhir1: {
//             level: 3,
//             types: [{
//                     name: "front-end",
//                     developers: [{
//                             name: "saqib",
//                             skill: "html,css,js"
//                         },
//                         {
//                             name: "Aliyan",
//                             skill: "html,css,js"
//                         },
//                         {
//                             name: "Shakir",
//                             skill: "html,css,js"
//                         }
//                     ],
//                 },
//                 {
//                     name: "back-end",
//                     developers: [{
//                         name: "sheraz",
//                         skill: "Nodejs/php/blockchan"
//                     }, {
//                         name: "Nasir",
//                         skills: "Nodejs/php/blockchain"
//                     }, {
//                         name: "Kashif",
//                         skill: "Python/Django"
//                     }]
//                 }
//             ]

//         },
//         subhir2: {
//             level: 4,

//             name: "Interns",
//             Interns: [{
//                 name: "shahzad",
//             }, {
//                 name: "Danial",

//             }, {
//                 name: "Mansoor"

//             }, {
//                 name: "AliAbbas"
//             }]
//         }
//     }

// }


// for (let i = 0; i < Data.length; i++) {
//     doc.innerHTML +=
//         `
//         <div class="cards">
//         <h1>Webloop</h1>
//         <hr/>
//         <h2>${Data.level}</h2>
//         <p>${Data.name}</p>
//              </div>


//     `

// }


const data = {
    level: 1,
    name: "CEO",
    ceo: "Sheraz",

    hir: {
        level: 2,
        name: "Manager",
        managers: {
            name: "Saleem",
            age: 27
        },
        subhir1: {
            level: 3,
            types: [{
                    name: "Front-end",
                    developers: [{
                            name: "Saqib",
                            skill: "React.js"
                        },
                        {
                            name: "Aliyan",
                            skill: "HTML, JavaScript"
                        }
                    ]

                },
                {
                    name: "Backend",
                    developers: [{
                            name: "Sheraz",
                            skill: "Node.js/PHP/Blockchain"
                        },
                        {
                            name: "Asad",
                            skill: "Node.js/PHP"
                        }
                    ]
                }
            ]
        },
        subhir2: {
            level: 4,
            name: "Interns",
            interns: [{
                    name: "Mansoor"
                },
                {
                    name: "Ali Abbass"
                }
            ]
        }
    }
};

// Function to display the data on the webpage
function displayData() {
    // Getting the container element to display the data
    const container = document.getElementById("data-container");

    // Clear previous content
    container.innerHTML = "";

    // Display CEO and Manager details
    container.innerHTML += `<h1>Level ${data.level}: ${data.name}</h1>`;
    container.innerHTML += `<h2>Level ${data.hir.level}: ${data.hir.name}</h2>`;

    container.innerHTML += `<h2>Level ${data.hir.level}: ${data.hir.name}</h2>`;
    container.innerHTML += `<p>Manager Name: ${data.hir.managers.name}, Age: ${data.hir.managers.age}</p>`;

    // Display Developers details
    container.innerHTML += "<h3>Developers:</h3>";
    data.hir.subhir1.types.forEach(type => {
        type.developers.forEach(developer => {
            container.innerHTML += `<p>${developer.name} - ${developer.skill}</p>`;
        });
    });

    // Display Interns details
    container.innerHTML += "<h3>Interns:</h3>";
    data.hir.subhir2.interns.forEach(intern => {
        container.innerHTML += `<p>${intern.name}</p>`;
    });
}

// Call the function to display data when the page loads
window.onload = displayData;