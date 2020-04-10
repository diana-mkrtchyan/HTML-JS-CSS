function calculateGrade() {
  var participationGrade = parseInt(document.getElementById("participation_Grade").innerHTML)
  var quiz_Grade = parseInt(document.getElementById("quiz_Grade").innerHTML)
  var homework_Grade = parseInt(document.getElementById("homework_Grade").innerHTML)
  var project1_Grade = parseInt(document.getElementById("project1_Grade").innerHTML)
  var project2_Grade = parseInt(document.getElementById("project2_Grade").innerHTML)


  var participation_percent = parseFloat(document.getElementById("participation_percent").innerHTML)
  var quiz_Percent = parseFloat(document.getElementById("quiz_Percent").innerHTML)
  var homework_Percent = parseFloat(document.getElementById("homework_Percent").innerHTML)
  var project1_Percent = parseFloat(document.getElementById("project1_Percent").innerHTML)
  var project2_Percent = parseFloat(document.getElementById("project2_Percent").innerHTML)


  var participation = participation_percent * participationGrade / 100
  var quiz = quiz_percent * quizGrade / 100
  var homework = homework_percent * homework_Grade / 100
  var project1 = project1_percent * project1_Grade / 100
  var project2 = project2_percent * project2_Grade / 100

  var finalGrade = participation + quiz + homework + project1 +project2
  console.log(finalGrade)
}
