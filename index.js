let QuizDB = [
				{
				question: 'What is the full form of HTML',
				options: [
								 'Hey To My Land',
								 'Hyper Text Makeup Language',
								 'Hyper Text Markup Language',
								 'None of above',
				],
				answer: '2',
				},
				{
				question: 'What is the full form of CSS',
				options: [
								 'Card Style Sheet',
								 'Castcading Style Sheet',
								 'Cascading Short Style',
								 'None of above',
				],
				answer: '1',
				},
				{
				question: 'What is the full form of HTTP',
				options: [
								 'Hyper Text Transper Protocol',
								 'Hey To My Pen',
								 'Hyper Text Text Protocol',
								 'None of above',
				],
				answer: '0',
				},
				{
				question: 'What is the full form of JS',
				options: [
								 'Jorden Shoe',
								 'JavaScript',
								 'JunkScript',
								 'None of above',
				],
				answer: '1',
				},
]

const question = document.getElementById('question');
const options = document.getElementsByTagName('label');
const submit = document.getElementById('submit');
let input = document.querySelectorAll('input');

console.log(options)

let score = 0;
let qIndex = 0;

function next_question() {
			qIndex++;	
			load_question(qIndex);
}
function load_question(qIndex) {
				quiz = QuizDB[qIndex];
				if(quiz !== undefined) {
							question.innerText = `Q${qIndex + 1}: ${quiz.question}?`;
				for(let i in options){
								options[i].innerText = quiz.options[i];
				}	
				}				
}

load_question(qIndex);



function update_score() {
				input.forEach(function(e) {
           if(e.checked && e.id == quiz.answer) {
           				score++;
           				console.log(score)
           }
})
}

submit.onclick = ()=>{
				if(qIndex < QuizDB.length){			
							update_score();				
				     next_question();
	     }
}
