function TotalGrade() {
  var participationGrade = parseFloat(document.getElementById("participationGrade").innerHTML)
  var quizGrade = parseFloat(document.getElementById("quizGrade").innerHTML)
  var homeworkGrade = parseFloat(document.getElementById("homeworkGrade").innerHTML)
  var projectM1Grade = parseFloat(document.getElementById("projectM1Grade").innerHTML)
  var projectM2Grade = parseFloat(document.getElementById("projectM2Grade").innerHTML)

  var participationPercent = parseInt(document.getElementById("participationPercent").innerHTML)
  var quizPercent = parseInt(document.getElementById("quizPercent").innerHTML)
  var homeworkPercent = parseInt(document.getElementById("homeworkPercent").innerHTML)
  var projectM1Percent = parseInt(document.getElementById("projectM1Percent").innerHTML)
  var projectM2Percent = parseInt(document.getElementById("projectM2Percent").innerHTML)

  var Participation = participationPercent * participationGrade / 100
  var Quiz = quizPercent * quizGrade / 100
  var Homework = homeworkPercent * homeworkGrade / 100
  var ProjectM1 = projectM1Percent * projectM1Grade / 100
  var ProjectM2 = projectM2Percent * projectM2Grade / 100

  var FinalGrade = Participation + Quiz + Homework + ProjectM1 + ProjectM2

  console.log(FinalGrade)
  var display=document.getElementById('TotalGrade');
   display.innerHTML=FinalGrade;
}
