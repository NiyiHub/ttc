from django.db import models
from django.db.models import Model

class Blog(models.Model):
	title						= models.CharField(max_length=255)
	pub_date					= models.DateTimeField(auto_now_add=True)
	body						= models.TextField()
	image						= models.ImageField(upload_to='Images/')

	def __str__(self):
		return self.title

	def summary(self):
		return self.body[:100]

	def pub_date_cut(self):
		return self.pub_date.strftime('%b %e %Y')
