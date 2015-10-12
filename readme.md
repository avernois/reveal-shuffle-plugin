# reveal-shuffle-plugin

Plugin for reveal.js that allows to shuffle your deck of slide before playing it.


## Setup

Add the shuffle folder into your reveal.js plugin folder and include the following line in your dependencies list of the reveal.js initialization:

```
// Shuffle plugin
Reveal.initialize({
    ...
    // set the options, this is optional.
    shuffle: {
    	keepFirtst: 2, // default is 0
    	keepLasts: 1 // default is 0
	}
    ...
    dependencies: [
        ...
        // that declaration is mandatory
        { src: 'plugin/shuffle/shuffle.js', async: true }
    ]
});
```
* `keepFirsts` allow you to set how many slides should be kept at the begining. `keepFirsts: 2` means slides 1 and 2 will stay as slides 1 and 2.
Note that the slide 0 (the one you land when you load the page) is always the first.
* `keepLasts` allow you to set how many slides should be kept at the end (for thanks/credits)

These two options are optional and may not be set at all if default values are fine for you. Default for these values is 0.

## Usage
Use space, enter or right arrow to go forward the next shuffle slide. Use left arrow to fo backward.


## Notes

* The shuffling is only done once (at loading time), so left/right arrows will always play the deck in the same order.
If you want to reshuffle, just reload the page.
* The first page (landing page) will always the first page of your deck. It is not included in the shuffling.
* This plugin is known to work with master branch as of 2015/10/06. It may, or may not, work with previous or future versions :)

## Known issues

* this is a very early work in progress (and I'm not yet convinced it will never become something else :)
* it only works with 'flat' presentation (behaviour when there are nested slides is undefined)

## Todo

* fix the above issues :)
