import requests
URL = 'https://graph.facebook.com/v4.0/394162071513093?fields=feed%7Bmessage%7D&access_token=EAAfVMHjb6OcBAMcva9UHbJGVdgtMCufZBCOmfbxGHxt2TKFotj7LMdzjncNzscGJw3b0UAooZBtrX5SURZBR8G2hsSJZCCtXjmdhZBfl7DFZBpLzA6X6qufAAjpNLq5Hbhntfr0vzC6Fc5unWlW7PlPeFCl5qh8R4ZD'
r = requests.get(url = URL)
# extracting data in json format 
data = r.json()
x = []
for item in data['feed'].items():
    x.append(item)
y = []
for item in x[0]:
    y.append(item)

for i in range(len(y[1])):
    for key in y[1][i]:
        if(key == 'message' and  y[1][i][key]!= 'post mn akram 3ashan el testing'):
            if(y[1][i]['id']):
                print(y[1][i][key],y[1][i]['id'])