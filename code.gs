function groupEmail() {
  var summarySS = SpreadsheetApp.getActiveSpreadsheet();

//Kan även vara en grupp :
  var peopleToEmail = ['karl.wiren@pwc.com']; 
  var relevantSheet = summarySS.getSheetByName('Sheet1');
  var data = relevantSheet.getDataRange().getValues();
  var emailBody = '<table>';
  for (i in data) {
    emailBody = emailBody + '<tr>';
    for (j in data[i]) {
      emailBody = emailBody + '<td>' + data[i][j] + '</td>';
    }
    emailBody = emailBody + '</td>';
  }
  emailBody = emailBody + '</table>';
  for (i in peopleToEmail) {
    GmailApp.sendEmail(peopleToEmail[i], "Ladies and Gentlemen, the Data!", "", {htmlBody:emailBody});
  }  
}
