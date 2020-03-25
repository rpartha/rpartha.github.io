# Getting Started With Harp.js

In this guide, I will explain how to build a blog much like the one you're reading using Harp.js. Rather than using a 
CMS such as WordPress, I opted to use [Harp.js](http://harpjs.com/), an amazing Node.js static web server with built-in
preprocessing, instead.

## Prerequisites

Before we start, there are a few things that need to be taken care of.

### Node.js

As Harp relies on Node.js, we need to install that first. Please download and install the [latest LTS
version](https://nodejs.org/en/download) for your system.

### Harp.js

Now that you've got Node installed, it's time to install Harp. You install it using Node's default package manager, npm.  
The following npm command, to be executed in a terminal or the inclduded CLI, should do the trick:

```
sudo npm install -g harp
```
### Git/Github

If you've got [git](https://git-scm.com/) installed and you plan on deploying the blog to Github, you can go ahead and make a Github repo.
The naming convention to be followed is ```<username>.github.io```. Once created, you can clone it wherever you save repos.

## Setup

Great, now that we have everything we need, we can setup the directory.

### Git Branches

I believe it is good practice to separate developmental code from the published result. As such, we will create and use a **dev** branch
to house our code and publish the results to the **master** branch. You can create the branch via Github itself.

### File Structure

Below, you will find the different files in the repository and what they're used for. Feel free to make the empty files yourself.

```
.
├── _partials
│    ├── _footer.jade           // The layout for the page footer
│    └── _head.jade             // The layout for the page head
├── assets                      // This is where I put things that are either media or styling
│    ├── css
│    │   ├── _partials
│    │   │    └── _fonts.less   // Handles fonts (manully imported font files)
│    │   └── main.less          // The common stylesheet
│    ├── docs
│    │   └── ...
│    ├── fonts
│    │   └── ...
│    └── images
│        └── ...
├── writings                    // This is where I put things that are related to my posts
│    ├── _data.json             // Contains metadata for each post
│    ├── _layout.jade           // The overall layout for the posts
│    └── index.jade             // The Archive page - I wanted /writings/
│    └── my-post.md             // Posts can be written in markdown (preferred) or Jade
├── _data.json                  // Contains the metadata for each page
├── _layout.jade                // The layout for the general site: head -> data -> footer
├── 404.jade                    // The 404 Not Found page
├── about.jade                  // The About page
├── contact.jade                // The Contact page
├── index.jade                  // The Home page
├── _harp.json                  // (Optional) Basic site information. I didn't include it.
└── README.md 
```
As you can see, I am using Jade and Less as my preprocessors of choice. Preprocessors allow us to 
us to write tidier, more efficient, and dynamic HTML & CSS. Note that all files prepended with an underscore
get ignored during compilation.

## Coding

Open your favorite editor (VSCode is my editor of choice) to start populating the files.

### _data.json

The data file present in both the root and post directories. It is a JSON file will contain the metadata for each page or post,
respectively. Below is an example. Each page or post consists of a slug (e.g. "index") and metadata. Note that the slug must match 
the name of Jade or markdown file it corresponds to. 

```json
{
    "index": {
        "title": "Home"
    },
    "about": {
        "title": "About"
    },
    "contact": {
        "title": "Contact"
    },
    "404": {
        "title": "404"
    }
}
```

### _layout.jade

The layout file can be found in both the root and post directories. You can define a separate layout for your posts vs. all other pages. 
Just like a regular HTML file, it consists of a head, a body, a footer, and optional script imports. Let's break down the below example 
root layout file.

The first thing you'll notice is that our head is not defined here. It is actually defined in a separate Jade file called a partial and 
is introduced into the layout by calling ```!= partial(...)``` . The footer is brought in the same way,

Lastly, you'll come across a ```!= yield``` within our body. This is where the content of all the other pages will append to. The beauty of this
is that we only have to define things once, and Harp will take care of the rest. Feel free to style your blog  as you see fit.

```jade
doctype html
html
  != partial('_partials/_head')
  body
    .container
      != yield
      != partial('_partials/_footer')
    script(src='assets/js/script.js')
```

## _head.jade

This is a partial file (indicated by the underscore) that contains our head. Most of it is pretty standard, except
for our title. This special syntax allows us to grab the title from our data file. The same can be done for any other
defined metadata.

```jade
head
  meta(name='viewport', content='width=device-width, initial-scale=1.0, shrink-to-fit=no')
  link(rel='icon', type='image/png', href='/assets/images/favicon.png')
  title= title
  link(rel='stylesheet', href='/assets/css/main.css')
```

### index.jade

This file contains the body for our home page and is brought in as a result of the ```!= yield``` from our layout file. Taking a look
at the example below, we loop through the list of articles we are about to write in ```/heading``` and display the date and title of each.
Since this our home page, we limit the number of posts shown using a counter and conditional logic. Jade includes
conditional logic as part of its syntax, however, all other JavaScript logic must be preceded by a dash (-) and a space. 

```jade
// ...
nav.posts
  ul
    - count = 1
    each article, slug in public.writings._data
      if count < 6
        li
          span.date #{ article.date }
          a(href='/writings/#{ slug }') #{ article.title }
        - count++
// ...
```

### Previewing

We can spin up a server at **localhost: 9000** to preview our blog using the below terminal command. 

```bash
cd.. # parent directory
harp server <blog directory>
```

## Deployment

Great. At this point, we have our blog, but how the heck do we get it online? 

### Compilation

To do that, first we need to compile the Jade and Less files into browser-readble HTML and CSS files.

```bash
cd.. # parent directory
harp compile <blog directory> <publish directory>
```

### Post-Compliation

Your publish directory should look more like the below:

```
.
├── CNAME                      
├── assets                     
│    ├── css
│    │   └── main.less          
│    ├── docs
│    │   └── ...
│    ├── fonts
│    │   └── ...
│    └── images
│        └── ...
├── writings                    
│    ├── index.html            
│    └── my-post.html        
├── 404.html                   
├── about.html                 
├── contact.html               
├── index.html                                
└── README.md 
```


### Deploying the blog

Now that we've compiled the files, we will publish them to our repository. Make sure to
commit and push the source code to the dev branch first, then switch to the master branch
to push the compiled files. Your blog should now be live at ```<username>.github.io```.