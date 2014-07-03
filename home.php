<?php
/*---------------------------------
	Template Name: Portfolio - Eman
------------------------------------*/
 
    // calling the header.php
    get_header();

    // action hook for placing content above #container
    thematic_abovecontainer();
	
?>

		<div id="container">
			
			<section class="panel" id="about">
				<div id="content">
			    	     		
					<div id="post-<?php the_ID(); ?>" <?php post_class(); ?> > 
		                
						<div class="entry-content" >
		
							<div class="about-content" data-40="opacity:1;" data-350="opacity:0">
							<?php
		                    	the_content();
		                    
		                    ?>
		                	</div>

						</div><!-- .entry-content -->
						
					</div><!-- #post -->
		
		
				</div><!-- #content -->
			</section>
			
			<section class="panel" id="portfolio" data-menu-offset="-80">

				<div id="slider" class="sl-slider-wrapper clearfix">

					<div class="sl-slider">

						<?php
							$slide_animations = array();
							$slide_animations[] = 'data-orientation="horizontal" data-slice1-rotation="-25" data-slice2-rotation="-25" data-slice1-scale="2" data-slice2-scale="2"';
							$slide_animations[] = 'data-orientation="vertical" data-slice1-rotation="-25" data-slice2-rotation="25" data-slice1-scale="2" data-slice2-scale="1"';
							$slide_animations[] = 'data-orientation="horizontal" data-slice1-rotation="3" data-slice2-rotation="3" data-slice1-scale="2" data-slice2-scale="1"';
							$slide_animations[] = 'data-orientation="vertical" data-slice1-rotation="10" data-slice2-rotation="-15" data-slice1-scale="1.5" data-slice2-scale="1.5"';
							//print_r($slide_animations);
						?>

						<?php

							// Get the Pods object and run find()
							$params = array(
							    'orderby' => 't.display_order ASC',    
							    //'limit' => 15,
							    //'where' => 't.name != "Buster"'
							    );

							$portfolio = pods( 'portfolio', $params );
							$i= 0;


							// Loop through the items returned
							while ( $portfolio->fetch() ) {
								?>


								<div class="sl-slide" <?php echo $slide_animations[$i];?>>
									<div class="sl-slide-inner" style="background-color:<?php echo $portfolio->display('bg_color');?>;">
										<div class="container clearfix">
											<div class="portfolio-slider animate-in" data-anchor-target="#portfolio" data-0="margin-left:-80%;" data-300="margin-left:6%" data-800="margin-left:6%" data-1200="margin-left:-80%">
												<div class="imac-wrap">
													<img class="imac-bg" src="<?php echo bloginfo('stylesheet_directory');?>/images/imac@2x.png" />
													<div class="imac-slider flexslider">
														<ul class="slides">
															<?php $images =  $portfolio->field('sample_images');?>
															
												            <?php foreach ($images as $key => $image) : ?>
													            <li>
												  	    	    	<img src="<?php echo $images[$key]['guid'];?>" />
												  	    		</li>
												  	    	<?php endforeach ?>
											  	    		
												        </ul>
													</div>
												</div>
											</div>
											<div class="portfolio-description" data-anchor-target="#portfolio" data-0="opacity:0;" data-400="opacity:1" data-800="opacity:1" data-1000="opacity:0">
												<h2><?php echo $portfolio->display('name');?></h2>
												<div class="entry">
													<?php echo $portfolio->display('project_description');?>

													<a href="<?php echo $portfolio->display('project_link');?>" target="_blank" class="button">View Site</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							    <?php $i++; if ($i == 4){$i = 0;}
							}

						?>					
					</div><!-- /sl-slider -->

					<nav id="nav-dots" class="nav-dots">
						<span class="nav-dot-current"></span>
						<span></span>
						<span></span>
					</nav>
					<nav id="nav-arrows" class="nav-arrows">
						<span class="nav-arrow-prev">Previous</span>
						<span class="nav-arrow-next">Next</span>
					</nav>

				</div><!-- /slider-wrapper -->

			</section>


			<section class="panel" id="grid" data-menu-offset="-80">
				<div class="panel-content" data-0="opacity:0" data-center-top="opacity:1">
					<h2>Recent Work</h2>
					<ul id="da-thumbs" class="da-thumbs">
						<?php // Get the Pods object and run find()
								$params = array(
								    //'orderby' => 't.display_order ASC',    
								    'limit' => -1,
								    //'where' => 't.name != "Buster"'
								    );

								$work = pods( 'works', $params );
								$i= 0;


								// Loop through the items returned
								while ( $work->fetch() ) { ?>
									
									<li>
										<a href="<?php echo $work->display('project_link');?>" target="_blank">
											
											<img src="<?php echo $work->display('image');?>" />
											<div>
												<div class="caption">
													<span>
														<?php echo $work->display('name');?>
													</span>
												</div>
											</div>
										</a>
									</li>

								<?php } ?>

					</ul>
				</div>

				<footer id="footer">		
        	    
					<div id="siteinfo">         	

						<div id="footer-logo" class="clearfix">
							<div><span class="copy">© 2013</span> <a href="mailto:eman.7g@gmail.com"><img src="<?php bloginfo('stylesheet_directory');?>/images/logo_small.png"></a></span>	
						</div>

					</div><!-- #siteinfo -->
	 	
				</footer>

			</section>

		</div><!-- #container -->



	
<?php 
    // action hook for placing content below #container
    thematic_belowcontainer();

    // calling the standard sidebar 
    thematic_sidebar();
    
    // calling footer.php
    
?>