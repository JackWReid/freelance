<!doctype html>
<html lang="en-gb">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?php bloginfo('name'); ?> <?php wp_title(); ?></title>
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
		<link rel="apple-touch-icon" sizes="57x57" href="<?php echo get_template_directory(); ?>/favicons/apple-touch-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_template_directory(); ?>/favicons/apple-touch-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="72x72" href="<?php echo get_template_directory(); ?>/favicons/apple-touch-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="144x144" href="<?php echo get_template_directory(); ?>/favicons/apple-touch-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="60x60" href="<?php echo get_template_directory(); ?>/favicons/apple-touch-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="120x120" href="<?php echo get_template_directory(); ?>/favicons/apple-touch-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="76x76" href="<?php echo get_template_directory(); ?>/favicons/apple-touch-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="152x152" href="<?php echo get_template_directory(); ?>/favicons/apple-touch-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory(); ?>/favicons/apple-touch-icon-180x180.png">
		<link rel="shortcut icon" href="<?php echo get_template_directory(); ?>/favicons/favicon.ico">
		<link rel="icon" type="image/png" href="<?php echo get_template_directory(); ?>/favicons/favicon-192x192.png" sizes="192x192">
		<link rel="icon" type="image/png" href="<?php echo get_template_directory(); ?>/favicons/favicon-160x160.png" sizes="160x160">
		<link rel="icon" type="image/png" href="<?php echo get_template_directory(); ?>/favicons/favicon-96x96.png" sizes="96x96">
		<link rel="icon" type="image/png" href="<?php echo get_template_directory(); ?>/favicons/favicon-16x16.png" sizes="16x16">
		<link rel="icon" type="image/png" href="<?php echo get_template_directory(); ?>/favicons/favicon-32x32.png" sizes="32x32">
		<meta name="msapplication-TileColor" content="#89181c">
		<meta name="msapplication-TileImage" content="<?php echo get_template_directory(); ?>/favicons/mstile-144x144.png">
		<meta name="msapplication-config" content="<?php echo get_template_directory(); ?>/favicons/browserconfig.xml">
		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>