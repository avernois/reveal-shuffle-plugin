# reveal-shuffle-plugin

Plugin for reveal.js that allows to shuffle your deck of slide before playing it.


## Setup

Add the shuffle folder into your reveal.js plugin folder and include the following line in your dependencies list of the reveal.js initialization:

```
// Shuffle plugin
{ src: 'plugin/shuffle/shuffle.js', async: true }
```

## Usage
Use space, enter or right arrow to go forward the next shuffle slide. Use left arrow to fo backward.


## Notes

* The shuffling is only done once (at loading time), so left/right arrows will always play the deck in the same order.
If you want to reshuffle, just reload the page.
* The first page (landing page) will always the first page of your deck. It is not included in the shuffling.
* This plugin is known to work with master branch as of 2015/10/06. It may, or may not, work with previous or future versions :)
* I'm not sure about the `async: true` in the setup. Don't really know what it does.

## Known issues

* this is a very early work in progress (and I'm not yet convinced it will never become something else :)
* it only works with 'flat' presentation (behaviour when there are nested slides is undefined)
* it's an all or nothing.

## Todo

* fix the above issues :)
