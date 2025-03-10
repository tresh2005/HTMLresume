document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelectorAll(".skills li");
    skills.forEach(skill => {
        skill.addEventListener("click", function() {
            alert(`You clicked on the skill: ${skill.textContent}`);
        });
    });
});
