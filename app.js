const name = document.querySelector('#name');
const dept = document.querySelector('#dept');
const email = document.querySelector('#email');
const btn = document.querySelector('.btn');
const studentInfo = document.querySelector('#student-info');

btn.addEventListener('click', function (e) {
    e.preventDefault();

    // if(Name=='' && Dept=='' && Email==''){
    //     alert("vai input gula den");
    //     console.log("vai input gula den");
    // }
    // else{
        const newStudent = document.createElement('tr');

        
        const newName = document.createElement('th');
        newName.innerHTML = name.value;
        newStudent.appendChild(newName);

        
        const newDept = document.createElement('th');
        newDept.innerHTML = dept.value;
        newStudent.appendChild(newDept);

        
        const newEmail = document.createElement('th');
        newEmail.innerHTML = email.value;
        newStudent.appendChild(newEmail);

        
        studentInfo.appendChild(newStudent);
    
})