// onload
let idQuestion = '';

//  display a randomly selected question from data.json
const getRandomQuestion = async () => {
  const res = await fetch('http://localhost:8080/random-question');
  const jsonRes = await res.json();
  if (jsonRes.success) {
    const { content, _id } = jsonRes.data;
    $("#contentQuestion").html(content);
    idQuestion = _id;
  }
}
getRandomQuestion();

// display another randomly selected question from data.json
$("#otherQuestion").click(() => {
    getRandomQuestion()
})

// display the detail 
$("#voteResultBtn").click(() => {
  window.location.href = `/question/${idQuestion}`
})

// listen to the event of clicking the btn vote-up/ vote-down
const handleVote = async (type) => {
  try {
    const res = await fetch(
      `http://localhost:8080/add-vote/${idQuestion}`, 
      {
        method: 'PUT',
        body: new URLSearchParams({ type })
      }
    );
    const jsonRes = await res.json();
    if (jsonRes.success) {
      window.location.href = `/question/${jsonRes.data._id}`
    }
  } catch (err) {
    console.log(err);
  }
}

$("#yesBtn").click( () => handleVote('yes'));
$("#noBtn").click( () => handleVote('no'));
