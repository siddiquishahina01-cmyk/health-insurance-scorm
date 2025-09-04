function ExecuteScript(strId) {
  switch (strId) {
    case "6G4WhvFxt08":
      Script1();
      break;
  }
}

function Script1() {

}

window.addEventListener("message",
  function (e) {
    //this.alert(e.data);
    if (e.data == "Completed") {
      var lmsAPI = parent;
      
      
	  try {
			parent.__LMSSetValue("cmi.core.lesson_status", "completed");
		}
		catch(err) {
			lmsAPI.SCORM_CallLMSSetValue("cmi.core.lesson_status", "completed");
		}
    }

    if (e.data == "Exit") {
      window.close();
    }
  }, false);

