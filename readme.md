# reveal-shuffle-plugin

Plugin for reveal.js that allows to shuffle your deck of slide before playing it.


## Setup

Add the shuffle folder into your reveal.js plugin folder and include the following line in your dependencies list of the reveal.js initialization:

```
// Shuffle plugin
{ src: 'plugin/shuffle/shuffle.js', async: true }
```

## Usage
Use space or enter keys to play the next shuffle slides. Using left/righ arrows plays slides the usual way (this may change in a future).


## Known issues

* this is a very early work in progress (and I'm not yet convinced it will never become something else :)
* it only works with 'flat' presentation (behaviour when there are nested slides is undefined)
* it's an all or nothing.
* it's not possible not go back to the previous slides

## Todo

* fix the above issues :)