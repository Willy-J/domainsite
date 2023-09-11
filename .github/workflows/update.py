import requests
import os

proxies = {
  # 'http': 'http://localhost:7890',
  # 'https': 'http://localhost:7890'
}

folder = '../../content'

for filename in os.listdir(folder):
    if filename.endswith('.url'):
        with open(os.path.join(folder, filename), encoding='utf-8') as f:
            response = requests.get(f.read(), proxies=proxies)
            if response.status_code == 200:
                print(response.text)
                with open(os.path.join(folder, filename.replace(".url", ".html")), 'w', encoding='utf-8') as fw:
                    fw.write(response.text)
