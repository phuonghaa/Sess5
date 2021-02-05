const getDetailQuestion = async (id) => {
    try {
        const res = await fetch(`http://localhost:8080/detail/${id}`);
        const jsonRes = await res.json();

        if (jsonRes.success) {
            const question = jsonRes.data;
            const { content, yes, no } = question;

            const yesNumber = parseInt(yes);
            const noNumber = parseInt(no);
            const total = yesNumber + noNumber;

            const percentYes = total === 0 ? parseFloat(50).toFixed(2) : (yes * 100 / total).toFixed(2)
            const percentNo = (100 - parseFloat(percentYes)).toFixed(2);

            $('#contentQuestion').html(content);
            $('#totalVote').html(total);
            $('#percentYes').html(percentYes);
            $('#percentNo').html(percentNo);
            $('#noProgress').css({ width: `${percentNo}%` });
            $('#yesProgress').css({ width: `${percentYes}%` });

        }
    } catch (err) {
        console.log(err);
    }
}

const getAnotherQuestion = async () => {
    try {
        const res = await fetch('http://localhost:8080/random-question');
        const jsonRes = await res.json();
        if (jsonRes.success) {
            const question = jsonRes.data;
            const { content, yes, no } = question;

            const yesNumber = parseInt(yes);
            const noNumber = parseInt(no);
            const total = yesNumber + noNumber;

            const percentYes = total === 0 ? parseFloat(50).toFixed(2) : (yes * 100 / total).toFixed(2)
            const percentNo = (100 - parseFloat(percentYes)).toFixed(2);

            $('#contentQuestion').html(content);
            $('#totalVote').html(total);
            $('#percentYes').html(percentYes);
            $('#percentNo').html(percentNo);
            $('#noProgress').css({ width: `${percentNo}%` });
            $('#yesProgress').css({ width: `${percentYes}%` });
        }
    } catch (err) {
        console.log(err);
    }
}





// extract the id of a question from the url
const pathName = window.location.pathname;
const idQuestion = pathName.split('/').pop();

// display the detail of a question 
getDetailQuestion(idQuestion);

// display the detail of another question
$('#otherQuestion').click(() => getAnotherQuestion())

