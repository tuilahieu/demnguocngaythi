const changeBackground = document.querySelector('.wrapper');
const backgroundUrl = [
    './assets/background/bg2.jpg',
    './assets/background/bg3.jpg',
    './assets/background/bg4.jpg',
    './assets/background/bg5.jpg',
    './assets/background/bg6.jpg',
    './assets/background/bg7.jpg',
];
let randomBgc = Math.floor(Math.random() * backgroundUrl.length);
changeBackground.style.backgroundImage = `url(${backgroundUrl[randomBgc]})`;

const quotes = [
    "Tri thức là sức mạnh. F.Bacon",
    "Cần phải lựa chọn một cách nghiêm ngặt xem nên học gì và không nên học gì. [Lev Tolstoy]",
    "Đọc sách không bằng suy ngẫm, Học trường không hơn được trường đời. [Immanuel Kant]",
    "Nghị lực và bền bỉ có thể giúp bạn chinh phục mọi thứ",
    "Cuộc đời sẽ tươi đẹp hơn rất nhiều nếu ta có những tình bạn đúng nghĩa, luôn hết mình vì người khác.",
    "Một chữ cũng là thầy, nửa chữ cũng là thầy [Tục ngữ Việt Nam]",
    "Vấp ngã không phải là thất bại, chỉ là dừng lại cho đỡ mỏi chân thôi!",
    "Giáo dục là làm cho con người tìm thấy chính mình . [Socrates]",
    "Ước mơ không có ngày hết hạn, hãy hít thở sâu và cố gắng thêm lần nữa.",
    "Cuộc sống rất ngắn. Đừng lẵng phí nó bởi những nỗi buồn. Hãy là chính mình, luôn vui vẻ, tự do, và trở thành bất cứ gì bạn muốn.",
    "Học, học nữa, học mãi. [V.I. Lenin]",
    "Phía sau tôi không có lấy một người, sao tôi dám ngã xuống.",
    "Trường học có thể hô biến những người thắng và người bại, nhưng cuộc sống thì không. [Bill Gate]",
    "Muốn xây dựng đất nước, trước hết phải phát triển giáo dục. Muốn trị nước, phải trọng dụng người tài. [Chiếu Lập Học]",
    "Thời gian còn lại rất ngắn. Hãy cố gắng hết sức mình, để không phải hối tiếc.",
    "Con đường do bản thân lựa chọn, dù có quỳ cũng phải đi cho hết.",
    "Thái độ bây giờ của bạn sẽ quyết định mười năm sau bạn là một nhân vật tầm cỡ hay chỉ là một kẻ thất bại.",
    "Nếu như không có vận may, thì hãy thử dùng dũng khí.",
    "Để có thể thành công, bạn cần phải tin rằng mình có thể.",
    "Cách tốt nhất để làm mọi thứ là ngừng nói và làm ngay bây giờ.",
    "Bạn chỉ thất bại khi bạn ngừng cố gắng."
];

let randomQuote = Math.floor(Math.random() * quotes.length);
const quoteContent = document.querySelector('.quote-content');
quoteContent.textContent = quotes[randomQuote];

const buttonChangeStyleChild = document.querySelector('.change-style');
const buttonChangeStyle = document.querySelector('.theme-mode');

if(new Date().getHours() >= 17 || new Date().getHours() <= 5) {
    document.querySelector('.wrapper').classList.add('dark');
    buttonChangeStyleChild.classList.add('dark');
} else {
    document.querySelector('.wrapper').classList.remove('dark');
    buttonChangeStyleChild.classList.remove('dark');
}

buttonChangeStyle.addEventListener('click', function() {
    buttonChangeStyleChild.classList.toggle('dark');
    document.querySelector('.wrapper').classList.toggle('dark');
});

const reload = document.querySelector('.reload');
reload.addEventListener('click', function() {
    this.style.transform = "rotate(360deg)";
    setTimeout(function() {
        location.reload();
    },1000);
});

// counter

const interval = setInterval(function() {
    const ngayThi = new Date('July 07 2022 05:00:00 GMT+0700 (Giờ Đông Dương)');
    let now = new Date();
    let distance = Math.floor((ngayThi.getTime() / 1000 ) - (now.getTime() / 1000));
    if(distance <= 0) {
        clearInterval(interval);
        document.querySelector('.end').style.display = 'block';
        return;
    }
    let days = parseInt(distance / 86400);
    distance = distance % 86400;
    document.querySelector('#days .days-tct').textContent = `0${days}`.slice(-2);
    let hours = parseInt(distance / 3600);
    distance = distance % 3600;
    document.querySelector('#hours .hours-tct').textContent = `0${hours}`.slice(-2);
    let minutes = parseInt(distance / 60);
    distance = distance % 60;
    document.querySelector('#minutes .minutes-tct').textContent = `0${minutes}`.slice(-2);
    let seconds = parseInt(distance);
    document.querySelector('#seconds .seconds-tct').textContent = `0${seconds}`.slice(-2);
    
}, 1000);




