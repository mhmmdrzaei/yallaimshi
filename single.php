<?php get_header(); ?>
<main>
  <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
  <h2 class="entry-title"><?php the_title(); ?></h2>
  <?php the_content(); ?>
  <?php endwhile; // end of the loop. ?>
</main>

<?php get_footer(); ?>