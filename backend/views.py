

from django.shortcuts import render
import requests
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from django.http import HttpResponse
import pandas as pd
import numpy as np
import random
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics import accuracy_score
from sklearn.metrics import classification_report
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.linear_model import SGDClassifier
from django.views.decorators.csrf import csrf_exempt,csrf_protect #Add this
def createDataset(vocab,target,Dataframe):
    for i in range(0,300): #setting 300 post for this category
        post = ""
        post_length = random.randint(1,100) #choosing the lenght of the post randomly
        for j in range (0, post_length):
            x = random.randint(0,len(vocab)-1)
            post = post + " " + vocab[x]
        df = pd.DataFrame({"post":[post],"tag":[target]})
        Dataframe = Dataframe.append(df, ignore_index=True)
    return Dataframe

#collecting key words from each target

medical_services = ['انا','أنا','أبني','ابني','بنتي','أخويا','اخويا','والدتي','حد','دوا','دواء','علاج','مرهم','دكتور','حل','طريقة','مشكلة','استشارة','استفسار','استفسر','جلدية','كلى ومسالك بولية','كلى','مسالك بولية','اطفال','تحاليل','تحليل','اشعة','عملية','وجع','الم','ألم','يفيدني','يساعدني','عندي','عنده','عندها','فايدة','نتيجة','عن تجربة','مع العلم','يعرف','محتاج','محتاجه','عايز', 'عايزه','دكتور نفسي','حروق','حرق','ضروري','للضروره','أورام','تشخيص','كشف', 'يشخص', 'دم','أعصاب','باطنة','طبيب','عظام', 'حبوب', 'شعري', 'مستشفى', 'صيدلية', 'اخصائي', 'تجميل''طقم اسنان', 'طقم' ,'اسنان','أسنان','طقم أسنان']
clothes = ['محتاجه','محتاج','لبس','ملابس','كسوة','هدوم','اولادي','أولادي','الشتا','الشتاء','للشتا','شتوي','شتوى','مستعمله','مستعمل','مستعملين','وزن','وزني','وزنها','فستان','فرح','فرحي','فرحى','عروسة','الظروف','ظروف','اشتري','أشتري','يساعدني','يسعدني','يكلمني','شنطة','جزمة','الجامعة','المدرسة','الشغل','كوتشي','عمره','سنه','سنة','سنين','سنوات','طفل','طفلة','اطفال','أطفال','معندوش','ماعنديش','ماعندهاش','يتيمه','يتيمة','متوفي','مقتدر','مقتدره', 'ماديًا', 'ماديا' ]
lost_and_found = ['ضايع','ضائع','ضاع','فقدت','مفقود','العثور','بطاقة','رخصة','وقع','رقم','رقمي','اهل','أهل','اهله','أهله','لاهله','لأهله','أبوه','ابوه','أمه','امه','فيزه','فيزا','لقيتها','لقيت','لاقيت','لاقيتها','التواصل','يتواصل','معي','تليفون','مبلغ','شنطة','اوراق','أوراق','مهمة','باسبور','صاحبتها','صاحبها','صاحبه','نسيتها','نسيته','كارنيه','لاقاها','يعرفه','يعرف','الولد','يكلمني','اتسرق','اتسرقت','مسروقه','مسروقة','موبايل','موبايلي','تموين','اسم','باسم','بأسم','اسمه','أسمه','متغيب','متغيبين','شافه','محافظة','الأتصال','الاتصال','مش فاكر', 'عارف']


#building dummy data 
training_data = pd.DataFrame() 
target = 'خدمات صحية'
training_data = createDataset(medical_services,target,training_data)
target = 'ملابس'
training_data = createDataset(clothes,target,training_data)
target = 'مفقودات'
training_data = createDataset(lost_and_found,target,training_data)

#creating test data

test_data = training_data[50:80]
test_data2 = training_data[430:460]
test_data3 = training_data[740:770]
test_data = test_data.append(test_data2)
test_data = test_data.append(test_data3)

#dropping testing data from the whole data
drop1= []
drop2 =[]
drop3 = []
for i in range(50,81):
    drop1.append(i)
for i in range(430,461):
    drop2.append(i)
for i in range(740,770):
    drop3.append(i)
training_data = training_data.drop(drop1)
training_data = training_data.drop(drop2)
training_data = training_data.drop(drop3)

#randomizing test data
test_data = test_data.reindex(np.random.permutation(test_data.index))

X_train = training_data.post
y_train = training_data.tag
X_test = test_data.post
y_test = test_data.tag


nb = Pipeline([('vect', CountVectorizer()),
            ('tfidf', TfidfTransformer()),
            ('clf', LogisticRegression(n_jobs=1, C=1e5)),
            ])
nb.fit(X_train, y_train)

y_pred = nb.predict(X_test)
print('accuracy %s' % accuracy_score(y_pred, y_test))

Facebook_posts=[]
Posts_to_send=[]
for post in Facebook_posts:
    df1 = pd.DataFrame({"post":[post],"tag":["Unknown"]}) 
    test =df1.post
    y_pred = nb.predict(test)
    if(y_pred[0] == "the required category from the request"):
        Posts_to_send.append(post)

@csrf_exempt
def hello_world(request):
    if request.method == 'GET':
        URL = 'https://graph.facebook.com/v4.0/394162071513093?fields=feed%7Bmessage%7D&access_token=EAAfVMHjb6OcBAMcva9UHbJGVdgtMCufZBCOmfbxGHxt2TKFotj7LMdzjncNzscGJw3b0UAooZBtrX5SURZBR8G2hsSJZCCtXjmdhZBfl7DFZBpLzA6X6qufAAjpNLq5Hbhntfr0vzC6Fc5unWlW7PlPeFCl5qh8R4ZD'
        # r = requests.get(url = URL)
        # # extracting data in json format 
        # data = r.json()
        # #print(data)
        # print(data)

        Facebook_posts=[]
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
                        x = y[1][i]['id']
                        splity = x.split('_')
                        Facebook_posts.append((y[1][i][key],splity[1]))
        
        Posts_to_send=[]
        for post in Facebook_posts:
            df1 = pd.DataFrame({"post":[post[0]],"tag":["Unknown"]})
            test =df1.post
            y_pred = nb.predict(test)
            Posts_to_send.append((post[0],y_pred[0],post[1]))
        
        import json as simplejson
        #from django.utils import simplejson
        json_stuff = simplejson.dumps({"list_of_jsonstuffs" : Posts_to_send})    
        return HttpResponse(json_stuff, content_type ="application/json")
        #return HttpResponse(Posts_to_send)
        #return JsonResponse(data)
    # 

    #     return HttpResponse("return this string")
    if request.method == 'POST':
        MESSAGE = request.GET.get('q', '')
        URL = 'https://graph.facebook.com/v4.0/394162071513093/feed?message=' + MESSAGE + '&access_token=EAAfVMHjb6OcBAMcva9UHbJGVdgtMCufZBCOmfbxGHxt2TKFotj7LMdzjncNzscGJw3b0UAooZBtrX5SURZBR8G2hsSJZCCtXjmdhZBfl7DFZBpLzA6X6qufAAjpNLq5Hbhntfr0vzC6Fc5unWlW7PlPeFCl5qh8R4ZD'
        r = requests.post(URL)
        return JsonResponse(r)
#       

#     return HttpResponse("return this string")
