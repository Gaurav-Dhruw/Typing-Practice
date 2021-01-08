from django.shortcuts import render
from django.http import HttpResponse
from json import dumps
from Symbiosis.models import Quotes
import numpy as np

# Create your views here.


def rendertypingPage(request):
    # n = 2
    # rangy = np.arange(1, n+1)                   ## n= 2 as there's 2 data rows in databse
    # choice_num = np.random.choice(rangy)

    # list_of_quotes = []
    # quotes_text = Quotes.objects.get(id=1)
    # for i in range(1):
    #     list_of_quotes.append(quotes_text[i])

    # data = {'quotes_text': list_of_quotes}

    # return render(request, 'Symbiosis/index.html', context=data)


    

    quotes_all = Quotes.objects.all()
    
    n = len(quotes_all)
    rangy = np.arange(0, n)                   
    choice_num = np.random.choice(rangy)

    list_of_quotes = []
    for i in range(choice_num, choice_num+1):
        list_of_quotes.append(quotes_all[i])

    data = {'quotes_DB': list_of_quotes}                                              ## For rendering in HTML                                           ## For rendering in HTML

    return render(request, 'Symbiosis/index.html', context=data)
    







    # quotes_all = Quotes.objects.all()
    # list_of_quotes = []
    # for i in range(len(quotes_all)):
    #     list_of_quotes.append(quotes_all[i])

    # data = {'quotes_DB': list_of_quotes}                                              ## For rendering in HTML                                           ## For rendering in HTML

    # return render(request, 'Symbiosis/index.html', context=data)
    #














    ## For Normal String text
    # typeThis = "Its to test whether the .py string variable is accessible from .js file's string variable"

    # stringy = {
    #     'typeThis': typeThis,
    # }


    # stringy = dumps(stringy)
    # return render(request, 'Symbiosis/index.html', {'stringy' : stringy})