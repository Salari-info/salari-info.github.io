
function sendmessge () {
    var text = document.getElementById('messagef').value
    var name = document.getElementById('name').value
    document.getElementById('messagef').value = ''
    document.getElementById('name').value = ''
    var text_send = "💬 | #پیام_جدید \n نام:\n " + String(name) + "\nمتن پیام : \n " + String(text);
    try {
        $.ajax({
            type:'post',
            mode: "cors",
            cache: "no-cache",
            url:"https://tapi.bale.ai/botwT9ArKZEC8Pxy7mSjvMPHsPj6JiJlIEQDX7P7MOT/sendMessage",
            data:{chat_id:"915303220", text:String(text_send)},
        });
    alert("Your Feed Back has been sent");
        
    } catch {
        alert('error in send Feed Back')
    }
}