

lucide.createIcons();




window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("bootScreen")
            .classList.add("hide");

    }, 3200);

});




const typing = document.getElementById("typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "C++ Programmer"
];

let word = 0;
let char = 0;
let deleting = false;


function typeWriter() {

    const current = words[word];

    if (!deleting) {

        typing.textContent =
            current.substring(0, char + 1);

        char++;

        if (char === current.length) {

            deleting = true;

            setTimeout(typeWriter, 1300);

            return;
        }

    } else {

        typing.textContent =
            current.substring(0, char - 1);

        char--;

        if (char === 0) {

            deleting = false;

            word++;

            if (word >= words.length) {
                word = 0;
            }

        }

    }

    setTimeout(
        typeWriter,
        deleting ? 45 : 85
    );
}

typeWriter();




const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");


menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});




const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 200;

        if (window.scrollY >= top) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});




const topButton =
    document.getElementById("topButton");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});




const form =
    document.getElementById("contactForm");


form.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        alert("Barcha maydonlarni to‘ldiring.");

        return;

    }


    const text =

        `Salom Gofurjon!%0A%0A` +

        `Ism: ${encodeURIComponent(name)}%0A` +

        `Email: ${encodeURIComponent(email)}%0A%0A` +

        `Xabar:%0A` +

        `${encodeURIComponent(message)}`;


    const url =
        `https://t.me/gofurjon_343?text=${text}`;


    window.open(url, "_blank");


    form.reset();

});




const revealElements =
    document.querySelectorAll(
        ".project, .tech, .id-card, .journey-terminal, .contact-box"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: .08
        }

    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});



let keys = "";

document.addEventListener("keydown", event => {

    keys += event.key.toLowerCase();

    keys = keys.slice(-7);


    if (keys === "gofurjon") {

        document.body.classList.toggle("developer-mode");

        alert("Developer Mode activated ⚡");

        keys = "";

    }

});



console.log(
`
%cGOFURJON DEVELOPER
%c
Welcome to my portfolio.

Keep coding. Keep learning. Keep building.
`,
"color:#00ff9c;font-size:20px;font-weight:bold",
"color:#718091;font-size:12px"
);