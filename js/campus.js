const colleges = {
    iitd: {
        name: "Indian Institute of Technology Delhi",
        overview: "IIT Delhi is a premier engineering institution focused on research, innovation, and advanced technical education.",
        departments: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering"],
        facilities: ["Central Library", "Advanced Labs", "Hostels", "Sports Complex"],
        location: "New Delhi, India"
    },
    iitb: {
        name: "Indian Institute of Technology Bombay",
        overview: "IIT Bombay is known for excellence in engineering education and cutting-edge research.",
        departments: ["Computer Science", "Aerospace", "Chemical Engineering"],
        facilities: ["Library", "Research Centers", "Hostels"],
        location: "Mumbai, Maharashtra"
    },
    nittrichy: {
        name: "National Institute of Technology Tiruchirappalli",
        overview: "NIT Trichy is one of India's top NITs offering quality technical education.",
        departments: ["Engineering", "Science", "Management"],
        facilities: ["Labs", "Hostels", "Sports Facilities"],
        location: "Tiruchirappalli, Tamil Nadu"
    },
    du: {
        name: "University of Delhi",
        overview: "The University of Delhi is a leading central university offering diverse academic programs.",
        departments: ["Arts", "Science", "Commerce"],
        facilities: ["Libraries", "Colleges", "Research Centers"],
        location: "Delhi, India"
    },

    dr_ss_ghandhy: {
    name: "Dr. S. & S.S. Ghandhy Government Engineering College, Surat",
    overview: "A government engineering college in Surat, Gujarat, offering undergraduate and postgraduate engineering programs affiliated with GTU and approved by AICTE.",
    location: "Opp. RTO Office, Majura Gate, Surat - 395001, Gujarat, India",
    departments: [
        "Civil Engineering",
        "Computer Engineering",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Environmental Engineering",
        "Electronics & Instrumentation Engineering"
    ],
    facilities: [
        "Library",
        "Hostels",
        "Labs",
        "Sports Complex",
        "Cafeteria",
        "Transportation"
    ],
    contact: {
        phone: "0261-2653139",
        website: "http://www.ssgc.cteguj.in/",
        email: "gec_deg_surat@yahoo.com"
    }
}

};

const select = document.getElementById("collegeSelect");
const infoSection = document.getElementById("collegeInfo");

select.addEventListener("change", () => {
    const value = select.value;
    if (!value) {
        infoSection.style.display = "none";
        return;
    }

    const college = colleges[value];

    document.getElementById("collegeName").textContent = college.name;
    document.getElementById("collegeOverview").textContent = college.overview;
    document.getElementById("location").textContent = college.location;

    const deptList = document.getElementById("departments");
    deptList.innerHTML = "";
    college.departments.forEach(d => {
        const li = document.createElement("li");
        li.textContent = d;
        deptList.appendChild(li);
    });

    const facList = document.getElementById("facilities");
    facList.innerHTML = "";
    college.facilities.forEach(f => {
        const li = document.createElement("li");
        li.textContent = f;
        facList.appendChild(li);
    });

    infoSection.style.display = "block";
});
