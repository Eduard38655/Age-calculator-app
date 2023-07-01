 function Campo_Basio() {
  var yearsInput = document.getElementById("years");
  var dayInput = document.getElementById("day");
  var monthsInput = document.getElementById("months");
  var error1 = document.getElementById("error1");
  var error2 = document.getElementById("error2");
  var error3 = document.getElementById("error3");
      monthsInput.style.borderColor="hsl(0, 100%, 67%)"
        dayInput.style.borderColor="hsl(0, 100%, 67%)"
        yearsInput.style.borderColor="hsl(0, 100%, 67%)"


  var errorFields = []; // Arreglo para almacenar los campos con errores
   if (yearsInput.value === "") {
    
    errorFields.push({
      field: yearsInput,
      error: error1,
      message: "This field is required"
      
    
    });
  }

  if (dayInput.value === "") {
    errorFields.push({
      field: dayInput,
      error: error2,
      message: "This field is required"
    });
  }

  if (monthsInput.value === "") {
    errorFields.push({
      field: monthsInput,
      error: error3,
      message: "This field is required"
    });
  }

  // Mostrar los mensajes de error para los campos con errores
  errorFields.forEach(function(errorField) {
    displayErrorMessage(errorField.error, errorField.message);
  });

  // Ocultar los mensajes de error para los campos sin errores
  var validFields = [yearsInput, dayInput, monthsInput];
  validFields.forEach(function(field) {
    if (!errorFields.some(function(errorField) {
      return errorField.field === field;
    })) {
      hideErrorMessage(field.nextElementSibling);
    }
  });

  return errorFields.length === 0; // Devolver true si no hay campos con errores
}

function displayErrorMessage(element, message) {
  element.textContent = message;
  element.style.display = "block";

 
     let dayh3=document.querySelector(".dayh3")
      dayh3.style.color="hsl(0, 100%, 67%)"

      let monthsh3=document.querySelector(".monthsh3")
      monthsh3.style.color="hsl(0, 100%, 67%)"
      
      let yearsh3=document.querySelector(".yearsh3")
      yearsh3.style.color="hsl(0, 100%, 67%)"
}

function hideErrorMessage(element) {
  element.textContent = "";
  element.style.display = "none";
}


function Numero_invalido() {
   var yearsInput = document.getElementById("years");
  var dayInput = document.getElementById("day");
  var monthsInput = document.getElementById("months");
  var error1 = document.getElementById("error1");
  var error2 = document.getElementById("error2");
  var error3 = document.getElementById("error3");
      monthsInput.style.borderColor="hsl(0, 100%, 67%)"
        dayInput.style.borderColor="hsl(0, 100%, 67%)"
        yearsInput.style.borderColor="hsl(0, 100%, 67%)"



        let currentDate = new Date();
  var currentyears = currentDate.getFullYear();
  var currentMonths = currentDate.getMonth() + 1;
  var currentDay = currentDate.getDate();



  var errorFields = []; // Arreglo para almacenar los campos con errores
   if (yearsInput.value >= currentyears) {
    
    errorFields.push({
      field: yearsInput,
      error: error3,
      message: "Must be in the past"
      
    
    });
  }

  if (dayInput.value >=currentDay) {
    errorFields.push({
      field: dayInput,
      error: error1,
      message: "Must be a valid day "
    });
  }

  if (monthsInput.value >=currentMonths) {
    errorFields.push({
      field: monthsInput,
      error: error2,
      message: "Must be a valid month "
    });
  }

  // Mostrar los mensajes de error para los campos con errores
  errorFields.forEach(function(errorField) {
    displayErrorMessage(errorField.error, errorField.message);
  });

  // Ocultar los mensajes de error para los campos sin errores
  var validFields = [yearsInput, dayInput, monthsInput];
  validFields.forEach(function(field) {
    if (!errorFields.some(function(errorField) {
      return errorField.field === field;
    })) {
      hideErrorMessage(field.nextElementSibling);
    }
  });

  return errorFields.length === 0; // Devolver true si no hay campos con errores
}

function displayErrorMessage(element, message) {
  element.textContent = message;
  element.style.display = "block";

 
     let dayh3=document.querySelector(".dayh3")
      dayh3.style.color="hsl(0, 100%, 67%)"

      let monthsh3=document.querySelector(".monthsh3")
      monthsh3.style.color="hsl(0, 100%, 67%)"
      
      let yearsh3=document.querySelector(".yearsh3")
      yearsh3.style.color="hsl(0, 100%, 67%)"
}

function hideErrorMessage(element) {
  element.textContent = "";
  element.style.display = "none";

}


function check_info() {
  let  yearsInput = document.getElementById("years").value;
  let dayInput = document.getElementById("day").value;
  let monthsInput = document.getElementById("months").value;

  let SpanYears = document.getElementById("year-1");
  let SpanMonths = document.getElementById("months-1");
  let SpanDay = document.getElementById("day-1");
  let currentDate = new Date();
  var currentYears = currentDate.getFullYear();
  var currentMonths = currentDate.getMonth() + 1;
  var currentDay = currentDate.getDate();

  let restmes = currentMonths - monthsInput;
  let restano = currentYears -  yearsInput;
  let restdia = dayInput - currentDay;

  if (SpanYears) {
    SpanYears.style.borderColor="blue"
    SpanYears.innerHTML = restano;
  }

  if (dayInput) {
    SpanDay.innerHTML = Math.abs(restdia);
  }

  if (monthsInput) {
    SpanMonths.innerHTML = restmes;
  }

  return true;
}

function btn() {
  if (!Campo_Basio()) {
    alert("Campo vacío");
    return;
  }

  if (!Numero_invalido()) {
    alert("Número inválido");
    return;
  }

  if (!check_info()) {
    alert("Verificación fallida");
    return;
  }

 
}