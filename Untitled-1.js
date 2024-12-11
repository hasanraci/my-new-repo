// Türkiye'de bulunan şehirler
const cities = [
    { name: "Adana", coords: [37.0, 35.321], question: "Kebaplarıyla ünlü olan bu şehir hangisidir?" },
    { name: "Adıyaman", coords: [37.764, 38.276], question: "Nemrut Dağı ile bilinen bu şehir hangisidir?" },
    { name: "Afşin", coords: [37.368, 36.996], question: "Elbistan Ovası'na komşu olan bu ilçe hangi şehirde yer alır?" },
    { name: "Aksaray", coords: [38.363, 34.022], question: "Ihlara Vadisi ile ünlü olan bu şehir hangisidir?" },
    { name: "Amasya", coords: [40.654, 35.829], question: "Şehzadeler Şehri olarak anılan bu şehir hangisidir?" },
    { name: "Ankara", coords: [39.92, 32.85], question: "Türkiye'nin başkenti olan bu şehir hangisidir?" },
    { name: "Antalya", coords: [36.88, 30.70], question: "Turizm cenneti olarak bilinen bu şehir hangisidir?" },
    { name: "Artvin", coords: [41.319, 41.822], question: "Karagöl ve yaylalarıyla ünlü olan bu şehir hangisidir?" },
    { name: "Aydın", coords: [37.846, 27.848], question: "Efes Antik Kenti'nin yakınında yer alan bu şehir hangisidir?" },
    { name: "Balıkesir", coords: [39.649, 27.88], question: "Cunda Adası'na ev sahipliği yapan bu şehir hangisidir?" },
    { name: "Bolu", coords: [40.737, 31.602], question: "Abant Gölü ile ünlü olan bu şehir hangisidir?" },
    { name: "Bursa", coords: [40.19, 29.06], question: "Osmanlı'nın ilk başkenti olan bu şehir hangisidir?" },
    { name: "Çorum", coords: [40.549, 34.953], question: "Leblebisiyle ünlü olan bu şehir hangisidir?" },
    { name: "Denizli", coords: [37.773, 29.089], question: "Pamukkale travertenleriyle bilinen bu şehir hangisidir?" },
    { name: "Diyarbakır", coords: [37.914, 40.230], question: "Ünlü surları ve karpuzuyla tanınan bu şehir hangisidir?" },
    { name: "Edirne", coords: [41.674, 26.556], question: "Kırkpınar Yağlı Güreşleri'ne ev sahipliği yapan bu şehir hangisidir?" },
    { name: "Elazığ", coords: [38.680, 39.224], question: "Harput Kalesi'nin bulunduğu bu şehir hangisidir?" },
    { name: "Erzincan", coords: [39.747, 39.493], question: "Tulum peyniriyle ünlü olan bu şehir hangisidir?" },
    { name: "Erzurum", coords: [39.916, 41.273], question: "Palandöken Kayak Merkezi'yle bilinen bu şehir hangisidir?" },
    { name: "Eskişehir", coords: [39.776, 30.521], question: "Porsuk Çayı ve Odunpazarı Evleri'yle ünlü olan bu şehir hangisidir?" },
    { name: "Gaziantep", coords: [37.066, 37.383], question: "Baklavası ve mutfağıyla ünlü olan bu şehir hangisidir?" },
    { name: "Giresun", coords: [40.912, 38.386], question: "Kirazın anavatanı olarak bilinen bu şehir hangisidir?" },
    { name: "Gümüşhane", coords: [40.471, 39.479], question: "Karaca Mağarası ile ünlü olan bu şehir hangisidir?" },
    { name: "Hakkari", coords: [37.577, 43.739], question: "Zap Vadisi'ne ev sahipliği yapan bu şehir hangisidir?" },
    { name: "Hatay", coords: [36.361, 36.514], question: "Hoşgörüsü ve mutfağıyla bilinen bu şehir hangisidir?" },
    { name: "Isparta", coords: [37.749, 30.555], question: "Gülleriyle ünlü olan bu şehir hangisidir?" },
    { name: "İstanbul", coords: [41.01, 28.97], question: "Avrupa ve Asya'yı birleştiren bu şehir hangisidir?" },
    { name: "İzmir", coords: [38.42, 27.14], question: "Ege'nin incisi olarak bilinen bu şehir hangisidir?" },
    { name: "Kahramanmaraş", coords: [37.572, 36.937], question: "Dondurmasıyla ünlü olan bu şehir hangisidir?" },
    { name: "Karabük", coords: [41.2, 32.625], question: "Safranbolu Evleri'yle tanınan bu şehir hangisidir?" },
    { name: "Karaman", coords: [37.176, 33.214], question: "Türkçe'nin ilk resmi dil ilan edildiği bu şehir hangisidir?" },
    { name: "Kastamonu", coords: [41.387, 33.780], question: "Ilgaz Dağı ile bilinen bu şehir hangisidir?" },
    { name: "Kayseri", coords: [38.733, 35.486], question: "Mantısı ve pastırmasıyla ünlü olan bu şehir hangisidir?" },
    { name: "Kırıkkale", coords: [39.846, 33.515], question: "Silah sanayisiyle bilinen bu şehir hangisidir?" },
    { name: "Kırklareli", coords: [41.735, 27.222], question: "Dupnisa Mağarası ile ünlü olan bu şehir hangisidir?" },
    { name: "Kocaeli", coords: [40.866, 29.912], question: "Sanayisiyle ünlü olan bu şehir hangisidir?" },
    { name: "Konya", coords: [37.876, 32.482], question: "Mevlana Türbesi'ne ev sahipliği yapan bu şehir hangisidir?" },
    { name: "Kütahya", coords: [39.421, 29.971], question: "Çinicilik sanatıyla bilinen bu şehir hangisidir?" },
    { name: "Malatya", coords: [38.355, 38.308], question: "Kayısısıyla ünlü olan bu şehir hangisidir?" },
    { name: "Manisa", coords: [38.622, 27.428], question: "Mesir Macunu ile bilinen bu şehir hangisidir?" },
    { name: "Mardin", coords: [37.319, 40.741], question: "Tarihi taş evleriyle ünlü olan bu şehir hangisidir?" },
    { name: "Mersin", coords: [36.8, 34.648], question: "Kızkalesi ile bilinen bu şehir hangisidir?" },
    { name: "Muğla", coords: [37.216, 28.364], question: "Bodrum, Marmaris ve Fethiye gibi turistik ilçeleri olan bu şehir hangisidir?" },
    { name: "Nevşehir", coords: [38.625, 34.717], question: "Kapadokya'ya ev sahipliği yapan bu şehir hangisidir?" },
    { name: "Niğde", coords: [37.965, 34.683], question: "Demirkazık Dağı ile ünlü olan bu şehir hangisidir?" },
    { name: "Ordu", coords: [41.002, 37.876], question: "Fındığıyla ünlü olan bu şehir hangisidir?" },
    { name: "Rize", coords: [41.025, 40.517], question: "Çayıyla ünlü olan bu şehir hangisidir?" },
    { name: "Sakarya", coords: [40.774, 30.402], question: "Sapanca Gölü ile bilinen bu şehir hangisidir?" },
    { name: "Samsun", coords: [41.286, 36.33], question: "Atatürk'ün Samsun'a çıkış yaptığı bu şehir hangisidir?" },
    { name: "Siirt", coords: [37.951, 41.943], question: "Memleketteki en fazla zeytin ve fıstık yetiştirilen şehir hangisidir?" },
    { name: "Sinop", coords: [42.014, 35.152], question: "Türkiye'nin en kuzey noktası olan bu şehir hangisidir?" },
    { name: "Sivas", coords: [39.75, 37.017], question: "Atatürk'ün Erzurum'dan sonra Sivas'a geçerek kongre düzenlediği şehir hangisidir?" },
    { name: "Şanlıurfa", coords: [37.153, 38.796], question: "Balıklıgöl ile bilinen bu şehir hangisidir?" },
    { name: "Tekirdağ", coords: [40.978, 27.496], question: "Marmara Bölgesi'nin önemli tarım ve sanayi şehirlerinden biri olan bu şehir hangisidir?" },
    { name: "Tokat", coords: [40.316, 36.558], question: "Zile'nin üzümü ile ünlü olan bu şehir hangisidir?" },
    { name: "Trabzon", coords: [41.001, 39.717], question: "Sümela Manastırı ile ünlü olan bu şehir hangisidir?" },
    { name: "Tunceli", coords: [39.106, 39.555], question: "Munzur Dağları ile bilinen bu şehir hangisidir?" },
    { name: "Uşak", coords: [38.682, 29.411], question: "İpliği ve pamuğu ile bilinen bu şehir hangisidir?" },
    { name: "Van", coords: [38.485, 43.372], question: "Van Gölü'nün kenarında bulunan bu şehir hangisidir?" },
    { name: "Yalova", coords: [40.651, 29.271], question: "Termal su kaynaklarıyla ünlü bu şehir hangisidir?" },
    { name: "Yozgat", coords: [39.82, 34.815], question: "Saraykent ilçesiyle ünlü olan bu şehir hangisidir?" },
    { name: "Zonguldak", coords: [41.456, 31.803], question: "Karadeniz'e kıyısı olan ve madenleriyle bilinen bu şehir hangisidir?" }
];

// HTML elemanları
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit-btn');
const startButton = document.getElementById('start-btn');
const mapElement = document.getElementById('map');
const scoreElement = document.getElementById('score');
const livesElement = document.getElementById('lives');
const timerElement = document.getElementById('timer');

let currentCity;
let score = 0;
let lives = 3;
let timer = 60;
let timerInterval;

// Harita oluşturuluyor
const map = L.map(mapElement).setView([39.9334, 32.8597], 6); // Başlangıç konumu (örneğin Ankara)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Rastgele bir şehir yükleyen fonksiyon
function loadRandomCity(map) {
    const randomIndex = Math.floor(Math.random() * cities.length);
    currentCity = cities[randomIndex];

    // Şehirle ilgili açıklamayı soruya ekleyin
    questionElement.textContent = currentCity.question;

    // Haritaya işaretçi ekle
    map.setView(currentCity.coords, 8);
    L.marker(currentCity.coords).addTo(map);
}

// Kullanıcı yanıtını kontrol eden fonksiyon
function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    if (userAnswer === currentCity.name.toLowerCase()) {
        alert("Doğru cevap!");
        score += 10; // Her doğru cevap için 10 puan ekle
        scoreElement.textContent = score;
        answerInput.value = ''; // Giriş kutusunu temizle
        loadRandomCity(map); // Yeni şehir yükle
    } else {
        alert(`Yanlış cevap. Doğru cevap: ${currentCity.name}`);
        lives--;
        livesElement.textContent = lives;

        if (lives <= 0) {
            alert("Oyun Bitti! Skorunuz: " + score);
            clearInterval(timerInterval);
            resetGame();
            return;
        }

        answerInput.value = ''; // Giriş kutusunu temizle
        loadRandomCity(map); // Yeni şehir yükle
    }
}

// Oyunu başlatan fonksiyon
function startGame() {
    score = 0;
    lives = 3;
    timer = 60;
    scoreElement.textContent = score;
    livesElement.textContent = lives;
    timerElement.textContent = timer;

    // Zamanlayıcı başlat
    timerInterval = setInterval(() => {
        timer--;
        timerElement.textContent = timer;
        if (timer <= 0) {
            alert("Zaman bitti! Skorunuz: " + score);
            clearInterval(timerInterval);
            resetGame();
        }
    }, 1000);

    loadRandomCity(map);
}

// Oyunu sıfırlayan fonksiyon
function resetGame() {
    score = 0;
    lives = 3;
    timer = 60;
    scoreElement.textContent = score;
    livesElement.textContent = lives;
    timerElement.textContent = timer;
    questionElement.textContent = "Click 'Start Game' to begin!";
}

// Başlangıç butonuna tıklanma olayını ekleyin
startButton.addEventListener('click', startGame);

// Yanıt kontrol butonuna tıklama olayını ekleyin
submitButton.addEventListener('click', checkAnswer);















