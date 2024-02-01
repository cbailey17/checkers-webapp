from flask import Flask
import services

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/api/startGame')
def startGame():
    services.startGame()
    return 'Game started'

@app.route('/api/generateBitboards')
def generateBitboards():
    services.generateBitboards()
    return 'Bitboards generated'

@app.route('/api/getMoves') 
def getMoves():
    return 'Moves retrieved'

@app.route('/api/makeMove/{move}')
def makeMove():
    return 'Move made'

@app.route('/api/getBoard')
def getBoard():
    return 'Board retrieved'

@app.route('/api/getGameStatus')
def getGameStatus():
    return 'Game status retrieved'


if __name__ == '__main__':
    app.run(debug=True)     # Start the Flask app