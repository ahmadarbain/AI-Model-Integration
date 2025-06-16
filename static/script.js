class GemmaChat {
  constructor() {
    this.chatMessages = document.getElementById("chatMessages")
    this.messageInput = document.getElementById("messageInput")
    this.sendButton = document.getElementById("sendButton")
    this.chatForm = document.getElementById("chatForm")
    this.typingIndicator = document.getElementById("typingIndicator")

    this.messages = []
    this.isTyping = false

    this.init()
  }

  init() {
    this.chatForm.addEventListener("submit", (e) => this.handleSubmit(e))
    this.messageInput.addEventListener("input", () => this.adjustTextareaHeight())
    this.messageInput.addEventListener("keypress", (e) => this.handleKeyPress(e))
    this.adjustTextareaHeight()
  }

  handleSubmit(e) {
    e.preventDefault()
    const message = this.messageInput.value.trim()
    if (!message || this.isTyping) return
    this.addMessage("user", message)
    this.messageInput.value = ""
    this.adjustTextareaHeight()
    this.simulateAIResponse(message)
  }

  handleKeyPress(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      this.handleSubmit(e)
    }
  }

  adjustTextareaHeight() {
    this.messageInput.style.height = "auto"
    this.messageInput.style.height = Math.min(this.messageInput.scrollHeight, 120) + "px"
  }

  addMessage(role, content) {
    const messageId = Date.now()
    this.messages.push({ id: messageId, role, content })

    const welcomeMessage = this.chatMessages.querySelector(".welcome-message")
    if (welcomeMessage) welcomeMessage.remove()

    const messageElement = this.createMessageElement(role, content)
    this.chatMessages.appendChild(messageElement)
    this.scrollToBottom()
  }

  createMessageElement(role, content) {
    const messageDiv = document.createElement("div")
    messageDiv.className = `message ${role}`

    const messageContent = this.formatMessage(content)

    if (role === "assistant") {
      messageDiv.innerHTML = `
        <div class="message-avatar"><i class="fas fa-robot"></i></div>
        <div class="message-bubble assistant">${messageContent}</div>
      `
    } else {
      messageDiv.innerHTML = `
        <div class="message-bubble user">${messageContent}</div>
        <div class="message-avatar"><i class="fas fa-user"></i></div>
      `
    }

    return messageDiv
  }

  showTypingIndicator() {
    this.isTyping = true
    this.typingIndicator.classList.remove("hidden")
    this.scrollToBottom()
    this.updateSendButton()
  }

  hideTypingIndicator() {
    this.isTyping = false
    this.typingIndicator.classList.add("hidden")
    this.updateSendButton()
  }

  updateSendButton() {
    this.sendButton.disabled = this.isTyping || !this.messageInput.value.trim()
  }

  simulateAIResponse(userMessage) {
    this.showTypingIndicator()

    fetch('/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: userMessage }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.hideTypingIndicator()
        this.addMessage("assistant", data.answer)
      })
      .catch((error) => {
        this.hideTypingIndicator()
        this.addMessage("assistant", `Terjadi kesalahan: ${error}`)
      })
  }

  escapeHtml(text) {
    const div = document.createElement("div")
    div.textContent = text
    return div.innerHTML
  }

  formatMessage(text) {
    const escaped = this.escapeHtml(text)

    let formatted = escaped
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/(?:^|\n)\* (.*?)(?=\n|$)/g, "<li>$1</li>")

    if (formatted.includes("<li>")) {
      formatted = "<ul>" + formatted + "</ul>"
    }

    formatted = formatted.replace(/\n/g, "<br>")
    return formatted
  }

  scrollToBottom() {
    setTimeout(() => {
      this.chatMessages.scrollTop = this.chatMessages.scrollHeight
    }, 100)
  }
}

function setSuggestion(text) {
  const messageInput = document.getElementById("messageInput")
  messageInput.value = text
  messageInput.focus()
  messageInput.dispatchEvent(new Event("input"))
}

document.addEventListener("DOMContentLoaded", () => {
  window.gemmaChat = new GemmaChat()

  document.getElementById("messageInput").addEventListener("input", (e) => {
    document.getElementById("sendButton").disabled = !e.target.value.trim()
  })
})
