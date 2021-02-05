$("#summit-btn").on("click", (event) => {
    event.preventDefault();
    const content = $("#create-textarea").val();
    const question = { content }

    if (content.trim() === ""){
        alert('Không được bỏ trống!')
    } else {
        fetch('http://localhost:8080/create-question', {
            method: 'POST',
            body: new URLSearchParams(question)
        })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
            alert('Câu hỏi đã được thêm thành công!')
            window.location.href = '/';
            } 
        });
    }
})




$("#create-textarea").on("input", () => {
    const charLeft = 200 - $("#create-textarea").val().length;
    $("#restLengthDom").html(`${charLeft}`);
})