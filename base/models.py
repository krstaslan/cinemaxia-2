from django.db import models
import uuid

class Movie(models.Model):
    name=models.CharField(max_length=200, blank=True, null=True)
    id = models.UUIDField(default=uuid.uuid4, unique=True,
                          primary_key=True, editable=False)
    # # display_date = models.DateField(auto_now_add=True)
    movie_image = models.ImageField(
        null=True, blank=True, upload_to='posters/')
    salon_name=models.CharField(max_length=200, blank=True, null=True)
    salon_rows=models.IntegerField()
    salon_columns=models.IntegerField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-created']

    @property
    def imageURL(self):
        try:
            url = self.movie_image.url
        except:
            url = ''
        return url

class Rezervation(models.Model):
    id = models.UUIDField(default=uuid.uuid4, unique=True,
                          primary_key=True, editable=False)
    movie=models.ForeignKey(Movie, on_delete=models.CASCADE, null=True)
    # uuid = models.UUIDField(default=uuid.uuid4, unique=True)
    # id = models.UUIDField(default=uuid.uuid4, unique=True,
    #                       primary_key=True, editable=False)

    created = models.DateTimeField(auto_now_add=True)
    rows=models.IntegerField()
    columns=models.IntegerField()

    class Meta:
        ordering = ['-rows']

  