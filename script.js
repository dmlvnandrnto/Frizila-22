/* =========================================================
   LOVE ADVENTURE — EDIT PERSONALISASI DI BAGIAN CONFIG SAJA
   ========================================================= */

const CONFIG = {
    nama: "Sayang",
    dari: "Aku",
    judul: "Happy Birthday, FRIZILA CLARINTAN!",
    subjudul: "Sebuah petualangan kecil berisi kenangan, tantangan, dan kejutan yang aku siapkan khusus buat kamu.",
    cerita: [
        {
            foto: "foto/1.jpg",
            judul: "Awal kita ketemu",
            teks: "Hari itu aku nggak nyangka, orang yang baru kukenal ternyata bakal jadi orang sepenting ini di hidupku."
        },
        {
            foto: "foto/2.jpg",
            judul: "Momen sederhana",
            teks: "Hal-hal sederhana bareng kamu sering kali justru jadi kenangan yang paling aku ingat."
        },
        {
            foto: "foto/3.jpg",
            judul: "Foto Bareng di Sekolah",
            teks: "Masih ingat nggak waktu kita foto bareng di sekolah? Waktu itu kita masih malu-malu, bingung harus bersikap gimana, tapi justru itu yang bikin kenangan ini terasa manis sampai sekarang."
        },
        {
            foto: "foto/4.jpg",
            judul: "Perjalanan berlanjut",
            teks: "Cerita kita belum selesai. Masih banyak tempat, tawa, dan kenangan yang ingin aku buat bareng kamu."
        }
    ],
    soal: [
        {
            q: "Kita pertama kali ketemu di mana?",
            pilihan: ["Di Sekolah", "Games", "Di Instagram", "Di Jalan"],
            jawaban: 2,
            benar: "Betul! Satu kunci kenangan berhasil kamu dapatkan 🥰",
            salah: "Belum tepat! Coba ingat lagi, kamu pasti bisa."
        },
        {
            q: "Makanan yang paling sering kita bicarakan?",
            pilihan: ["Nasi Goreng", "Mie Gacoan", "Sate", "Pecel Lele/Ayam"],
            jawaban: 1,
            benar: "Yap! Kamu makin dekat dengan hadiah rahasia 😋",
            salah: "Hmm, bukan yang itu. Coba pilihan lain."
        },
        {
            q: "Tanggal spesial kita jatuh pada…",
            pilihan: ["Tanggal 22", "Tanggal 13", "Tanggal 5", "Tanggal 23"],
            jawaban: 1,
            benar: "Benar! Memori kamu masih kuat 💕",
            salah: "Masih belum. Tenang, kamu boleh mencoba lagi."
        },
        {
            q: "Apa yang paling aku suka dari kamu?",
            pilihan: ["Cara kamu tertawa", "Perhatian kecil", "Jadi diri sendiri saat bersamamu", "Semuanya"],
            jawaban: 3,
            benar: "Jawaban paling tepat: semuanya. Kunci terakhir terbuka! 💖",
            salah: "Hampir! Ada jawaban yang mencakup semuanya."
        }
    ],
    game: {
        target: 25,
        detik: 50
    },
    kado: [
        {
            ikon: "🎁",
            isi: "Alasan #1 aku sayang kamu: kamu bisa membuat hari yang berat terasa lebih mendingan."
        },
        {
            ikon: "🎀",
            isi: "Alasan #2: aku menghargai kesabaran dan cara kamu tetap ada di sampingku."
        },
        {
            ikon: "💌",
            isi: "Alasan #3: bersamamu, aku merasa bisa jadi diriku sendiri."
        }
    ],
    suratJudul: "Untuk FRIZILA CLARINTAN, dari DWI MALVIN A ♡",
    surat: "Selamat ulang tahun, FRIZILA CLARINTAN SAYANGKU.\n\nTerima kasih sudah hadir dan menjadi bagian penting dalam hidupku. Semoga di usia yang baru ini kamu selalu diberi kesehatan, kebahagiaan, ketenangan, dan keberanian untuk mengejar semua impianmu. Semoga hal-hal baik datang satu per satu, bahkan dari arah yang nggak pernah kamu duga.\n\nAku bikin petualangan kecil ini supaya ulang tahunmu punya kenangan yang berbeda. Mungkin masih sederhana, tapi setiap bagian dibuat dengan niat dan rasa sayang yang tulus.\n\nTerima kasih sudah berjalan sejauh ini bareng aku. Semoga kita masih punya banyak cerita yang bisa dikenang dan banyak hari bahagia yang bisa dirayakan bersama.\n\nHappy birthday, sayang. Aku sayang kamu. ♡\n\n— {dari}"
};
const $ = id => document.getElementById(id);
const fill = value => value.replaceAll("{nama}", CONFIG.nama).replaceAll("{dari}", CONFIG.dari);
const screens = [...document.querySelectorAll(".screen")];
const rnd = (min, max) => min + Math.random() * (max - min);
const TOTAL_MISSIONS = 6;
let completed = new Set();
function show(id) {
    screens.forEach(screen => screen.classList.toggle("on", screen.id === id));
    window.scrollTo({ top: 0, behavior: "smooth" });
}
function completeMission(n) {
    completed.add(n);
    $("overall-progress").style.width = `${completed.size / TOTAL_MISSIONS * 100}%`;
    $("progress-count").textContent = `${completed.size} / ${TOTAL_MISSIONS} misi`;
    const labels = ["Persiapan petualangan", "Kenangan terbuka", "Hutan berhasil dijelajahi", "Tantangan kenangan selesai", "Hati berhasil dikumpulkan", "Pasangan berhasil ditemukan", "Kunci hadiah ditemukan", "Petualangan selesai!"];
    $("stage-caption").textContent = labels[Math.min(completed.size, labels.length - 1)];
}
$("t-title").textContent = fill(CONFIG.judul);
$("t-sub").textContent = CONFIG.subjudul;
document.title = fill(CONFIG.judul);
/* Dekorasi latar */
(function makeSky() {
    const sky = $("sky"), icons = ["♡", "💗", "✦", "✨", "💕", "·"];
    for (let i = 0; i < 23; i++) {
        const item = document.createElement("span");
        item.className = i % 3 === 0 ? "star" : "floaty";
        item.textContent = icons[i % icons.length];
        item.style.left = `${rnd(2, 97)}%`;
        item.style.fontSize = `${rnd(12, 30)}px`;
        item.style.animationDuration = `${rnd(9, 23)}s`;
        item.style.animationDelay = `${-rnd(0, 20)}s`;
        if (item.className === "star")
            item.style.top = `${rnd(3, 95)}%`;
        sky.appendChild(item);
    }
})();
/* Musik opsional: letakkan file di musik/lagu.mp3 */
const bgm = $("bgm"), musicButton = $("music");
bgm.addEventListener("canplay", () => musicButton.hidden = false, { once: true });
bgm.addEventListener("error", () => musicButton.hidden = true);
musicButton.addEventListener("click", async () => {
    if (bgm.paused) {
        try {
            await bgm.play();
            musicButton.textContent = "🔊";
        }
        catch {
            musicButton.textContent = "🔇";
        }
    }
    else {
        bgm.pause();
        musicButton.textContent = "🔇";
    }
});
/* Mulai dan cerita */
$("btn-start").addEventListener("click", () => {
    bgm.play().then(() => { musicButton.hidden = false; musicButton.textContent = "🔊"; }).catch(() => { });
    show("s-story");
    loadStory(0);
});
let storyIndex = 0;
function loadStory(index) {
    storyIndex = index;
    const story = CONFIG.cerita[index], picture = $("pic"), photo = new Image();
    picture.className = "pic";
    picture.replaceChildren();
    photo.src = story.foto;
    photo.alt = story.judul;
    photo.onerror = () => picture.classList.add("missing");
    picture.appendChild(photo);
    $("cap-t").textContent = story.judul;
    $("cap-x").textContent = story.teks;
    $("story-count").textContent = `Kenangan ${index + 1} dari ${CONFIG.cerita.length}`;
    $("dots").replaceChildren(...CONFIG.cerita.map((_, n) => {
        const dot = document.createElement("i");
        if (n === index)
            dot.className = "on";
        return dot;
    }));
    $("prev").hidden = index === 0;
    $("next").textContent = index === CONFIG.cerita.length - 1 ? "Selesaikan level ➜" : "Kenangan berikutnya ➜";
}
$("prev").addEventListener("click", () => {
    if (storyIndex > 0)
        loadStory(storyIndex - 1);
});
$("next").addEventListener("click", () => {
    if (storyIndex < CONFIG.cerita.length - 1)
        loadStory(storyIndex + 1);
    else {
        completeMission(1);
        startExploreGame();
    }
});
/* LEVEL 2 — PETUALANGAN PETA DAN GERAKAN KARAKTER */
const MAP_SIZE = 7;
const explorer = { x: 0, y: 0, steps: 0, hearts: new Set(), finished: false };
const forestWalls = new Set(["0,2", "1,2", "2,2", "3,1", "3,4", "4,4", "5,2", "2,4"]);
const forestHearts = new Set(["0,3", "1,5", "3,3", "4,1", "5,5"]);
const forestPortal = "6,6";
function startExploreGame() {
    show("s-explore");
    explorer.x = 0;
    explorer.y = 0;
    explorer.steps = 0;
    explorer.hearts = new Set();
    explorer.finished = false;
    $("explore-next").hidden = true;
    $("explore-message").textContent = "Temukan semua 5 hati, lalu masuk ke portal!";
    renderAdventureMap();
}
function renderAdventureMap() {
    const map = $("adventure-map");
    map.replaceChildren();
    for (let y = 0; y < MAP_SIZE; y++) {
        for (let x = 0; x < MAP_SIZE; x++) {
            const position = `${x},${y}`;
            const cell = document.createElement("div");
            cell.className = "map-cell";
            cell.setAttribute("role", "gridcell");
            if (forestWalls.has(position)) {
                cell.classList.add("wall");
                cell.textContent = "🌳";
                cell.setAttribute("aria-label", "Pohon penghalang");
            }
            else if (x === explorer.x && y === explorer.y) {
                cell.classList.add("player-cell");
                cell.textContent = "🧑🏻‍🚀";
                cell.setAttribute("aria-label", "Karakter kamu");
            }
            else if (position === forestPortal) {
                cell.classList.add("portal-cell");
                cell.textContent = explorer.hearts.size === forestHearts.size ? "🌀" : "🔒";
                cell.setAttribute("aria-label", "Portal menuju level berikutnya");
            }
            else if (forestHearts.has(position) && !explorer.hearts.has(position)) {
                cell.classList.add("collectible-cell");
                cell.textContent = "💗";
                cell.setAttribute("aria-label", "Hati yang bisa dikumpulkan");
            }
            else {
                cell.textContent = "";
                cell.setAttribute("aria-label", "Jalur hutan");
            }
            map.appendChild(cell);
        }
    }
    $("explore-hearts").textContent = `${explorer.hearts.size} / ${forestHearts.size}`;
    $("coin-count").textContent = explorer.hearts.size * 10;
    $("step-count").textContent = explorer.steps;
}
function moveExplorer(direction) {
    if (explorer.finished || !$("s-explore").classList.contains("on"))
        return;
    const movement = {
        up: { x: 0, y: -1 },
        down: { x: 0, y: 1 },
        left: { x: -1, y: 0 },
        right: { x: 1, y: 0 }
    }[direction];
    if (!movement)
        return;
    const nextX = explorer.x + movement.x;
    const nextY = explorer.y + movement.y;
    const nextPosition = `${nextX},${nextY}`;
    if (nextX < 0 || nextX >= MAP_SIZE ||
        nextY < 0 || nextY >= MAP_SIZE ||
        forestWalls.has(nextPosition)) {
        $("explore-message").textContent = "Ada pohon atau batas hutan di sana. Coba jalan lain! 🌳";
        return;
    }
    explorer.x = nextX;
    explorer.y = nextY;
    explorer.steps++;
    if (forestHearts.has(nextPosition) && !explorer.hearts.has(nextPosition)) {
        explorer.hearts.add(nextPosition);
        $("explore-message").textContent = "Hati ditemukan! Kamu mendapat 10 koin cinta. 💗 +10";
        burst(8);
    }
    else if (nextPosition === forestPortal) {
        if (explorer.hearts.size === forestHearts.size) {
            explorer.finished = true;
            $("explore-message").textContent = "Portal terbuka! Kamu berhasil menjelajahi hutan kenangan. 🌀";
            $("explore-next").hidden = false;
            completeMission(2);
            burst(35);
        }
        else {
            $("explore-message").textContent = `Portal masih terkunci. Cari ${forestHearts.size - explorer.hearts.size} hati lagi! 🔒`;
        }
    }
    else {
        $("explore-message").textContent = "Terus jelajahi hutan. Kamu pasti menemukan jalannya!";
    }
    renderAdventureMap();
}
document.querySelectorAll("[data-move]").forEach(button => {
    button.addEventListener("click", () => moveExplorer(button.dataset.move));
});
window.addEventListener("keydown", event => {
    if (!$("s-explore").classList.contains("on"))
        return;
    const keys = {
        ArrowUp: "up", w: "up", W: "up",
        ArrowDown: "down", s: "down", S: "down",
        ArrowLeft: "left", a: "left", A: "left",
        ArrowRight: "right", d: "right", D: "right"
    };
    if (keys[event.key]) {
        event.preventDefault();
        moveExplorer(keys[event.key]);
    }
});
$("explore-next").addEventListener("click", () => {
    show("s-quiz");
    loadQuestion();
});
/* Misi pertanyaan: jawaban salah boleh dicoba lagi */
let questionIndex = 0, correctAnswers = 0, answered = false;
function loadQuestion() {
    const question = CONFIG.soal[questionIndex];
    answered = false;
    $("quiz-number").textContent = `Pertanyaan ${questionIndex + 1}/${CONFIG.soal.length}`;
    $("quiz-score").textContent = `Kunci: ${correctAnswers}`;
    $("bar").style.width = `${questionIndex / CONFIG.soal.length * 100}%`;
    $("q").textContent = question.q;
    $("fb").textContent = "";
    $("btn-next").hidden = true;
    $("hearts").textContent = "💖 ".repeat(correctAnswers) + "🤍 ".repeat(CONFIG.soal.length - correctAnswers);
    const options = $("opts");
    options.replaceChildren();
    question.pilihan.forEach((choice, index) => {
        const button = document.createElement("button");
        button.className = "opt";
        button.textContent = choice;
        button.addEventListener("click", () => answerQuestion(button, index));
        options.appendChild(button);
    });
}
function answerQuestion(button, answer) {
    if (answered)
        return;
    const question = CONFIG.soal[questionIndex];
    if (answer !== question.jawaban) {
        button.classList.add("no");
        button.disabled = true;
        $("fb").textContent = question.salah;
        return;
    }
    answered = true;
    correctAnswers++;
    button.classList.add("ok");
    document.querySelectorAll(".opt").forEach(option => option.disabled = true);
    $("fb").textContent = question.benar;
    $("quiz-score").textContent = `Kunci: ${correctAnswers}`;
    $("hearts").textContent = "💖 ".repeat(correctAnswers) + "🤍 ".repeat(CONFIG.soal.length - correctAnswers);
    $("bar").style.width = `${(questionIndex + 1) / CONFIG.soal.length * 100}%`;
    $("btn-next").hidden = false;
    $("btn-next").textContent = questionIndex === CONFIG.soal.length - 1 ? "Buka Level 2 ➜" : "Pertanyaan berikutnya ➜";
    burst(22);
}
$("btn-next").addEventListener("click", () => {
    questionIndex++;
    if (questionIndex < CONFIG.soal.length)
        loadQuestion();
    else {
        completeMission(3);
        startCatchIntro();
    }
});
/* Level 2: tangkap hati, ada tombol mulai dan kondisi menang/kalah */
let catchInterval = null, timerInterval = null, catchRunning = false, catchScore = 0, catchTime = 0;
function startCatchIntro() {
    show("s-game");
    $("arena").replaceChildren();
    const hint = document.createElement("div");
    hint.className = "arena-hint";
    hint.id = "arena-hint";
    hint.textContent = "Tekan mulai, lalu tangkap hati sebanyak mungkin!";
    $("arena").appendChild(hint);
    $("catch-score").textContent = `0 / ${CONFIG.game.target}`;
    $("catch-time").textContent = `${CONFIG.game.detik} dtk`;
    $("gstat").textContent = "Kamu punya waktu terbatas. Siap-siap!";
    $("btn-catch-start").hidden = false;
    $("gnext").hidden = true;
}
$("btn-catch-start").addEventListener("click", startCatchGame);
function startCatchGame() {
    clearInterval(catchInterval);
    clearInterval(timerInterval);
    catchRunning = true;
    catchScore = 0;
    catchTime = CONFIG.game.detik;
    $("arena").replaceChildren();
    $("btn-catch-start").hidden = true;
    $("gnext").hidden = true;
    updateCatchStats();
    catchInterval = setInterval(spawnHeart, 440);
    timerInterval = setInterval(() => {
        catchTime--;
        updateCatchStats();
        if (catchTime <= 0)
            finishCatchGame();
    }, 1000);
    for (let n = 0; n < 3; n++)
        setTimeout(() => {
            if (catchRunning)
                spawnHeart();
        }, n * 260);
}
function updateCatchStats() {
    $("catch-score").textContent = `${catchScore} / ${CONFIG.game.target}`;
    $("catch-time").textContent = `${catchTime} dtk`;
    $("gstat").textContent = catchRunning ? "Ayo, tangkap hati sebanyak mungkin! 💗" : $("gstat").textContent;
}
function spawnHeart() {
    if (!catchRunning)
        return;
    const heart = document.createElement("button");
    heart.type = "button";
    heart.className = "heart";
    heart.textContent = ["💗", "💖", "💘", "💝"][Math.floor(rnd(0, 4))];
    heart.setAttribute("aria-label", "Tangkap hati");
    heart.style.left = `${rnd(5, 85)}%`;
    heart.style.animationDuration = `${rnd(1.8, 3.1)}s`;
    heart.addEventListener("pointerdown", event => {
        event.preventDefault();
        if (!catchRunning)
            return;
        const x = event.clientX, y = event.clientY;
        heart.remove();
        catchScore++;
        updateCatchStats();
        burst(5, x, y);
        if (catchScore >= CONFIG.game.target)
            finishCatchGame(true);
    });
    heart.addEventListener("animationend", () => heart.remove());
    $("arena").appendChild(heart);
}
function finishCatchGame(won = false) {
    if (!catchRunning)
        return;
    catchRunning = false;
    clearInterval(catchInterval);
    clearInterval(timerInterval);
    $("arena").querySelectorAll(".heart").forEach(heart => heart.remove());
    if (won || catchScore >= CONFIG.game.target) {
        completeMission(4);
        $("gstat").textContent = "MISI BERHASIL! Kamu berhasil mengumpulkan semua hati! 🎉";
        $("gnext").textContent = "Buka Level 3 ➜";
        burst(55);
    }
    else {
        $("gstat").textContent = `Belum cukup, kamu mengumpulkan ${catchScore} hati. Coba lagi, kamu pasti bisa!`;
        $("btn-catch-start").hidden = false;
        $("btn-catch-start").textContent = "Coba lagi ↻";
        return;
    }
    $("gnext").hidden = false;
}
$("gnext").addEventListener("click", startMemoryGame);
/* Level 3: memory matching game */
const memorySymbols = ["💗", "🎂", "🌷", "⭐", "💌", "🎁"];
let firstCard = null, lockBoard = false, matchedPairs = 0, memoryMoves = 0, memoryTimer = null;
function startMemoryGame() {
    show("s-memory");
    clearTimeout(memoryTimer);
    firstCard = null;
    lockBoard = false;
    matchedPairs = 0;
    memoryMoves = 0;
    $("pairs-found").textContent = "0 / 6";
    $("memory-moves").textContent = "0";
    $("memory-next").hidden = true;
    $("memory-msg").textContent = "Cari enam pasangan untuk menyelesaikan level.";
    const cards = [...memorySymbols, ...memorySymbols].sort(() => Math.random() - .5);
    const grid = $("memory-grid");
    grid.replaceChildren();
    cards.forEach((symbol, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "memory-card";
        button.textContent = "?";
        button.dataset.symbol = symbol;
        button.dataset.index = index;
        button.setAttribute("aria-label", "Kartu tertutup");
        button.addEventListener("click", () => flipMemoryCard(button));
        grid.appendChild(button);
    });
}
function flipMemoryCard(card) {
    if (lockBoard || card.disabled || card === firstCard)
        return;
    card.textContent = card.dataset.symbol;
    card.classList.add("revealed");
    card.setAttribute("aria-label", card.dataset.symbol);
    if (!firstCard) {
        firstCard = card;
        return;
    }
    memoryMoves++;
    $("memory-moves").textContent = memoryMoves;
    if (firstCard.dataset.symbol === card.dataset.symbol) {
        [firstCard, card].forEach(item => { item.classList.remove("revealed"); item.classList.add("matched"); item.disabled = true; });
        matchedPairs++;
        $("pairs-found").textContent = `${matchedPairs} / 6`;
        firstCard = null;
        if (matchedPairs === memorySymbols.length) {
            completeMission(5);
            $("memory-msg").textContent = `Hebat! Semua pasangan ditemukan dalam ${memoryMoves} percobaan. 🧩`;
            $("memory-next").hidden = false;
            burst(45);
        }
        else {
            $("memory-msg").textContent = "Pasangan cocok! Cari pasangan berikutnya. ✨";
        }
    }
    else {
        const previous = firstCard;
        firstCard = null;
        lockBoard = true;
        memoryTimer = setTimeout(() => {
            [previous, card].forEach(item => { item.textContent = "?"; item.classList.remove("revealed"); item.setAttribute("aria-label", "Kartu tertutup"); });
            lockBoard = false;
        }, 750);
    }
}
$("memory-next").addEventListener("click", startTreasureGame);
/* Level 4: cari peti yang menyimpan kunci. Boleh mencoba sampai benar. */
function startTreasureGame() {
    show("s-gift");
    $("btn-cake").hidden = true;
    $("giftmsg").textContent = "Petunjuk: kunci hadiah tersembunyi di salah satu peti. Jangan menyerah! 🔎";
    $("treasure-status").textContent = "Misi: temukan kunci 🔑";
    const keyIndex = Math.floor(Math.random() * 3), grid = $("treasure-grid");
    grid.replaceChildren();
    [0, 1, 2].forEach(index => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "treasure";
        button.textContent = "🧰";
        button.setAttribute("aria-label", `Peti ${index + 1}`);
        button.addEventListener("click", () => {
            if (index === keyIndex) {
                button.textContent = "🔑";
                button.classList.add("found");
                button.disabled = true;
                grid.querySelectorAll(".treasure").forEach(chest => chest.disabled = true);
                $("giftmsg").textContent = "Kamu menemukannya! Kunci ini membuka kejutan terakhir yang aku siapkan untukmu. 💖";
                $("treasure-status").textContent = "MISI BERHASIL — kunci ditemukan!";
                $("btn-cake").hidden = false;
                completeMission(6);
                burst(40);
            }
            else {
                button.textContent = "✨";
                button.disabled = true;
                $("giftmsg").textContent = "Belum ada kunci di peti ini. Coba peti yang lain! 🗝️";
            }
        });
        grid.appendChild(button);
    });
}
$("btn-cake").addEventListener("click", () => {
    show("s-cake");
    $("cake").classList.remove("out");
    $("cake-t").textContent = "Sekarang, buat satu permohonan 🌠";
    $("blow").hidden = false;
    $("btn-letter").hidden = true;
});
/* Final: tiup lilin dan buka surat */
$("blow").addEventListener("click", () => {
    $("cake").classList.add("out");
    $("blow").hidden = true;
    $("cake-t").textContent = "Selamat ulang tahun! Semoga semua hal baik mendekat ✨";
    burst(100);
    setTimeout(() => { $("btn-letter").hidden = false; }, 650);
});
$("btn-letter").addEventListener("click", () => {
    $("e-title").textContent = fill(CONFIG.suratJudul);
    $("e-letter").textContent = fill(CONFIG.surat);
    show("s-end");
    burst(120);
});
let revealedReasons = 0;
$("btn-reasons").addEventListener("click", () => {
    if (revealedReasons >= CONFIG.kado.length)
        return;
    const reason = CONFIG.kado[revealedReasons];
    const card = document.createElement("article");
    card.className = "reason-card";
    const icon = document.createElement("span");
    icon.className = "reason-icon";
    icon.textContent = reason.ikon;
    const message = document.createElement("p");
    message.textContent = reason.isi;
    card.append(icon, message);
    $("love-reasons").appendChild(card);
    revealedReasons++;
    if (revealedReasons === CONFIG.kado.length) {
        $("btn-reasons").textContent = "Semua alasan sudah terbuka 💖";
        $("btn-reasons").disabled = true;
    }
    else {
        $("btn-reasons").textContent = `Buka alasan berikutnya (${revealedReasons + 1}/${CONFIG.kado.length}) 💗`;
    }
    burst(18);
});
$("btn-again").addEventListener("click", () => {
    clearInterval(catchInterval);
    clearInterval(timerInterval);
    clearTimeout(memoryTimer);
    catchRunning = false;
    questionIndex = 0;
    correctAnswers = 0;
    storyIndex = 0;
    completed = new Set();
    explorer.finished = false;
    revealedReasons = 0;
    $("love-reasons").replaceChildren();
    $("btn-reasons").disabled = false;
    $("btn-reasons").textContent = "Buka 3 alasan aku sayang kamu 💗";
    $("overall-progress").style.width = "0%";
    $("progress-count").textContent = "0 / 5 misi";
    $("stage-caption").textContent = "Persiapan petualangan";
    $("btn-catch-start").textContent = "Mulai misi ▶";
    show("s-start");
});
/* Efek konfeti */
const canvas = $("confetti"), ctx = canvas.getContext("2d");
let particles = [], animationFrame = null;
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
function burst(amount, x = window.innerWidth / 2, y = window.innerHeight * .38) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
        return;
    const colors = ["#ff5f98", "#ffd879", "#a9efd1", "#ff9fbd", "#ffffff", "#caa5ee"];
    for (let i = 0; i < amount; i++)
        particles.push({ x, y, vx: rnd(-6, 6), vy: rnd(-12, -3), size: rnd(4, 9), color: colors[i % colors.length], rotation: rnd(0, 6), life: rnd(65, 110) });
    if (!animationFrame)
        animationFrame = requestAnimationFrame(drawConfetti);
}
function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(particle => particle.life-- > 0);
    particles.forEach(particle => {
        particle.vy += .25;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += .12;
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.fillStyle = particle.color;
        ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size * .65);
        ctx.restore();
    });
    animationFrame = particles.length ? requestAnimationFrame(drawConfetti) : null;
}

