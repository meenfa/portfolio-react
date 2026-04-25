
If you're new to Django and curious about how web apps are built using Python, this guide will help you take your first steps confidently. We'll go through everything you need to create a basic Django project, understand how the folder structure works, and run your first local server. By the end, you'll have a working app and a solid understanding of Django's core components.

![Django framework logo and development setup](/image/blog-images/django.webp)

---

## 1. What Is Django and Why Use It?

Django is a high-level Python web framework that helps developers build clean, secure, and scalable web applications quickly. It takes care of a lot of repetitive backend things like user authentication, database handling, and routing, so you can focus on the features that make your app unique.

If you've written Python scripts before, Django will feel familiar but more structured. Think of it as a tool that helps you turn plain Python code into full web applications.

---

## 2. Setting Up Your Environment

Before creating your first project, make sure you have a recent Python version installed. Then set up a virtual environment to keep dependencies organized.

```bash
# Create a virtual environment
python -m venv env

# Activate it
# For Windows
env\Scripts\activate

# For Mac or Linux
source env/bin/activate
```

Once activated, install Django:

```bash
pip install django
```

You can check if it installed correctly by running:

```bash
django-admin --version
```

---

## 3. Creating Your First Django Project

Now let's create a new project called **myproject**.

```bash
django-admin startproject myproject
```

This creates a folder structure like this:

```
myproject/
    manage.py
    myproject/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```

Let's break that down:

**manage.py** : A command-line tool that lets you run commands like starting the server or creating apps.

**settings.py** : Contains your project's configuration, such as database settings, installed apps, and middleware.

**urls.py** : Handles routing (deciding which view to show for which URL).

**wsgi.py / asgi.py** : Used when deploying your app to a server.

---

## 4. Running the Development Server

Now run your project for the first time:

```bash
python manage.py runserver
```

You'll see output like:

```
Starting development server at http://127.0.0.1:8000/
```

Open that link in your browser, and you'll see Django's default "Congratulations!" page. That means everything is working.

---

## 5. Creating Your First App

In Django, a project can contain multiple apps. Think of an app as a feature or module. For example, a blog, a cart, or a user authentication system.

Let's create an app named **blog**:

```bash
python manage.py startapp blog
```

You'll now have this structure:

```
blog/
    admin.py
    apps.py
    models.py
    tests.py
    views.py
    __init__.py
```

Add the app to your project by editing **settings.py**:

```python
INSTALLED_APPS = [
    ...,
    'blog',
]
```

---

## 6. Understanding the Core Django Components

Here's a simple breakdown of the main pieces in every Django app:

**models.py** : Defines your data structure — for example, a Post model for blog posts.

**views.py** : Controls what happens when a user visits a page. It usually fetches data and returns a response.

**urls.py** : Maps URLs to views so Django knows which function to run for each route.

**templates** : Contains HTML files for rendering pages.

**admin.py** : Lets you register models so they appear in Django's built-in admin dashboard.

These five parts form the foundation of every Django app.

---

## 7. Making Your First View and URL

Let's make a simple page that says "Hello, Django!"

In **blog/views.py**:

```python
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, Django!")
```

Now create a **urls.py** inside the **blog** folder:

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
]
```

Then, connect it to the project-level **urls.py** (inside the **myproject** folder):

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blog.urls')),
]
```

Now go to **http://127.0.0.1:8000/** , you should see "Hello, Django!" displayed in your browser.

---

## 8. Exploring the Django Admin Panel

Django comes with a built-in admin interface that lets you manage your data visually.

Create a **superuser** account:

```bash
python manage.py createsuperuser
```

Follow the prompts to set a username, email, and password. Then run your server and visit:

```
http://127.0.0.1:8000/admin/
```

Log in using your credentials, and you'll see the Django admin dashboard. You can register your models here later to add and manage data easily.

---

## 9. Final Thoughts

At this point, you've set up a full Django project, created your first app, and learned how its core components fit together. You've also seen how easy it is to display content, connect URLs, and use the admin panel.

From here, you can move on to defining models, connecting a database, and building templates.

In the next part of this series, we'll dive deeper into models — how to structure data, define relationships, and use the Django ORM effectively.

---

*Happy coding with Django!*

