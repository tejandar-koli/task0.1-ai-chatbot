document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.getElementById("input");
    const chatBox = document.getElementById("chat");

    window.send = function () {
        const text = inputBox.value.trim();

        if (text === "") return;

        addMessage("You", text, "user");

        const reply = getAIResponse(text);

        addMessage("Bot", reply, "bot");

        inputBox.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    };

    function addMessage(sender, message, type) {
        const msg = document.createElement("p");
        msg.className = type;
        msg.textContent = sender + ": " + message;
        chatBox.appendChild(msg);
    }

    function getAIResponse(text) {
        text = text.toLowerCase();

        if (text.includes("hello") || text.includes("hi")) {
            return "Hello 👋 I am Task0.1 AI";
        }

        if (text.includes("name")) {
            return "I am Task0.1 AI Bot 🤖";
        }

        if (text.includes("how are you")) {
            return "I am running inside your browser 😊";
        }

        if (text.includes("what can you do")) {
            return "I can chat with you and will become smarter soon 🚀";
        }

        if (text.includes("joke")) {
            return "Why did the computer get cold? Because it left its Windows open 😄";
        }

        return "Hmm 🤔 I am still learning this...";
    }
});
