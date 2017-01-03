<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/**
 * search submit button
 */
function squirrel_form_search_block_form_alter(&$form, &$form_state, $form_id) {
    $form['actions']['submit'] = array('#type' => 'image_button','#src' => base_path() . path_to_theme() . '/images/search-button.png');
}
/**
 * search placeholder text
 */
function squirrel_form_alter(&$form, &$form_state, $form_id) {
    if ($form_id == 'search_block_form') {
        // HTML5 placeholder attribute
        $form['search_block_form']['#attributes']['placeholder'] = t('Zoeken');
    }
}
