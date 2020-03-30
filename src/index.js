document.addEventListener("DOMContentLoaded", () => {
  // your code here
  var b = document.getElementById('main-content')
  let submit_button = document.querySelector('input[type="submit"]');
  var ordered_list = document.createElement("ol");
  let form = document.getElementById('create-task-form')
  b.appendChild(ordered_list)
  form.addEventListener('submit', (e)=> {
    e.preventDefault();

  })
  submit_button.addEventListener('click', function e () {

    let new_li = document.createElement("li")
    let new_item = document.getElementById('new-task-description').value;
    let node = document.createTextNode(new_item)
    new_li.appendChild(node)
    document.querySelector('ol').appendChild(new_li);
  })
});
