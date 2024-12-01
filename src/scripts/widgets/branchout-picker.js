export class BranchoutPicker {
    constructor() {
        this.students = [];
    }

    render() {
        const template = document.getElementById('branchout-picker-template');
        const widget = template.content.cloneNode(true).querySelector('.widget');
        const studentList = widget.querySelector('.student-list');
        const selectedStudentDisplay = widget.querySelector('.selected-student');
        const pickStudentBtn = widget.querySelector('.pick-student-btn');

        studentList.addEventListener('input', () => {
            this.students = studentList.value.split('\n')
                .map(name => name.trim())
                .filter(name => name !== '');
        });

        pickStudentBtn.addEventListener('click', () => {
            if (this.students.length === 0) {
                alert('Please enter student names first!');
                return;
            }

            const randomIndex = Math.floor(Math.random() * this.students.length);
            const selectedStudent = this.students[randomIndex];
            
            selectedStudentDisplay.textContent = `Selected: ${selectedStudent}`;
            
            // Optional: Remove the selected student to prevent repeated selection
            this.students.splice(randomIndex, 1);
            studentList.value = this.students.join('\n');
        });

        return widget;
    }
}
