<?php
/**
 ** Eman Portfolio Child Theme functions and definitions
**/

//wp_reset_query(); 

/** Header/Nav Functions **/


// Remove Thematic default menu
function remove_thematic_menu() {
remove_action('thematic_header','thematic_access',9);
}
add_action('init','remove_thematic_menu');

// Register the custom menu with the theme
function childtheme_override_init_navmenu(){
	register_nav_menu( 'primary-nav', __( 'Primary Nav' ) );
	//register_nav_menu( 'visitor-nav', __( 'Primary Non-Member Nav' ) );
	//register_nav_menu( 'footer-nav', __( 'Footer Nav' ) );

}

function childtheme_favicon() { ?>
    <link rel="shortcut icon" href="<?php echo bloginfo('stylesheet_directory') ?>/favicon.ico">
<?php }

add_action('wp_head', 'childtheme_favicon');

// Output the new menu to the thematic header
function childtheme_access(){
	  ?>
		<div id="access"> 
	  		<div class="menu clearfix">
	  			<ul id="menu-primary-nav" class="main-menu">
	  				<li id="menu-item-133" class="menu-item"><a class="nav-button" href="#about">About</a></li>
					<li id="menu-item-132" class="menu-item"><a class="nav-button" href="#portfolio">Featured</a></li>
					<li id="menu-item-132" class="menu-item"><a class="nav-button" href="#grid">Work</a></li>
					<li id="menu-item-45" class="menu-item"><a href="mailto:eman.7g@gmail.com">Contact</a></li>
				</ul>
			</div>
		</div>

	  <?php


}
add_action('thematic_header', 'childtheme_access', 9);

function bg_overlay(){
	?>
		<!-- Preloader -->
	<div id="preloader">
		<div id="status">&nbsp;</div>
	</div>
		<div class="background"></div>
	<?php
}
add_action('thematic_aboveheader', 'bg_overlay',2);

/** Header **/
function childtheme_override_blogtitle() { 
?>

	<div id="blog-title" class="clearfix"><h1><a class="nav-button" href="#about" title="<?php bloginfo('name') ?>" rel="home">eman<span>garcia</span><span class="plus">&#8314;</span></a></h1></div>

<?php 
}

//Custom Menu

/** Footer **/
// Generate footer code
// Generate new footer code

function childtheme_siteinfo(){

?>


	<div id="footer-logo" class="clearfix">
		<span>&copy; <?php echo date('Y'); ?> 
			<a href="<?php echo bloginfo('wpurl');?>">
			<img src="<?php bloginfo('stylesheet_directory');?>/images/logo_small.png" /></a>
		</span>

		
	</div>

<?php

}

add_action('thematic_footer', 'childtheme_siteinfo', 30);


//Custom Page Titles
function childtheme_page_title() {
		if (is_category()) {
				$content .= '<h1 class="category-title">';
				$content .= __('', 'thematic'); /*This removes the "Category Archives:" text*/
				$content .= ' <span>';
				$content .= single_cat_title('', FALSE);
				$content .= '</span></h1>';/*End Category Archive Title*/
		}elseif(is_archive()){
				$content .= '<h1 class="category-title">';
				$content .= __('', 'thematic'); /*This removes the "Category Archives:" text*/
				$content .= ' <span>';
				$content .= post_type_archive_title('', FALSE);
				$content .= '</span></h1>';/*End Category Archive Title*/
		}
			return $content;
		}
add_filter('thematic_page_title', 'childtheme_page_title');

/** Change Page Doctitle **/
function childtheme_doctitle($doctitle) {
	$site_name = get_bloginfo('name');
    $separator = ' | ';
	$post_type = get_post_type($post->ID);

	if ( is_single() ) {
		global $post;
		$post_categories = get_the_category($post->ID);
		$category_name = $post_categories[0]->cat_name;
		$posttype_name = get_post_type($post->ID);

		if ($post_type = "products"){
			$title = single_post_title('', FALSE) . ' | ' . 'Products | ' . $site_name ;
		}else{
			$title = single_post_title('', FALSE) . ' | ' . $category_name . ' | ' . $site_name ;
		}
	 }
	elseif ( is_home() || is_front_page() ) {
		$title = $site_name . get_bloginfo('description');
    }	
    elseif ( is_tax() ) {
		$category = __('', 'thematic');
		$category .= ' ' . single_cat_title("", false); ;
		$title = $category . ' | Product Categories | ' . $site_name ;	 
	}

	$title = "\t" . "<title>" . $title . "</title>" . "\n\n";

    echo apply_filters( 'childtheme_doctitle', $title );
}
add_filter('thematic_doctitle','childtheme_doctitle');

function childtheme_override_head_scripts(){
   // Abscence makes the heart grow fonder
}

function remove_comments(){
  if (is_page()){
	remove_action('thematic_comments_template','thematic_include_comments',5);
   }
}
add_action('template_redirect','remove_comments');

function kill_sidebar() {
	return FALSE;
}
add_action('thematic_sidebar', 'kill_sidebar');


function filter_ptags_on_images($content){
   return preg_replace('/<p>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content);
}

add_filter('the_content', 'filter_ptags_on_images');

/** Timthumb Function **/
function timthumb_img($image, $w, $h, $zc, $alt, $class) {
	global $timthumb_path;
	echo "<img src='". get_bloginfo('stylesheet_directory') . "/scripts/timthumb.php?src=".$image."&w=".$w."&h=".$h."&zc=".$zc."' alt='".$alt."' class='".$class."' />";
}

/** Add Thumb Image Sizes **/
//add_image_size( 'blog-thumb', 210, 218, true );


/** Custom Excerpt Length **/
function custom_excerpt_length( $length ) {
	return 77;
}
add_filter( 'excerpt_length', 'custom_excerpt_length');


function custom_excerpt_more( $more ) {
	global $post;
	return '<a class="moretag" href="'. get_permalink($post->ID) . '"> View More...</a>';}
add_filter( 'excerpt_more', 'custom_excerpt_more' );

class Excerpt {

  // Default length (by WordPress)
  public static $length = 55;

  // So you can call: my_excerpt('short');
  public static $types = array(
      'short' => 34,
      'regular' => 68,
      'long' => 100
    );

  /**
   * Sets the length for the excerpt,
   * then it adds the WP filter
   * And automatically calls the_excerpt();
   *
   * @param string $new_length 
   * @return void
   * @author Baylor Rae'
   */
  public static function length($new_length = 55) {
    Excerpt::$length = $new_length;

    add_filter('excerpt_length', 'Excerpt::new_length');

    Excerpt::output();
  }

  // Tells WP the new length
  public static function new_length() {
    if( isset(Excerpt::$types[Excerpt::$length]) )
      return Excerpt::$types[Excerpt::$length];
    else
      return Excerpt::$length;
  }

  // Echoes out the excerpt
  public static function output() {
    the_excerpt();
  }

}

// An alias to the class
function my_excerpt($length = 55) {
  Excerpt::length($length);
}

/* Disable WordPress Admin Bar for all users but admins. */
  show_admin_bar(false);

/** Enqeue Scripts **/

function add_scripts(){
	if ( !is_admin() ) {
		//deregister jQuery
	    wp_deregister_script( 'jquery' );
	    wp_register_script( 'jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
	    wp_enqueue_script( 'jquery' );

	    //regester jQuery UI
	    //wp_register_script('jquery-ui','https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js');
	    //wp_register_style('jquery-ui-base','http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/themes/base/jquery-ui.css');		
	    //wp_enqueue_script( 'jquery-ui' );
	    //wp_enqueue_style( 'jquery-ui-base' );

		// Your Scripts
   		wp_register_script('custom_script',
       		get_bloginfo('stylesheet_directory') . '/js/scripts-min.js', false);
   		wp_register_script('plugins_script',
       		get_bloginfo('stylesheet_directory') . '/js/plugins.js', false);   		
   		wp_register_script('scrollto',
       		get_bloginfo('stylesheet_directory') . '/js/jquery.scrollTo-1.4.3.1.min.js', false);
   		wp_register_script('easing',
       		get_bloginfo('stylesheet_directory') . '/js/jquery.easing.1.3.js', false);
   		wp_register_script('scrolldeck',
       		get_bloginfo('stylesheet_directory') . '/js/jquery.scrolldeck.js', false);
   		wp_register_script('scrollorama',
       		get_bloginfo('stylesheet_directory') . '/js/jquery.scrollorama.js', false);

   		// enqueue the script
   		//wp_enqueue_script('scrollto');
   		//wp_enqueue_script('scrollorama');
   		//wp_enqueue_script('easing');
   		//wp_enqueue_script('scrolldeck');
   		wp_enqueue_script('plugins_script');
   		wp_enqueue_script('custom_script');


		//wp_enqueue_script( 'my-ajax-request', get_bloginfo('stylesheet_directory') . '/js/ajax.js', array( 'jquery' ) );		
		//wp_localize_script( 'my-ajax-request', 'MyAjax', array( 'ajaxurl' => admin_url( 'admin-ajax.php' ) ) );
	}
}
add_action('init','add_scripts');


?>