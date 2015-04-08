class php {
	package { ['php5-fpm', 'php5-mysql']:
		ensure => 'present',
	}

	service { 'php5-fpm':
		ensure => 'running',
		require => Package['php5-fpm'],
	}

	file { 'php-conf':
		path => '/etc/php5/fpm/php.ini',
		source => 'puppet:///modules/php/php.ini',
		require => Package['php5-fpm'],
		notify => Service['php5-fpm'],
	}
}
