1 - clone repo (https://github.com/krstaslan/cinemaxia-1/)
2 - create a virtual environment and activate
pip install virtualenv
virtualenv envname
envname\scripts\activate or source envname/Script/activate
3 - pip install -r requirements.txt
4 - python manage.py runserver

Tech Stack
Django
Postgres
Django REST Framework
AWS
JavaScript
HTML-CSS


Home page list all movies in order of creation time
![Home](https://user-images.githubusercontent.com/63463164/180237509-92872eec-f800-4478-ad6f-ebe49431e891.PNG)

After movie selection we can see the living room seating arrangement and available seats
![Movei](https://user-images.githubusercontent.com/63463164/180237891-9659dfd4-1a00-4512-8bf2-f229bee428f6.PNG)

The user can select more than one seat and each selection is displayed in a different color.
![selected_seat](https://user-images.githubusercontent.com/63463164/180238193-9432c6d6-00e6-4fb1-bd8a-2a887a421635.PNG)


After the seat selection, a ticket is created and the user can download this ticket.
![ticket](https://user-images.githubusercontent.com/63463164/180238504-eec10c8f-afec-4eb4-9e41-6b561b7705b0.PNG)


--Admin Panel--

this is all movie recordings created.
![movie_django](https://user-images.githubusercontent.com/63463164/180238801-a0a69f66-a706-469c-9403-f97b028e35b1.PNG)

New movie creation form. (To create a new movie, a new html file, form.py and a new function can be create for next usages.)
![create_movie](https://user-images.githubusercontent.com/63463164/180239036-ef8b24ac-d164-4f62-b5f8-ac043de90690.PNG)

Reservation details are as in the picture
![rezervation details](https://user-images.githubusercontent.com/63463164/180239816-5123baf2-91aa-4132-9cc5-6ed5f83d6870.PNG)



