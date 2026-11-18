// Arrays containing student names and grades
let studentNames = [
    "Krey Ann Rodriguez",
    "Natalie Reyes",
    "Nica Carpio",
    "Aly Garcia",
    "Casandra Cruz"
];

let studentGrades = [92, 85, 78, 97, 74];

// Display enrolled students in the first table
function displayStudents() {

    let output = "";

    // Loop through student arrays
    for (let i = 0; i < studentNames.length; i++) {

        output += "<tr>";
        output += "<td>" + studentNames[i] + "</td>";
        output += "<td>" + studentGrades[i] + "</td>";
        output += "</tr>";
    }

    document.getElementById("studentTableBody").innerHTML = output;
}

// Show grade equivalents and evaluations
function showGradeEquivalent() {

    let output = "<h2>Grade Equivalents</h2>";
    output += "<table>";

    // Table headings
    output += "<tr>";
    output += "<th>Student Name</th>";
    output += "<th>Grade</th>";
    output += "<th>Equivalent</th>";
    output += "<th>Remark</th>";
    output += "<th>Academic Leader</th>";
    output += "</tr>";

    // Loop through all students
    for (let i = 0; i < studentNames.length; i++) {

        let name = studentNames[i];
        let grade = studentGrades[i];

        // Evaluate student grade using functions
        let equivalent = getEquivalent(grade);
        let remark = getRemark(grade);
        let leader = getAcademicLeader(equivalent);

        // Add student results to the table
        output += "<tr>";
        output += "<td>" + name + "</td>";
        output += "<td>" + grade + "</td>";
        output += "<td>" + equivalent + "</td>";
        output += "<td>" + remark + "</td>";
        output += "<td>" + leader + "</td>";
        output += "</tr>";
    }

    output += "</table>";

    // Display results
    document.getElementById("result").innerHTML = output;
}

// Function to determine student remark
function getRemark(grade) {

    // Ternary operator
    let remark = (grade >= 75) ? "Passed" : "Failed";

    return remark;
}

// Function to determine grade equivalent
function getEquivalent(grade) {

    let equivalent = "";

    if (grade >= 97) {
        equivalent = "1.0";
    }
    else if (grade >= 94) {
        equivalent = "1.25";
    }
    else if (grade >= 91) {
        equivalent = "1.5";
    }
    else if (grade >= 88) {
        equivalent = "1.75";
    }
    else if (grade >= 85) {
        equivalent = "2.0";
    }
    else if (grade >= 82) {
        equivalent = "2.25";
    }
    else if (grade >= 79) {
        equivalent = "2.5";
    }
    else if (grade >= 76) {
        equivalent = "2.75";
    }
    else if (grade >= 75) {
        equivalent = "3.0";
    }
    else {
        equivalent = "5.0";
    }

    return equivalent;
}

// Function to determine academic leader
function getAcademicLeader(equivalent) {

    let leader = "";

    switch (equivalent) {

        case "1.0":
        case "1.25":
            leader = "1st Class Academic Leader";
            break;

        case "1.5":
            leader = "2nd Class Academic Leader";
            break;

        case "1.75":
            leader = "3rd Class Academic Leader";
            break;

        default:
            leader = "-";
            break;
    }

    return leader;
}

// Display students automatically when page loads
displayStudents();
