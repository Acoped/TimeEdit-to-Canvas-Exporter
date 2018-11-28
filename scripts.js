$(".course").hide();
/*$(".hider").hide();*/

generateForm();
generateForm();

var coll = document.getElementsByClassName("eventHeader");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } 
    else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function hideIrrelevant() {
  var sel = O("selectCalendar")
  var selected = sel.options[sel.selectedIndex].value;
  if (selected == "Course_Code") {
    $(".student").hide();
    $(".course").show();
  }
  else {
    $(".student").show();
    $(".course").hide();
  }
}

function generateForm() {
  var eventBox = document.createElement('div');
  eventBox.setAttribute('class', 'eventBox');

  var eventTitle = document.createElement('div');
  eventTitle.setAttribute('class', 'eventHeader');
  eventTitle.innerHTML = 'Event Title';

  var eventContent = document.createElement('div');
  eventContent.setAttribute('class', 'eventContent');

  var extraMargin = document.createElement('div');
  extraMargin.setAttribute('class', 'extraMargin');

  var form = document.createElement('form');
  form.setAttribute('action', 'ADDACTIONHERE');
  form.setAttribute('id', 'eventForm');

  eventBox.append(eventTitle);
  eventBox.append(eventContent);

  eventContent.append(extraMargin);

  extraMargin.append(form);

  /* ----- FIELDS ----- */

  generateFormRow(form, 'Title:', 'title');
  generateFormRow(form, 'Start Date:', 'startDate');
  generateFormRow(form, 'Start Time:', 'startTime');
  generateFormRow(form, 'End Date:', 'endDate');
  generateFormRow(form, 'End Time:', 'endTime');
  generateFormRow(form, 'Location:', 'location');

  var label = document.createElement('label');
  label.innerHTML = "Description:"

  var textarea = document.createElement('textarea');
  textarea.setAttribute('form', 'eventForm');
  textarea.setAttribute('name', 'description');
  textarea.setAttribute('class', 'fullWidth');

  form.append(label);
  form.append(textarea);

  /* ----- /FIELDS ----- */

  O('formInserter').append(eventBox);
}

function generateFormRow(form, text, name) {
  var row = document.createElement('div');
  row.setAttribute('class', 'row');
  var col1 = document.createElement('div');
  col1.setAttribute('class', 'column');
  col1.innerHTML = text;
  var col2 = document.createElement('div');
  col2.setAttribute('class', 'column');
  var inp = document.createElement('input');
  inp.setAttribute('type', 'text');
  inp.setAttribute('name', name);

  form.append(row);
  row.append(col1);
  row.append(col2)
  col2.append(inp);
}