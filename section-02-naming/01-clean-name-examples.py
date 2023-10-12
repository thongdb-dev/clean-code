from datetime import datetime


class BlogPost:
    def __init__(self, title, description, published_date):
        self.title = title
        self.description = description
        self.published_date = published_date


def print_blog_post(item):
    print("Title: " + item.title)
    print("Description: " + item.description)
    print("Published: " + item.published_date)


title = "Clean Code Is Great!"
description = "Actually, writing Clean Code can be pretty fun. You'll see!"
now = datetime.now()
formatted_date = now.strftime("%Y-%m-%d %H:%M")

post = BlogPost(title, description, formatted_date)

print_blog_post(post)
