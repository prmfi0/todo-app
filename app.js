const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const addbtn = document.querySelector('.send-task');
const gettext = document.querySelector('.input-task');
const tasks = document.querySelector('#tasks');

addbtn.addEventListener('click', function () {

  const inputvalue = gettext.value;

  if (inputvalue.trim() === '') return;

  const div = document.createElement('div');

  div.classList.add('box');

  div.innerHTML = `
    <input type="checkbox" class="check-task">
    <p class="text-task">${inputvalue}</p>

    <div class="buttons">
      <button class="delete-icon">
        <img class="icon" src="delete.svg">
      </button>
    </div>
  `;
  tasks.prepend(div);
  gettext.value = '';
});
tasks.addEventListener("click", function(event) {

    if (event.target.closest(".delete-icon")) {

        const currentTask = event.target.closest(".box");

        currentTask.remove();
    }

});