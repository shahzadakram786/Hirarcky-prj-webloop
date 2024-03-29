let cont = document.getElementById("container");
let docfirst = document.querySelectorAll(".firstdiv");

let docManagr = document.querySelector(".ManagerDiv");
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
            age: 27,
        },
        subhir1: {
            level: 3,
            types: [{
                    name: "front-end",
                    developers: [{
                            img: "./saqib.png",
                            name: "saqib",
                            skill: "html,css,js",
                        },
                        {
                            img: "./aliyan.png",
                            name: "Aliyan",
                            skill: "html,css,js",
                        },
                        {
                            img: "./shakir.png",
                            name: "Shakir",
                            skill: "html,css,js",
                        },
                    ],
                },
                {
                    name: "back-end",
                    developers: [{
                            img: "./asad.png",
                            name: "Asad",
                            skill: "Nodejs/php",
                        },
                        {
                            img: "./nasir.png",
                            name: "Nasir",
                            skill: "Nodejs/php",
                        },
                        {
                            img: "./kashif.png",
                            name: "Kashif",
                            skill: "Python/php",
                        },
                        {
                            img: "./kashif.png",
                            name: "Kashif",
                            skill: "Python/php",
                        },
                    ],
                },
            ],
        },
        subhir2: {
            level: 4,

            name: "Interns",
            Interns: [{
                    img: "./shahzad.png",
                    name: "shahzad",
                },
                {
                    img: "./shakir.png",
                    name: "Danial",
                },
                {
                    img: "./aliyan.png",
                    name: "Mansoor",
                },
            ],
        },
    },
};

// this is /for cep
let docCeo = document.querySelectorAll(".CeoDiv");
let Ceo = document.getElementById("Ceobtn");
// const sheraz = document.querySelectorAll(".sheraz");

Ceobtn.addEventListener("click", (e) => {
    console.log("what is e ", e.target);

    console.log(docCeo);
    const cardd = (e.target.innerHTML = "CEO");
    console.log("if : ", docCeo[0].style.display !== "block");

    //below this line its my code for cards

    docCeo[0].innerHTML = `
    <div class="sheraz dp2">
    <div class="image">
    <img src="${deta.img}" class="img">
    </div>
    
    <div id="ceoInfo" class= "info">
    <a href = "https://www.linkedin.com/in/sheraz-ali-0215ab205/"><i class="fa-brands fa-linkedin-in"></i></a>
    
    <h2>Title :${deta.title}</h2>
    <h3>Name :${deta.name} 
     Age :${deta.age}</h3>
    
    </div> 
    
    </div>
    
    `;
    if (docCeo[0].style.display === "none" || docCeo[0].style.display === "") {
        // CEO section is hidden or not displayed
        docCeo[0].style.display = "block"; // Show the CEO section
        e.target.innerHTML = "Back"; // Change CeoBtn text to "Back"
    } else {
        // CEO section is visible
        docCeo[0].style.display = "none"; // Hide the CEO section
        e.target.innerHTML = "CEO"; // Change CeoBtn text back to "CEO"
    }
});

// now is for manager button

const Man = document.getElementById("hrbtn");
Man.addEventListener("click", (e) => {
    let HrDiv = document.querySelectorAll(".HrDiv ");
    // Man.style.display = "none";
    // for (let i = 0; i < HrDiv.length; i++) {
    HrDiv[0].innerHTML = ` <div class = "Saleem dp2">

            <img src = "${deta.hir.managers.img}" id="imgSalem" class = "img">

            <div id = "hrInfo" class = "info">
            <a href = "https://www.linkedin.com/in/saleem-muhammad-9676551b4/"> <i class = "fa-brands fa-linkedin-in" > </i></a>
            <h2> Title: ${deta.hir.managers.title} </h2> 
            <h3> Name: ${deta.hir.managers.name}
            Age: ${deta.hir.managers.age} </h3>

        </div>

        </div> 

        `;

    if (HrDiv[0].style.display === "none" || HrDiv[0].style.display === "") {
        HrDiv[0].style.display = "block";
        e.target.innerHTML = "Back";
    } else {
        HrDiv[0].style.display = "none";
        e.target.innerHTML = "CEO";
    }

    console.log(deta.name);
});

// from this line i have make the functions for the front end developer

let frnt_dev = document.querySelector(".F_Dvlpr ");
const Frnt = document.getElementById("FrontDevbtn");

Frnt.addEventListener("click", (e) => {
    // Frnt.style.display = "none";
    const FrntDvlpr = deta.hir.subhir1.types[0].developers;
    for (let i = 0; i < FrntDvlpr; i++) {
        console.log(FrntDvlpr[i].name);

        frnt_dev.innerHTML += `

        <div class = "FDev dp3">

            <img src = "${FrntDvlpr[i].img}"
        class = "img frnt_img">

            <div id = "FrDevInfo" class = "info dvlprsDp">
            <h2 class = "frntH2"> Name: ${FrntDvlpr[i].name}
            Skills: ${FrntDvlpr[i].skill}</h2>

        </div> 

        </div> 
        <div class = "h_line nonelines"> </div>

        `;
    }
    if (frnt_dev.style.display === "none" || frnt_dev.style.display === "") {
        frnt_dev.style.display = "block";
        e.target.innerHTML = "Back";
    } else {
        frnt_dev.style.display = "none";
        e.target.innerHTML = "Front Dev";
    }
});

// fron this line i will make functionality forfront end interns

// for the interns  of front end

let F_inters = document.getElementById("intrns");
let F_inters_btn = document.getElementById("FrontInters");

F_inters_btn.addEventListener("click", () => {
    const FrntInts = deta.hir.subhir2.Interns;
    F_inters_btn.style.display = "none";
    for (let i = 0; i < FrntInts.length; i++) {
        F_inters.innerHTML += `

        <div class = "FDev2 dp3" >


            <img src = "${FrntInts[i].img}" class = "img frnt_img">

            <div id = "FrDevInfo2" class ="info Inters">
            <h2 class = "frntH2">Name: ${FrntInts[i].name}</h2>

        </div> 

        </div>
        <div class = "h_line nonelines" > </div>


        `;
    }
});


// const backDvlpr = deta.hir.subhir1.types[1].developers;

// for (let i = 0; i < backDvlpr.length; i++) {
// console.log(backDvlpr[i].name);
// }

// for back end

// for backdevelopers
const bck_dev = document.getElementById("B_Dvlpr");
const bckDevBtn = document.getElementById("bckDev");
bckDevBtn.addEventListener("click", (e) => {
    const backDvlpr = deta.hir.subhir1.types[1].developers;

    // bckDevBtn.style.display = "none";
    for (let i = 0; i < backDvlpr.length; i++) {
        console.log(backDvlpr[i].name);

        bck_dev.innerHTML = ` 
        <div class = "B_Dev dp3" >
                <img src = "${backDvlpr[i].img}"class = "img">

                <div id ="B_Int_Dev_Info" class ="info">
                <h2 class="frntH2" bkh2> Name: ${backDvlpr[i].name} <br>
            Skills: ${backDvlpr[i].skill} </h2>

            </div> 

            </div> 
            <div class = "h_line nonelines" ></div>
            `;
    }
    if (bck_dev.style.display === "none" || bck_dev.style.display === "") {
        bck_dev.style.display = "block";
        e.target.innerHTML = "Back";
    } else {
        bck_dev.style.display = "none";
        e.target.innerHTML = "Back Dev";
    }
});