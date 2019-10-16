<?php /*
<main role="main" class="events-stream">
	<article class="events-card">
		<time class="events-card__date">5<sup>th</sup> September</time>
		<div class="events-card__main">
			<section class="events-card__info">
				<img class="events-card__poster" src="poster.jpg" alt="The Christmas Party">
				<button class="facebook-button">
					<i class="fa fa-facebook-square"></i>
					<span>Attend</span>
				</button>
			</section>
			<section class="events-card__description">
				<h1 class="events-card__description__title">The Christmas Party</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius veniam blanditiis aliquid quasi repellat, libero esse sapiente commodi enim eum delectus ea beatae sunt soluta optio consequuntur eaque nobis quos laboriosam. Incidunt ipsa sed deleniti error hic. Maiores iure, quis excepturi eos eum expedita saepe repudiandae a voluptatem officia quaerat.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fugiat fuga placeat iusto unde quidem iste nobis quam quisquam soluta reprehenderit atque accusantium cupiditate quae quibusdam doloremque consequuntur illum velit eos, dolore veritatis quis illo ad. Repellendus quod, facilis perspiciatis labore sed, delectus natus architecto quis quia, placeat consequatur sapiente!</p>
			</section>
		</div>
	</article>
</main>
*/ ?>

<main role="main" class="events-stream">
<?php $event_query = new WP_Query( "cat=2" ); ?>
<?php if ( $event_query->have_posts() ) : ?>
	<?php while ( $event_query->have_posts() ) : $event_query->the_post(); ?>

		<article class="events-card">
			<time class="events-card__date">
				<?php the_date('jS F');?>
			</time>
			<div class="events-card__main">
				<section class="events-card__info">

					<?php/* Event Poster with fallback */?>
					<?php if (has_post_thumbnail() ) : ?>
						<?php the_post_thumbnail(); ?>
					<?php else : ?>
						<img class="poster-placeholder" src="http://mahatmamusic.club/wp-content/uploads/2014/10/Launch.png" alt="<?php the_title(); ?>">
					<?php endif; ?>

				<?php/* Facebook Attend Button */?>
				<?php 
			    $facebook_event = get_post_meta($post->ID, 'facebook_event', true); ?>
			    <?php if ($facebook_event) : ?>
				<a class="facebook-button" href="<?php echo $facebook_event; ?>">
					<i class="fa fa-facebook-square"></i>
					<span>Attend</span>
				</a>
				<?php endif; ?>

				<?php/* Gallery Button */?>
				<?php 
			    $gallery_link = get_post_meta($post->ID, 'gallery_link', true); ?>
			    <?php if ($gallery_link) : ?>
				<a class="gallery-button" href="<?php echo $gallery_link; ?>">
					<i class="fa fa-picture-o"></i>
					<span>Gallery</span>
				</a>
				<?php endif; ?>

				</section>

				<?php/* Bulk Title & Description */?>
				<section class="events-card__description">
					<h1 class="events-card__description__title"><?php the_title(); ?></h1>
					<?php the_content(); ?>
				</section>
			</div>
		</article>
	
	<?php endwhile; ?>

	<?php wp_reset_postdata(); ?>
<?php else : ?>
	<article class="events-card">
	<time class="events-card__date">Whups</time>
	<div class="events-card__main">
		<section class="events-card__info">
			<img class="events-card__poster" src="/" alt="">
		</section>
		<section class="events-card__description">
			<h1 class="events-card__description__title">No Events Yet</h1>
			<p>Check back soon for information about our past events. In the mean time, check out the Facebook page and Twitter.</p>
		</section>
	</div>
	</article>
<?php endif; ?>

</main>