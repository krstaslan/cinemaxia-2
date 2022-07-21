from django.forms import ModelForm
from .models import Rezervation


class RezervationForm(ModelForm):
    class Meta:
        model = Rezervation
        fields = []
