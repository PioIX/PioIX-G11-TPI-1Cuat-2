from flask import Flask, render_template

app = Flask('app')

@app.route('/')
def nothing ():
  return render_template('img/index.html')
app.run(host='0.0.0.0', port=8080)



















