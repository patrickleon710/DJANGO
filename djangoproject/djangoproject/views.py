# from django.http import HttpResponse
from django.shortcuts import render

def homepage(request):
    # return HttpResponse("Hello world! Welcome home!")
    return render(request, 'home.html')

def aboutpage(request):
    # return HttpResponse("My about page.")
    return render(request, 'about.html')