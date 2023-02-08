from django.db import models

class Slider(models.Model):
    caption = models.CharField(max_length=150)
    slogan = models.CharField(max_length=120)
    image = models.ImageField(upload_to='sliders/')

    def __str__(self):
        return self.caption[:20]

    class Meta:
        verbose_name_plural = 'Slider'


class Service(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    thumbnail = models.ImageField(upload_to='services/')
    cover = models.ImageField(upload_to='services/')
    image = models.ImageField(upload_to='services/', blank=True, null=True)

    def __str__(self):
        return self.title


class Faq(models.Model):
    question = models.CharField(max_length=120)
    answer = models.TextField()

    def __str__(self):
        return self.question
