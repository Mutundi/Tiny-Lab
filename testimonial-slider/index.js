const testimonials = [
    {
        name: "Motegandi A.",
        photoUrl: 
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Absolutely astounding! I would be completely lost without Levi. The absolute best. Words can't express how thrilled I am with Levi.",
    },
    {
        name: "Benson M.",
        photoUrl: 
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Exceptional! Levi's expertise in software development has been invaluable to me. I'd be lost without their skill and dedication. Levi's ability to craft top-notch products for clients is unparalleled. I'm beyond thrilled with the results they deliver.",
    },
    {
        name: "Amos M.",
        photoUrl: "https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Incredible! Levi's software development services have been a game-changer for my projects. I can't thank Levi enough for their expertise and dedication. Their ability to create tailored solutions for clients is unmatched. Working with Levi has truly been a pleasure, and I couldn't be happier with the results.",
    },
    {
        name: "Gati M.",
        photoUrl: "https://media.istockphoto.com/id/1355254358/photo/nurse-headshot.jpg?s=1024x1024&w=is&k=20&c=NaMsYENnkPSQHBCaIVreHud0StP841pfF6xyyppwVgg=",
        text: "Levi's software development prowess has transformed my projects, showcasing unparalleled expertise and dedication. Their ability to tailor solutions for clients sets them apart, delivering exceptional results every time.",
    },
    {
        name: "Josephine S.",
        photoUrl: "https://media.istockphoto.com/id/1405974701/photo/close-up-portrait-of-confident-african-american-female-employee-standing-in-modern-office.jpg?s=1024x1024&w=is&k=20&c=OV6VC-20jtBHA_Orbt1UnSngkbX5QJZxhhUAdYTqQRU=",
        text: "Levi's software development services have been a revelation, bringing expertise and dedication to every project. Their knack for customizing solutions for clients ensures outstanding outcomes, making Levi an invaluable partner.",
    },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

const updateTestimonial = () => {
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;

    if (idx === testimonials.length) {
        idx = 0;
    }

    setTimeout(() => {
        updateTestimonial();
    }, 10000);
};

updateTestimonial();