<?php /*
<main role="main" class="gallery-stream">

	<article class="gallery-card">
		<a href="/">
		<h1 class="gallery-card__title">The Christmas Party</h1>
		<img class="gallery-card__preview" src="img/club1.jpg" alt="The Christmas Party">
		</a>
	</article>

	...

	<article class="gallery-card">
		<a href="/">
		<h1>Spot yourself?</h1>
		<h2>Tell us how good you looked.</h2>
		</a>
	</article>

</main>
*/ ?>

<main role="main" class="gallery-stream">
<?php if ( have_posts() ) : ?>
	<?php while ( have_posts() ) : the_post(); ?>

		<article class="gallery-card">
			<a href="<?php the_permalink(); ?>">
				<h1 class="gallery-card__title"><?php the_title(); ?></h1>
				<div class="gallery-card__preview">
					<?php the_post_thumbnail();?>
				</div>
			</a>
		</article>

	<?php endwhile; ?>
	<a href="http://facebook.com/mahatmamusic" class="gallery-card_nil">
		<h1>Spot yourself?</h1>
		<h2>Tell us how good you looked.</h2>
	</a>
	
<?php else : ?>
	<a href="http://facebook.com/mahatmamusic" class="gallery-card_nil">
		<h1>No Galleries Here.</h1>
		<h2>Maybe check the Facebook.</h2>
	</a>
<?php endif; ?>
</main>