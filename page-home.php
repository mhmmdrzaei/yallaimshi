<?php get_header();  ?>
<main>
  
  <?php // Start the loop ?>
  <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
    <?php the_content(); ?>
    <section class="imshiIs">
      <section class="agencyInfo">
        <section class="agencyname">
          <?php the_field('agency_name','options') ?>
          <?php if( have_rows('yalla_imshi_is') ): ?>
              <marquee direction="up" class="imshidescription" scrollamount="1" marquee-direction="">
              <?php while( have_rows('yalla_imshi_is') ): the_row(); ?>
                  <span>
                     <?php the_sub_field('rotating_text'); ?>
                  </span>
              <?php endwhile; ?>
              </marquee>
          <?php endif; ?>

        </section>
        
        <section class="menuHome">
          <a href="/about">Read About Us</a>
          <p class="contactUs open-Contact">Contact Us</p>
        </section>
        <section class="scroll">
          <a href="#portfolio-item">
            ↓
          </a>
        </section>

      </section>

    </section>

  <?php endwhile; // end the loop?>

  <section class="portfolio-item" id="portfolio-item">
      <?php echo do_shortcode('[ajax_load_more container_type="div" post_type="portfolio" posts_per_page="1"]'); ?>
  </section>

</main>




<?php get_footer(); ?>