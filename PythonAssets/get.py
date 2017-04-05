import requests

import threading

def getCommand():
  threading.Timer(1.0, getCommand).start()
  r = requests.get("https://turtle-ui.herokuapp.com/command")
  print(r.content)

getCommand()