<?php get_header(); ?>
	<?php get_template_part('components/header-site')?>
		<?php get_template_part('components/header-sub')?>
		<?php if ( have_posts() ) : ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php the_content(); ?>
			<?php endwhile; ?>
			<?php else : ?>
				nope
			<?php endif; ?>
	<?php get_template_part('components/nav-footer-static'); ?>
<?php get_footer(); ?>