from django.shortcuts import render
from django.http import HttpResponse
from json import dumps
from PyPDF2 import PdfFileReader, PdfFileWriter

# Create your views here.


def rendertypingPage(request):
    pdf_karma = open('Influence.pdf', 'rb')
    pdf_file = PdfFileReader(pdf_karma, strict=False)
    
    page_1 = pdf_file.getPage(90)      
    text_page_1 = page_1.extractText()
    
    after_split = text_page_1.split(" ")
    n = 30

    listy = []
    for i in range(0,len(after_split),n):
        listy.append(after_split[i:i+n])




    typeThis = "Its to test whether the .py string variable is accessible from .js file's string variable"
    stringy = {
        'typeThis': typeThis,
        'listy': listy
    }
    stringy = dumps(stringy)
    return render(request, 'Symbiosis/index.html', {'stringy' : stringy})
    # return HttpResponse("Hi there")