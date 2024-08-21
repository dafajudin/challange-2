import { useState } from 'react';
import { hacker_house_challenge_2_backend } from 'declarations/hacker-house-challenge-2-backend';

function App() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    hacker_house_challenge_2_backend.get_student_data(studentName).then((response) => {
      const parsed = JSON.parse(response);
      console.log(parsed);
      setStudents(parsed.mahasiswa);
    });
    return false;
  }

  return (
    <main>
      <h1>Student Info Finder</h1>
      <div>
        <h1>Find Student Info by Name</h1>
        <h5>Student Name:</h5>
        <input type="text" onChange={(ev) => setStudentName(ev.target.value)} />
        <button onClick={handleSubmit}>Find Student Info</button>
      </div>
      <div>
        <h2>Results:</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student.text} - <a href={`https://api-frontend.kemdikbud.go.id${student["website-link"]}`} target="_blank" rel="noopener noreferrer">Link</a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
