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