from flask import Flask, request, jsonify, render_template
import requests

app = Flask(__name__)

OLLAMA_URL = "http://localhost:11434/api/generate"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    question = data.get('question', '')
    payload = {
        "model": "gemma3:1b",
        "prompt": question,
        "stream": False
    }

    try:
        response = requests.post(OLLAMA_URL, json=payload)
        response.raise_for_status()
        answer = response.json().get('response', 'Tidak ada respons dari model.')
    except Exception as e:
        answer = f"Error: {e}"

    return jsonify({'answer': answer})

if __name__ == '__main__':
    app.run(debug=True)
