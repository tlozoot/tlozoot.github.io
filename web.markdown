---
layout: default
title: Web Projects
color: D92525
---

I like web development because I like making things. I try to take on projects that have a mix of technical challenge and real-world application.
  
I've spent a lot of time working with [Ruby on Rails](http://rubyonrails.org), because right now it's probably the best way to get a prototype up and running fast. That said, I've worked with a number of languages and frameworks. You can read about some of my web projects on this page, or learn more about the technologies I use (and my opinions about them) at the bottom.  

* May - August 2011

  ### [Google Identity Toolkit](http://code.google.com/apis/identitytoolkit/)
  
  I was an [APM intern](http://www.andrewmunn.com/2011/02/why-apm/) at Google in 2011, and I worked on the Google Identity Toolkit...
  
* May 2011 - present

  ### [eathckr](http://eathckr.com)
  
  I'm working with [Jon Staff]() to change the way people eat...

* December 2009 - December 2010
  
  ### [CommonPlace](http://fallschurch.ourcommonplace.com)
      
  CommonPlace builds web platforms for local community engagement. Our mission is to make neighborhoods better places to live in - more connected, more open, more empowered. We launched in Boston in November.
      
  I built the original prototype of the site in PHP last winter, and I learned Rails by building the current site with [Max Tilford](http://twopoxies.net). Currently, I work mostly on the front end, improving the user experience and turning our designer [Mark Malazarte's](http://markmalazarte.com/) Photoshop mockups into HTML and CSS (via Haml and Sass).
      
* May - August 2010
  
  ### [Media Cloud](http://mediacloud.org)
  
  I was a [Google Summer of Code](http://code.google.com/soc) intern in 2010, and I joined the [Berkman Center's](http://cyber.law.harvard.edu) Media Cloud project to work on clustering and visualizing the world's media.
  
  MediaCloud is written in Perl with [Catalyst](http://www.catalystframework.org/), and I also spent a lot of time with [Protovis](http://vis.stanford.edu/protovis/), a nice JavaScript visualization library. My task was to perform k-means clustering on various media sources (based on cosine-similarity of texts) and to visualize the resulting graph. I ended up implementing my own k-means algorithm in Perl, with some help from [PDL](http://pdl.perl.org). 
  
  For the visualizations, I tried to use Protovis' built in force-based layouts, but soon found that to be overly taxing on the browser with &gt;300 nodes. I ended up using [an existing CPAN module](http://search.cpan.org/~thospel/Graph-Layout-Aesthetic-0.12/) to compute a low-energy configuration, and sent the resulting graph to Protovis.
  
  You can see some results here for the [750 most popular US blogs](/mediacloud/us_popular) and the [1000 most popular Russian blogs](/mediacloud/russian_popular). Note that the node-coloring algorithm (k-means) has nothing to do with the layout algorithm (force-based)! We were very pleased to see the two align.
  
* July 2010
  
  ### [David Brooks Haiku](http://davidbrookshaiku.com)
  
  The premier website for user-submitted haikus about [David Brooks](http://topics.nytimes.com/top/opinion/editorialsandoped/oped/columnists/davidbrooks/index.html) columns.
  
* December 2010 - present
  
  ### [LazyDate](http://lazydate.com)
  
  Search for and submit date ideas. 
  
* September 2010 - present

  ### [This site](http://jon-levine.com/)
  
  The current version of this site was built in [Jekyll](http://jekyllrb.com/) using
  [Markdown](http://en.wikipedia.org/wiki/Markdown) and hosted on [GitHub Pages](http://pages.github.com/).
  You can view the source on my [GitHub profile](https://github.com/tlozoot/tlozoot.github.com). The funky
  shapes in the background are drawn with [D3](http://mbostock.github.com/d3/).
  
  Previous versions of this site used complicated things like [Sinatra](http://www.sinatrarb.com/),
  [Sammy](http://code.quirkey.com/sammy/), [Phusion Passenger](http://www.modrails.com/), 
  [Apache](http://httpd.apache.org/), and [AWS](http://aws.amazon.com)....
  
  
  <!-- I put up this site in large part to learn system administration. I bought an Ubuntu VPS on [<del>prgmr</del>](http://prgmr.com) [AWS](http://aws.amazon.com) so that I could spend my spare time configuring [<del>nginx</del>](http://nginx.org/) [Apache](http://httpd.apache.org/), [Phusion Passenger](http://www.modrails.com/), [RVM](http://rvm.beginrescueend.com/), and lots of other fun tools.
  
  I also wanted to play around with [Sammy](http://code.quirkey.com/sammy/), a cool new JavaScript library for implementing (effectively) client-side controllers. The back-end is in [Sinatra](http://www.sinatrarb.com/), though  there's not much dynamic content. -->
{: .projects }

Check out even more computer-related projects on the [linguistics](/ling.html) page!

And just for fun, a few opinions:

* My favorite programming languages are Ruby, OCaml, and JavaScript.
* Some of my favorite tools are Rails, Sinatra, Jekyll, Haml, Sass, Textile, JQuery, Sammy, Heroku, git, GitHub, and TextMate.
* I also like using Python, Flask, Perl, PHP, C, plain old HTML and CSS, Apache, Capistrano, RVM, nginx, Phusion Passenger, and vim...
{: .minilist }

