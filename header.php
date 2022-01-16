<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<?php // Load Meta ?>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php  wp_title('|', true, 'right'); ?></title>
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
  <!-- stylesheets should be enqueued in functions.php -->
  <?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>

<header>
      <section class="pageTitle">
        <a href="<?php echo home_url( '/' ); ?>" title="<?php bloginfo( 'name', 'display' ); ?>" rel="home" ><?php the_field('agency_name','options'); ?></a>
      </section>
      <section class="navigation">
        <section class="indexCall">
          Index
        </section>
        <section class="menuInner">
          <?php wp_nav_menu( array(
            'container' => false,
            'theme_location' => 'primary'
          )); ?>
<!--           <section class="projects">
            <?php $args = array( 'post_type' => 'portfolio', 
                  'order'       => 'DESC',
                  'posts_per_page' => -1 );
            query_posts( $args ); // hijack the main loop
            while ( have_posts() ) : the_post(); ?>
              <a href="#<?php the_title(); ?>" title="Permalink to: <?php esc_attr(the_title_attribute()); ?>" rel="bookmark">
                <?php the_title(); ?>
              </a>
            <?php endwhile; // end the loop?>
             <?php wp_reset_query();?>   
          </section> -->
        </section>

      </section>



</header><!--/.header-->

