from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

@app.route('/export/', methods=['POST'])
def export():
    user_code = request.get_json()['code']
    return {'code': user_code}

@app.route('/')
def index():
    return render_template('index.html')
