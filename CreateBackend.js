from flask import Flask, request, jsonify
import random

app = Flask(__name__)

@app.route('/api', methods=['POST', 'GET'])
def api():
    if request.method == 'POST':
        try:
            response = {
                "status": "present",
                "user_id": "2026",
                "college_email": "22BCS15626@cuchd.in",
                "roll_number": "22BCS15626",
                "numbers": [3, 5, 68, 72],
                "alphabets": ["M", "S", "R", "N"]
            }
            return jsonify(response)
        except Exception as e:
            return jsonify({"status": "error", "message": str(e)})
    
    elif request.method == 'GET':
        operation_code = random.randint(1000, 9999)
        return jsonify({"operation_code": operation_code})

if __name__ == '__main__':
    app.run(debug=True)
