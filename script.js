document.addEventListener("DOMContentLoaded", function () {

    const inputBox = document.getElementById("input");
    const chatBox = document.getElementById("chat");

    window.send = async function () {

        const text = inputBox.value.trim();
        if (text === "") return;

        addMessage("You", text, "user");

        // show loading message
        addMessage("Bot", "Typing...", "bot");

        const reply = await getAIResponse(text);

        // remove "Typing..."
        chatBox.lastChild.remove();

        addMessage("Bot", reply, "bot");

        inputBox.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    };

    function addMessage(sender, message, type) {
        const msg = document.createElement("p");
        msg.className = "message " + type;
        msg.textContent = sender + ": " + message;
        chatBox.appendChild(msg);
    }

    async function getAIResponse(text) {

        const res = await fetch("YOUR_BACKEND_URL/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: text })
        });

        const data = await res.json();
        return data.reply;
    }

});
