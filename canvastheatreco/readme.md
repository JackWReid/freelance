# Canvas Theatre Co.
Add summary from design case study.

## Code Details

1. [Design System Lite](#design-system-lite)

### Design System Lite
A key part of the design of this site, one of my favourite parts of the final product, is that it's totally modular. We have half a dozen elements: the big blue news panel, the image panes with title cards, the faded black hero image. Each of these can be dropped into the site's pages in any order based on what the theatre company is working on that it needs to showcase. That meant developing a series of truly independent components.

```scss
.heroes{
	max-width: $m-content-column;
	overflow: hidden;
	margin: 20px auto;

	@media screen and (max-width: $br-phone){
		margin: 0;
	}
}

.hero-image{
	margin: 20px 0;
	width: 100%;
	height: 600px;
	transition: all .2s ease-in-out;

	@media screen and (max-width: $br-phone){
		margin: 0;
	}
}

	.hero-image__link{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		background: rgba(0,0,0,0.1);
		transition: all .2s ease-in-out;
	}

	.hero-image__label{
		background: $c-white;
		max-width: 20em;
		padding: 20px;
		transform: translateY(200px);
		font-family: $f-title;
		text-transform: lowercase;
		text-align: center;
		transition: all .2s ease-in-out;
	}

		.hero-image__label__text{
			margin: 0;
		}

.hero-image:hover .hero-image__link{
	background: rgba(0,0,0,0.5);
}

.hero-image:hover .hero-image__label{
	transform: translateY(0) scale(1.3);
}

@media screen and (max-width: $br-tablet){
	.hero-image{
		margin: 0;
	}
}
```

Here's one example, the 'heroes' as they're called in the styles. These are image-led posters that can link to anything in the site, really. They don't have to represent a news item, or a main page, just something important. I didn't bother declaring this as a `@mixin` or a `%ghost-class` because there's no variation on the theme here. Whilst the first set of declarations is fairly long, the cumulative effect of having this handful of consistent components is that the styles are _really_ light, like 12k of compiled CSS light.


```html
<div class="hero-image" style="background: url('images/scratch.jpg'); background-size: cover; background-position: center;">
	<a href="{{ site.url }}/scratch/" class="hero-image__link">
		<div class="hero-image__label">
			<h1 class="hero-image__label__text">Scratch Night</h1>
		</div>
	</a>
</div>
```

Here's what one of those heroes looks like in the markup. To make sure that that whatever image you throw at the component looks okay, it's built as a `div` with a `background-image` and a `background-size: cover`. To this day, I haven't found a solution that's so easy when you're trying to catch all image sizes and aspect ratios and make them work in one context. Semantically, this should absolutely be a `<figure>` with a `<figcaption>` that is the `hero-image__label__text`, and as I'm more and more concerned about accessibility - I might go back and try and find a robust way of styling that. 
