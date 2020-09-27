# Minimalistic Web Browsing

I wanted to take some time to talk about my evolution of web browsing as a medium, and why I switched to a new kind of browser⁠—
one that I think you should look at if you want your browsing experience to be minimalistic and super-productive⁠— which I thought
you might find interesting. Today we're going to explore the possibility of minimalism in modern browsing.

A bit of background here. Since its inception, I've been using Chrome as my primary browser, until about a few years ago when Firefox
released its Quantum update. The deal-breaker for moving away from Chrome was the performance hit. Chrome, and every browser built off 
of the Chromium engine (such as Opera and Vivaldi), are notorious for eating up your RAM. But just because it's hardware-hungry doesn't 
necessarily mean that it's a bad browser. It's fast, with great cross-platform sync, a huge selection of extensions, and even useful
built-in tools such as form filling, password manager, and webpage translations. Chrome is definitely a great contender but doesn't really offer much 
to stand out from the crowd. 

What really brought me to Firefox in 2017 was the drastic changes that were made with speed and privacy in mind, along with other baked
goodies. You get niceties like an updated design, built-in Lockbox, and even a screenshot tool, but the stand-out feature is the 
improved incognito mode. The crux of all private-browsing modes is to let users browse the web without logging their activity, but that 
doesn't prevent websites from tracking your activity during that session. Firefox takes it a step further by including ad and track blockers, 
and the ability to containerize your sessions, allowing you to separate your identities from one another and further limit the power of online 
tracking tools (akin to users in Chrome). 

More over, recent updates will allow you to see what Firefox has blocked, including advertising trackers, social media plug-ins, attempts to 
fingerprint your device, and more. Firefox blocks more than 2000 trackers by default. Just click the purple shield in the address bar to find out
for yourself. It's fantastic having all of these features built right into Firefox, and the fact that it's open-source makes it even better. However,
I was still on the search for something a little more streamlined. 

As web browsers become increasingly sophisticated experiences, there's a greater need to de-clutter the screen and turn it into a more minimal 
experience. That brings us to a couple weeks ago when I tried out a relatively new browser that made me realize what that possibility could look 
like— and it's got me really excited. As I downloaded the <a href="https://minbrowser.org/" target='_blank' rel='noopener noreferrer'>Min</a> browser, 
I thought about how the desire to have a better and greater browser has ultimately detracted our focus and even cost us a pretty penny in terms of memory.
This browser aims to tidy up as much of the browsing experience as possible. 

Minimalism is achieved through an encouraged method of tab-overload handling called _tasks_. The basic idea is to create a _task_ for each different
use-case you might have. That way, instead of letting your tabs pile up, you can have in front of you only the tabs you need. For instance, I have a 
task for things that I'm currently working on or that I deem important, and a seperate task for pretty much everything else non-essential. Tabs that I
usually pin can go in their own task as well. And from my usage so far, Min is able to do all of this without taking a toll on your memory or processor 
resources. 

The quirk about this browser is that it can be controlled through just the keyboard and/or trackpad alone, which is a big plus for power-users. It also 
comes with the ability to use custom user scripts, the ability to add bookmarks complete with tags, the option to choose password managers such as 1Password
or Bitwarden (my password manager of choice), and even some basic tracker-blocking capabilities. As exciting as this sounds, it may not be the best default 
option for a couple reasons. For one, it relies on the Electron browser engine, which is not in sync with Chromium, and could therefore pose a security risk.
Secondly, it does not support traditional Chrome extensions, which could be a deal-breaker to many. 

And for the folks looking to completely decouple themselves from Google, they should probably be looking at something with Webkit. That said, there is a strange
issue regarding not being able to use Google services in this browser. But you can easily fix that by adding the below user-agent string within Min preferences:  

```text
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36 Edg/83.0.478.45
```

After using Min these past couple weeks, I found out that by taking so much out of the experience, it forces people to think about the necessity for execessive clicking.
It removes the junk we've gotten used to seeing and allows to work with minimal distractions. This is exactly why I believe that, despite its flaws as a relatively young web browser, Min feels like a promising future because it challenges so much of our expectations of a modern browser. It can only get better from here. 