from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import Patient

@receiver(pre_save, sender=Patient)
def assign_patient_id(sender, instance, **kwargs):
    if not instance.pk:
        instance.patient_id = random.randint(100000, 999999)