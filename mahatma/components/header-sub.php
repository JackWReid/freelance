<?php if ( is_page() ) : ?>
	<header class="sub-header">
		<h1 class="sub-header__title">
			<a href="<?php the_permalink();?>">
				<?php the_title(); ?>
			</a>
		</h1>
	</header>

<?php elseif ( is_archive() ) : ?>
	<header class="sub-header">
		<h1 class="sub-header__title">
			<a href="<?php the_permalink();?>">
				<?php single_cat_title(); ?>
			</a>
		</h1>
	</header>

<?php else: ?>
	<header class="sub-header">
		<h1 class="sub-header__title">
			<a href="<?php the_permalink();?>">
				<?php the_title(); ?>
			</a>
		</h1>
	</header>

<?php endif; ?>