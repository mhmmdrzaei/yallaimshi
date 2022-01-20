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
      <section class="projects">
        <?php $args = array( 'post_type' => 'portfolio', 
              'order'       => 'DESC',
              'posts_per_page' => -1 );
        query_posts( $args ); // hijack the main loop
        while ( have_posts() ) : the_post(); ?>
          <section class="ProjectEach">
            <section class="top">
              <section class="projectTitle" id="<?php the_title(); ?>">
                  Project:<br><?php the_title(); ?>
              </section>
            <section class="projectDetails">
                <?php 
                $client = get_field('client');
                if( $client ) {; ?>
                <section class="client">Client:<br><?php the_field('client'); ?></section>
                <?php } ?> 
                <?php 
                $location = get_field('location');
                if( $location ) {; ?>
                <section class="location">Location:<br><?php the_field('location'); ?></section>
                <?php } ;?>
                <?php 
                $year = get_field('year');
                if( $year ) {; ?>
                <section class="year">Year:<br><?php the_field('year'); ?></section>
                <?php } ;?>
                <?php 
                $collaborators = get_field('collaborators');
                if( $collaborators ) {; ?>
                <section class="collaborators">Collaborators:<br><?php the_field('collaborators'); ?></section>
                <?php } ;?>
            </section>
            </section>
              <section class="main">
                <h1><?php the_field('large_text_description'); ?></h1>
                <section class="images">
                      <ul class="bxslider">
                      <?php 
                        $images = get_field('image_carousel');
                        foreach( $images as $image ):
                        $data_type = pathinfo($image['url'], PATHINFO_EXTENSION);
                        if ($data_type == 'mp4') {?>
                          <li>
                          <video class="vid" muted controls controlsList="nodownload nofullscreen noremoteplayback">
                            <source src="<?php echo $image['url'];?>" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>  

                        </li>
                        <?php } else { ?>
                          <li>
                        <img src="<?php echo esc_url($image['sizes']['large']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" /> 
                      </li>
                      <?php
                        } endforeach; 
                      ?>
                    </ul>
                </section>
                <section class="about_the_project_text">
                  <?php the_field('about_the_project_text'); ?>
                </section>
              </section>
              <section class="side">
                <section class="commentary_text">
                <?php the_field('commentary_text'); ?>
                </section>
              </section>
            </section>
         
            

            
            


        </section>
        <?php endwhile; // end the loop?>
         <?php wp_reset_query();?>   
      </section>
  </section>

</main>




<?php get_footer(); ?>