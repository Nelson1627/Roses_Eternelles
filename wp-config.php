<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'roseseternelles' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '9m0L<$TU|{ciHFb%qTX`[0b-mM)>!1d?mLOL?:=RI!O%f9WIq5-Htz1Cl25xxmz^' );
define( 'SECURE_AUTH_KEY',  'kF+bjuTQ54Vx0FYCli{3{;gT<c(N&?#k><J**6:HB,<,mQB+v=Fjwz$AZ%AzYb^C' );
define( 'LOGGED_IN_KEY',    'Ba$% rT5jDx!bOZ2NuEz<(4?Z m&5%C_opQ]%xg!DIZ8$iGpTv5+8<~y3:o-G^*(' );
define( 'NONCE_KEY',        'Qr5$e,DV2 pz7W:u=#*zPnFxT9 JpZd6{=h3{Jp>R[zI>`{oxiMQ+=SOA=8h]<6Y' );
define( 'AUTH_SALT',        'e`V8z@OODQMA,=&ar/$?B#o9c3xrfsz4Q?lz`J-Y26w,%b[[KSq=6?Cr$GqsQ+zD' );
define( 'SECURE_AUTH_SALT', '>caeA}dZ;FZ9X$I,D3Uu{MbsdFK<?yJJ!:-[`*6MIZLg4kZ}vasQ7w>1fcgRr- !' );
define( 'LOGGED_IN_SALT',   '^A7:b2mKGQTUBOA)YruI*UE!#`5(q1%U4z&o0FF=Hq*%Or11Gb t_mAbLp7%d4MU' );
define( 'NONCE_SALT',       'uC*1U`iS@fWbg)=T6N;T3/0@&@_byYr[~d6Zs:*]L|3B GAL3Fu$iUD*L+@/v1eF' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
