<?php

/**
 * Plugin Name: FG Related Post
 * Description: Show a post which is related to the currently displayed post or page
 * Version: 1.0
 * Author: Fabian Genthner
 * Author URI: https://fabiangenthner.de/
 * License GPL v2
 * Text Domain: fg-related-post
 */

if (!defined('ABSPATH')) exit;

class FG_Related_Post
{
    function __construct()
    {
        register_block_type_from_metadata(__DIR__ . '/build');
    }
}

$fg_related_post = new FG_Related_Post();
