from django.db import models

# Create your models here.

class Quotes(models.Model):
    quote_text = models.CharField(max_length=1000)

    def __str__(self):
        return self.quote_text
    
