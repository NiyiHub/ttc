# Generated by Django 4.1.4 on 2023-01-17 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Faq',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=120)),
                ('answer', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('description', models.TextField()),
                ('thumbnail', models.ImageField(upload_to='services/')),
                ('cover', models.ImageField(upload_to='services/')),
                ('image', models.ImageField(blank=True, null=True, upload_to='services/')),
            ],
        ),
        migrations.CreateModel(
            name='Slider',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('caption', models.CharField(max_length=150)),
                ('slogan', models.CharField(max_length=120)),
                ('image', models.ImageField(upload_to='sliders/')),
            ],
            options={
                'verbose_name_plural': 'Slider',
            },
        ),
    ]
