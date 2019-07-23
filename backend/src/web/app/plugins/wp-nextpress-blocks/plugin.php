<?php
/**
 * Plugin Name: Nextpress Blocks
 * Plugin URI:
 * Description: Nextpress blocks
 * Author:
 * Author URI:
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
