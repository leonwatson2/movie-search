# Table of Contents
A. [What we'll be making](#a-what-well-be-making)

B. [Setup the Project](#b-setup-project)

C. [Creating the Component Structure](#c-creating-the-component-structure)

D. [Creating the HTML/CSS for Our Components](#d-creating-the-htmlcss-for-our-components)

E. [The Movie Interface](#e-the-movie-interface)

F. [Setting Up the Input and Outputs](#f-setting-up-the-input-and-outputs)

G. [The Movie Interface and Current Movie](#g-the-movie-service-and-the-current-movie)

H. [Getting the CurrentMovie From the Service](#h-getting-the-currentmovie-from-the-service)

I. [Faking the search with observables](#ifaking-the-search-with-observables)

J. [Setting Up Your Movie Db Account](#j-setting-up-your-movie-db-account)

K. [Getting Search Results from the Database](#k-getting-search-results-from-the-database)



## A. What we'll be making
1. Before we can get to creating our app let's look at what we're creating.
2. We're creating an application that connects to the moviedb api that'll allow us to search the database choose a movie and and ahow some simple information like the release date and the synapses.
3. Then if we want to search something new we just click this little search button up here and we're back to searching again.

4. Now, the first thing we have to do when creating our app in angular is plan how we would break down our app into components. 
Let's go ahead and look at this one from Top to bottom

5. We got a little search button that could be it's own thing for like a header which could be a component by it self

6. Then we have a search input that shows movies when a title is typed in. So that all by it self can be a component. 
Then we have these cards displaying the search results title, release date and has a  background of the movie which could be a component.


7. Then when we click on one of the these cards the search and search-results go away 
and the movie details show up. So this would be a completely seperate component from the search.


8. Last but not least we have simple footer which is usually something you would want to make into a component. 

9. So next up we're going to setup the project with the necessary styles and links, and then get to creating these components

## B. Setup Project
Files: style.css, animations.css 
0. ng new movie-search
1. npm install materialize-css --save
2. add paths to styles in angular-cli.json
Also go ahead and download the style.css and animation.css files from the course files.
So you can follow with me almost to a T or create your own styles once the project is done.
2.5.  "../node_modules/materialize-css/dist/css/materialize.min.css",
        "animations.css",
        "styles.css"
3. add font link in index.html,   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">  
4. Now if we type npm start in the terminal we should see the start of our awesome angular application

## C. Creating the component structure
So now we're going to create the structure of what we'd like to see using components.
1. First I'd like you to take the challenge and create the structure of the app. 
I don't mean creating exactly how it looks but just the components with some dummy text.
So the search component just says search component or movie card says movie card so you can get use to 
creating your components. Maybe nest components inside folders according to where the component will go in the app.
Also, try to create them by hand and then also using the angular-cli.
This'll help you get an even better grasp of creating your angular applications.
So go ahead, pause, the video and create those components and then we'll do it together.
2. So how do you think you did? Does the structure make since to you, if you came back to it a month 
from now would you be able to jump back in and modify something?
3.Awesome, so let's go ahead and do it together. First let's make this top header with the search button
We'll just make this a component with a inline-template
called HeaderComponent. and for right now were just going to put in some filler text.

4.Now let's do the movie details we have here (show details component) with the poster
image on the right side. Let's call that component display-movie and use the angular cli
to make the external template and the component file by typing in the terminal
ng g c displayMovie --inline-style true --flat true --spec false --prefix false
and then just put some filler text in there. "Movie Details"

5.Then let's go ahead and create the search component. 
And since will have other components inside of it.
We'll go ahead and make a folder with this one.
using the angular-cli again
ng g c search --inline-style true --spec false --prefix false
Let's go ahead and put the input in this one.
6.Then remeber there's a lot of cards that show up that are like the preview of the movie 
let's call them movie-preview,
and use the anuglar cli to put them in the search foler by typing
`ng g c search/moviePreview --inline-style true --spec false --prefix false --flat true`

then let's go ahead and put some filler text and use that component a few times in our 
search component

7.Last but not least let's make the footer component add call it footer and this time get the prefix
    that the cli gives us so that command would be
    ng g c footer --inline-style true --spec false --flat true
    And let's go ahead and put some filler text in there that just says "Footer" inside of a div
    Then put that in our app.component.html file

    Then we're done. Up next we'll go about styling each component with built&custom in classes

## D. Creating the HTML/CSS for our components
1. So now we're going to setup just how each of these components looks. No functionality yet 
just adding the necessary elements and classes to make it look more like the finished product.
2. Let's first start with the app component 
```html
<main>
<div class="container">
    <search-movie class="row" ></search-movie>
    <display-movie class="row"></display-movie>
</div>
</main>
```
3. Now let's do the header
```html
<header>
    <div class="row">
        <div class="col s4 offset-s4 search-btn center-align">
            <span class="material-icons">search</span>
        </div>
    </div>
</header>
```
4. Next up let's do the footer
```html
<footer class="page-footer">
    <div class="container">
            <div class="row">
                <div class="col l6 s12">
                        <h5 class="white-text">Database provided by 
                        <a href="https://www.themoviedb.org/">The Movie DB</a>
                        </h5>
                        <p class="grey-text text-lighten-4"></p>
                </div>
            </div>
    </div>
    <div class="footer-copyright">
            <div class="container">
                Designed and Developed by: Leon Watson
            </div> 
    </div>
</footer>
```
5. Now it's time for the search component
```html
<div class="col s12">
    <input 
        class="search-input" 
        type="text" 
        placeholder="Search A Movie"
        [(ngModel)]="search" 
        >
    <div class="row">
        <movie-preview></movie-preview>
        <movie-preview></movie-preview>
        <movie-preview></movie-preview>
        <movie-preview></movie-preview>
        <movie-preview></movie-preview>
        <h3 [ngStyle]="{'text-align':center}">
            No results found for {{search}} 
        </h3>
    </div>
</div>
```
6. Now let's get the movie preview component all setup
```html
<div class="col s12 m4" [ngClass]="['movie']">
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">The Movie Title</span>
      <div class="movie-year">2017-8-10</div>
    </div>
  </div>
</div>
```
7. Last but not least the display movie component where we display the movies
    title, year, synapses and the img on the right
```html
<div class="col m7 s12">
    <h3 class="fade-in-right">The Movie Title</h3>
    <div class="row">
    <div class="tagline col m3 fade-in-right slower">2017-8-10</div>
    </div>
    <div class="row">
    <p class="flow-text col s12 fade-in-left slow">A cool insightful overview about this movie that makes you want to watch it.</p>
    </div>
</div>
<div class="col m5">
    <img class="movie-poster fade-in-left" 
        src="http://image.tmdb.org/t/p/original/rhIRbceoE9lR4veEXuwCC2wARtG.jpg" 
        alt=""
    >
</div>
```



## E. The Movie Interface
1. So we're going to be working with the movie DB database. You can find the API here at
and we're going to go down here to see how we can search for movies using this API.
So you'll see that we need to have an API key and query params for when we call this api.
But what we're looking for is the object that is passed from it. Which is here under responses.
And we're going to only use some of this information like the 
```
https://developers.themoviedb.org/3/
```

```
export interface Movie {
    backdrop_path?:string|null
    poster_path?:string|null
    genres?:Object[]
    original_title?:string
    overview?:string
    title?:string
    tagline?:string|null
    release_date?:string
}
```
So we're going to go ahead and make an interface that has all these properties called Movie.
This is going to tell Angular and Typescript what type of object we expect for our variables.
So now we can use that every where we need it in the application for clarification.


## F. Setting Up the Input and Outputs
1.Now we're going to setup our input and outputs for our components.
2.But first we're going to get some mock data, so we have something to work with. 
You'll find in the course files a file called mock-data.ts that looks something like this.
We're going to put that right here in the src folder to access. through out our app and delete it
when we connect to the The Movie API.
The data we'll be getting back from the API 
are the search results with all the Movies according to a certain query,
the baseURL of where to get the posters and background you saw in the application,
and the different sizes of the pictures.

2. Now let's use that mock data to start putting together our functionality
#### //search.component.ts
3. Let's start in the search.component.ts 
where we'll import that the searchResults as data at the top.
4. Then we'll create a variable called searchResults in our SearchComponent 
class that'll be an Array of Movies and we'll import that interface so Typescript 
knows what that type is.
5. We'll initialize that to the data we're getting from the mock-data
#### //search.component.html
6. Now we're going to go to the template file for the search component
and we're going to *ngFor="let movies of searchResults; let i = index;"
directive and loop through our searchResults on the movie-preview component
7. And pass each search result in as a property called movie that we'll create next
#### //movie-preview.component.ts
8. So now go to the movie-preview component ts file
9. and we're going to import Input from angular core so we can put an input on out 
movie-preview component
10. We're also going to import that movie interface we created
11. Then we're going to call this input movie with a type of Movie
// movie-preview.component.html
12. Now let's go to out movie-preview template 
13. print out the movie.title and the movie.release_date 
14. Last Input that we'll need to do is in the app component so 
let's open the app.component.ts.
#### //app.component.ts
15. We're going to import that Movie interface we made 
then create a variable inside the component called currentMovie with the type
Movie and initialize it to be null
#### //app.component.html
16. Then we'll go to the template file and send that currentMovie variable to the 
display-movie component as a property called movie
16.5. and we're going to have an event for when a movie-preview
card is clicked. For right now we'll just create a function to handle the click
called setCurrentMovie and console.log(movie) that movie that send to that function.
//display-movie.component.ts
17. Now let's go to the display movie component and import Input from angular core
and the Movie interface 
18. Then down in the component let's create that input variable and call it movie
//display-movie.component.html
19. Now inside the template and let's go ahead and use that movie variable 
for the: 
1. movie.title
2. movie.release_date 
3. movie.overview
4. movie.title for alt
5. create a function called getFullPosterUrl(movie.poster_path)
20. The reason we have to make this function is because the api only sends a relative
URL and we'll get the base url from it using a complete different request
//display-movie.component.ts
21. for right now we'll return the poster from the Avengers movie
```
http://cdn.collider.com/wp-content/uploads/the-avengers-robert-downey-jr-iron-man-poster.jpg
```

22. So there we go, we setup the inputs and outputs for our application!

## G. The Movie Service and the Current Movie
1. At the moment we have the current movie variable but it's just an empty object 
and doesn't change when we click on the movie-preview cards. Now we could setup 
an event chain from the search component to the app component to get the selected movie
but instead we're going to use a service to hold that data instead of making the app.component
reliant on that event to get the currentMovie.

2. So let's go ahead and make our service using the cli using this command
ng g service movieService --spec false --module app.module.ts
This will create a service called MovieService and provide it in our app.module so
we can inject it anywhere in our application
#### //movie.service.ts
3. We're going to import Observable and Observer from 
```
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
```
because we are going to create an Observable for the `currentMovie`
that is the selected in the application and going to need an Subject to 
allows us to call the next function on our Observable. 
This would be a good time to use a library like flux or redux but since this application
is so small having it done in a service would be the quickest and easiest way using what
we've learned so far.
and let's also import that Movie interface we made. 
4. So now we'll give the service a private variable called 
```
private selectedMovie:Subject<Movie> = new Subject<Movie>()
```
5. then well also make a get variable call currentMovie that'll return 
our selectedMovie variable so we can access to that Observable to subscribe to.
```
get currentMovie(){
    return this.selectedMovie
}
```
6. last thing we need to do is create a function that will call that next function on our observer
when the currentMovie is changed.
```
changeSelectedMovie(movie:Movie){
    this.movieObserver.next(movie)
}
```

Great so now we can go ahead and use this to set the currentMovie and get the current movie 
in other components
## H. Getting the CurrentMovie from the service.
We've created the movie service and provided it to our application.
So now all we need to do is inject it into the components that need it and use 
the properties and functions.

#### //app.component.ts
1. In here we'll first import the movie service
2. Then we'll inject it inside our component
3. Then also in the constructor we'll subscribe to the currentMovie observable
```
constructor(private movieService:MovieService){
    movieService
    .currentMovie
    .subscribe(movie => {
        this.currentMovie = movie
    })
}
```
so now whenever that next function is called on the subject in the service the 
movie will be passed to this function and set our currentMovie variable.

#### //app.component.html
4. Now in our app.component.html file we'll go ahead and use the *ngif attribute directive 
to only show the display-movie component when there is a movie and the search component 
when there isn't 

#### //search.component.ts
5. This is where we have a click function that changes the current movie so
we're going go ahead and connect it to the movie service by changing the console.log()
in the setCurrentMovie function to use the movieService function we created
```
setCurrentMovie(movie:Movie){
    this.movieService
        .changeSelectedMovie(movie)
}
```
6. So let's import the movie service
7. and inject into our component in the constructor
8. now in the setCurrentMovie function let's get rid of the console.log and 
use the movie to set the currentMovie 
9. And there we go we've connected the movieService to components to share data across them.
## I.Faking the search with observables
#### //search.component.ts

1. So now we need to setup up the searching is our search.component.ts file
2. What we want is to send a search query after the user types into the input.
3. This can be done using that subject Obeservable like we did in the movie.service 
to send searches after an input change.
4. First we'll need to import Subject
```
import { Subject } from 'rxjs/Subject';
```
5. Then down in the SearchComponent class we'll create a variable
```
private search$:Subject<string> = new Subject<string>()
```
and if remeber that all the dollar sign means at the end of the variable name is that
is a type of observable.

6. We're also going to make a boolean variable called `fetching` that will use to hold the 
state of fetching searchResults or not.
```
fetching:boolean = false
```
7. Now in this ngOnInit method which is a method that is called when the component is about to be put on the page. We're going to go ahead and subscribe to that search observable.
```
this.search$.map((query)=> {
    this.fetching = true; return query
    })
    .subscribe(this.searchQuery.bind(this))
```

8. but first we're going to map through each value given to it, 
set the fetching to true, and then send that value to the subscriber
9. then this is where we would connect to the database but we're going do that in the 
movieService so for now let's just set the searchResults to the mock-data out the value, in a method we create called 
searchQuery(query:string)
10. Now if we test this you'll see that we are search on every key stroke but we don't want to 
send request to the server every key stroke. So we're going to use a function built on top
of observables that allows us to debounce or wait until things stop changing before sending
and that method is called debounceTime.
11. All we need to do is import it at the top from rxjs
```
import 'rxjs/add/operator/debounceTime'; 
```

12. And then add it before our call to subscribe and give it a value we want to debounce by
so let's say 500
```.debounceTime(500)```
13. And now you'll see that it only happens after I stop typing for about a half second


## J. Setting Up Your Movie Db Account
* https://www.themoviedb.org
1. So to connect to the moviedb API you're going to need an API key.
2. The way you get that is by going to their main site. Signup.
Then once you've logged in click on this little bubble with your initial.
4. Click settings and then scroll down and click API
5. Here you should find two things an API key for v3 of their API and then an access token
for v4 of their api. We'll be using version 3 because it's much easier to setup.
6. So copy that api key and for now we're just going to put it in our movie service as a variable.
but in production you may want to make this a enviorment variable or put it in a seperate file.
7. Now that we're all setup let's go ahead and connect to the database.

## K. Getting Search Results from the Database
#### //movie.service.ts
1. So now that we've got our API key we can go ahead and start searching the database
for movies.
2. So here in our service we're going to first make a variable for the api endpoint for searching called baseApiSearchUrl 
```
private baseApiSearchUrl:string = "http://api.themoviedb.org/3/search/movie"
```
3. Then we're going to neep the HttpClient class to do our request so let's import that at the top, along with HttpParams class so we can add params to our requests.
```
import { HttpClient, HttpParams } from '@angular/common/http'
```
#### //app.module.ts
4. Then we'll need to import the HttpClientModule in the app.module.ts
```
import { HttpClientModule } from '@angular/common/http'
```
and put it in our imports array of our module
#### //movie.service.ts
5. Now back in the movie service we'll create a function called `searchMovie` that takes *one parameter*, the query to search, and it's going to return the observable that the http.get function returns.
We'll then pass in the the baseApiUrl as the first parameter, and then pass in the url params.
8. Which we haven't created yet. So we create a variable called params and use the HttpParams class to create our params.
7. The params are going to be the `api_key`, and the `query`.
```
searchMovie(query:string){
    const params = new HttpParams().set('api_key', this.apiKey).set('query', query)
      return this.http.get<any>(`${this.baseApiUrl}`, { params })
            .map(res => res.results)
}
```
8. So now that we've got that setup. You'll remember that I said returns an Observable, which means  
we can subscribe to this method in our search component.
#### //search.component.ts
9. So in our searchQuery method we're going to change this console.log to use the `movieService.searchMovie` method but first we want to make sure we don't send an empty query by checking if the query length is greater than zero, if it is we just set fetching to false and the searchResults array to [] an empty array.
10. Now If it is a valid query we'll call that `searchMovie(query)` method with the query parameters then subscribe to 
it to get the searchResults back.
12. Then after we get the results and set the searchResults array to that and set fetching to false
11. So now if we go back to our application we'll see if we type in a query we'll get those results!
```
 handleChange(query:string){
    if(val.length === 0){
        this.searchResults = []
        this.fetching = false      
        }else{
        this.movieService.searchMovie(val)
                        .subscribe((searchResults:Movie[]) => { 
                            this.fetching = false
                            if(searchResults)
                            this.searchResults = searchResults
                        }, (err)=>{ console.log(err) }, ()=>{ console.log('completed') })
        }
 }
```
## L. Getting the Photo Paths from The MovieDB 
1. The next thing we need to do is set our backgrounds to the movie-preview cards
2. and set the poster for the movie that is being displayed in our movie-preview component
3. To do this the MovieDb requires us to get the base url and the available sizes of the photos from a different api request. called configuration.
#### //movie.service.ts
4. So in our movie service we're going to create a variable that holds that base url called `baseConfigurationUrl`
```
private baseConfigurationUrl:string = "https://api.themoviedb.org/3/configuration"
```
5. We'll also create a variable to hold the imagesSizes and the image base urls
```
private imageBaseUrl:string = ""
private imageSizes:{backdrop?:string[], poster?:string[]} = {}
```
6. There are two types of images we get from the api and that's 
    - the backdrop, which will be on our movie-preview cards
    - and the poster which will be the big image on the right in our display-movie component
7. Now we'll create a function to handle this request for us called getImageConfiguration
```
setImageConfiguration(){}
```
8. We'll create some params with the API key
```
const params = new HttpParams().set('api_key', this.apiKey)
```
9. Call the http get method with the configurationUrl and the url params
```
this.http.get<any>(this.baseConfigurationUrl}, { params })
```
10. map over the value returned and return it
```
.map(res=>res)
```
11. then subscribe to it and get the neccessary values from the response
```
.subscribe(config => { 
    this.imageBaseUrl = config.images.base_url
    this.imageSizes = {
        backdrop:config.images.backdrop_sizes,
        poster:config.images.poster_sizes
    }
    console.log(this.imageBaseUrl)
    console.log(this.imageSizes)
})
```
12. Then we'll call that in the construtor of our service.

13. Once we have those values we can go ahead and create functions to create the url. 
```
createPhotoUrl(path:string, isBackDrop:boolean){
    if(!path){
      return ""
    }
    imageSize = isBackDrop ? this.imageSizes.backdrop[0] : this.imageSizes.poster[this.imageSizes.poster.length - 1]
    return `${this.imageBaseUrl}${imageSize}${path}`

}
```

14. Now that we have that function in place in our service we can map through our results in our search function and add the absolute url to each one before giving it to our component.
```
.map(res => res.results.map((result:Movie) => { 
    return { 
        ...result,  
        backdropUrl: this.createPhotoUrl(result.backdrop_path)
        posterUrl: this.createPhotoUrl(result.poster_path) 
    } ))
```

15. So all this does is return that same result with the backdropUrl and posterUrl properties added on to it for all our results. 
#### //display-movie.component.ts
16. So now in our display-movie.ts file we wont need this getBackdrop Url anymore
#### //display-movie.component.html
17. and in our display-movie.c.html file we can change this src attribute to use the `movie.posterUrl`

#### //movie-preview.component.ts
18. Then in our movie-preview.c.ts we can make a method to that returns a style for the background of our movie preview cards called `backdropStyle()` that returns the background with a linear graident and a url. as well as a background size of cover
```
backdropStyles = ()=> {
    return {
      'background':`linear-gradient(180deg, rgba(0,0,0,0.7), transparent),url(${this.backdropUrl})`,
      'background-size': 'cover'
    }
}
```
#### //movie-preview.component.html
19. then we can add an ngStyle that gets it's value from that function
```html
<div class="card blue-grey darken-1"  [ngStyle]="backdropStyles()">
```
20. One more thing we want to do in here is create that animation delay style on top div so we can get that staggered fade-in effect from all the cards
```html
<div class="col s12 m4" [ngClass]="['movie']" [ngStyle]="animationDelay()">
```
21. And there we go. We've created the movie db search application using the Angular Framework




PROPERLY ATTRIBUTE
https://www.themoviedb.org/about/logos-attribution

    
