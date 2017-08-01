<?php
/**
 * Just an example file of standard php, in this case is a WordPress config file
 */

$config = array(
	'asset' => array(
		'libs' => array(
			'twitter-bootstrap' => array(
				'source' => 'cdn',
				'search' => 'bootstrap',
				'version' => '4.0.0-alpha.6',
				'files' => array(
					array(
						'ext' => 'css',
						'path' => 'css/bootstrap.min.css',
						'is_active' => true,
						'deps' => array(),
					),
					array(
						'ext' => 'js',
						'path' => 'js/bootstrap.min.js',
						'is_active' => true,
						'deps' => array(
							'jquery',
						),
					),
				),
			),
		),
		'fonts' => array(),
	),

	'menus' => array(
		'name' => _( 'Example Menu', 'text-domain' ),
		'description' => _( 'Example Description', 'text-domain' )
	),
);

$string_variable = 'string';
$int_variable = 10;

$another_array = array(
	'string',
	true,
	10
);
