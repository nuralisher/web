# Generated by Django 4.0.3 on 2022-04-12 09:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_management', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='test',
            field=models.BooleanField(default=True),
        ),
    ]
