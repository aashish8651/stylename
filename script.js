/* =====================================================
   STYLENAME
   STYLISH NAME GENERATOR
===================================================== */


/* =====================================================
   STYLE DATABASE
===================================================== */

const styles = [

    /* GAMING */

    ["꧁༺ {n} ༻꧂", "gaming"],
    ["꧁ঔৣ☬ {n} ☬ঔৣ꧂", "gaming"],
    ["乂 {n} 乂", "gaming"],
    ["メ {n} メ", "gaming"],
    ["亗 {n} 亗", "gaming"],
    ["么 {n} 么", "gaming"],
    ["乛 {n} 乛", "gaming"],
    ["〆 {n} 〆", "gaming"],
    ["ツ {n} ツ", "gaming"],
    ["シ {n} シ", "gaming"],
    ["乂『{n}』乂", "gaming"],
    ["亗『{n}』亗", "gaming"],
    ["メ『{n}』メ", "gaming"],
    ["『TG』{n}", "gaming"],
    ["『FF』{n}", "gaming"],
    ["『OP』{n}", "gaming"],
    ["『PRO』{n}", "gaming"],
    ["『KING』{n}", "gaming"],
    ["『BOSS』{n}", "gaming"],
    ["『DARK』{n}", "gaming"],
    ["『DEVIL』{n}", "gaming"],
    ["『GOD』{n}", "gaming"],
    ["『LEGEND』{n}", "gaming"],
    ["꧁{n}꧂", "gaming"],
    ["༺{n}༻", "gaming"],
    ["⚔ {n} ⚔", "gaming"],
    ["☠ {n} ☠", "gaming"],
    ["♛ {n} ♛", "gaming"],


    /* LOGOS */

    [" {n}", "logo"],
    ["『{n}』", "logo"],
    [" {n} ", "logo"],

    ["📸 {n}", "logo"],
    ["📸『{n}』", "logo"],
    ["📸 {n} 📸", "logo"],

    ["▶ {n}", "logo"],
    ["▶『{n}』", "logo"],
    ["▶ {n} ▶", "logo"],

    ["♪ {n}", "logo"],
    ["♪『{n}』♪", "logo"],
    ["♫ {n} ♫", "logo"],

    ["f {n}", "logo"],
    ["f『{n}』", "logo"],

    ["◎ {n}", "logo"],
    ["◎『{n}』◎", "logo"],

    ["◉ {n}", "logo"],
    ["◉『{n}』◉", "logo"],

    ["🎮 {n}", "logo"],
    ["🎮『{n}』🎮", "logo"],

    ["◈ {n}", "logo"],
    ["◈『{n}』◈", "logo"],

    ["♜ {n}", "logo"],
    ["♜『{n}』♜", "logo"],

    ["☁ {n}", "logo"],
    ["☁『{n}』☁", "logo"],

    ["💬 {n}", "logo"],
    ["💬『{n}』💬", "logo"],

    ["⚡ {n}", "logo"],
    ["⚡『{n}』⚡", "logo"],

    ["🔥 {n}", "logo"],
    ["🔥『{n}』🔥", "logo"],

    ["👑 {n}", "logo"],
    ["👑『{n}』👑", "logo"],

    ["💎 {n}", "logo"],
    ["💎『{n}』💎", "logo"],

    ["☠ {n}", "logo"],
    ["☠『{n}』☠", "logo"],

    ["⚔ {n}", "logo"],
    ["⚔『{n}』⚔", "logo"],


    /* KING / QUEEN */

    ["♛ {n} ♛", "king"],
    ["♕ {n} ♕", "king"],
    ["♔ {n} ♔", "king"],
    ["♚ {n} ♚", "king"],
    ["👑 {n}", "king"],
    ["👑『{n}』", "king"],
    ["♛『{n}』♛", "king"],
    ["♕『{n}』♕", "king"],
    ["༺♛ {n} ♛༻", "king"],
    ["꧁♛ {n} ♛꧂", "king"],
    ["꧁♕ {n} ♕꧂", "king"],
    ["『KING』{n}", "king"],
    ["『QUEEN』{n}", "king"],
    ["♛༺{n}༻♛", "king"],
    ["👑༺{n}༻👑", "king"],


    /* LOVE */

    ["♡ {n} ♡", "love"],
    ["♥ {n} ♥", "love"],
    ["❤ {n} ❤", "love"],
    ["💕 {n} 💕", "love"],
    ["💖 {n} 💖", "love"],
    ["💗 {n} 💗", "love"],
    ["💘 {n} 💘", "love"],
    ["💞 {n} 💞", "love"],
    ["💝 {n} 💝", "love"],
    ["『♡』{n}", "love"],
    ["『♥』{n}", "love"],
    ["꧁♡ {n} ♡꧂", "love"],
    ["༺♥ {n} ♥༻", "love"],
    ["♡『{n}』♡", "love"],
    ["♥『{n}』♥", "love"],


    /* ATTITUDE */

    ["😈 {n} 😈", "attitude"],
    ["☠ {n} ☠", "attitude"],
    ["💀 {n} 💀", "attitude"],
    ["🔥 {n} 🔥", "attitude"],
    ["⚡ {n} ⚡", "attitude"],
    ["👿 {n} 👿", "attitude"],
    ["😎 {n} 😎", "attitude"],
    ["『BAD』{n}", "attitude"],
    ["『BOSS』{n}", "attitude"],
    ["『DANGER』{n}", "attitude"],
    ["『DEVIL』{n}", "attitude"],
    ["『ALONE』{n}", "attitude"],
    ["『ATTITUDE』{n}", "attitude"],
    ["꧁😈 {n} 😈꧂", "attitude"],
    ["༺🔥 {n} 🔥༻", "attitude"],
    ["☠『{n}』☠", "attitude"],
    ["⚡『{n}』⚡", "attitude"],


    /* SYMBOLS */

    ["★ {n} ★", "symbol"],
    ["☆ {n} ☆", "symbol"],
    ["✦ {n} ✦", "symbol"],
    ["✧ {n} ✧", "symbol"],
    ["✪ {n} ✪", "symbol"],
    ["✯ {n} ✯", "symbol"],
    ["✰ {n} ✰", "symbol"],
    ["✵ {n} ✵", "symbol"],
    ["✺ {n} ✺", "symbol"],
    ["❖ {n} ❖", "symbol"],
    ["◆ {n} ◆", "symbol"],
    ["◇ {n} ◇", "symbol"],
    ["◈ {n} ◈", "symbol"],
    ["◉ {n} ◉", "symbol"],
    ["● {n} ●", "symbol"],
    ["○ {n} ○", "symbol"],
    ["➤ {n}", "symbol"],
    ["➳ {n}", "symbol"],
    ["➵ {n}", "symbol"],
    ["➸ {n}", "symbol"],


    /* STARS */

    ["★彡 {n} 彡★", "star"],
    ["☆彡 {n} 彡☆", "star"],
    ["✦『{n}』✦", "star"],
    ["✧『{n}』✧", "star"],
    ["★『{n}』★", "star"],
    ["☆『{n}』☆", "star"],
    ["✪『{n}』✪", "star"],
    ["✯『{n}』✯", "star"],
    ["✰『{n}』✰", "star"],
    ["★彡༺{n}༻彡★", "star"],
    ["✦༺{n}༻✦", "star"],
    ["✧༺{n}༻✧", "star"],


    /* SIMPLE */

    ["『{n}』", "simple"],
    ["【{n}】", "simple"],
    ["〔{n}〕", "simple"],
    ["〖{n}〗", "simple"],
    ["〘{n}〙", "simple"],
    ["〚{n}〛", "simple"],
    ["〈{n}〉", "simple"],
    ["《{n}》", "simple"],
    ["「{n}」", "simple"],
    ["• {n} •", "simple"],
    ["- {n} -", "simple"],
    ["_ {n} _", "simple"],
    ["| {n} |", "simple"],
    ["× {n} ×", "simple"],


    /* EMOJI */

    ["😎 {n}", "emoji"],
    ["🔥 {n}", "emoji"],
    ["⚡ {n}", "emoji"],
    ["👑 {n}", "emoji"],
    ["💎 {n}", "emoji"],
    ["🎮 {n}", "emoji"],
    ["🚀 {n}", "emoji"],
    ["🌟 {n}", "emoji"],
    ["⭐ {n}", "emoji"],
    ["💀 {n}", "emoji"],
    ["☠️ {n}", "emoji"],
    ["❤️ {n}", "emoji"],
    ["💙 {n}", "emoji"],
    ["💚 {n}", "emoji"],
    ["💜 {n}", "emoji"],
    ["🖤 {n}", "emoji"],
    ["🐉 {n}", "emoji"],
    ["🐯 {n}", "emoji"],
    ["🦁 {n}", "emoji"],
    ["🐺 {n}", "emoji"]

];


/* =====================================================
   CURRENT CATEGORY
===================================================== */

let currentCategory = "all";


/* =====================================================
   ELEMENTS
===================================================== */

const nameInput =
    document.getElementById("nameInput");

const generateBtn =
    document.getElementById("generateBtn");

const searchInput =
    document.getElementById("searchInput");

const results =
    document.getElementById("results");

const noResult =
    document.getElementById("noResult");

const styleCount =
    document.getElementById("styleCount");

const toast =
    document.getElementById("toast");

const themeBtn =
    document.getElementById("themeBtn");


/* =====================================================
   EXAMPLE NAMES
   PAGE LOAD PAR STYLE NAME DIKHEGA
===================================================== */

function getExampleName(category) {

    const examples = {

        gaming: "GAMER",
        logo: "STYLE",
        king: "KING",
        love: "LOVE",
        attitude: "BOSS",
        symbol: "NAME",
        star: "STAR",
        simple: "NAME",
        emoji: "PLAYER"

    };

    return examples[category] || "STYLE";

}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 1800);

}


/* =====================================================
   COPY
===================================================== */

async function copyName(name) {

    try {

        await navigator.clipboard.writeText(name);

        showToast("✅ Name copied!");

    } catch (error) {

        const textArea =
            document.createElement("textarea");

        textArea.value = name;

        document.body.appendChild(textArea);

        textArea.select();

        document.execCommand("copy");

        textArea.remove();

        showToast("✅ Name copied!");

    }

}


/* =====================================================
   SHARE
===================================================== */

async function shareName(name) {

    if (navigator.share) {

        try {

            await navigator.share({

                title: "Stylish Name",

                text: name

            });

        } catch (error) {

            // Share cancelled

        }

    } else {

        await copyName(name);

        showToast(
            "📋 Name copied for sharing!"
        );

    }

}


/* =====================================================
   CREATE STYLE
===================================================== */

function createStyledName(
    template,
    name
) {

    return template.replace(
        /\{n\}/g,
        name
    );

}


/* =====================================================
   HTML ESCAPE
===================================================== */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* =====================================================
   ATTRIBUTE ESCAPE
===================================================== */

function escapeAttribute(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

}


/* =====================================================
   RENDER STYLES
===================================================== */

function renderStyles() {

    if (!results) return;


    const searchedName =
        nameInput.value.trim();


    const search =
        searchInput.value
            .trim()
            .toLowerCase();


    results.innerHTML = "";


    let filtered =
        styles.filter(item => {

            const template =
                item[0];

            const category =
                item[1];


            const categoryMatch =
                currentCategory === "all" ||
                category === currentCategory;


            const searchMatch =
                !search ||
                template
                    .toLowerCase()
                    .includes(search) ||
                category
                    .toLowerCase()
                    .includes(search);


            return (
                categoryMatch &&
                searchMatch
            );

        });


    if (filtered.length === 0) {

        noResult.style.display =
            "block";

        styleCount.textContent =
            "0 Styles";

        return;

    }


    noResult.style.display =
        "none";


    styleCount.textContent =
        `${filtered.length} Styles`;


    filtered.forEach(item => {

        const template =
            item[0];

        const category =
            item[1];


        /*
           अगर user ने नाम लिखा है
           तो वही नाम दिखेगा।

           अगर नाम खाली है
           तो example/style name दिखेगा।
        */

        const displayName =
            searchedName ||
            getExampleName(category);


        const styledName =
            createStyledName(
                template,
                displayName
            );


        const card =
            document.createElement("div");


        card.className =
            "result-card";


        card.innerHTML = `

            <div class="result-name">
                ${escapeHTML(styledName)}
            </div>


            <div class="result-actions">

                <button
                    class="copy-btn"
                    data-copy="${escapeAttribute(
                        styledName
                    )}"
                >
                    📋 Copy
                </button>


                <button
                    class="share-btn"
                    data-share="${escapeAttribute(
                        styledName
                    )}"
                >
                    🔗 Share
                </button>

            </div>

        `;


        results.appendChild(card);

    });


    attachResultButtons();

}


/* =====================================================
   RESULT BUTTONS
===================================================== */

function attachResultButtons() {

    document
        .querySelectorAll(".copy-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const name =
                        button.getAttribute(
                            "data-copy"
                        );

                    copyName(
                        decodeAttribute(name)
                    );

                }
            );

        });


    document
        .querySelectorAll(".share-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const name =
                        button.getAttribute(
                            "data-share"
                        );

                    shareName(
                        decodeAttribute(name)
                    );

                }
            );

        });

}


/* =====================================================
   DECODE ATTRIBUTE
===================================================== */

function decodeAttribute(text) {

    const textarea =
        document.createElement("textarea");

    textarea.innerHTML = text;

    return textarea.value;

}


/* =====================================================
   GENERATE BUTTON
===================================================== */

if (generateBtn) {

    generateBtn.addEventListener(
        "click",
        () => {

            renderStyles();

            document
                .getElementById("styles")
                ?.scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

}


/* =====================================================
   NAME INPUT
===================================================== */

if (nameInput) {

    nameInput.addEventListener(
        "input",
        renderStyles
    );


    nameInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                renderStyles();

                document
                    .getElementById("styles")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }

        }
    );

}


/* =====================================================
   STYLE SEARCH
===================================================== */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        renderStyles
    );

}


/* =====================================================
   CATEGORY
===================================================== */

document
    .querySelectorAll(".category")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".category"
                    )
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                button.classList.add(
                    "active"
                );


                currentCategory =
                    button.dataset.category;


                renderStyles();

            }
        );

    });


/* =====================================================
   QUICK NAMES
===================================================== */

document
    .querySelectorAll(
        ".quick-names button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                nameInput.value =
                    button.dataset.name;

                renderStyles();

                document
                    .getElementById("styles")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });


/* =====================================================
   DARK MODE
===================================================== */

function setTheme(dark) {

    document.body.classList.toggle(
        "dark",
        dark
    );


    if (themeBtn) {

        themeBtn.textContent =
            dark ? "☀️" : "🌙";

    }


    localStorage.setItem(
        "styleNameDarkMode",
        dark ? "1" : "0"
    );

}


if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        () => {

            const dark =
                !document.body.classList.contains(
                    "dark"
                );

            setTheme(dark);

        }
    );

}


/* =====================================================
   LOAD THEME
===================================================== */

const savedTheme =
    localStorage.getItem(
        "styleNameDarkMode"
    );


if (savedTheme === "1") {

    setTheme(true);

} else {

    setTheme(false);

}


/* =====================================================
   INITIAL LOAD
===================================================== */

renderStyles();