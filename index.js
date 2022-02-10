let inputEl = document.getElementById("inputEl")
let quoteEl = document.getElementById("quote")
let authorEl = document.getElementById("author")
let buttonEl = document.getElementById("buttonEl")


async function updateQuote() {
    let api = "https://api.quotable.io/search/quotes?query=" + inputEl.value + "&limit=1"
    const res = await fetch(api)
    const data = await res.json()
    inputEl.value = ""
    console.log(data)
    if (data.count == 0) {
        quoteEl.textContent = "Quote Not Found 😭"
        authorEl.textContent = "Blame 🔥 Quotable!"
    } else if (res.ok) {
        inputEl.value = ""
        quoteEl.innerText = data.results[0].content
        authorEl.innerText = data.results[0].author
        console.log(quoteEl)
    } else {
        quoteEl.innerText = "Kuch Type to Karo Bhai 😒!!"
        authorEl.innerText = "(⚈₋₍⚈)"
    }
}
async function randomQuote() {
    // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
        // Update DOM elements
        quote.textContent = data.content;
        authorEl.textContent = data.author;
    } else {
        quote.textContent = "An error occured";
        console.log(data);
    }
}
inputEl.addEventListener("keydown", function(e) {
    if (e.code === "Enter") {
        updateQuote()
    }
})
buttonEl.addEventListener("click", updateQuote)
randomQuote()
    // fetch("https://api.quotable.io/search/quotes?query=life happiness money&limit=1")
    //     .then((res) => res.json())
    //     .then((data) => console.log(data.results))
    //     .catch((err) => console.log("Erro"))